import React, {useState} from 'react';

function Input(){

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operationCount, setOperationCount] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');


  //handleInputChange1
  const handleInputChange1 = (event) =>{
    setInput1(event.target.value);
  }


  // handleInputChange2
  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  }

  //handleOperatorChange
  const handleOperatorChange = (selectedOperator) => {
    setOperator(selectedOperator);
  }

  //handleCalculate
  const handleCalculate = () =>{
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if(!isNaN(num1) && !isNaN(num2)){
      let calculateResult = 0;

      switch(operator){
        case '+':
          calculateResult = num1+num2;
          break;

        case '-':
          calculateResult =num1-num2;
          break;

        case '*':
          calculateResult = num1*num2;
          break;

        case '%':
          calculateResult = num1%num2;
          break;
        
        default:
          return;
      }

      //set result with calculated result
      setResult(calculateResult);

      //increase the operation count
      setOperationCount(operationCount + 1);

    }; 
  }

  //reset inputs, operator and result
  const handleReset = () => {
    setInput1('');
    setInput2('');
    setResult('');
    setOperator('+');
  }


  return (
    <div>
      <h2>Simple Calculator</h2>
      <div>
        <p>Operation Count: {operationCount} </p>
      </div>
      <input type="number" placeholder="Input 1" onChange={handleInputChange1} value = {input1} />
      <span> {operator} </span>
      <input type="number" placeholder="Input 2"  onChange={handleInputChange2} value = {input2}/>

      <div>
        <button onClick={ () => handleOperatorChange('+')}>+</button>
        <button onClick={ () => handleOperatorChange('-')}>-</button>
        <button onClick={ () => handleOperatorChange('*')}>*</button>
        <button onClick={ () => handleOperatorChange('%')}>%</button>
        <button onClick={handleCalculate}>Calculate</button>
      </div>

      {result && <p>Result: {result} </p>}
      <button onClick={ handleReset }>Reset</button>
    
    </div>
  );

};

export default Input;
