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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Typewriter States
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ['Digital Future', 'Smart Solutions', 'Brand Identity', 'Online Growth']

  const slides = [
    { id: 1, src: '/images/slide1.jpg', alt: 'Slide 1' },
    { id: 2, src: '/images/slide2.jpg', alt: 'Slide 2' },
    { id: 3, src: '/images/slide3.jpg', alt: 'Slide 3' },
  ]

  // Testimonials Data with Images
  const testimonials = [
    {
      id: 1,
      name: 'John Anderson',
      company: 'Anderson Enterprises',
      image: '/images/client1.jpg',
      text: 'NexaSphere Tech completely revolutionized our digital strategy. Their team built us a cutting-edge website that perfectly represents our brand.'
    },
    {
      id: 2,
      name: 'Dan Marks',
      company: 'DP Wealth Advisory',
      image: '/images/client2.jpg',
      text: 'NexaSphere Tech has been instrumental in growing our digital footprint. Their team understood our unique needs and delivered excellence.'
    },
    {
      id: 3,
      name: 'Kevin LaPorte',
      company: 'LaPorte Media',
      image: '/images/client3.jpg',
      text: 'Incredible experience working with NexaSphere Tech. Their technical skills and marketing strategies exceeded our expectations.'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      image: '/images/client4.jpg',
      text: 'The team at NexaSphere Tech delivered beyond our expectations. Our new website has increased conversions by 40% in just 3 months.'
    },
    {
      id: 5,
      name: 'Michael Chen',
      company: 'Innovate Solutions',
      image: '/images/client5.jpg',
      text: 'Working with NexaSphere Tech was a game-changer for our business. Their digital marketing strategies helped us reach new markets and grow our revenue significantly.'
    },
    {
      id: 6,
      name: 'Emily Rodriguez',
      company: 'Creative Studios',
      image: '/images/client6.jpg',
      text: 'The graphic design work from NexaSphere Tech is outstanding. They captured our brand perfectly and delivered stunning visuals that our customers love.'
    }
  ]

  // Auto-slide for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Auto-slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      const track = document.querySelector('.testimonial-track');
      if (track) {
        const scrollAmount = 380;
        const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
        if (track.scrollLeft + scrollAmount >= maxScroll) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
      }, 50)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
      }, 100)
    }

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words])

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* ========================================================= */}
      {/* HERO SECTION - WITH landingpage-pic.png */}
      {/* ========================================================= */}
      <section className="w-full min-h-screen flex items-center bg-white relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col space-y-4"
            >
              <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">
                Digital & Technology Agency
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Shaping Smarter
                <br />
                <span className="text-[#193d84]">
                  {displayText}
                  <span className="animate-pulse text-[#193d84]">|</span>
                </span>
              </h1>

              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                NexaSphere Tech is a digital and creative technology agency providing professional 
                <span className="font-semibold text-black"> Web Development</span>, 
                <span className="font-semibold text-black"> Graphic Design</span>, 
                <span className="font-semibold text-black"> Digital Marketing</span>, and 
                <span className="font-semibold text-black"> Video Editing</span> services. 
                We help businesses build a strong digital presence through modern websites, 
                creative branding, engaging content, and effective marketing strategies.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/contact">
                  <button className="bg-[#193d84] hover:bg-[#0b1220] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2">
                    Get in touch
                    <ArrowRight size={16} />
                  </button>
                </Link>
                <Link href="">
                  <button className="text-black hover:text-[#193d84] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2">
                    <Play size={16} className="text-[#193d84]" />
                    Explore Solutions
                  </button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-[#193d84]/10 text-[#193d84] px-3 py-1 rounded-full font-medium">Web Development</span>
                <span className="text-xs bg-[#193d84]/10 text-[#193d84] px-3 py-1 rounded-full font-medium">Graphic Design</span>
                <span className="text-xs bg-[#193d84]/10 text-[#193d84] px-3 py-1 rounded-full font-medium">Digital Marketing</span>
                <span className="text-xs bg-[#193d84]/10 text-[#193d84] px-3 py-1 rounded-full font-medium">Video Editing</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-2xl aspect-square">
                <Image
                  src="/images/landingpage-pic.png"
                  alt="NexaSphere Tech Hero"
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
      {/* STATS SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Delivered', icon: Briefcase },
              { number: '98%', label: 'Client Satisfaction', icon: Award },
              { number: '24/7', label: 'Support Available', icon: Clock },
              { number: '15+', label: 'Expert Team Members', icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={32} className="text-[#193d84] mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-black">{stat.number}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES SECTION - Professional Hover Effects */}
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
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-gray-500 mt-4">
              We provide end-to-end digital services to help your business thrive in the modern landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                image: '/images/Development.jpeg', 
                title: 'Web Development', 
                desc: 'Custom websites and applications built with modern frameworks.',
                link: '/web-development'
              },
              { 
                image: '/images/Graphic.jpeg', 
                title: 'Graphic Design', 
                desc: 'Stunning visuals and brand identities that capture attention.',
                link: 'graphic-designing'
              },
              { 
                image: '/images/Marketing.jpeg', 
                title: 'Digital Marketing', 
                desc: 'Strategic campaigns that drive traffic and generate leads.',
                link: '/digital-marketing'
              },
              { 
                image: '/images/editing.png', 
                title: 'Video Editing', 
                desc: 'Professional video content that tells your brand story.',
                link: '/video-editing'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Link href={service.link}>
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#193d84]/0 via-transparent to-transparent transition-all duration-500 group-hover:from-[#193d84]/10"></div>
                  </div>
                  
                  <div className="p-6 transition-all duration-300 group-hover:bg-[#193d84]/[0.03]">
                    <h3 className="text-xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-[#193d84]">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#193d84] transition-all duration-300 group-hover:gap-3 group-hover:text-[#0b1220]">
                      Learn More
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT SECTION - Bigger Transparent Image */}
      {/* ========================================================= */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">About Us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
                Powering Digital Transformation
              </h2>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                NexaSphere Tech is a digital and creative technology agency providing professional 
                Web Development, Graphic Design, Digital Marketing, Social Media Management, and 
                Video Editing services.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
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
              <Link href="/about">
                <button className="mt-6 bg-[#193d84] hover:bg-[#0b1220] text-white text-base font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
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
     {/* WHY CHOOSE US SECTION - With Sticker (Left Side) */}
     {/* ========================================================= */}
     <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        
        {/* Sticker - Left Side Top Corner (Bigger) */}
        <div className="absolute -top-6 left-0 z-20 w-28 sm:w-32 md:w-40 lg:w-48">
          <Image
            src="/images/sidestickers.png"
            alt="NexaSphere Tech"
            width={160}
            height={160}
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
          <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
            Why Businesses Trust <span className="text-[#193d84]">NexaSphere Tech</span>
          </h2>
          <p className="text-lg text-gray-500 mt-4">
            We deliver cutting-edge digital solutions through modern web development, creative design, and data-driven marketing strategies.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Code,
              title: "Expert Web Developers",
              description: "Our team builds high-performance, custom-coded Next.js applications with modern UI/UX design that are fully responsive and scalable.",
              link: "/web-development"
            },
            {
              icon: Palette,
              title: "Creative Design Studio",
              description: "From branding to graphic design, we create visually stunning assets that capture your brand identity and engage your audience.",
              link: "/graphic-designing"
            },
            {
              icon: Rocket,
              title: "Performance Optimized",
              description: "We deliver lightning-fast websites and applications optimized for speed, SEO, and user experience to maximize your digital impact.",
              link: "/web-development"
            },
            {
              icon: Shield,
              title: "Secure & Reliable",
              description: "All our solutions are built with security best practices and deployed on Vercel for enterprise-grade reliability and global scale.",
              link: "/web-development"
            },
            {
              icon: Zap,
              title: "Modern Tech Stack",
              description: "Leveraging Next.js, React, Tailwind CSS, and the latest technologies to build future-proof digital solutions that drive growth.",
              link: "/web-development"
            },
            {
              icon: Globe,
              title: "Global Digital Presence",
              description: "We help businesses establish a powerful online presence with strategic marketing, SEO, and content that reaches global audiences.",
              link: "/digital-marketing"
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl overflow-hidden cursor-pointer border border-gray-100/50"
            >
              <Link href={item.link}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#193d84]/5 via-[#2a5a9e]/5 to-transparent"></div>
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-700 group-hover:scale-150 bg-[#193d84]"></div>
                <div className="absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-[#193d84] to-[#2a5a9e]"></div>

                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br from-[#193d84]/10 to-[#2a5a9e]/10 text-[#193d84] group-hover:bg-gradient-to-br group-hover:from-[#193d84] group-hover:to-[#2a5a9e] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#193d84]/25">
                    <item.icon size={26} className="transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <h4 className="relative z-10 mb-2 text-lg font-bold text-black transition-all duration-300 group-hover:text-[#193d84]">
                  {item.title}
                </h4>
                <p className="relative z-10 text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                  {item.description}
                </p>

                <div className="relative z-10 mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#193d84] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3">
                  <span>Learn More</span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-[#193d84] to-[#2a5a9e]"></div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center overflow-hidden bg-[#193d84] hover:bg-[#0b1220] text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/40"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            <span className="relative z-10 flex items-center">
              Explore Our Services
              <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12">→</span>
            </span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute inset-0 rounded-full animate-ping bg-[#193d84]/30"></span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>

      {/* ========================================================= */}
      {/* TESTIMONIALS SECTION - SLIDER WITH DRAG (Bottom Space) */}
      {/* ========================================================= */}
      <section className="w-full bg-[#f0f4ff] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Client Testimonials</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-500 mt-4">
              Hear from businesses that have transformed their digital presence with NexaSphere Tech.
            </p>
          </motion.div>

          {/* Slider Container */}
          <div className="relative overflow-hidden pb-8">
            
            {/* Slider Track with Drag Support */}
            <motion.div 
              className="testimonial-track flex gap-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -2000, right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
              whileTap={{ cursor: "grabbing" }}
            >
              
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-[300px] md:min-w-[350px] lg:min-w-[380px] bg-white rounded-2xl p-8 shadow-lg border border-gray-100 select-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={testimonial.image} 
                        className="w-full h-full object-cover" 
                        alt={testimonial.name}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black">{testimonial.name}</h4>
                      <p className="text-sm font-semibold text-[#193d84]">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="text-4xl text-[#193d84]/20 absolute -top-2 -left-2">"</span>
                    <p className="text-gray-600 text-base leading-relaxed pl-6 relative z-10">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#193d84] fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}

            </motion.div>

          </div>

          {/* Drag Indicator - Bottom Center */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              👆 Drag or slide to move
            </p>
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
            <Link href="">
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

export default Home