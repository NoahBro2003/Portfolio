"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { addTemoignage } from "@/api/services/temoignageService";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

function AddTemoignageForm() {
        const titreRef = useRef()
        const descriptionRef = useRef();
        const userId = useSelector((state) => state.auth?.data?.id)
        const [errors, setErrors] = useState({})
    
        const router = useRouter();
    
      const handleSubmit = async (e) =>{
        e.preventDefault();
    
        const payload = {
          titre: titreRef.current.value,
          description: descriptionRef.current.value,
          UserId: userId
        }
    
        if(Object.keys(errors).length > 0){
          setErrors(errors);
          return;
      }
    
        try{
            const result = await addTemoignage(payload)
            console.log(result)
        
    
            titreRef.current.value = ''
            descriptionRef.current.value = ''

    
            router.push('/temoignage')
    
    
            
        } catch (error){
          console.log("Erreur de publication de temoignage : ", error)
        }
      }
    



  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
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
                Publié un témoignage
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
                    d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z"
                  />
                </svg>
              </span>

              <input
                type="text"
                ref={titreRef}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Titre"
                required
              />
            </div>
            <div className="relative flex mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 mt-[10px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h6m-1 8l-5-5H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-3l-5 5z"
                  />
                </svg>
              </span>

              <textarea
                rows="5"
                ref={descriptionRef}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Description"
                required
              />
            </div>
            <div className="mt-6">
              <button onClick={handleSubmit} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddTemoignageForm;
