import LabelAndInput from "./LabelAndInput";
import LabelAndSelect from "./LabelAndSelect";
import Button from "./Button";

export default function Form(props) {
  const {
    descriptionInputType,
    descriptionId,
    descriptionValueText,
    descriptionLabelText,
    sourceUrlInputType,
    sourceUrlId,
    sourceUrlValueText,
    sourceUrlLabelText,
    visualStyleIdid,
    visualStyleLabelText,
    visualStyleOptions,
    artistReferenceInputType,
    artistReferenceId,
    artistReferenceLabelText,
    descriptionLabelClasses,
    sourceUrlLabelClasses,
    visualStyleLabelClasses,
    artistReferenceLabelClasses,
    submitButtonLabel
  } = props;
  const commonFieldsetClasses = 'flex pb-8';
  const serverConnectionHolder = document.getElementById('serverConnection');
  const requestRecievedHolder = document.getElementById('requestRecieved');
  const processingRequestHolder = document.getElementById('processingRequest');
  const requestReadyHolder = document.getElementById('requestReady');
  const imgTag = document.getElementById('generatedHolder');

  const hideShowStateDivs = (divToShow, ...divsToHide) => {
    divToShow.classList.remove('hidden');
    divsToHide.forEach(div => div.classList.add('hidden'));
  };

  const stateChangeHandler = (requestOpenUrl) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      switch (this.readyState) {
        case 1:
          hideShowStateDivs(
            serverConnectionHolder,
            requestRecievedHolder,
            processingRequestHolder,
            requestReadyHolder
          );
          break;
        case 2:
          hideShowStateDivs(
            requestRecievedHolder,
            serverConnectionHolder,
            processingRequestHolder,
            requestReadyHolder
          );
          break;
        case 3:
          hideShowStateDivs(
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
          hideShowStateDivs(
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
  };

  const buildUrl = (description, url, visualStyle, artistReference) => {
    const errorBox = document.getElementById('errorBox');

    let promptStringArray = [];

    const prompts = {
      description,
      url,
      visualStyle,
      artistReference
    };

    for (let key in prompts) {
      const value = prompts[key];
      if (value) {
        promptStringArray.push(`${value.trim()} -- ${key}`);
      }
    }

    if (promptStringArray.length > 0) {
      const cleanedPromptString = promptStringArray.join(',').replaceAll(' ', '%20');
      const srcUrl = `https://image.pollinations.ai/prompt/{${cleanedPromptString}}`;

      errorBox.classList.add('hidden');

      stateChangeHandler(srcUrl);
      console.log(srcUrl);
    } else {
      errorBox.classList.remove('hidden');

      if (!description || !url) {
        console.log('load url and description message');
      }
    };
  };

  const handleSubmit = (event) => {
    const description = event.target[1].value;
    const sourceUrl = event.target[2].value;
    const visualStyle = event.target[4].value;
    const artistReference = event.target[5].value;

    event.preventDefault();

    buildUrl(description, sourceUrl, visualStyle, artistReference);
  }

  return (
    <form className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
      <fieldset className={commonFieldsetClasses}>
        <LabelAndInput inputType={descriptionInputType} id={descriptionId} valueText={descriptionValueText} labelText={descriptionLabelText} customLabelClassName={descriptionLabelClasses} />

        <LabelAndInput inputType={sourceUrlInputType} id={sourceUrlId} valueText={sourceUrlValueText} labelText={sourceUrlLabelText} customLabelClassName={sourceUrlLabelClasses} />
      </fieldset>

      <fieldset className={commonFieldsetClasses}>
        <LabelAndSelect id={visualStyleIdid} labelText={visualStyleLabelText} selectOptions={visualStyleOptions} customLabelClassName={visualStyleLabelClasses} />

        <LabelAndInput inputType={artistReferenceInputType} id={artistReferenceId} labelText={artistReferenceLabelText} customLabelClassName={artistReferenceLabelClasses} />
      </fieldset>

      <Button buttonLabel={submitButtonLabel} />
    </form>
  )
}
