"use client";
import React, { useEffect, useState } from "react";
import { getUser } from "@/api/services/userService";
import { deleteTemoignage } from "@/api/services/temoignageService";

function TemoignageContainer({ temoignage }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(temoignage.UserId);
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch UserId ", error);
      }
    };

    fetchUser();
  }, [temoignage.UserId]);

 const handleDelete = async () =>{
    console.log(temoignage)
    try{
        await deleteTemoignage(temoignage.id);
      window.location.reload();
   } catch (error) {
    console.error("Erreur de suppression de temoignage : ", error)
   }
 }

  return (
    <div className="relative">
      <div className="p-8 border rounded-lg dark:border-gray-700">
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400 focus:outline-none"
            title="Edit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 3l9 9-6 6-9-9 6-6zM3 21v-3h12l3 3H3z"
              />
            </svg>
          </button>
          <button
            className="p-2 bg-red-600 text-white rounded hover:bg-red-500 focus:outline-none"
            title="Delete"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">
          {temoignage.titre}
        </h1>
        <p className="leading-loose text-gray-500 dark:text-gray-400">
          {temoignage.description}
        </p>

        <div className="flex items-center mt-8 -mx-2">
          <div className="mx-2">
            <h1 className="font-semibold text-gray-800 dark:text-white">
              {user ? user.nom : "Loading..."}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemoignageContainer;
