import { useState } from "react";

export default function UserInput({onChange, userInput}) {
    // const[userInput, setUserInput] = useState({initialInvestment: 10000,
    //     annualInvestment: 1200,
    //     expectedReturn: 6,
    //     duration: 10
    // })

//     function handleChange(inputIndetifier, newValue){
// setUserInput(prevUserInput =>{
//     return{
//         ...prevUserInput,
//         [inputIndetifier]: newValue
//     };
// })
//     }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment}  onChange={(event) => onChange('initialInvestment', event.target.value)}/>
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment}   onChange={(event) => onChange('annualInvestment', event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" required value={userInput.expectedReturn}  onChange={(event) => onChange('expectedReturn', event.target.value)}/>
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" required value={userInput.duration}  onChange={(event) => onChange('duration', event.target.value)}/>
        </p>
      </div>
    </section>
  );
} 
