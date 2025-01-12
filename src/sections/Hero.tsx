"use client";

import ArrowDown from '@/assets/icons/arrow-down.svg';
import { CustomButton } from '@/components/CustomButton';
import { HeroOrbit } from '@/components/HeroOrbit';
import Image from 'next/image';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import agustinMemoji from '@/assets/images/agustin-memoji.png';
import grainImage from '@/assets/images/grain.jpg';

export const HeroSection = () => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div id="hero" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)] -z-20'>
        {/* Start Background ring effect */}
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`
        }}/>
        <div className='hero-ring size-[655px]'/>
        <div className='hero-ring size-[855px]'/>
        <div className='hero-ring size-[1055px]'/>
        <div className='hero-ring size-[1255px]'/>
        {/* End Background ring effect */}

        {/* Start Background stars effect */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='5s'>
          <SparkleIcon className='size-8 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='5s'>
          <SparkleIcon className='size-5 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='10s'>
          <div className='size-2 bg-blue-300/20 rounded-full'/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='5s'>
          <SparkleIcon className='size-10 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='10s'>
          <StarIcon className='size-12 text-blue-300' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='10s'>
          <StarIcon className='size-8 text-blue-300' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='10s'>
          <div className='size-2 bg-blue-300/20 rounded-full'/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='5s'>
          <SparkleIcon className='size-14 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='10s'>
          <div className='size-3 bg-blue-300/20 rounded-full'/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-82} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='10s'>
          <StarIcon className='size-28 text-blue-300' />
        </HeroOrbit>
        {/* End Background stars effect */}
      </div>

      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={agustinMemoji} alt='person peeking from behind laptop' className='size-[200px]' />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
            </div>
            <div className='text-sm font-semibold'>Available for new projects</div>
          </div>  
        </div>
        <div className='max-w-lg mx-auto text-center mt-4'>
          <p className='text-lg font-medium'>Agustin Nazareno Perticaro</p>
          <p className='text-lg font-medium'>Buenos Aires, Argentina</p>
          <p className='text-lg font-medium'>22/05/2000</p>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Passionate full-stack developer who thrives on learning new technologies and tackling exciting challenges. I believe that staying curious and constantly improving are the keys to building innovative solutions and growing both professionally and personally.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <CustomButton 
            onClick={() => scrollToSection('projects')} 
            wrapperClassName='rounded-xl' 
            className='rounded-xl'
            text='Explore My Work' 
            icon={ArrowDown} 
          />
          <button onClick={() => scrollToSection('contact')} className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/10 hover:border-white/30 hover:text-white transition'>
            <span>👋🏻</span>
            <span className='font-semibold'>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
