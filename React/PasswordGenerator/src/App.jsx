import { useEffect, useRef, useState } from 'react'


function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true);
  const passwordRef = useRef(null);

  function copyPassword(){
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    const numbersJS = '0123456789';
    const symbolsJS = '!@#$%^&*()_+<>?';

    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if(numbers) characters += numbersJS;
    if(symbols) characters += symbolsJS;
    let pass = '';
    for(let i=0; i<length; i++)
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    setPassword(pass);
  }, [length, numbers, symbols, setPassword])
  
  return (
    <>
      <div
      className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
        <div
        className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
          />
          <button
          onClick={copyPassword}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div
        className="flex text-sm gap-x-2">
          <div
          className=" flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>setLength(e.target.value)}
            /> <label>Length: {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
            type="checkbox"
            checked={numbers}
            onChange={(e)=>setNumbers(e.target.checked)}
            /> <label>Numbers</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
            type="checkbox"
            checked={symbols}
            onChange={(e)=>setSymbols(e.target.checked)}
            /> <label>Symbols</label>
          </div>
        </div>
      </div>
    </> 
  )
}

export default App
