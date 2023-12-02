import { useSelector } from 'react-redux';

interface Element {
  symbol: string;
  color: string;
}

export function Header() {  
  const { firstName, lastName } = useSelector((state: any) => state.fullName);
  const periodicElements = useSelector((state: any) => state.periodicElements);
  
  const handleHighlighting = (name: string) => {
    const element: Element = {
      symbol: name.substring(0, 2),
      color: 'element-default'
    }
    let otherLetters = name.slice(2, name.length)
    const twoLetters: string | undefined = Object.keys(periodicElements).find((element: any) => element.toLowerCase() === name.substring(0, 2).toLowerCase())
    if (twoLetters) {
      element.symbol = twoLetters
      element.color = periodicElements[twoLetters]
    } else {
      const oneLetter = Object.keys(periodicElements).find((element: any) => element.toLowerCase() === name.substring(0, 1).toLowerCase())
      if (oneLetter) {
        element.symbol = oneLetter
        element.color = periodicElements[oneLetter]
        otherLetters = name.slice(1, name.length)
      }
    }
    
    return (
      <>
        <span className={`p-2 ${element.color}`}>{element.symbol}</span>
        <span>{otherLetters}</span>
      </>
    )
  }


  return (
    <header className="my-10">
    <h1 className="flex flex-col text-8xl font-bold items-center text-neutral-300">
      <div className="mb-14">{firstName ? handleHighlighting(firstName) : ''}</div>
      <div>{lastName ? handleHighlighting(lastName) : ''}</div>
    </h1>
  </header>
  )
}