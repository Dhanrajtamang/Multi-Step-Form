import './styles/App.css'
import {useState} from "react";
import {Button} from "../components/Button"
import PersonalInfo from '../components/PersonalInfo'
import SelectPlan from '../components/SelectPlan'

function App() {
  const [state, setState] = useState(0);
  const component = (state) =>{
    switch(state){
      case 1: 
      return <PersonalInfo />
      case 2: 
      return <SelectPlan />
      default:
        return null;
    }
  }
  return (
    <div className="main">
      <div className="upper-background"></div>
      <div className="lower-background"></div>
      <div className="content">
        <ul className="pages">
          <li><button className="page page-one">1</button></li>
          <li><button className="page page-two">2</button></li>
          <li><button className="page page-three">3</button></li>
          <li><button className="page page-four">4</button></li>
        </ul>
        <form>
          <fieldset>
            {component}
          </fieldset>
          <Button >Submit</Button>
        </form>
      </div>
    </div>
  )
}
export default App