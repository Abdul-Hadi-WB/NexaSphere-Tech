'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Users, Award, Globe, Shield, Code, Palette, Rocket } from 'lucide-react'

// Helper component for 3D Interactive Card Effect on Side Images
const Card3D = ({ children, className = '' }) => {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-150, 150], [12, -12])
  const rotateY = useTransform(x, [-150, 150], [-12, 12])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const VideoEditing = () => {
  const containerRef = useRef(null)
  const heroSectionRef = useRef(null)
  const heroVideoRef = useRef(null)
  const portfolioVideoRef = useRef(null)

  const [heroMuted, setHeroMuted] = useState(true)
  const [portfolioMuted, setPortfolioMuted] = useState(true)

  const videoPath = '/images/video1.mp4'

  // Video Editing Services Data
  const services = [
    { name: "Corporate Video Editing", icon: "🏢", price: "Starting at $199" },
    { name: "YouTube Content Editing", icon: "▶️", price: "Starting at $149" },
    { name: "Social Media Reels/Shorts", icon: "📱", price: "Starting at $99" },
    { name: "Motion Graphics & VFX", icon: "✨", price: "Starting at $299" },
  ]

  // Video Editing Specific Services
  const videoServices = [
    {
      title: "Professional Video Editing",
      description: "Transform raw footage into polished, engaging videos. From cutting and transitions to color grading and audio mixing, we deliver professional results that captivate your audience.",
      icon: "🎬",
      link: "/services/professional-editing"
    },
    {
      title: "Motion Graphics & Animation",
      description: "Add dynamic motion graphics, lower thirds, intros, outros, and animated elements that make your videos stand out and communicate your message effectively.",
      icon: "🎨",
      link: "/services/motion-graphics"
    },
    {
      title: "Social Media Content Creation",
      description: "Eye-catching short-form content optimized for TikTok, Instagram Reels, YouTube Shorts, and Facebook. Trend-aware editing that stops the scroll and drives engagement.",
      icon: "📲",
      link: "/services/social-media-content"
    }
  ]

  // Force play video on mount or when ref is ready
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch((error) => {
        console.log("Hero video autoplay prevented:", error)
      })
    }
  }, [])

  // Advanced Scroll Detection to Auto-Mute Hero Video
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setHeroMuted(true)
        }
      },
      { threshold: 0.15 }
    )

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Mouse parallax effect for hero mockup
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <>
      {/* Global styles to hide scrollbars */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
      `}</style>

      {/* ================================================================
         1. MAIN VIDEO EDITING SECTION
      ================================================================ */}
      <motion.section 
        ref={heroSectionRef} 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#193d84]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#193d84]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Services */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <p className="text-sm uppercase font-bold mt-16 sm:mt-20 lg:mt-24" style={{ color: '#193d84' }}>
                Video Editing
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Transform Your Raw Footage Into<br/> Captivating Stories
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From corporate videos and YouTube content to social media reels and motion graphics, 
                we bring your vision to life with professional editing, stunning effects, and 
                engaging storytelling that keeps viewers coming back.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 sm:p-4 border border-gray-100 hover:border-[#193d84]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-black text-sm sm:text-base mb-0.5 sm:mb-1">
                          {service.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium italic text-[#193d84]">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 sm:pt-6">
                <Link href="/contact">
                  <button className="group relative overflow-hidden bg-[#193d84] hover:bg-[#0b1220] text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/40">
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                    <span className="relative z-10 flex items-center">
                      START YOUR PROJECT
                      <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12">→</span>
                    </span>
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="absolute inset-0 rounded-full animate-ping bg-[#193d84]/30"></span>
                    </span>
                  </button>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-black/60">
                    <span className="font-bold text-black">300+</span> Videos Edited
                  </p>
                  <p className="text-xs text-gray-400">10M+ Total Views</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Laptop Mockup with Live Video Streaming */}
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative flex justify-center items-center perspective-1000 sticky top-24"
            >
              <motion.div 
                className="relative w-full max-w-xl z-10"
                style={{ rotateX, rotateY }}
                transition={{ type: "spring", damping: 30 }}
              >
                <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-black/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs text-white font-medium">EDITING REEL</span>
                  </div>
                </div>
                
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 sm:p-4 shadow-2xl">
                  <div className="relative bg-black rounded-xl overflow-hidden shadow-inner aspect-[16/9]">
                    <video
                      ref={heroVideoRef}
                      src={videoPath}
                      autoPlay
                      loop
                      playsInline
                      muted={heroMuted}
                      preload="auto"
                      className="w-full h-full object-contain"
                    />

                    <button
                      onClick={() => setHeroMuted(!heroMuted)}
                      className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all shadow-md text-sm sm:text-base"
                      title={heroMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {heroMuted ? "🔇" : "🔊"}
                    </button>
                    
                    <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-black/80 rounded-full z-10">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl p-2 sm:p-3 shadow-xl">
                  <div className="bg-gray-900 rounded-xl p-2 sm:p-3">
                    <div className="grid grid-cols-12 gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                      {[...Array(48)].map((_, i) => (
                        <div key={i} className="h-1.5 sm:h-2 bg-gray-700 rounded-sm shadow-inner"></div>
                      ))}
                    </div>
                    <div className="grid grid-cols-8 gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="h-1.5 sm:h-2 bg-gray-700 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-10 sm:w-12 h-2 sm:h-3 bg-gray-700 rounded-full"></div>
                      <div className="w-16 sm:w-20 h-4 sm:h-6 bg-gray-700 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                      </div>
                      <div className="w-10 sm:w-12 h-2 sm:h-3 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -inset-4 bg-gradient-to-r from-[#193d84]/20 via-transparent to-[#193d84]/20 blur-2xl -z-10 rounded-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================================================================
         2. PORTFOLIO SHOWCASE - VIDEO FULL SHOW
      ================================================================ */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 mb-8 sm:mb-12 text-center">
          <p className="text-sm uppercase font-bold tracking-wider" style={{ color: '#193d84' }}>
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2">
            Our Recent Portfolio
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 relative">
          <div className="w-full overflow-hidden rounded-2xl shadow-xl bg-white p-1.5 sm:p-2 border border-gray-100 relative group">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black">
              <video
                ref={portfolioVideoRef}
                src={videoPath}
                autoPlay
                loop
                playsInline
                muted={portfolioMuted}
                preload="auto"
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20 flex items-center gap-2">
                <button
                  onClick={() => setPortfolioMuted(!portfolioMuted)}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/80 border border-white/20 text-white text-base sm:text-lg flex items-center justify-center hover:bg-black hover:scale-110 transition-all shadow-lg"
                  title={portfolioMuted ? "Unmute Portfolio" : "Mute Portfolio"}
                >
                  {portfolioMuted ? "🔇" : "🔊"}
                </button>
              </div>

              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/70 border border-[#193d84]/40 rounded px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white tracking-widest font-semibold backdrop-blur-sm">
                4K SHOWCASE PREVIEW
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================================================
         3. VIDEO EDITING SERVICES SECTION
      ================================================================ */}
      <motion.section 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-white py-12 sm:py-16 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          {/* Heading with Small Blue Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">How We Edit</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mt-3">
              Professional video post-production
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed mt-3 sm:mt-4">
              Get professional video editing services that elevate your content, engage your audience, 
              and tell your story with cinematic quality.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {videoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#193d84]/10 rounded-full flex items-center justify-center group-hover:bg-[#193d84] transition-colors duration-300">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-[#193d84] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <Link href={service.link} className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-sm font-semibold text-[#193d84] hover:text-[#0b1220] transition-colors duration-300 group-hover:gap-3">
                  Learn More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* ================================================================
         4. VIDEO EDITING EXPERTISE SECTION
      ================================================================ */}
      <motion.section 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-white py-12 sm:py-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col space-y-4 sm:space-y-6 order-1 text-center md:text-left">
              <p className="text-sm uppercase font-bold tracking-wider" style={{ color: '#193d84' }}>
                POST-PRODUCTION EXPERTISE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Cinematic quality<br/>that captures attention
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
                  In a world where video content dominates, quality editing separates professionals from amateurs. We combine technical expertise with creative storytelling to produce videos that not only look stunning but also drive engagement, build trust, and convert viewers into customers.
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center w-full ml-auto max-w-2xl"> 
              <div className="w-full relative">
                <Image
                  src="/images/editing-pic.png"
                  alt="Editing Expertise"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================================================
         5. PRICING SECTION
      ================================================================ */}
      <motion.section 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#f0f4ff] py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#193d84]/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#193d84]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm uppercase font-bold tracking-wider mb-3 inline-block px-4 py-1.5 rounded-full bg-[#193d84]/10" style={{ color: '#193d84' }}>
              OUR PLANS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mt-4">
              Video Editing Pricing
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mt-3 sm:mt-4">
              Choose the perfect video editing package for your content needs. All packages include professional editing and rapid delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            {/* BASIC EDIT */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#193d84]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">📹</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Basic Edit</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">For short-form content</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-black">$99</span>
                  <span className="text-gray-500 text-base sm:text-lg ml-1">/video</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Up to 5 minutes raw footage</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Basic cuts &amp; transitions</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Audio syncing &amp; cleanup</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Basic color correction</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Background music</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Captions / subtitles</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">1 revision</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Delivery: 2-3 business days</span></li>
                </ul>
                <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 italic">* Final pricing may vary based on complexity.</div>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-2.5 sm:py-3 rounded-full border-2 border-[#193d84] text-black font-semibold hover:bg-[#193d84] hover:text-white transition-all duration-300 text-sm sm:text-base">
                    GET STARTED
                  </button>
                </Link>
              </div>
            </div>

            {/* PRO EDIT */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#193d84]/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col relative">
              <div className="absolute top-0 inset-x-0 bg-[#193d84] text-white text-center py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Most Popular
              </div>
              <div className="p-6 sm:p-8 pt-10 sm:pt-12 flex-1 flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#193d84]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🎬</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Pro Edit</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">For YouTube &amp; social media</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-black">$199</span>
                  <span className="text-gray-500 text-base sm:text-lg ml-1">/video</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Up to 15 minutes final video</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Advanced cuts &amp; transitions</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Professional color correction</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Audio mixing &amp; cleanup</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Custom thumbnails</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Motion graphics</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Captions &amp; subtitles</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">2-3 revision rounds</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Delivery: 3-5 business days</span></li>
                </ul>
                <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 italic">* Final pricing may vary based on complexity.</div>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-2.5 sm:py-3 rounded-full bg-[#193d84] text-white font-semibold hover:bg-[#0b1220] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group text-sm sm:text-base">
                    LEARN MORE 
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* PREMIUM EDIT */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#193d84]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🎥</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Premium Edit</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">For professional &amp; high-end projects</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-black">$399</span>
                  <span className="text-gray-500 text-base sm:text-lg ml-1">+</span>
                  <span className="text-gray-500 text-xs sm:text-sm block mt-1">scope-based pricing</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Long-form / advanced editing</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Advanced motion graphics</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Visual effects (VFX)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Professional color grading</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Advanced sound design</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">2D / 3D animations</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Multi-camera editing</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Multiple revision rounds</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Dedicated editor</span></li>
                </ul>
                <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 italic">* Final pricing may vary based on complexity.</div>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-2.5 sm:py-3 rounded-full border-2 border-[#193d84] text-black font-semibold hover:bg-[#193d84] hover:text-white transition-all duration-300 text-sm sm:text-base">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>

          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-400 text-sm">
              Need a custom video package? <Link href="/contact" className="text-[#193d84] font-semibold hover:underline">Book a consultation →</Link>
            </p>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default VideoEditing