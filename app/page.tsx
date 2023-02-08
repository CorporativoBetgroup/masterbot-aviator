'use client'

import { getCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'

import Form from '../components/Form'

export default function Home() {
  const router = useRouter();
  const [isloading, setIsLoading ] = useState(true)

  useEffect(()=>{
    setIsLoading(true)
    const token = getCookie('token');
    if(token){
      setIsLoading(false)
      return router.push('/home')
    }
    setIsLoading(false)
  },[])

  if(!isloading){
    return (
      <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
        <div className="bg-white max-w-7xl md:max-h-[35rem] w-full h-full md:rounded-tl-[3.75rem] md:rounded-br-[3.75rem] flex flex-col md:flex-row md:justify-between overflow-hidden">
          <div className=" w-full md:w-1/2 bg-black px-8 py-10 flex justify-between flex-col">
            <div className='hidden md:flex md:justify-center md:flex-col md:items-center'>
              <GiCommercialAirplane size={250} color={'#0246ac'}/> 
              <h1 className='text-white text-5xl font-semibold'>MasterBot - Aviator</h1>
            </div>
            <div className='flex justify-center flex-col items-center md:hidden'>
              <GiCommercialAirplane size={100} color={'#0246ac'}/> 
              <h1 className='text-white text-2xl font-semibold'>MasterBot - Aviator</h1>
            </div>

            <div className='flex gap-3 flex-col md:mt-0 mt-5 '>
              <div className='flex items-center justify-center'>
                <h2 className='text-white md:text-2xl text-xl'>Ainda não tem acesso? Compre 
                  <a 
                    href=''
                    className='text-blue-200 underline decoration-solid ml-2'
                  >aqui
                  </a>
                </h2>
              </div>

              <div>
                <Link href={'/register'}>
                  <button className="text-white bg-blue-500 rounded-3xl w-full py-3 uppercase">
                    <h1 className="font-medium md:text-lg text-base">
                      Cadastre-se
                    </h1>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:w-1/2 bg-blue-800 px-8 py-10 text-white flex justify-between flex-col items-center">
            <h1 className=' text-xl md:text-2xl'>Conecte-se para ter acesso aos sinais</h1>
            <Form />
          </div>
        </div>
      </main>
    )
  }
  else{
    return(
        <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
           <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
        </main>
    )
  }
}
