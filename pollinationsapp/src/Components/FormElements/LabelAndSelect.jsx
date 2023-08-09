import Selectbox from "./Selectbox";

export default function LabelAndSelect(props) {
  const { labelText, id, selectOptions, customLabelClassName } = props;

  return (
    <label className={customLabelClassName} htmlFor="">
      {labelText}
      <Selectbox id={id} options={selectOptions} />
    </label>
  );
}
