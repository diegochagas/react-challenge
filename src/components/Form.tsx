import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch } from "react-redux";
import { setFullName } from '../store/actions';

export function Form() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('Breaking')
  const [lastName, setLastName] = useState('Bad')
  const isDisabled = firstName.length === 0 || firstName === ' ' || lastName === ' ' || lastName.length === 0 

const onHandleHighlighting = () => {
  dispatch(setFullName(firstName, lastName));
}

const onHandleInputEnter = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') onHandleHighlighting()
}
  
  return (
    <>
      <div className="flex gap-5">
        <label className="flex flex-col text-lg text-neutral-400 font-semibold gap-0.5 items-start">
          First name
          <input
            className="p-2 rounded text-sm text-gray-950 bg-neutral-400 focus:outline outline-offset-1 outline-green-700"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            onKeyUp={onHandleInputEnter}
          />
        </label>

        <label className="flex flex-col text-lg text-neutral-400 font-semibold gap-0.5 items-start">
          Last name
          <input
            className="p-2 rounded text-sm text-gray-950 bg-neutral-400 focus:outline outline-offset-1 outline-green-700"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            onKeyUp={onHandleInputEnter}
          />
        </label>
      </div>

      <button
        className="bg-green-900 hover:bg-green-800  py-3 w-full rounded-lg my-7 border-none outline-none disabled:bg-opacity-60 disabled:pointer-events-none"
        onClick={onHandleHighlighting}
        disabled={isDisabled}>
          Breakify
      </button>
    </>
  )
}

export default Form;