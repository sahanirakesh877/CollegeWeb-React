import React from 'react'

const About = () => {
  return (
    <>
 <section className=" py-18 md:py-12">
  <div className="container mx-auto px-4">  
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
      <div className>
        <img src="/src/assets/about.avif" alt="School Building" className="rounded-lg shadow-lg w-full h-auto" />
      </div>
      <div className>
        <h2 className="text-4xl md:text-4xl lg:text-3xl  text-center font-semibold mb-3">About <span className="text-secondary hover-border-b">Us?</span> </h2>
        <p className="text-gray-900  md:text-base lg:text-md lg:ml-6 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor malesuada est, at varius quam dapibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur recusandae aut. Nesciunt, consequuntur ipsam quaerat perferendis autem est facilis atque minus culpa laudantium cupiditate sit, animi quibusdam reprehenderit veniam.
        </p>
        <p className="text-gray-900 text-sm md:text-base lg:text-md  lg:ml-6 mb-4">
          Our school is committed to providing high-quality education and fostering a supportive learning environment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim natus quod officiis. Similique sapiente distinctio et dolores optio blanditiis, porro pariatur modi eaque fugit ducimus illum voluptates ipsa labore facere, quibusdam, tempore ipsam ratione! Corporis, cum, amet placeat optio dicta omnis blanditiis aperiam ab quaerat totam tempore, consequuntur quidem?
        </p>
        <button className="text-texcol  bg-primary py-1 px-3 lg:ml-6 rounded-full mt-3 hover:bg-secondary text-sm md:text-base lg:text-lg ">Learn More</button>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About
