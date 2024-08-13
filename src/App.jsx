import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './die'

function App() {

  return (
    <div>
      {/* <Greeter person="Rosa" from="Colt"/>
      <Greeter person="Stewart" from="Rosa"/> */}
      <Die numSides={20}></Die>
      <Die numSides={6}></Die>
      <Die ></Die>
    </div>)
}

export default App
