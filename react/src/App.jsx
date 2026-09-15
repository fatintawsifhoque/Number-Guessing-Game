import { useState } from 'react'
import './App.css'

function App() {
  const [comNum, setComNum] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [gn, setGn] = useState('')
  const [msg, setMsg] = useState('')
  const [guessed, setGuessed] = useState([])
  const [isWon, setIsWon] = useState(false)

  const handleGuess = () => {
    const number = Number(gn) 

    if (isNaN(number) || number < 1 || number > 100) {
      return window.alert(`Please enter a valid number between 1 to 100`)
    }

    setGuessed(prev => [...prev, number])

    if (comNum > number) {
      setMsg('⬆️ Your guess is low')
    } else if (comNum < number) {
      setMsg('⬇️ Your guess is high')
    } else {
      setMsg('🎉 Yippie! You win!!!')
      setIsWon(true)
    }

    setGn('') 
  }


  const resetGame = () => {
    setComNum(Math.floor(Math.random() * 100) + 1)
    setGn('')
    setMsg('')
    setGuessed([])
    setIsWon(false)
  }

  return (
    <>
      <section className="h-[90vh] w-screen gb flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-2xl mb-10">Number Guessing Game (1-100)</h1>
        
        <label htmlFor="input" className="text-white text-lg font-semibold">
          Input Your Guessed Number:
        </label>
        
        <input 
          value={gn}
          onChange={(e) => setGn(e.target.value)} 
          type="text" 
          inputMode="numeric" 
          id="input" 
          className="text-white h-12 w-25 rounded-full text-center text-2xl font-bold border-3 border-dashed outline-none my-5 bg-transparent disabled:opacity-50" 
          disabled={isWon}
        /> 
        
        <button 
          onClick={handleGuess}
          type="button"
          className="gbb cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isWon}
        >
          Guess
        </button>

        {isWon && (
          <button 
            onClick={resetGame} 
            className="mt-5 px-6 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition cursor-pointer"
          >
            Play Again 🔄
          </button>
        )}
        
        {msg && (
          <p className="text-2xl mb-3 text-white font-semibold">{msg}</p>
        )}
        
        {guessed.length > 0 && (
          <div className="flex flex-col items-center mt-2">
            <p className="text-xl text-white">
              You have guessed: <span className="text-violet-200 text-3xl font-bold">{guessed.length}</span> times
            </p>
            <div className="text-white mt-1 text-lg">
              History: <span className="text-violet-200">{guessed.join(', ')}</span>
            </div>
          </div>
        )}
      </section>

      <section className="h-[10vh] w-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <p className="text-gray-400 text-sm">Developed by</p>
          <a
            href="https://github.com/fatintawsifhoque"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-violet-400 hover:text-violet-300 transition"
          >
            Fatin Tawsif Hoque
          </a>
        </div>
      </section>
    </>
  )
}

export default App
