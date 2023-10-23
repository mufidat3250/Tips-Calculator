import { useState, children } from 'react'
import Result from './Result'

function App() {
    return (
    <>
    <TipsCalculator/>
    </>
  )
}

export default App

const TipsCalculator = () => {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  let items = [
    {
      key:'0',
      value:'Dissatisfied (0%)'
    },
    {
      key:'5',
      value:'It was okay (5%)'
    },
    {
      key:'10',
      value:'It was good (10%)'
    },
    {
      key:'20',
      value:'Absolutely amazing! (20%)'
    }
  ]
  function handleReset () {
    setBill('')
    setPercentage1(0)
    setPercentage2(0)
  }
  
  const tips = (percentage1 + percentage2 )/2

  return <div>
    <BillInput bill = {bill} onchange={setBill}/>
    <Select items={items} onSelect={setPercentage1}>How did you like the service</Select>
    <Select items={items} onSelect={setPercentage2}>How did your friend like the service</Select>
    {bill && <>
      <Result>{`You Pay ${bill + tips}($${bill && bill} + $${tips})`}</Result>
    <Reset onReset={handleReset}/>
    </>}
  </div>
}

const BillInput = ({onchange}) => {
  return <div>
    <label htmlFor="">How much was the bill</label>
    <input type='number' onChange={(e)=>onchange(Number(e.target.value))} />
  </div>
}

const Select = ({items, children, onSelect}) => {
  return <div>
    <label htmlFor="">{children}</label>
    <select name="" id="" onChange={(e)=> onSelect(Number(e.target.value))}>
      {items?.map((item)=> {
        return <option value={item.key}>{item.value}</option>
      })}
    </select>
  </div>
}

const Reset = ({onReset}) => {
  return <button onClick={onReset}>Reset</button>
}