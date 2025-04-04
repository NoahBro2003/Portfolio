"use client"
import React, { useRef} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { login } from '@/api/services/loginService'
import { SET_AUTH_USER } from '@/stores/actions'
import { useDispatch } from 'react-redux'


function SignIn() {
    const emailRef = useRef()
    const mdpRef = useRef();

  const router = useRouter();
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const payload = {
        email: emailRef.current.value,
        mot_de_passe: mdpRef.current.value
    }


    try{
        console.log(payload);
        const result = await login(payload)
        console.log(result)
        
        if(result.token){
            dispatch({
                type: SET_AUTH_USER,
                payload:
                {
                    data: result.users,
                    token: result.token   
                }
            })
        
        router.push('/users/:id')
        }
        
    } catch (error){
        console.error("Error: ", error)
    }
  }
  

    return (
<div className="login">
    <section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form className="w-full max-w-md">
          <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>

          <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h1>

          <div className="relative flex items-center mt-8">
              <span className="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
              </span>

              <input ref={emailRef} type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
          </div>

          <div className="relative flex items-center mt-4">
              <span className="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
              </span>

              <input ref={mdpRef} type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
          </div>

          <div className="mt-6">
              <button  onClick={handleSubmit} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
              </button>
              <div className="mt-6 text-center ">
                  <Link href="/inscription" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                      Don’t have an account yet? Sign up
                  </Link>
              </div>
          </div>
      </form>
  </div>
    </section>
</div>
  )
}

export default SignIn