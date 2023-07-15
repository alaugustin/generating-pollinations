import Heading from "../Heading";

export default function PromptResults(props) {
  return (
    <div id={props.id} className="hidden font-bold capitalize">
      <Heading headingType={props.headingType} headingText={props.headingText} />
      <img id="generatedHolder" alt=""></img>
    </div>
  )
}
