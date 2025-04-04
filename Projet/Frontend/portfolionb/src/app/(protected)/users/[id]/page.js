"use client"
import React, { useEffect, useState } from 'react'
import '../../../rules.css'
import { useParams, useRouter} from 'next/navigation'
import { getUser } from '@/api/services/userService'

import { useDispatch } from 'react-redux'
import { LOGOUT_USER } from '@/stores/actions'


//Protected
function Profile() {
 const { id } = useParams();
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(true);
 const dispatch = useDispatch();

 useEffect(() =>{
  const fetchUser = async () =>{
    if (!id) return;


    try{
      const data = await getUser(id);
      console.log("User fetched : ", data)
      setUser(data);
    }
    catch (err) {
      console.error("Erreur de lecture d'utilisateur.", err)
    } finally {
      setLoading(false);
    }
  }

  fetchUser()
 }, [id])


 const logout = () =>{
  try{
    dispatch({type: LOGOUT_USER})
  } catch (err) {
    console.error("Logout error : ", err)
  }
 }

 if (loading) {
  return <div>Loading user profile...</div>
 }

  return (
    <div className="content">
      {user ?(
        <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <button
    onClick={logout}
    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition focus:ring-red-300 cursor-pointer">
      Logout
    </button>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.nom}, {user?.prenom}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.email}
                </dd>
            </div>
        </dl>
    </div>
</div>
      ) : (
        <div>Loading user profile</div>
      )}
    </div>
  )
}

export default Profile