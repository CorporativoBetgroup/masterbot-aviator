"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next'

import NavBar from "../../components/NavBar";
import AnimatedNumber from 'react-animated-number';
import Logo from '../../public/MASTERBOT-LOGO.png';
import Image from 'next/image';
import Helice from '../../public/helice.svg';

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
    }, 2700)
  }


  if(!isLoading){
    return (
      <div className='bg-black'>

        <main className="flex flex-col bg-home bg-contain">
        <NavBar />

        <div className='w-full flex justify-center items-center'>
          <Image src={Logo} alt="logo" className='md:max-w-lg'/>
        </div>

        <div className='md:px-20 md:py-20 py-20'>
          <div className='flex items-center justify-center flex-col'>
            {isSearching ? (
              <div>
                <Image src={Helice} width={200} height={200} className="w-24 h-24 animate-spin duration-1000" alt='helice'/>
              </div>
            ):(
              <button 
                onClick={()=>{
                  getValues();
                }}
                className='bg-blue-800 px-24 py-6 text-lg rounded-xl text-white drop-shadow-md border-2 border-blue-500 hover:bg-blue-600 ease-in-out transition-colors active:bg-blue-900'>
                DECOLAR
              </button>
            )}

            <div className='flex flex-col md:flex-row mt-12 text-white mb-20 md:mb-32 justify-center items-center md:justify-around w-full gap-5 md:gap-0'>
              <div className='w-3/4  md:w-1/3 bg-cover bg-background-botao bg-no-repeat md:h-40 rounded-3xl px-3 py-5 flex flex-col items-center drop-shadow-lg'>
                <h1 className='text-xl'>Primeiro Valor</h1>
                <div className='w-full h-full flex justify-center items-center'>
                  <AnimatedNumber 
                    value={number1}
                    className='text-5xl md:text-7xl'
                    formatValue={(n: number) => n.toFixed(2)}
                    duration={800}
                  />
                </div>
              </div>

              <div className='w-3/4  md:w-1/3 bg-cover bg-background-botao bg-no-repeat md:h-40 rounded-3xl px-3 py-5 flex flex-col items-center drop-shadow-lg'>
                <h1 className='text-xl'>Segundo Valor</h1>
                <div className='w-full h-full flex justify-center items-center'>
                  
                  <AnimatedNumber 
                    value={number2}
                    className='text-5xl md:text-7xl'
                    formatValue={(n: number) => n.toFixed(2)}
                    duration={800}
                  />

                </div>
              </div>
            </div>

            
            <a href='https://go.aff.estrelabetpartners.com/ogkf6ubw' target="_blank" rel='noreferrer' className='bg-[#ed114e] py-8 px-20  drop-shadow-xl rounded-xl border-2 border-red-500 hover:bg-[#f24073] active:bg-[#bf0d40] ease-in-out transition-colors'>
              <h1 className='text-xl text-white'>
                AVIATOR
              </h1>
            </a>
          </div>
        </div>
      </main>

      </div>
    )
  }
  else if (isLoading){
    return (
      <main className="bg-base w-[100vw] h-[100vh]">
        
      </main>
    )
  }
}
