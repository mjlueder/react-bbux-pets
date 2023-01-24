import Cats from "./Cats"
import Dogs from "./Dogs"

const Pets = (props) => {
  return (
    <div>
      <h4>Pets</h4>
      <Dogs />
      <Cats />
    </div>
  )
}

export default Pets