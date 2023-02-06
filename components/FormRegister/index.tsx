"use client"

import { AiFillMail, AiFillLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';




export default function Form(){
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const router = useRouter();


  function clearInputs(){
    setEmail('');
    setPassword1('');
    setPassword2('');
  }

  async function handleRegisterUser(e: React.SyntheticEvent){
    e.preventDefault()

    try { 
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password1,
          password2
        }),
      };

      const data = await fetch(`/api/postUser`, options);
      const response = await data.json();
      if(!data.ok){
        return toast.error(response.message)
      }

      clearInputs();
      toast.success(response.message);
      
      setTimeout(()=>{
        router.push('/')
      }, 8000)


    } catch (error: any){

      console.log(error.response.data.message)
      return toast.error(error.response.data.message)
    }
  }

  
  return(
    <>
      <form onSubmit={(e) => handleRegisterUser(e)} className='w-full'>
        <label htmlFor="email" className='text-xl text-blue-100'>Insira seu E-mail</label>
        <div className="flex flex-row border-2 border-white gap-5 px-4 py-3 rounded-3xl mb-6 mt-2">
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
        <div className="flex flex-row border-2 border-white gap-5 px-4 py-3 rounded-3xl mb-6 mt-2">
          <AiFillLock size={30}/>
          <input 
            type="password" 
            id="password" 
            placeholder="Senha..."
            className='bg-transparent text-xl w-full pl-2 text-blue-100 border-0 outline-none border-l-2'
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
          />
        </div>

        <label htmlFor="password2" className='text-xl text-blue-100'>Repita sua Senha</label>
        <div className="flex flex-row border-2 border-white gap-5 px-4 py-3 rounded-3xl mb-12 mt-2">
          <AiFillLock size={30}/>
          <input 
            type="password" 
            id="password2" 
            placeholder="Senha..."
            className='bg-transparent text-xl w-full pl-2 text-blue-100 border-0 outline-none border-l-2'
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </div>

        <button type='submit' className="text-white bg-blue-500 rounded-3xl w-full py-3 uppercase">
          <h1 className="font-medium text-xl">
            Registrar-se
          </h1>
        </button>
      </form>
      <ToastContainer autoClose={5000}/>
    </>
  )
}