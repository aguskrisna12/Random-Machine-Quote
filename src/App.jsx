import { useState } from "react"
import BoxQuote from "./BoxQuote"


function App() {

  const quotes = [
    {
      text: 'Fall seven times and stand up eight.',
      author: 'Japanese Proverb'
    },
    {
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs'
    },
    {
      text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
      author: 'Amelia Earhart'
    },
    {
      text: 'The person who says it cannot be done should not interrupt the person who is doing it',
      author: 'Chinese Proverb'
    },
  ]

  console.log(quotes)

  const [number, setNumber] = useState(0)

  const handleClick = () => {
    setNumber(Math.floor(Math.random() * 4))
  }

  return (
    <div className="h-[100vh] w-full bg-amber-300 flex justify-center items-center">
       <BoxQuote handleClick={handleClick} number={number} quotes={quotes}/> 
    </div>
  )
}

export default App
