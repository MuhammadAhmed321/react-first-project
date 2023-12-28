import { useState } from 'react'


function App() {
  const [sum , setSum] = useState(0);

  function addNumber() {
    setSum(sum + 1);
  
  }

  function subtractNumber() {
    if (sum ===0) {
      console.log("cannot sub");
      return{
        
      }
    }
    setSum(sum - 1);
  }

  return (
    <>
      <h1>ADDITION AND SUBTRACTION</h1>
      <p>{sum}</p>
      <button onClick={addNumber}>ADDITION +</button>
      <button onClick={subtractNumber}>SUBTRACT -</button>
    </>
  );
}

export default App
