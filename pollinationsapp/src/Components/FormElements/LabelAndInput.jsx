import Textarea from "./Textarea";
import Input from "./Input";

export default function LabelAndInput(props) {
  const { inputType, labelText, id, valueText, customLabelClassName } = props;

  if (inputType === 'textarea') {
    return (
      <label className={customLabelClassName} htmlFor="">
        {labelText}
        <Textarea id={id} valueText={valueText} />
      </label>
    );
  }

  if (inputType === 'input') {
    return (
      <label className={customLabelClassName} htmlFor="">
        {labelText}
        <Input id={id} />
      </label>
    );
  }
}
