import Roscoe from "./Roscoe"

const Dogs = (props) => {
  return (
    <div>
      <h4>Dogs</h4>
      <Roscoe 
        name="Roscoe"
        loves={["food", "walks", "chasing lizards"]}
      />
    </div>
  )
}

export default Dogs