import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Fox from '../models/Fox';
import Loader from '../components/Loader';

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const handleWalk = () => {
    setCurrentAnimation('walk');
  }

  const handleIdle = () => {
    setCurrentAnimation('idle');
  }

  const handleRun = () => {
    setCurrentAnimation('hit');
  }

  return (
    <section 
      className='relative flex lg:flex-row flex-col max-container h-screen' 
      onMouseEnter={handleWalk}
      onTouchStart={handleWalk}
    >
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text text-center lg:text-left md:text-left'>
          Get in Touch
        </h1>

        <div
          className='w-full flex flex-col justify-center items-center lg:justify-start md:justify-start lg:flex-row md:flex-row xl:flex-row gap-16 mt-16'
          onMouseEnter={handleRun}
          onMouseLeave={handleIdle}
          onTouchStart={handleRun}
          onTouchEnd={handleIdle}
        >
          <a
            href="https://www.linkedin.com/in/mayank-kumar42"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={60} className='text-blue-600' />
          </a>
          <a
            href="https://github.com/mank-423"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={60} />
          </a>
          <a
            href="https://twitter.com/okaymank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={60} />
          </a>
          <a
            href="mailto:mk4664348@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://mayank-kl2e.onrender.com/static/media/gmail.d14559ec712a163c139b.jpg"
              className='h-[50px] w-16'
            />
          </a>
        </div>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={0.5} />
            <Fox
              currentAnimation={currentAnimation}
              position={[0, 0, 0]}
              rotation={[12.5, -0.6, 0]}
              scale={[0.4, 0.4, 0.4]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
