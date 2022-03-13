import { useState } from 'react';
import './App.css';


let quoteObj;

function Quote(){
  let [quote,  setQuote] = useState('')
  let [Advice, setAdviceNo] = useState(1)

  const fetchApi = async () => {
    const url = await fetch('https://type.fit/api/quotes');
    const data = await url.json()
    setQuote(data[0].text)
    quoteObj = data
  }
  if (quoteObj === undefined)
    fetchApi()

  const handleClick = () => {
    let random = Math.floor(Math.random() * 1644)
    setQuote(quoteObj[random].text)
    setAdviceNo(Advice + 1)
  }

  return (
    <div className="quoteContainer">
      <p>Advice#{Advice}</p>
      <p>"{quote}"</p>
      <div className='pattern-divider'></div>
      <button className="next-btn" onClick={handleClick}></button>
    </div>
  )
}

function App() {
  return (
      <Quote></Quote>
  );
}

export default App;
