export default function Button(props) {
  const { buttonLabel } = props;
  return (
    <button type="button" className="basis-full" id="submitPrompt" onClick={() => console.log("Hello!")}>{buttonLabel}</button>
  )
}
