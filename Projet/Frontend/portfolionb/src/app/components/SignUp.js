"use client"
import React from 'react'
import Link from "next/link";
import { addUser } from '@/api/services/userService';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

function SignUp() {
    const nomRef = useRef()
    const prenomRef = useRef();
    const emailRef = useRef();
    const mdpRef = useRef();

    const [errors, setErrors] = useState({})

    const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const payload = {
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      email: emailRef.current.value,
      mot_de_passe: mdpRef.current.value
    }

    const errors = {}
    const nomRegex = /^[A-Za-zÀ-ÿ\/]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!nomRegex.test(nomRef.current.value) || !nomRegex.test(prenomRef.current.value)){
      errors.nameViolation = "Le nom et le prenom doivent seulement contenir des caractères (aucun espace)."
    }

    if(!emailRegex.test(emailRef.current.value)){
      errors.emailViolation = "Le courriel doit être un courriel."
    }

    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(mdpRef.current.value)){
      errors.weakPassword = "Le mot de passe doit contenir 8 caractères, une majusucle, une minuscule, un chiffre et un caractère spéciale."
    }

    if(Object.keys(errors).length > 0){
      setErrors(errors);
      return;
  }

    try{
        const result = await addUser(payload)
        console.log(result)
    

        nomRef.current.value = ''
        prenomRef.current.value = ''
        emailRef.current.value = ''
        mdpRef.current.value = ''

        router.push('/login')


        
    } catch (error){
      setErrors({existingEmail: "Le courriel existe déjà!"})
    }
  }



  return (
    <div>
         <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center mt-16">
                  <form className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                      <img
                        className="w-auto h-7 sm:h-8"
                        src="https://merakiui.com/images/logo.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center justify-center mt-6">
                      <a className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                        s'inscrire
                      </a>
                    </div>
        
                    <div className="relative flex items-center mt-8">
                      <span className="absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
        
                      <input
                        type="text"
                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Nom"
                        ref={nomRef}
                        required
                      />
                    </div>
                    <div className="relative flex items-center mt-8">
                      <span className="absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
        
                      <input
                        type="text"
                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Prénom"
                        ref={prenomRef}
                        required
                      />
                    </div>
                    <div>
                    {errors.nameViolation && <p className="mt2 text-sm text-red-600 dark:text-red-400">{errors.nameViolation}</p>}
                    </div>
        
                    <div className="relative flex items-center mt-6">
                      <span className="absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
        
                      <input
                        type="email"
                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Email"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div>
                    {errors.emailViolation && <p className="mt2 text-sm text-red-600 dark:text-red-400">{errors.emailViolation}</p>}
                    </div>
        
                    <div className="relative flex items-center mt-4">
                      <span className="absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </span>
        
                      <input
                        type="password"
                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Mot de passe"
                        ref={mdpRef}
                        required
                      />
                    </div>

                    <div>
                    {errors.weakPassword && <p className="mt2 text-sm text-red-600 dark:text-red-400">{errors.weakPassword}</p>}
                    </div>

                    <div>
                    {errors.existingEmail && <p className="mt2 text-sm text-red-600 dark:text-red-400">{errors.existingEmail}</p>}
                    </div>
        
        
                    <div className="mt-6">
                      <button onClick={handleSubmit} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        S'inscrire
                      </button>
        
                      <div className="mt-6 text-center ">
                        <Link
                          href="/login"
                          className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                        >
                          Déjà un compte?
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
    </div>
  )
}

export default SignUp