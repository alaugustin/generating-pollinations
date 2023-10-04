import LabelAndInput from "./LabelAndInput";
import LabelAndSelect from "./LabelAndSelect";
import Button from "./Button";

export default function Form(props) {
  const { descriptionInputType, descriptionId, descriptionValueText, descriptionLabelText, sourceUrlInputType, sourceUrlId, sourceUrlValueText, sourceUrlLabelText, visualStyleIdid, visualStyleLabelText, visualStyleOptions, artistReferenceInputType, artistReferenceId, artistReferenceLabelText, descriptionLabelClasses, sourceUrlLabelClasses, visualStyleLabelClasses, artistReferenceLabelClasses, submitButtonLabel } = props;
  const commonFieldsetClasses = 'flex pb-8';

  const handleSubmit = (event) => {
    const description = event.target[1].value;
    const sourceUrl = event.target[2].value;
    const visualStyle = event.target[4].value;
    const artistReference = event.target[5].value;
    const resultsArray = [description, sourceUrl, visualStyle, artistReference];

    event.preventDefault();

    console.log(resultsArray);
  }

  return (
    <form className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
      <fieldset className={commonFieldsetClasses}>
        <LabelAndInput inputType={descriptionInputType} id={descriptionId} valueText={descriptionValueText} labelText={descriptionLabelText} customLabelClassName={descriptionLabelClasses}/>

        <LabelAndInput inputType={sourceUrlInputType} id={sourceUrlId} valueText={sourceUrlValueText} labelText={sourceUrlLabelText} customLabelClassName={sourceUrlLabelClasses}/>
      </fieldset>

      <fieldset className={commonFieldsetClasses}>
        <LabelAndSelect id={visualStyleIdid} labelText={visualStyleLabelText} selectOptions={visualStyleOptions} customLabelClassName={visualStyleLabelClasses} />

        <LabelAndInput inputType={artistReferenceInputType} id={artistReferenceId} labelText={artistReferenceLabelText} customLabelClassName={artistReferenceLabelClasses} />
      </fieldset>

      <Button buttonLabel={submitButtonLabel}/>
    </form>
  )
}
