'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Award, 
  Users, 
  Zap, 
  Globe, 
  CheckCircle
} from 'lucide-react'
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'

const About = () => {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden pt-20">
      
      {/* ========================================================= */}
      {/* ABOUT HERO SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-0 lg:pt-4 text-center lg:text-left"
            >
              <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">About Us</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
                Powering Digital <br className="hidden sm:block" />
                <span className="text-[#193d84]">Transformation</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mt-4 sm:mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                NexaSphere Tech is a digital and creative technology agency providing professional 
                Web Development, Graphic Design, Digital Marketing, Social Media Management, and 
                Video Editing services. We help businesses build a strong digital presence through 
                modern websites, creative branding, engaging content, and effective marketing strategies.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-md mx-auto lg:mx-0">
                {[
                  'Expert Team',
                  'Global Reach',
                  'Innovation Driven',
                  'Client First'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-[#193d84] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 sm:mt-8">
                <Link href="/contact">
                  <button 
                    className="bg-[#193d84] hover:bg-[#0b1220] text-white text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 focus:outline-none"
                    aria-label="Get in touch with NexaSphere Tech"
                  >
                    Get in touch
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start justify-center lg:-mt-12"
            >
              <div className="relative w-full max-w-2xl aspect-square">
                <Image
                  src="/images/AboutUs.webp"
                  alt="About NexaSphere Tech"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOUNDER/CEO SECTION - WITHOUT 3D EFFECT */}
      {/* ========================================================= */}
      <section className="w-full bg-gray-50 py-20 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col space-y-6 order-1 text-center md:text-left"
            >
              <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">FOUNDER &amp; CEO'S VISION</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Meet The Mind Behind <br /> NexaSphere Tech
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                Abdul Hadi, the Founder &amp; CEO of NexaSphere Tech, established this venture with a clear vision to redefine digital excellence. His leadership focuses on scaling technical boundaries and fostering top-tier solutions.
              </p>
              <div>
                <span className="text-xl sm:text-2xl font-bold italic text-[#193d84]">ABDUL HADI - FOUNDER &amp; CEO</span>
              </div>
            </motion.div>
            
            {/* Founder/CEO Image - No 3D Effect */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex flex-col items-center justify-center order-2"
            >
              <div className="absolute w-64 h-64 bg-[#193d84]/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gray-200 shadow-2xl transition-all duration-300 hover:shadow-[0_25px_35px_rgba(25,61,132,0.35)]">
                  <Image
                    src="/images/CEO-pic.jpeg"
                    alt="Founder & CEO Abdul Hadi"
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Professional Bottom Line Effect */}
                <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-[#193d84] to-transparent mt-[-10px] rounded-full shadow-[0_5px_15px_rgba(25,61,132,0.6)]"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CO-FOUNDER SECTION - WITHOUT 3D EFFECT */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-20 overflow-hidden relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Co-Founder Image - No 3D Effect */}
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex flex-col items-center justify-center order-2 md:order-1"
            >
              <div className="absolute w-64 h-64 bg-[#193d84]/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gray-200 shadow-2xl transition-all duration-300 hover:shadow-[0_25px_35px_rgba(25,61,132,0.35)]">
                  <Image
                    src="/images/CO-Founder.jpeg"
                    alt="Co-Founder Tanzeela Waheed"
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Professional Bottom Line Effect */}
                <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-[#193d84] to-transparent mt-[-10px] rounded-full shadow-[0_5px_15px_rgba(25,61,132,0.6)]"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col space-y-6 order-1 md:order-2 text-center md:text-left"
            >
              <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">CO-FOUNDER'S VISION</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Meet The Visionary Behind <br /> NexaSphere Tech
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                Tanzeela Waheed, the Co-Founder of NexaSphere Tech, leads company operations and marketing strategies. Under her guidance, the agency delivers cutting-edge tech architectures worldwide.
              </p>
              <div>
                <span className="text-xl sm:text-2xl font-bold italic text-[#193d84]">TANZEELA WAHEED - CO-FOUNDER</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR TEAM SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Our Team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
              The <span className="text-[#193d84]">Experts</span> Behind NexaSphere
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mt-3 sm:mt-4">
              A dedicated team of professionals committed to delivering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-3 sm:mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#193d84]/20 to-[#193d84]/5 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#193d84]">JD</span>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-black">John Doe</h4>
              <p className="text-[#193d84] font-medium text-xs sm:text-sm">Lead Developer</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Full-stack expert with 8+ years of experience.</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-3 sm:mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#193d84]/20 to-[#193d84]/5 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#193d84]">JS</span>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-black">Jane Smith</h4>
              <p className="text-[#193d84] font-medium text-xs sm:text-sm">Creative Director</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Award-winning designer with a passion for branding.</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-3 sm:mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#193d84]/20 to-[#193d84]/5 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#193d84]">MR</span>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-black">Mike Ross</h4>
              <p className="text-[#193d84] font-medium text-xs sm:text-sm">Marketing Strategist</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Data-driven marketer specializing in growth.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VALUES SECTION - With Mission, Vision & Values */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Our Values</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
              What <span className="text-[#193d84]">Drives</span> Us
            </h2>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#193d84] via-[#2a5a9e] to-[#193d84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#193d84]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#193d84] transition-colors duration-500">
                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-500">🎯</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#193d84] group-hover:text-[#0b1220] transition-colors duration-500">Our Mission</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance brand visibility, and create meaningful connections with their audience 
                  through cutting-edge technology and creative excellence.
                </p>
                <div className="mt-4 w-12 h-0.5 bg-[#193d84]/30 rounded-full group-hover:w-20 transition-all duration-700"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#193d84] via-[#2a5a9e] to-[#193d84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#193d84]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#193d84] transition-colors duration-500">
                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-500">👁️</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#193d84] group-hover:text-[#0b1220] transition-colors duration-500">Our Vision</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                  To become a global leader in digital and creative technology, recognized for 
                  transforming ideas into impactful digital experiences that help brands thrive 
                  in an ever-evolving digital landscape.
                </p>
                <div className="mt-4 w-12 h-0.5 bg-[#193d84]/30 rounded-full group-hover:w-20 transition-all duration-700"></div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Zap size={24} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Innovation</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2 group-hover:text-gray-600 transition-colors duration-500">Pushing boundaries with cutting-edge technology.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Users size={24} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Collaboration</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2 group-hover:text-gray-600 transition-colors duration-500">Working together to achieve remarkable results.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Award size={24} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Excellence</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2 group-hover:text-gray-600 transition-colors duration-500">Delivering quality that exceeds expectations.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Globe size={24} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Global Impact</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2 group-hover:text-gray-600 transition-colors duration-500">Creating solutions that make a difference worldwide.</p>
            </motion.div>

          </div>
        </div>
      </section>

       {/* ========================================================= */}
      {/* CTA SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-16 sm:py-20 relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#193d84]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#193d84]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#193d84] leading-tight">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mt-4 max-w-lg mx-auto lg:mx-0">
                Let's discuss how NexaSphere Tech can help you achieve your business goals through innovative digital solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-end"
            >
              <Link href="/contact">
                <button 
                  className="bg-[#193d84] hover:bg-[#0b1220] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none"
                  aria-label="Get in touch with NexaSphere Tech"
                >
                  Get in Touch
                </button>
              </Link>
              <Link href="/solutions">
                <button 
                  className="border-2 border-[#193d84] text-[#193d84] hover:bg-[#193d84] hover:text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none"
                  aria-label="Explore our solutions"
                >
                  Explore Solutions
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About