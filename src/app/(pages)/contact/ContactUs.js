'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Users, Award, Globe, Shield, Code, Palette, Rocket, User, LogOut, Mail, Phone, MapPin } from 'lucide-react'

const ContactUs = () => {
  // Active User State for Auth Check
  const [activeUser, setActiveUser] = useState(null)

  const checkUserSession = () => {
    const sessionUser = localStorage.getItem('nexasphere_active_user') || sessionStorage.getItem('nexasphere_active_user')
    if (sessionUser) {
      try {
        setActiveUser(JSON.parse(sessionUser))
      } catch (e) {
        console.error("Error parsing active user session:", e)
        setActiveUser(null)
      }
    } else {
      setActiveUser(null)
    }
  }

  useEffect(() => {
    checkUserSession()

    window.addEventListener('authChange', checkUserSession)
    window.addEventListener('storage', checkUserSession)

    return () => {
      window.removeEventListener('authChange', checkUserSession)
      window.removeEventListener('storage', checkUserSession)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('nexasphere_active_user')
    sessionStorage.removeItem('nexasphere_active_user')
    setActiveUser(null)
    window.dispatchEvent(new Event('authChange'))
  }

  // Project Form States
  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    service: 'Category',
    budget: '',
    details: ''
  })

  const [isSubmittingProject, setIsSubmittingProject] = useState(false)

  const handleProjectChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value })
  }

  const handleProjectSubmit = async (e) => {
    e.preventDefault()
    setIsSubmittingProject(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/nexaspheretech1@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Form_Type: "New Project Inquiry",
          Client_Name: projectForm.name,
          Client_Email: projectForm.email,
          Requested_Service: projectForm.service,
          Estimated_Budget: projectForm.budget,
          Project_Details: projectForm.details
        })
      })

      if (response.ok) {
        alert("Project Details submitted successfully! We'll get back to you soon.")
        setProjectForm({ name: '', email: '', service: 'Category', budget: '', details: '' })
      } else {
        alert("Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Network Error! Please try again.")
    } finally {
      setIsSubmittingProject(false)
    }
  }

  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-24 px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-20 overflow-hidden">
      <div className="max-w-full lg:max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-sm uppercase font-bold tracking-wider text-[#193d84]">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-2 sm:px-0 text-sm sm:text-base mt-4">
            Team NexaSphere Tech is just a click away from you. Connect with us to get
            solutions to your business growth, market existence, and sustainability.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-start">

          {/* LEFT SIDE: PROJECT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-[#193d84]">
              Share your demands and queries with us
            </h3>

            <form onSubmit={handleProjectSubmit} className="space-y-3 sm:space-y-4">
              <input 
                type="text" 
                name="name"
                value={projectForm.name}
                onChange={handleProjectChange}
                placeholder="Name" 
                required
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-[#193d84] focus:border-[#193d84] focus:ring-1 focus:ring-[#193d84] transition-all duration-300 text-sm sm:text-base" 
              />
              
              <input 
                type="email"
                name="email"
                value={projectForm.email}
                onChange={handleProjectChange}
                placeholder="Email Address" 
                required
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-[#193d84] focus:border-[#193d84] focus:ring-1 focus:ring-[#193d84] transition-all duration-300 text-sm sm:text-base" 
              />

              <select 
                name="service"
                value={projectForm.service}
                onChange={handleProjectChange}
                required
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-[#193d84] focus:border-[#193d84] focus:ring-1 focus:ring-[#193d84] transition-all duration-300 text-gray-500 text-sm sm:text-base appearance-none bg-white pr-12 sm:pr-14 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE5M2Q4NCI+PHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz48L3N2Zz4=')] bg-no-repeat bg-[center_right_1rem] bg-[length:30px]"
              >
                <option value="Category" disabled hidden>Select Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Video Editing">Video Editing</option>
              </select>

              <input 
                type="text" 
                name="budget"
                value={projectForm.budget}
                onChange={handleProjectChange}
                placeholder="Approx Budget" 
                className="w-full border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-[#193d84] focus:border-[#193d84] focus:ring-1 focus:ring-[#193d84] transition-all duration-300 text-sm sm:text-base" 
              />

              <textarea 
                name="details"
                value={projectForm.details}
                onChange={handleProjectChange}
                placeholder="Project Details" 
                rows={4} 
                required
                className="w-full border border-gray-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none hover:border-[#193d84] focus:border-[#193d84] focus:ring-1 focus:ring-[#193d84] transition-all duration-300 resize-none text-sm sm:text-base"
              ></textarea>

              <button 
                type="submit"
                disabled={isSubmittingProject}
                className="bg-[#193d84] hover:bg-[#0b1220] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 w-full text-sm sm:text-base font-semibold shadow-md hover:shadow-xl disabled:bg-gray-400"
              >
                {isSubmittingProject ? "Sending..." : "Submit Project"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE: AUTH OR USER PROFILE & IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            {activeUser ? (
              <div className="mb-6 sm:mb-8 flex items-center justify-between bg-[#f0f4ff] border border-[#193d84]/20 px-4 py-3 rounded-full shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-[#193d84]/10 px-3 py-1 rounded-full text-[#193d84] font-semibold text-xs sm:text-sm">
                    <User size={14} className="text-[#193d84]" />
                    <span className="truncate max-w-[180px] sm:max-w-[220px]">{activeUser.email}</span>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  title="Logout"
                  className="flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800 transition duration-200 px-3 py-1 bg-white border border-red-200 rounded-full"
                >
                  <LogOut size={14} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-[#193d84]">
                  Join or Access Your Account
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Link 
                    href="/signup" 
                    className="bg-[#193d84] hover:bg-[#0b1220] text-white text-center py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-xl hover:scale-105"
                  >
                    Sign Up
                  </Link>

                  <Link 
                    href="/login" 
                    className="border-2 border-[#193d84] text-[#193d84] text-center py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#193d84] hover:text-white transition-all duration-300 text-sm sm:text-base hover:scale-105"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}

            {/* BIGGER LOGO - Perfect Size */}
            <div className="w-full flex justify-center items-center">
              <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] -mt-4 sm:-mt-6 lg:-mt-8">
                <Image
                  src="/images/Nexa-Logo-Photoroom.png"
                  alt="NexaSphere Tech"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactUs