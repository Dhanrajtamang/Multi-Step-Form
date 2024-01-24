import {useRef} from "react"

export default function SelectPlan() {
  const planTypeRef = useRef("")
  return (
    <section>
        <legend>Select your plan</legend>
        <div>You have the option of monthly or yearly biling.</div>
        <label htmlFor="plan-tier">Name</label>
        <input type="radio" id="plan-tier" ref={planTypeRef}/>
    </section>
  )
}
