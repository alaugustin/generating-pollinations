export default function Heading(props) {
  if (props.headingType === 'h1') {
    return (
      <h1 className="text-2xl font-bold capitalize">{props.headingText}</h1>
    )
  };

  if (props.headingType === 'h2') {
    return (
      <h2 className="text-xl">{props.headingText}</h2>
    )
  };
}
