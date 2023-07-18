export default function Textarea(props) {
  const { id, valueText } = props;

  return (
    <textarea id={id} rows="5" cols="33" defaultValue={valueText}></textarea>
  )
}
