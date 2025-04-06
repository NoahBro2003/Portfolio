"use client"
import React, { useEffect, useState } from "react";
import TemoignageContainer from "@/app/components/TemoignageContainer";
import { getAllTemoignage } from "@/api/services/temoignageService";
import { getAllUsers } from "@/api/services/userService";
import '../../rules.css'
import { useDispatch } from "react-redux";
import { setUser } from "@/stores/action_creator";
import Link from "next/link";

function Temoignage() {
  const [temoignages, setTemoignages] = useState([])
  const [users, setUsers] = useState([])
  const [combinedData, setCombinedData] = useState([])

  const dispatch = useDispatch();

  useEffect(() =>{
    const fetchAll = async () =>{
      try{
        const [temoignageResponse, userResponse] = await Promise.all([
          getAllTemoignage(),
          getAllUsers(),
        ]);

        console.log(userResponse.users)
        console.log(temoignageResponse)

        const userData = userResponse.users
        const temoignageData = temoignageResponse
        console.log("Users : ", userData)
        console.log("Temoignages : ", temoignageData)

        const mergedData = temoignageData.map((temoignage) => {
          const user = userData.find(
            (user) => user.id === temoignage.UserId
          );
          return{
            ...temoignage,
            UserId : user ? user.id : null,
          }
        })

        setTemoignages(temoignageData)
        setUsers(userData)
        setCombinedData(mergedData)

      } catch (error) {
        console.error("Error fetching data : ", error)
      }
    }
    fetchAll();
  }, []);



  return (
    <div classNameName="content">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Tem<span className="text-blue-500 ">oign</span>age
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {combinedData.map((temoignage) => (
                  <div key={temoignage.id}>
                    <TemoignageContainer temoignage={temoignage}/>
                  </div>
                ))}
          </section>
          <Link href="/temoignage/post" className="inline-block mt-10 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Publié un temoignage
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Temoignage;
