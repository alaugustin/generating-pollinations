// import logo from './logo.svg';
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
        case 4:
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

function App() {
  return (
    <div className="allHolder">
      <h1 class="text-2xl font-bold capitalize">generating <span
        class="lowercase">pollinations.ai</span> image with javascript
      </h1>

      <div id="errorBox" class="hidden"><strong>Add a description or source URL</strong></div>

      <form class="flex flex-col">
        <label for="">
          Description
          <textarea id="description" rows="5" cols="33" required>Wide-eyed cartoon fox</textarea>
        </label>
        <label for="">
          Source URL
          <textarea id="url" rows="5" cols="33" required></textarea>
        </label>
        <label for="">
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
        <label for="">Artist Reference<input id="artistReference" type="text"></input></label>
        <button type="button" id="submitPrompt">Submit Prompt</button>
      </form>

      <div id="serverConnection" class="hidden font-bold capitalize">
        <h2 class="text-xl">server connection established</h2>
      </div>

      <div id="requestRecieved" class="hidden font-bold capitalize">
        <h2 class="text-xl">request received</h2>
      </div>

      <div id="processingRequest" class="hidden font-bold capitalize">
        <h2 class="text-xl">processing request</h2>
      </div>

      <div id="requestReady" class="hidden font-bold capitalize">
        <h2 class="text-xl">your prompted image</h2>
        <img id="generatedHolder" alt=""></img>
      </div>
    </div>
  );
}

export default App;
