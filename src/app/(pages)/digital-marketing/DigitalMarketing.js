'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Users, Award, Globe, Shield, Code, Palette, Rocket } from 'lucide-react'

// Reusable 3D Tilt Wrapper Component for Big Images
const TiltImage3D = ({ children, className = "" }) => {
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
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

const DigitalMarketing = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const portfolioTrackRef = useRef(null)

  // Portfolio Carousel Images
  const [portfolioIndex, setPortfolioIndex] = useState(0)
  const portfolioImages = [
    '/images/pic1.jpeg',
    '/images/pic2.jpeg'
  ]

  // Campaign Dashboard Images
  const images = [
    '/images/pic1.jpeg',
    '/images/pic2.jpeg',
  ]

  // Digital Marketing Services Data
  const services = [
    { name: "SEO Optimization", icon: "🔍", price: "Starting at $299/mo" },
    { name: "Social Media Marketing", icon: "📱", price: "Starting at $399/mo" },
    { name: "PPC Campaigns", icon: "💰", price: "Starting at $499/mo" },
    { name: "Content Marketing", icon: "✍️", price: "Starting at $249/mo" },
  ]

  // Digital Marketing Specific Services
  const marketingServices = [
    {
      title: "Data-Driven SEO Strategy",
      description: "Boost your search rankings with our comprehensive SEO approach. We analyze your market, competitors, and audience to create a custom strategy that drives organic traffic and qualified leads.",
      icon: "📈"
    },
    {
      title: "Social Media Growth",
      description: "Build a powerful social media presence across platforms. From content creation to community management, we help you engage with your audience and convert followers into customers.",
      icon: "📊"
    },
    {
      title: "Conversion-Focused Ads",
      description: "Maximize your ROI with targeted PPC campaigns. Our data-backed approach ensures your ad spend delivers measurable results through strategic keyword targeting and compelling ad copy.",
      icon: "🎯"
    }
  ]

  // Smooth auto-scroll for Campaign Dashboard Mockup
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId
    let lastTimestamp = 0
    const scrollSpeed = 0.6
    let currentScroll = 0

    const smoothScroll = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp
        animationFrameId = requestAnimationFrame(smoothScroll)
        return
      }

      const deltaTime = Math.min(32, timestamp - lastTimestamp)
      currentScroll += scrollSpeed * (deltaTime / 16)
      
      const maxScroll = scrollContainer.scrollHeight / 2
      if (currentScroll >= maxScroll) {
        currentScroll = 0
        scrollContainer.scrollTop = 0
      } else {
        scrollContainer.scrollTop = currentScroll
      }

      const sectionHeight = scrollContainer.clientHeight
      if (sectionHeight > 0) {
        const newIndex = Math.floor(currentScroll / sectionHeight) % images.length
        setActiveIndex(newIndex)
      }

      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(smoothScroll)
    }

    animationFrameId = requestAnimationFrame(smoothScroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [images.length])

  // Mouse parallax effect for 3D card
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [12, -12])
  const rotateY = useTransform(mouseX, [-300, 300], [-12, 12])

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

  // Auto-slide for portfolio
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [portfolioImages.length])

  // Manual slide navigation
  const goToSlide = (index) => {
    setPortfolioIndex(index)
  }

  const prevSlide = () => {
    setPortfolioIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }

  const nextSlide = () => {
    setPortfolioIndex((prev) => (prev + 1) % portfolioImages.length)
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
         1. MAIN DIGITAL MARKETING SECTION
      ================================================================ */}
      <motion.section 
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
                Digital Marketing
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Grow Your Business With<br/>Data-Driven Marketing
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From SEO and social media to PPC campaigns and content strategy, 
                we deliver results-driven marketing solutions that increase visibility, 
                drive qualified traffic, and boost your bottom line.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
                      START GROWING TODAY
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
                    <span className="font-bold text-black">100+</span> Campaigns Managed
                  </p>
                  <p className="text-xs text-gray-400">300% Average ROI</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - 3D Card laptop mockup */}
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative flex justify-center items-center sticky top-24 preserve-3d"
              style={{ perspective: 1200 }}
            >
              <motion.div 
                className="relative w-full max-w-xl z-10 transform-gpu shadow-2xl rounded-2xl"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
              >
                <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-black/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs text-white font-medium">CAMPAIGN DASHBOARD</span>
                  </div>
                </div>
                
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 sm:p-4 shadow-2xl border-t border-l border-white/20">
                  <div className="relative bg-black rounded-xl overflow-hidden shadow-inner" style={{ aspectRatio: '16/9' }}>
                    <div 
                      ref={scrollRef}
                      className="w-full h-full flex flex-col overflow-y-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                    >
                      {[...images, ...images].map((img, i) => (
                        <div key={i} className="w-full flex-shrink-0 relative group/image">
                          <img
                            src={img}
                            className="w-full h-auto object-top object-cover transition-transform duration-300 group-hover/image:scale-105"
                            alt={`Marketing preview ${i + 1}`}
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-20">
                      {images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                            activeIndex === idx 
                              ? 'bg-[#193d84] w-3 sm:w-4'
                              : 'bg-white w-1.5 sm:w-2 opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-black/80 rounded-full z-10">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl p-2 sm:p-3 shadow-xl border-b border-l border-white/10">
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
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-500"></div>
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
         2. PORTFOLIO SECTION - SLIDER WITH DRAG SUPPORT
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
          <div className="w-full overflow-hidden rounded-2xl shadow-xl bg-white p-1.5 sm:p-2 border border-gray-100">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              
              {/* Slider Track with Drag Support */}
              <motion.div 
                ref={portfolioTrackRef}
                className="flex w-full h-full cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -(portfolioImages.length - 1) * 100 + '%', right: 0 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
                whileTap={{ cursor: "grabbing" }}
                animate={{ x: `-${portfolioIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                {portfolioImages.map((src, idx) => (
                  <div key={idx} className="w-full h-full shrink-0 relative">
                    <img
                      src={src}
                      alt={`Portfolio project ${idx + 1}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 hover:scale-110"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 hover:scale-110"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-6">
            {portfolioImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  portfolioIndex === idx 
                    ? 'bg-[#193d84] w-4 sm:w-6' 
                    : 'bg-gray-300 w-2 sm:w-2.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Drag Indicator */}
          <p className="text-center text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
            👆 Drag to slide or use buttons
          </p>
        </div>
      </motion.section>

      {/* ================================================================
         3. DIGITAL MARKETING SERVICES SECTION
      ================================================================ */}
      <motion.section 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-white py-12 sm:py-16 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">How We Do It</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mt-3">
              Comprehensive marketing solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed mt-3 sm:mt-4">
              Get a complete digital marketing strategy that amplifies your online presence, 
              generates quality leads, and maximizes your return on investment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {marketingServices.map((service, index) => (
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
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link href="#" className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-sm font-semibold text-[#193d84] hover:text-[#0b1220] transition-colors duration-300 group-hover:gap-3">
                  Learn More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* ================================================================
         4. EXPERT SECTION
      ================================================================ */}
      <motion.section 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full py-12 sm:py-16 bg-[#f0f4ff]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-gradient-to-r from-[#193d84] to-[#2a5a9e] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start gap-6 sm:gap-8 shadow-lg">
            <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/images/marketing-expert.jpg"
                  alt="Sarah Khan"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-bold text-white text-sm sm:text-base">Maryam</h4>
                <p className="text-white/80 text-xs">Digital Marketing Strategist</p>
                <div className="mt-3">
                  <a 
                    href="tel:03116176345" 
                    className="inline-block bg-white text-[#193d84] text-xs font-bold px-3 py-1.5 rounded-full hover:bg-[#0b1220] hover:text-white transition duration-300 shadow-sm"
                  >
                    📞 0311 6176345
                  </a>
                </div>
              </div>
            </div>

            <div className="text-white flex-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                Who you'll be speaking with:
              </h3>
              <ul className="space-y-2 mb-4 sm:mb-5">
                <li className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
                  <span className="text-white">✔</span> 4+ Years in SEO & Digital Marketing
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
                  <span className="text-white">✔</span> Expert in Google Ads & Social Media Campaigns
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
                  <span className="text-white">✔</span> Specialized in Data Analytics & Conversion Optimization
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
                  <span className="text-white">✔</span> 50+ Successful Marketing Campaigns Delivered
                </li>
              </ul>
              <p className="italic text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                “In today's digital world, visibility is everything. My passion is helping businesses cut through the noise and connect with their ideal customers. Whether it's SEO, social media, or paid ads, I create data-driven strategies that deliver real, measurable growth - not just vanity metrics.”
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                At NexaSphere Tech, we don't believe in one-size-fits-all marketing. We take time to understand your unique brand voice, target audience, and business goals. From keyword research to campaign optimization, every decision is backed by data and focused on ROI. Let's turn your digital presence into your biggest asset.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* ================================================================
         5. MARKETING EXPERTISE SECTION
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
                MARKETING EXPERTISE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Data-driven marketing<br/>that delivers real results
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
                  Stop guessing and start growing with our analytics-first approach. We combine cutting-edge marketing tools with proven strategies to help you reach the right audience, at the right time, with the right message. Our campaigns are continuously optimized for maximum performance and ROI.
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
                  src="/images/Marketing-pic.png"
                  alt="Marketing Expertise"
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
         6. PRICING SECTION
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
              Digital Marketing Pricing
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mt-3 sm:mt-4">
              Choose the perfect marketing package for your business goals. All plans include strategy, execution, and regular reporting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            {/* STARTER MARKETING */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#193d84]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">📈</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Starter Marketing</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">For small &amp; local businesses</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-black">$99</span>
                  <span className="text-gray-500 text-base sm:text-lg ml-1">/month</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Basic keyword research</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">On-page SEO</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Google Business Profile optimization</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Basic social media management</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">8 social media posts/month</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Monthly performance report</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">1 monthly strategy call</span></li>
                </ul>
                <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 italic">* Ad spend not included</div>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-2.5 sm:py-3 rounded-full border-2 border-[#193d84] text-black font-semibold hover:bg-[#193d84] hover:text-white transition-all duration-300 text-sm sm:text-base">
                    GET STARTED
                  </button>
                </Link>
              </div>
            </div>

            {/* PRO MARKETING */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#193d84]/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col relative">
              <div className="absolute top-0 inset-x-0 bg-[#193d84] text-white text-center py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Best Value
              </div>
              <div className="p-6 sm:p-8 pt-10 sm:pt-12 flex-1 flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#193d84]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🚀</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Pro Marketing</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">For growing brands</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-black">$249</span>
                  <span className="text-gray-500 text-base sm:text-lg ml-1">/month</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Advanced keyword research</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Complete on-page SEO</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Local SEO</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Social media management</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">12-16 posts/month</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Content writing</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Monthly analytics report</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">2 monthly strategy calls</span></li>
                </ul>
                <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 italic">* Ad spend not included</div>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-2.5 sm:py-3 rounded-full bg-[#193d84] text-white font-semibold hover:bg-[#0b1220] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group text-sm sm:text-base">
                    LEARN MORE 
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* ENTERPRISE MARKETING */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#193d84]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🏆</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Enterprise Marketing</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">For established businesses</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-black">$499</span>
                  <span className="text-gray-500 text-base sm:text-lg ml-1">+</span>
                  <span className="text-gray-500 text-xs sm:text-sm block mt-1">final price depends on scope</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Full-service digital marketing</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Advanced SEO strategy</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Social media management (20+ posts/month)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">PPC / Google Ads management</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Meta Ads management</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Dedicated account management</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#193d84] mt-0.5">✓</span><span className="text-gray-600">Weekly strategy meetings</span></li>
                </ul>
                <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 italic">* Ad spend not included</div>
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
              Need a custom plan? <Link href="/contact" className="text-[#193d84] font-semibold hover:underline">Book a consultation →</Link>
            </p>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default DigitalMarketing