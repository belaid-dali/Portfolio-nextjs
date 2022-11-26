import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            An enthusiastic and self-motivated Software Engineer with 
            an extensive experience in the IT domain, in designing, developing 
            and testing scalable software and embedded systems. Strong background 
            in process-oriented software development. Capable of working in a team 
            environment or working independently. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            Junior Web Developer with 1 plus years of experience able to build 
            React web applications from the ground up - information gathering, 
            planning, design, development, testing and delivery and maintenance. 
            Extremely passionate towards software architecture and design combined 
            with sensitivity to serve the needs of the business balanced with the 
            delivery of high quality solutions.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
