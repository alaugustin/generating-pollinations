import LabelAndInput from "./LabelAndInput";
import LabelAndSelect from "./LabelAndSelect";

export default function Form(props) {
  const { descriptionInputType, descriptionId, descriptionValueText, descriptionLabelText, sourceUrlInputType, sourceUrlId, sourceUrlValueText, sourceUrlLabelText, visualStyleIdid, visualStyleLabelText, visualStyleOptions, artistReferenceInputType, artistReferenceId, artistReferenceLabelText, descriptionLabelClasses, sourceUrlLabelClasses, visualStyleLabelClasses, artistReferenceLabelClasses } = props;
  const commonFieldsetClasses = 'flex pb-8';

  return (
    <form className="flex flex-col flex-wrap">
      <fieldset className={commonFieldsetClasses}>
        <LabelAndInput inputType={descriptionInputType} id={descriptionId} valueText={descriptionValueText} labelText={descriptionLabelText} customLabelClassName={descriptionLabelClasses}/>

        <LabelAndInput inputType={sourceUrlInputType} id={sourceUrlId} valueText={sourceUrlValueText} labelText={sourceUrlLabelText} customLabelClassName={sourceUrlLabelClasses}/>
      </fieldset>

      <fieldset className={commonFieldsetClasses}>
        <LabelAndSelect id={visualStyleIdid} labelText={visualStyleLabelText} selectOptions={visualStyleOptions} customLabelClassName={visualStyleLabelClasses} />

        <LabelAndInput inputType={artistReferenceInputType} id={artistReferenceId} labelText={artistReferenceLabelText} customLabelClassName={artistReferenceLabelClasses} />
      </fieldset>

      <button type="button" className="basis-full" id="submitPrompt">Submit Prompt</button>
    </form>
  )
}
