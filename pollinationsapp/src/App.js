// import logo from './logo.svg';
import Heading from './Components/Heading';
import Input from './Components/FormElements/Input';
import Textarea from './Components/FormElements/Textarea';
import './App.css';

let pollinationsAi = {
  version: '1.0.0',
  author: 'Al Augustin',
  project: 'generating pollinations.ai image with javascript',
  Date: '2023',

  // -------------------- INITIALIZATION --------------------
  init: function () {
    let context = this;

    // GLOBAL VARIABLES --------------------
    context.config = {
      imgTag: document.getElementById('generatedHolder'),
      promptDescription: '', // this is default; other prompt strings below are optional
      promptScene: '',
      promptVisualStyle: '',
      promptArtistReference: '',
      errorBox: document.getElementById('errorBox'),
      descriptionText: document.getElementById('description'),
      urlText: document.getElementById('url'),
      visualStyleSelector: document.getElementById('visualStyle'),
      artistRefText: document.getElementById('artistReference'),
      submitButton: document.getElementById('submitPrompt'),
      serverConnectionHolder: document.getElementById('serverConnection'),
      requestRecievedHolder: document.getElementById('requestRecieved'),
      processingRequestHolder: document.getElementById('processingRequest'),
      requestReadyHolder: document.getElementById('requestReady'),
    };

    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    this.onDomReady();
    this.eventHandlers();
  },

  onDomReady: () => {
    console.log(pollinationsAi.config);
  },

  hideShowStateDivs: (divToShow, ...divsToHide) => {
    divToShow.classList.remove('hidden');
    divsToHide.forEach(div => div.classList.add('hidden'));
  },

  stateChangeHandler: (requestOpenUrl) => {
    const xhttp = new XMLHttpRequest();
    const {
      serverConnectionHolder,
      requestRecievedHolder,
      processingRequestHolder,
      requestReadyHolder,
      imgTag
    } = pollinationsAi.config

    xhttp.onreadystatechange = function () {
      switch (this.readyState) {
        case 1:
          pollinationsAi.hideShowStateDivs(
            serverConnectionHolder,
            requestRecievedHolder,
            processingRequestHolder,
            requestReadyHolder
          );
          break;
        case 2:
          pollinationsAi.hideShowStateDivs(requestRecievedHolder,
            serverConnectionHolder,
            processingRequestHolder,
            requestReadyHolder
          );
          break;
        case 3:
          pollinationsAi.hideShowStateDivs(
            processingRequestHolder,
            serverConnectionHolder,
            requestRecievedHolder,
            requestReadyHolder
          );
          break;
        default: //case: 4
          if (this.status === 200) {
            imgTag.src = requestOpenUrl;
          }
          pollinationsAi.hideShowStateDivs(
            requestReadyHolder,
            serverConnectionHolder,
            requestRecievedHolder,
            processingRequestHolder
          );
          break;
      }
    };

    xhttp.open('GET', requestOpenUrl);
    xhttp.send();
  },

  buildUrl: (description, url, visualStyle, artistReference) => {
    const {
      errorBox
    } = pollinationsAi.config
    let promptString;
    if (description) {
      promptString = `${description} -- description`;
    } else if (url) {
      promptString = `${url} -- url`;
    } else if (visualStyle) {
      promptString = `${visualStyle} -- visual style`;
    } else if (artistReference) {
      promptString = `${artistReference} -- artist reference`;
    }

    if (promptString) {
      const cleanedPromptString = promptString.replaceAll(' ', '%20');
      const srcUrl = `https://image.pollinations.ai/prompt/{${cleanedPromptString}}`;

      errorBox.classList.add('hidden');
      pollinationsAi.stateChangeHandler(srcUrl);
    } else {
      errorBox.classList.remove('hidden');

      if (!description || !url) {
        console.log('load url and description message');
      }
    }
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    let {
      promptDescription,
      promptUrl,
      promptVisualStyle,
      promptArtistReference,
      descriptionText,
      urlText,
      visualStyleSelector,
      artistRefText,
      submitButton
    } = pollinationsAi.config;

    visualStyleSelector.addEventListener('change', (e) => {
      const { target } = e;
      const selectedStyle = target[target.selectedIndex].innerText;
      promptVisualStyle = selectedStyle;
    });

    submitButton.addEventListener('click', () => {
      promptDescription = descriptionText.value;
      promptUrl = urlText.value;
      promptArtistReference = artistRefText.value;

      pollinationsAi.buildUrl(
        promptDescription,
        promptUrl,
        promptVisualStyle,
        promptArtistReference
      );
    });
  },
};

// -------------------- Load init() --------------------
window.addEventListener('load', () => {
  pollinationsAi.init();
});

// -------------------- React App --------------------
function App() {
  return (
    <div className="allHolder">
      <Heading headingType='h1' headingText='Generating pollinations.ai Image With Javascript' />

      <div id="errorBox" className="hidden"><strong>Add a description or source URL</strong></div>

      <form className="flex flex-col">
        <label htmlFor="">
          Description
          <Textarea id='description' valueText='Wide-eyed cartoon fox' />
        </label>

        <label htmlFor="">
          Source URL
          <Textarea id='url' valueText='' />
        </label>

        <label htmlFor="">
          Visual Style
          <select id="visualStyle">
            <option>- Select A Style -</option>
            <option>Abstract art</option>
            <option>Abstract expressionism</option>
            <option>Action painting</option>
            <option>Art Deco</option>
            <option>Art Nouveau</option>
            <option>Baroque</option>
            <option>Conceptual art</option>
            <option>Constructivism</option>
            <option>Cubism</option>
            <option>Dada</option>
            <option>Expressionism</option>
            <option>Fauvism</option>
            <option>Futurism</option>
            <option>Impressionism</option>
            <option>Line art</option>
            <option>Minimalism</option>
            <option>Modern art</option>
            <option>Neoclassicism</option>
            <option>Op art</option>
            <option>Photorealism</option>
            <option>Pop art</option>
            <option>Post-Impressionism</option>
            <option>Realism</option>
            <option>Sculpture</option>
            <option>Street art</option>
            <option>Suprematism</option>
            <option>Surrealism</option>
          </select>
        </label>

        <label htmlFor="">
          Artist Reference
          <Input id='artistReference' />
        </label>

        <button type="button" id="submitPrompt">Submit Prompt</button>
      </form>

      <div id="serverConnection" className="hidden font-bold capitalize">
        <Heading headingType='h2' headingText='server connection established' />
      </div>

      <div id="requestRecieved" className="hidden font-bold capitalize">
        <Heading headingType='h2' headingText='request received' />
      </div>

      <div id="processingRequest" className="hidden font-bold capitalize">
        <Heading headingType='h2' headingText='processing request' />
      </div>

      <div id="requestReady" className="hidden font-bold capitalize">
        <Heading headingType='h2' headingText='your prompted image' />
        <img id="generatedHolder" alt=""></img>
      </div>
    </div>
  );
}

export default App;
