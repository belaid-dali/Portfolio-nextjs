import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SharemeImg from '../public/assets/projects/shareme.png';
import DashboardImg from '../public/assets/projects/dashboard.jpg'
import FacerecognitionImg from '../public/assets/projects/facerecognition.jpg'
import RobotImg from '../public/assets/projects/robotfriend.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Share Me Social Media App'
            backgroundImg={SharemeImg}
            projectUrl='/Shareme'
            tech='React JS'
          />
          <ProjectItem
            title='Admin Dashboard App'
            backgroundImg={DashboardImg}
            projectUrl='/Dashboard'
            tech='React JS'

          />
          <ProjectItem
            title='Smart Face Recognition App'
            backgroundImg={FacerecognitionImg}
            projectUrl='/Facerecognition'
            tech='React JS'

          />
          <ProjectItem
            title='Robot Friend User Interface App'
            backgroundImg={RobotImg}
            projectUrl='/Robot'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
