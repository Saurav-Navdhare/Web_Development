import { useState } from 'react'

import CustCol from './components/custCol';
import Button from './components/button';

export default function App() {
  const [color, setColor] = useState('black');

  return (
    <div
    className="w-full h-screen duration-200"
    style={{ backgroundColor: color }}
    >
      <div
      className="fixed flex flex-wrap justify-center inset-x-0 px-2 h-screen"
      >
        <div className="flex justify-center gap-3 shadow-xl bg-white rounded-full px-2 h-fit self-center"
        >
          <Button color="red" onClick={()=>setColor('red')}>Red</Button>
          <Button color="blue" onClick={()=>setColor('blue')}>Blue</Button>
          <Button color="olive" onClick={()=>setColor('olive')}>Olive</Button>
          <Button color="grey" onClick={()=>setColor("grey")}>Grey</Button>
          <Button color="purple" onClick={()=>setColor('purple')}>Purple</Button>
          <CustCol setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}
