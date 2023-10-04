// import logo from './logo.svg';
import content from './data';
import Heading from './Components/Heading';
import Form from './Components/FormElements/Form';
import ServerStatus from './Components/Results/ServerStatus';
import PromptResults from './Components/Results/PromptResults';
import './App.css';

// -------------------- App Logic --------------------
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
      appData: content,
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

  // hideShowStateDivs: (divToShow, ...divsToHide) => {
  //   divToShow.classList.remove('hidden');
  //   divsToHide.forEach(div => div.classList.add('hidden'));
  // },

  // stateChangeHandler: (requestOpenUrl) => {
  //   const xhttp = new XMLHttpRequest();
  //   const {
  //     serverConnectionHolder,
  //     requestRecievedHolder,
  //     processingRequestHolder,
  //     requestReadyHolder,
  //     imgTag
  //   } = pollinationsAi.config

  //   xhttp.onreadystatechange = function () {
  //     switch (this.readyState) {
  //       case 1:
  //         pollinationsAi.hideShowStateDivs(
  //           serverConnectionHolder,
  //           requestRecievedHolder,
  //           processingRequestHolder,
  //           requestReadyHolder
  //         );
  //         break;
  //       case 2:
  //         pollinationsAi.hideShowStateDivs(requestRecievedHolder,
  //           serverConnectionHolder,
  //           processingRequestHolder,
  //           requestReadyHolder
  //         );
  //         break;
  //       case 3:
  //         pollinationsAi.hideShowStateDivs(
  //           processingRequestHolder,
  //           serverConnectionHolder,
  //           requestRecievedHolder,
  //           requestReadyHolder
  //         );
  //         break;
  //       default: //case: 4
  //         if (this.status === 200) {
  //           imgTag.src = requestOpenUrl;
  //         }
  //         pollinationsAi.hideShowStateDivs(
  //           requestReadyHolder,
  //           serverConnectionHolder,
  //           requestRecievedHolder,
  //           processingRequestHolder
  //         );
  //         break;
  //     }
  //   };

  //   xhttp.open('GET', requestOpenUrl);
  //   xhttp.send();
  // },

  // buildUrl: (description, url, visualStyle, artistReference) => {
  //   const {
  //     errorBox
  //   } = pollinationsAi.config
  //   let promptStringArray = [];

  //   if (description) {
  //     promptStringArray.push(`${description} -- description`);
  //   }

  //   if (url) {
  //     promptStringArray.push(`${url} -- url`);
  //   }

  //   if (visualStyle) {
  //     promptStringArray.push(`${visualStyle} -- visual style`);
  //   }

  //   if (artistReference) {
  //     promptStringArray.push(`${artistReference} -- artist reference`);
  //   }

  //   if (promptStringArray.length > 0) {
  //     const cleanedPromptString = promptStringArray.join(',').replaceAll(' ', '%20');
  //     const srcUrl = `https://image.pollinations.ai/prompt/{${cleanedPromptString}}`;

  //     errorBox.classList.add('hidden');
  //     pollinationsAi.stateChangeHandler(srcUrl);
  //   } else {
  //     errorBox.classList.remove('hidden');

  //     if (!description || !url) {
  //       console.log('load url and description message');
  //     }
  //   };
  // },

  App: () => {
    const commonFormLabelClasses = 'basis-1/2 flex flex-col';
    const leftCellClasses = `pr-1 ${commonFormLabelClasses}`;
    const rightCellClasses = `pl-1 ${commonFormLabelClasses}`;

    // -------------------- React App --------------------
    return (
      <div className="allHolder px-4">
        <Heading headingType='h1' headingText='Generating pollinations.ai Image With Javascript' />

        <div id="errorBox" className="hidden"><strong>Please add a description or source URL</strong></div>

        <Form
          descriptionInputType='textarea'
          descriptionId='description'
          descriptionValueText='A whimsical, retro comic book scene of a woman laughing in the style of MAD Magazine'
          descriptionLabelText='Description'
          descriptionLabelClasses={leftCellClasses}
          sourceUrlInputType='textarea'
          sourceUrlId='url'
          sourceUrlValueText=''
          sourceUrlLabelText='Source URL'
          sourceUrlLabelClasses={rightCellClasses}
          visualStyleIdid="visualStyle"
          visualStyleLabelText='Visual Style'
          visualStyleLabelClasses={leftCellClasses}
          visualStyleOptions={content.form.visualStyle.selectbox.options}
          artistReferenceInputType='input'
          artistReferenceId='artistReference'
          artistReferenceLabelText='Artist Reference'
          artistReferenceLabelClasses={rightCellClasses}
          submitButtonLabel='Submit Prompt'
        />

        <ServerStatus id='serverConnection' headingType='h2' headingText='server connection established' />

        <ServerStatus id='requestRecieved' headingType='h2' headingText='request received' />

        <ServerStatus id='processingRequest' headingType='h2' headingText='processing request' />

        <PromptResults id='requestReady' headingType='h2' headingText='your prompted image' />
      </div>
    );
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    console.log('event handlers here');
    // let {
    //   promptDescription,
    //   promptUrl,
    //   promptVisualStyle,
    //   promptArtistReference,
    //   descriptionText,
    //   urlText,
    //   visualStyleSelector,
    //   artistRefText,
    //   submitButton
    // } = pollinationsAi.config;

    // if (visualStyleSelector) {
    //   visualStyleSelector.addEventListener('change', (e) => {
    //     const { options } = e.target;
    //     const selectedStyle = options[options.selectedIndex].value;

    //     promptVisualStyle = selectedStyle;
    //   });
    // }

    // if (submitButton) {

    //   submitButton.addEventListener('click', () => {
    //     promptDescription = descriptionText.value;
    //     promptUrl = urlText.value;
    //     promptArtistReference = artistRefText.value;

    //     pollinationsAi.buildUrl(
    //       promptDescription,
    //       promptUrl,
    //       promptVisualStyle,
    //       promptArtistReference
    //     );
    //   });
    // }
  },
};

// -------------------- Load init() --------------------
window.addEventListener('load', () => {
  pollinationsAi.init();
});

export default pollinationsAi.App;
