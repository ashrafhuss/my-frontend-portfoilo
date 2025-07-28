'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_gmail',
          template_id: 'bvy61lg',
          user_id: 'dRQgkwReaqlzLtiaKv0f1',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'sherazarifofficial@gmail.com',
          },
        }),
      });
      if (res.ok) {
        setStatus('Your message has been sent! Thank you.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch {
      setStatus('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-20% 0px' });

  return (
    <motion.section
      id='contact'
      ref={sectionRef}
      className='py-20 px-4 relative overflow-hidden'
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 80, damping: 16 }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <motion.div
        className='max-w-6xl mx-auto relative z-10'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.15,
            },
          },
        }}
      >
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
        >
          <h2 className='text-4xl lg:text-5xl font-black mb-6'>
            <span className='text-white font-mono'>{'<'}</span>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              Contact
            </span>
            <span className='text-white font-mono'>{'/>'}</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Ready to work together? Drop me a message and let's create something amazing.
          </p>
        </motion.div>

        <motion.div
          className='grid lg:grid-cols-2 gap-12 items-start'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.25,
              },
            },
          }}
        >
          {/* Contact Form */}
          <motion.div
            className='h-full'
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <Card className='bg-white/5 backdrop-blur-xl border border-white/10 h-full'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6'>Send Message</h3>
                <motion.form
                  onSubmit={handleSubmit}
                  className='space-y-6'
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                  >
                    <Input
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder='Your Name'
                      className='bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12'
                      required
                    />
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                  >
                    <Input
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='Your Email'
                      className='bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12'
                      required
                    />
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                  >
                    <Textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder='Your Message'
                      rows={6}
                      className='bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none'
                      required
                    />
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                  >
                    <Button
                      type='submit'
                      className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 h-12 text-lg font-semibold'
                      disabled={loading}
                    >
                      <Send className='w-5 h-5 mr-2' />
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                  {status && <div className='text-center text-emerald-400 mt-2'>{status}</div>}
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-6'>Get in Touch</h3>
            <p className='text-gray-300 text-lg leading-relaxed mb-8'>
              I'm always interested in new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
            {/* Contact Details */}
            <motion.div
              className='space-y-6'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className='flex items-center gap-4'
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center'>
                  <Mail className='w-6 h-6 text-white' />
                </div>
                <div>
                  <p className='text-white font-semibold'>Email</p>
                  <Link
                    href={'mailto:ashrafapprocx@gmail.,com'}
                    className='cursor-pointer text-gray-400'
                  >
                    ashrafapprocx@gmail.com
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className='flex items-center gap-4'
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center'>
                  <Phone className='w-6 h-6 text-white' />
                </div>
                <div>
                  <p className='text-white font-semibold'>Phone</p>
                  <p className='text-gray-400'>+923039613956</p>
                </div>
              </motion.div>
              <motion.div
                className='flex items-center gap-4'
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center'>
                  <MapPin className='w-6 h-6 text-white' />
                </div>
                <div>
                  <p className='text-white font-semibold'>Location</p>
                  <p className='text-gray-400'>Lahore, Pakistan</p>
                </div>
              </motion.div>
            </motion.div>
            {/* Social Links */}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
