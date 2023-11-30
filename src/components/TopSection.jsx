import React from 'react'

const TopSection = () => {
  return (
    <>
      <section class="bg-third">
    <div class="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row ">
    <span class="inline-flex sm:mt-0 mt-2 justify-center sm:justify-start  text-texcol gap-3">
      <p class="flex items-center text-sm">
        <i class="fa-solid fa-phone  mr-2"></i>984587678
    </p>
    <p class="flex items-center  ">
        <i class="fa-solid fa-envelope  text-sm mr-2"></i>xyz@gmail.com
    </p>
               
   </span>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-texcol  gap-3">
         <p class="px-1 rounded-full"><i class="fa-brands fa-facebook"></i></p>
                  <p class="px-1 rounded-full"><i class="fa-brands fa-instagram"></i></p>
                  <p class="px-1 rounded-full"><i class="fa-brands fa-linkedin"></i></p>
                  <p class="px-1 rounded-full"><i class="fa-brands fa-youtube"></i></p>
      </span>
    </div>
  </section>
    </>
  )
}

export default TopSection
