import Textarea from "./Textarea";
import Input from "./Input";

export default function LabelAndInput(props) {

  if (props.inputType === 'textarea') {
    return (
      <label htmlFor="">
        {props.labelText}
        <Textarea id={props.id} valueText={props.valueText} />
      </label>
    );
  }

  if (props.inputType === 'input') {
    return (
      <label htmlFor="">
        {props.labelText}
        <Input id={props.id} />
      </label>
    );
  }
}
