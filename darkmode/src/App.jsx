import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [state,setState]=useState(false);
  useEffect(()=>{
    if(state)
    {
      document.documentElement.classList.add('dark');
    }
    else
    {
      document.documentElement.classList.remove('dark');
    }
    
  },[state])
  function toggleTheme()
  {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col dark:bg-black 
    dark:text-white'>
      <button onClick={toggleTheme} className='absolute right-1 top-5 bg-black text-white px-3 py-4 rounded-lg hover:bg-gray-500
      dark:bg-white dark:text-black'>{state? 'Light' : 'Dark'} mode</button>
      <h1 className='text-5xl font-extrabold m-5 text-center'>Learning dark mode in tailwind css</h1>
      <p className='w-[50%] text-center m-5 font-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe a et eos nostrum minus quaerat accusamus est distinctio nam consectetur. Placeat molestiae sapiente quae nulla nesciunt odit hic amet ipsum.</p>
      <button className='bg-violet-500 px-3 py-4 rounded-lg hover:bg-violet-400'>Get started</button>
    </div>
  )
}


