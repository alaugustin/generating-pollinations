import Textarea from "./Textarea";
import Input from "./Input";

export default function LabelAndInput(props) {
  const { inputType, labelText, id, valueText } = props;

  if (inputType === 'textarea') {
    return (
      <label htmlFor="">
        {labelText}
        <Textarea id={id} valueText={valueText} />
      </label>
    );
  }

  if (inputType === 'input') {
    return (
      <label htmlFor="">
        {labelText}
        <Input id={id} />
      </label>
    );
  }
}
