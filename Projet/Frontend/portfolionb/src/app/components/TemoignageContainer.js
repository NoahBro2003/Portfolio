"use client"
import React, { useEffect, useState } from 'react'
import { getUser } from '@/api/services/userService'

function TemoignageContainer({temoignage}) {
    const [user, setUser] = useState(null)

    useEffect(() =>{
        const fetchUser = async () =>{
            try{
                const data = await getUser(temoignage.UserId)
                setUser(data)
            } catch (error) {
                console.error("Failed to fetch UserId ", error)
            }
        }


        fetchUser()
    }, [temoignage.UserId])



  return (
    <div>
        <div className="p-8 border rounded-lg dark:border-gray-700">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">{temoignage.titre}</h1>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                {temoignage.description}
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {user ? user.nom : 'Loading...'}
                  </h1>
                </div>
              </div>
        </div>
    </div>
  )
}

export default TemoignageContainer