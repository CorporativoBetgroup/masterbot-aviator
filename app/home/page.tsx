"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next'

import NavBar from "../../components/NavBar";
import AnimatedNumber from 'react-animated-number';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)
  const [isSearching, setIsSearching] = useState(false)
  const [number1, setNumber1 ] = useState(0)
  const [number2, setNumber2 ] = useState(0)

  useEffect(()=>{
    setIsLoading(true)
    const token = getCookie('token');
    if(!token){
      setIsLoading(false)
      return router.push('/')
    }
    setIsLoading(false)
  },[])

  function getRandomInt(min: number, max: number) {
    return ((Math.random() * (max - min + 1)) + min).toFixed(2);
  }

  function getValues(){
    const randomNumber1 = Math.floor(Math.random() * 10)
    const randomNumber2 = Math.floor(Math.random() * 10)
    setNumber1(0);
    setNumber2(0);

    setIsSearching(true);

    setTimeout(()=>{
      setIsSearching(false);

      if(randomNumber1 < 8){
        const value1 = getRandomInt(1, 2);
        setNumber1(parseFloat(value1))
      }
      else if(randomNumber1 >= 8){
        const value1 = getRandomInt(5, 5);
        setNumber1(parseFloat(value1))
      }

      if(randomNumber2 < 8){
        const value2 = getRandomInt(1, 2);
        setNumber2(parseFloat(value2))
      }
      else if(randomNumber2 >= 8){
        const value2 = getRandomInt(5, 5);
        setNumber2(parseFloat(value2))
      }
    }, 1500)
  }


  if(!isLoading){
    return (
      <main className="bg-base w-full h-full flex flex-col gap-20">
        <NavBar />

        <div className='px-20 py-20'>
          <div className='flex items-center justify-center flex-col'>
            <button 
              onClick={()=>{
                getValues();
              }}
              className='bg-blue-800 px-12 py-6 text-lg rounded-3xl text-white drop-shadow-md border-2 border-blue-500 hover:bg-blue-600 ease-in-out transition-colors active:bg-blue-900'>
              Gerar Sinais
            </button>

            <div className='flex flex-row mt-12 text-white mb-60 justify-around w-full'>
              <div className='w-1/4 bg-black h-40 rounded-3xl px-3 py-5 flex flex-col items-center drop-shadow-lg'>
                <h1 className='text-xl'>Primeiro Valor</h1>
                <div className='w-full h-full flex justify-center items-center'>
                  <AnimatedNumber 
                    value={number1}
                    className='text-7xl'
                    formatValue={(n: number) => n.toFixed(2)}
                    duration={800}
                  />
                </div>
              </div>

              <div className='w-1/4 bg-blue-800 h-40 rounded-3xl px-3 py-5 flex flex-col items-center drop-shadow-lg'>
                <h1 className='text-xl'>Segundo Valor</h1>
                <div className='w-full h-full flex justify-center items-center'>
                  
                  <AnimatedNumber 
                    value={number2}
                    className='text-7xl'
                    formatValue={(n: number) => n.toFixed(2)}
                    duration={800}
                  />

                </div>
              </div>
            </div>

            
            <button className='bg-red-800 py-8 px-16  drop-shadow-xl rounded-3xl border-2 border-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out transition-colors'>
              <h1 className='text-xl text-white'>
                AVIATOR
              </h1>
            </button>
          </div>
        </div>
      </main>
    )
  }
  else if (isLoading){
    return (
      <main className="bg-base w-[100vw] h-[100vh]">
        
      </main>
    )
  }
}
