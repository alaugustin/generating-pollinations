import LabelAndInput from "./LabelAndInput";

export default function Form(props) {
  return (
    <form className="flex flex-col">
      <LabelAndInput inputType='textarea' id='description' valueText='Wide-eyed cartoon fox' labelText='Description' />

      <LabelAndInput inputType='textarea' id='url' valueText='' labelText='Source URL' />

      <label htmlFor="">
        Visual Style
        <select id="visualStyle">
          <option>- Select A Style -</option>
          <option>Abstract art</option>
          <option>Abstract expressionism</option>
          <option>Action painting</option>
          <option>Art Deco</option>
          <option>Art Nouveau</option>
          <option>Baroque</option>
          <option>Conceptual art</option>
          <option>Constructivism</option>
          <option>Cubism</option>
          <option>Dada</option>
          <option>Expressionism</option>
          <option>Fauvism</option>
          <option>Futurism</option>
          <option>Impressionism</option>
          <option>Line art</option>
          <option>Minimalism</option>
          <option>Modern art</option>
          <option>Neoclassicism</option>
          <option>Op art</option>
          <option>Photorealism</option>
          <option>Pop art</option>
          <option>Post-Impressionism</option>
          <option>Realism</option>
          <option>Sculpture</option>
          <option>Street art</option>
          <option>Suprematism</option>
          <option>Surrealism</option>
        </select>
      </label>

      <LabelAndInput inputType='input' id='artistReference' labelText='Artist Reference' />

      <button type="button" id="submitPrompt">Submit Prompt</button>
    </form>
  )
}
