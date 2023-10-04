export default function Button(props) {
  const { buttonLabel } = props;

  return (
    <button type="submit" className="basis-full" id="submitPrompt">{buttonLabel}</button>
  )
}
