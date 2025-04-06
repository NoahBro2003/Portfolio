import React from 'react'

function TemoignageContainer() {
  return (
    <div>
        <div class="p-8 border rounded-lg dark:border-gray-700">
              <p class="leading-loose text-gray-500 dark:text-gray-400">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div class="flex items-center mt-8 -mx-2">
                <img
                  class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div class="mx-2">
                  <h1 class="font-semibold text-gray-800 dark:text-white">
                    Robert
                  </h1>
                  <span class="text-sm text-gray-500">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
        </div>
    </div>
  )
}

export default TemoignageContainer