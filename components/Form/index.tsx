"use client"

import { AiFillMail, AiFillLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import 'react-toastify/dist/ReactToastify.css';

export default function Form(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function clearInputs(){
    setEmail('');
    setPassword('')  
  }

  async function handleLogin(e: React.SyntheticEvent){
    e.preventDefault();

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      };

      const data = await fetch('/api/login', options);
      const response = await data.json();

      if(!data.ok){
        return toast.error(response.message)
      }

      clearInputs();
      toast.success(response.message)

      setTimeout(()=>{
        router.push('/home')
      }, 8000)


    } catch (error: any){
      console.log(error.response.data.message)
      return toast.error(error.response.data.message)
    }
  }

  return(
    <>
      <form onSubmit={(e) => handleLogin(e)} className='w-full'>
        <label htmlFor="email" className='text-xl text-blue-100'>Insira seu E-mail</label>
        <div className="flex flex-row border-2 border-white gap-5 px-4 py-3 rounded-3xl mb-10 mt-2">
          <AiFillMail size={30}/>
          <input 
            type="text" 
            id="email" 
            placeholder="Email..."
            className='bg-transparent text-xl w-full pl-2 text-blue-100 border-0 outline-none border-l-2'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <label htmlFor="password" className='text-xl text-blue-100'>Insira sua Senha</label>
        <div className="flex flex-row border-2 border-white gap-5 px-4 py-3 rounded-3xl mb-20 mt-2">
          <AiFillLock size={30}/>
          <input 
            type="password" 
            id="password" 
            placeholder="Senha..."
            className='bg-transparent text-xl w-full pl-2 text-blue-100 border-0 outline-none border-l-2'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="text-white bg-blue-500 rounded-3xl w-full py-3 uppercase">
          <h1 className="font-medium text-xl">
            Entrar
          </h1>
        </button>
      </form>
      <ToastContainer autoClose={5000}/>
    </>
  )
}