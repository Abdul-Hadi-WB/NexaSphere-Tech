'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Play, 
  TrendingUp, 
  Briefcase, 
  Award, 
  Clock, 
  Users, 
  Code, 
  Palette, 
  Rocket, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle
} from 'lucide-react'
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'

const About = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20">
      
      {/* ========================================================= */}
      {/* ABOUT HERO SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-0 lg:pt-4"
            >
              <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">About Us</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-3 leading-tight">
                Powering Digital <br />
                <span className="text-[#193d84]">Transformation</span>
              </h1>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                NexaSphere Tech is a digital and creative technology agency providing professional 
                Web Development, Graphic Design, Digital Marketing, Social Media Management, and 
                Video Editing services. We help businesses build a strong digital presence through 
                modern websites, creative branding, engaging content, and effective marketing strategies.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  'Expert Team',
                  'Global Reach',
                  'Innovation Driven',
                  'Client First'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-[#193d84]" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link href="/contact">
                  <button className="bg-[#193d84] hover:bg-[#0b1220] text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2">
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
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOUNDER & CEO SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Our Leadership</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
              Meet Our <span className="text-[#193d84]">Founders</span>
            </h2>
            <p className="text-lg text-gray-500 mt-4">
              The visionaries behind NexaSphere Tech who drive innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Founder & CEO - Abdul Hadi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 mx-auto mb-6 relative">
                <Image
                  src=""
                  alt="Abdul Hadi - Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black">Abdul Hadi</h3>
              <p className="text-[#193d84] font-semibold mt-1">Founder & CEO</p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                Visionary leader with a passion for technology and innovation. Abdul Hadi leads NexaSphere Tech with a focus on delivering exceptional digital solutions and building a culture of excellence.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/80 text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaLinkedinIn size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaTwitter size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#EA4335] hover:bg-[#EA4335]/80 text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaEnvelope size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Co-Founder - Tanzeela Waheed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 mx-auto mb-6 relative">
                <Image
                  src="/images/CO-Founder.jpeg"
                  alt="Tanzeela Waheed - Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black">Tanzeela Waheed</h3>
              <p className="text-[#193d84] font-semibold mt-1">Co-Founder</p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                Creative strategist and technical expert. Tanzeela Waheed brings innovative ideas to life, ensuring NexaSphere Tech delivers cutting-edge solutions that exceed client expectations.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#0077B5]/80 text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaLinkedinIn size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaTwitter size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-[#EA4335] hover:bg-[#EA4335]/80 text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaEnvelope size={18} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR TEAM SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Our Team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
              The <span className="text-[#193d84]">Experts</span> Behind NexaSphere
            </h2>
            <p className="text-lg text-gray-500 mt-4">
              A dedicated team of professionals committed to delivering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#193d84]/20 to-[#193d84]/5 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#193d84]">JD</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-black">John Doe</h4>
              <p className="text-[#193d84] font-medium text-sm">Lead Developer</p>
              <p className="text-gray-500 text-sm mt-2">Full-stack expert with 8+ years of experience in web development.</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#193d84]/20 to-[#193d84]/5 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#193d84]">JS</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-black">Jane Smith</h4>
              <p className="text-[#193d84] font-medium text-sm">Creative Director</p>
              <p className="text-gray-500 text-sm mt-2">Award-winning designer with a passion for brand storytelling.</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#193d84]/20 to-[#193d84]/5 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#193d84]">MR</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-black">Mike Ross</h4>
              <p className="text-[#193d84] font-medium text-sm">Marketing Strategist</p>
              <p className="text-gray-500 text-sm mt-2">Data-driven marketer specializing in digital growth strategies.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VALUES SECTION - With Mission, Vision & Values (Professional Animations) */}
      {/* ========================================================= */}
      <section className="w-full bg-[#f0f4ff] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          
          {/* Sticker - Right Side Top Corner */}
          <div className="absolute -top-6 right-0 z-20 w-32 sm:w-40 md:w-48 lg:w-56">
            <Image
              src="/images/sidestickers2.png"
              alt="NexaSphere Tech Values"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Our Values</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
              What <span className="text-[#193d84]">Drives</span> Us
            </h2>
          </motion.div>

          {/* Mission & Vision Cards - Professional with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#193d84] via-[#2a5a9e] to-[#193d84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              {/* Animated Background Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#193d84]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#193d84] transition-colors duration-500">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-500">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#193d84] group-hover:text-[#0b1220] transition-colors duration-500">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
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
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#193d84] via-[#2a5a9e] to-[#193d84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              {/* Animated Background Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#193d84]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#193d84] transition-colors duration-500">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-500">👁️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#193d84] group-hover:text-[#0b1220] transition-colors duration-500">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  To become a global leader in digital and creative technology, recognized for 
                  transforming ideas into impactful digital experiences that help brands thrive 
                  in an ever-evolving digital landscape.
                </p>
                <div className="mt-4 w-12 h-0.5 bg-[#193d84]/30 rounded-full group-hover:w-20 transition-all duration-700"></div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Zap size={28} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Innovation</h4>
              <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-600 transition-colors duration-500">Pushing boundaries with cutting-edge technology and creative solutions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Users size={28} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Collaboration</h4>
              <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-600 transition-colors duration-500">Working together to achieve remarkable results for our clients.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Award size={28} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Excellence</h4>
              <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-600 transition-colors duration-500">Delivering quality that exceeds expectations every single time.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#193d84] to-[#2a5a9e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#193d84]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#193d84] transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Globe size={28} className="text-[#193d84] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-bold text-black group-hover:text-[#193d84] transition-colors duration-500">Global Impact</h4>
              <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-600 transition-colors duration-500">Creating digital solutions that make a difference worldwide.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA SECTION - White Background with Blue Text */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-20 relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#193d84]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#193d84]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#193d84] leading-tight">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-lg">
                Let's discuss how NexaSphere Tech can help you achieve your business goals through innovative digital solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-start lg:justify-end"
            >
              <Link href="/contact">
                <button className="bg-[#193d84] hover:bg-[#0b1220] text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Get in Touch
                </button>
              </Link>
              <Link href="/solutions">
                <button className="border-2 border-[#193d84] text-[#193d84] hover:bg-[#193d84] hover:text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105">
                  Explore Solutions
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About