import Selectbox from "./Selectbox";

export default function LabelAndSelect(props) {
  const { labelText, id, selectOptions } = props;

  return (
    <label htmlFor="">
      {labelText}
      <Selectbox id={id} options={selectOptions} />
    </label>
  );
}
