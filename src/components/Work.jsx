import React from 'react';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Explore some of the roles I have taken on</p>
        </div>
        
        <section id="project-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-8">
              <div className="col-md-7 heading-section text-center">
                <h1 className="text-6xl font-extrabold mb-4">Experience Highlights</h1>
                <ul className="text-sm list-disc list-inside space-y-4">
                  <li>
                    Designed and implemented software features using cutting-edge technologies such as Spring Boot and Microservices architecture, ensuring alignment with project goals and industry best practices.
                  </li>
                  <li>
                    Elevated user interfaces to new heights by incorporating React and Primefaces, resulting in intuitive and responsive experiences for end-users.
                  </li>
                  <li>
                    Managed seamless code deployment across development, testing, and production environments utilizing GitHub and Jenkins, facilitating efficient integration and deployment workflows.
                  </li>
                  <li>
                    Demonstrated proficiency in crafting tailored queries and rollback strategies, optimizing database performance and ensuring data integrity.
                  </li>
                  <li>
                    Leveraged Git and GitHub for effective version control, enabling collaborative development and streamlined code management processes.
                  </li>
                </ul>
              </div>
            </div>
            {/* Add more project cards here in the same format as above */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
