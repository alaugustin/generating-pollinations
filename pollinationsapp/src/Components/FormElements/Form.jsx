import LabelAndInput from "./LabelAndInput";
import LabelAndSelect from "./LabelAndSelect";

export default function Form(props) {
  const { descriptionInputType, descriptionId, descriptionValueText, descriptionLabelText, sourceUrlInputType, sourceUrlId, sourceUrlValueText, sourceUrlLabelText, visualStyleIdid, visualStyleLabelText, visualStyleOptions, artistReferenceInputType, artistReferenceId, artistReferenceLabelText } = props;

  return (
    <form className="flex flex-col">
      <LabelAndInput inputType={descriptionInputType} id={descriptionId} valueText={descriptionValueText} labelText={descriptionLabelText} />

      <LabelAndInput inputType={sourceUrlInputType} id={sourceUrlId} valueText={sourceUrlValueText} labelText={sourceUrlLabelText} />

      <LabelAndSelect id={visualStyleIdid} labelText={visualStyleLabelText} selectOptions={visualStyleOptions} />

      <LabelAndInput inputType={artistReferenceInputType} id={artistReferenceId} labelText={artistReferenceLabelText} />

      <button type="button" id="submitPrompt">Submit Prompt</button>
    </form>
  )
}
