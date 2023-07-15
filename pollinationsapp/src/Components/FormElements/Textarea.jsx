export default function Textarea(props) {
  return (
    <textarea id={props.id} rows="5" cols="33" defaultValue={props.valueText}></textarea>
  )
}
