'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Eye, Sparkles } from 'lucide-react';
import Link from 'next/link';
import CountUp from './CountUp';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [statsVisible, setStatsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden lg:top-15 top-24'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        {/* Gradient Orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000'></div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

        {/* Mouse Follower */}
        <div
          className='absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none'
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <motion.div
        className='relative z-10 text-center px-4 max-w-6xl mx-auto'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {/* Floating Badge */}
        <motion.div
          className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8'
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        >
          <Sparkles className='w-4 h-4 text-yellow-400' />
          <span className='text-sm text-gray-300'>Available for new projects</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 14 }}
        >
          <motion.span
            className='block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.2 }}
          >
            INNOVATIVE
          </motion.span>
          <motion.span
            className='block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient '
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.35 }}
          >
            ENGINEER
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className='text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.5 }}
        >
          I build immersive web experiences with a focus on clean design and robust performance
        </motion.p>

        {/* Description */}
        <motion.p
          className='text-lg text-gray-400 mb-12 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.6 }}
        >
          Expert in <span className='font-bold'>React.js</span>,{' '}
          <span className='font-bold'>Next.js</span>, and modern frameworks to transform your
          vision into fast, fluid, and responsive digital products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.7,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          >
            <Button
              size='lg'
              className='cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105'
              onClick={() => window.open('https://github.com/SherazArif172/', '_blank')}
            >
              <Eye className='w-5 h-5 mr-2' />
              View My Work
            </Button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          >
            <Button
              variant='outline'
              size='lg'
              className='cursor-pointer border-white/20 text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 bg-transparent'
            >
              <Download className='w-5 h-5 mr-2' />
              <a href='/ashraf_cv.pdf' download>
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.9,
              },
            },
          }}
          onAnimationComplete={() => setStatsVisible(true)}
        >
          {[
            { digit: '50+', label: 'Projects Completed' },
            { digit: '3+', label: 'Years Experience' },
            { digit: '25+', label: 'Happy Clients' },
            { digit: '100%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className='text-center group'
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            >
              <div className='text-3xl md:text-4xl font-bold text-white mb-2 '>
                <CountUp
                  from={0}
                  to={parseInt(stat.digit.replace(/\D/g, ''))}
                  separator=','
                  duration={1}
                  startWhen={statsVisible}
                />
                <span className='ml-1 text-white'>{stat.digit.replace(/[0-9]/g, '')}</span>
              </div>
              <div className='text-sm text-gray-400 uppercase tracking-wider'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
      </motion.div>

      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping'></div>
      <div className='absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse'></div>
      <div className='absolute bottom-40 left-20 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000'></div>
      <div className='absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500'></div>
    </section>
  );
}
