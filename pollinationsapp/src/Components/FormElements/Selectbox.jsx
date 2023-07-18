function Option(props) {
  const { attributes } = props;

  return (
    <>
      {attributes.map((option, index) => {
        const { value, label } = option;

        return <option value={value} key={index}>{label}</option>;
      })}
    </>
  );
}

export default function Selectbox(props) {
  const { id, options } = props;

  return (
    <select id={id}>
      <Option attributes={options} />
    </select>
  )
}
