"use client"
import React from "react";
import TemoignageContainer from "@/app/components/TemoignageContainer";
import '../../rules.css'

function Temoignage() {
  return (
    <div className="content">
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Tem<span class="text-blue-500 ">oign</span>age
          </h1>

          <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <TemoignageContainer/>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Temoignage;
