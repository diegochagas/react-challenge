import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('Breaking')
  const [lastName, setLastName] = useState('Bad')

  const handleWordHighlighting = (name: string) => (
    <>
      <span className="bg-green-800 p-2">{name.substring(0, 2)}</span>
      <span>{name.slice(2, name.length)}</span>
    </>
  )

  return (
    <main className="bg-gray-950 p-24">
      <header className="my-10">
        <h1 className="flex flex-col text-8xl font-bold items-center text-neutral-300">
          <div className="mb-14">{handleWordHighlighting(firstName)}</div>
          <div>{handleWordHighlighting(lastName)}</div>
        </h1>
      </header>

      <form action="">
        <div className="flex gap-5">
          <label className="flex flex-col text-lg text-neutral-400 font-semibold gap-0.5 items-start">
            First name
            <input className="p-2 rounded text-sm text-gray-950 bg-neutral-400 focus:outline outline-offset-1 outline-green-700" type="text" placeholder="First name" value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
          </label>

          <label className="flex flex-col text-lg text-neutral-400 font-semibold gap-0.5 items-start">
            Last name
            <input className="p-2 rounded text-sm text-gray-950 bg-neutral-400 focus:outline outline-offset-1 outline-green-700" type="text" placeholder="Last name" value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
          </label>
        </div>

        <button className="bg-green-900 hover:bg-green-800 py-3 w-full rounded-lg my-7 border-none outline-none" type="submit">Breakify</button>
      </form>
    </main>
  )
}

export default App
