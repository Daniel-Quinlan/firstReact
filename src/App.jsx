import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './die'
import ListPicker from './ListPicker'
import ScoreKeeper from './ScoreKeeper'

function App() {

  return (
    <div>
      <ScoreKeeper/>
      {/* <ListPicker values={[1, 2, 3]}/>
      <ListPicker values={["a", "b", "c"]}/> */}
      {/* <Greeter person="Rosa" from="Colt"/>
      <Greeter person="Stewart" from="Rosa"/> */}
      {/* <Die numSides={20}></Die>
      <Die numSides={6}></Die>
      <Die ></Die> */}
    </div>)
}

export default App
