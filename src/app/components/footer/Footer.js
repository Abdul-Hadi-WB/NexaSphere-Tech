'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Footer = () => {
  // Social media configuration with original brand colors
  const socialLinks = [
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/NexaSphereTech/",
      bgColor: "bg-[#1877F2]",
      hoverBg: "hover:bg-[#1877F2]",
      label: "Facebook"
    },
    {
      Icon: FaTwitter,
      href: "https://twitter.com/NexaSphereTech",
      bgColor: "bg-[#1DA1F2]",
      hoverBg: "hover:bg-[#1DA1F2]",
      label: "Twitter"
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/NexaSphereTech/",
      bgColor: "bg-[#E1306C]",
      hoverBg: "hover:bg-[#E1306C]",
      label: "Instagram"
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/company/NexaSphereTech",
      bgColor: "bg-[#0077B5]",
      hoverBg: "hover:bg-[#0077B5]",
      label: "LinkedIn"
    }
  ]

  // Quick Links with their correct routes
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ]

  // Services Links with their correct routes
  const serviceLinks = [
    { name: 'Web Development', href: '/web-development' },
    { name: 'Digital Marketing', href: '/digital-marketing' },
    { name: 'Video Editing', href: '/video-editing' },
    { name: 'Graphic Designing', href: '/graphic-designing' }
  ]

  return (
    <footer className="bg-[#193d84] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/NexaSphereTech-Logo.png"
            alt="NexaSphere Tech Logo"
            width={200}
            height={90}
            className="object-contain"
          />
          <p className="text-white/80 text-sm leading-relaxed">
            NexaSphere Tech provides innovative solutions in Web Development, Digital Marketing, Video Editing, and Graphic Designing. Your success is our mission.
          </p>

          {/* Social Icons - Original Colors Always Visible */}
          <div className="flex items-center gap-3 mt-2">
            {socialLinks.map(({ Icon, href, bgColor, hoverBg, label }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2.5 rounded-full ${bgColor} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${hoverBg} hover:shadow-black/20`}
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-white relative inline-block">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white rounded-full"></span>
          </h3>
          <div className="flex flex-col gap-3 pt-1">
            {quickLinks.map((item, i) => (
              <Link 
                key={i} 
                href={item.href} 
                className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 relative group"
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3 transition-all duration-300"></span>
                <span className="pl-0 group-hover:pl-5 transition-all duration-300">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-white relative inline-block">
            Services
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white rounded-full"></span>
          </h3>
          <div className="flex flex-col gap-3 pt-1">
            {serviceLinks.map((item, i) => (
              <Link 
                key={i} 
                href={item.href} 
                className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 relative group"
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3 transition-all duration-300"></span>
                <span className="pl-0 group-hover:pl-5 transition-all duration-300">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-white relative inline-block">
            Contact
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white rounded-full"></span>
          </h3>
          <div className="flex flex-col gap-3 pt-1">
            <div className="flex items-start gap-3 text-white/70 hover:text-white transition-all duration-300 group">
              <MdEmail size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">info@nexaspheretech.com</span>
            </div>
            
            <div className="flex items-start gap-3 text-white/70 hover:text-white transition-all duration-300 group">
              <MdPhone size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">+92 311 6176345</span>
            </div>
            
            <div className="flex items-start gap-3 text-white/70 hover:text-white transition-all duration-300 group">
              <MdLocationOn size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">Model Town, Lahore, Pakistan</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-3 inline-block px-6 py-2.5 rounded-full bg-white text-[#193d84] font-semibold hover:bg-[#0b1220] hover:text-white transition-all duration-300 shadow-md text-center hover:shadow-lg hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} 
        <span className="font-semibold hover:text-white transition-colors duration-300"> NexaSphere Tech</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer