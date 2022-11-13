import Image from 'next/image';
import React from 'react';
import SharemeImg from '../public/assets/projects/shareme.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Shareme = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={SharemeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Share Me Social Media App</h2>
          <h3>React JS / Tailwind / Sanity / Netlify</h3>
        </div>
      </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>
            “Share Me” is a web application designed based on React.js and 
            TailwindCSS, and the Sanity platform that has a real-time data 
            store for structured content, supporting APIs for assets, user management, 
            etc. In addition, with all the advanced features of social media, such 
            as Google authentication,creating, editing, deleting and saving posts, 
            adding comments on other people's posts, searching and filtering images, 
            and much more. Share Me is the best social media application for sharing images.
          </p>
          <a
            href='https://github.com/belaid-dali/Share-Me-Social-Media-'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://share-me-on.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Auth
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};


export default Shareme; 
