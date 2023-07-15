import Heading from "../Heading";

export default function ServerStatus(props) {
  return (
    <div id={props.id} className="hidden font-bold capitalize">
      <Heading headingType={props.headingType} headingText={props.headingText} />
    </div>
  )
}
