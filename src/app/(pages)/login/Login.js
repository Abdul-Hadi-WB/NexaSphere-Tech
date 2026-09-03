'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react'

const Login = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [showPassword, setShowPassword] = useState(false)
  const [alertMessage, setAlertMessage] = useState({ type: '', text: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    // Get users from NexaSphere storage
    const savedUsers = localStorage.getItem('nexasphere_users')
    if (savedUsers) {
      try {
        setRegisteredUsers(JSON.parse(savedUsers))
      } catch (error) {
        console.error("Error parsing users from LocalStorage:", error)
      }
    } else {
      // Seed default demo user if none exists
      const initialUsers = [
        {
          fullName: 'Demo Client',
          email: 'demo@nexaspheretech.com',
          password: 'password123',
          role: 'Client',
          createdAt: new Date().toISOString()
        }
      ]
      localStorage.setItem('nexasphere_users', JSON.stringify(initialUsers))
      setRegisteredUsers(initialUsers)
    }

    // Check if already logged in - redirect to home
    const activeSession = localStorage.getItem('nexasphere_active_user') || sessionStorage.getItem('nexasphere_active_user')
    if (activeSession) {
      router.push('/')
    }
  }, [router])

  const showAlert = (type, text) => {
    setAlertMessage({ type, text })
    setTimeout(() => {
      setAlertMessage({ type: '', text: '' })
    }, 3000)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    const inputEmail = formData.email.trim().toLowerCase()
    const inputPassword = formData.password

    // 1. Verify if email exists in frontend stored users
    const foundUser = registeredUsers.find(
      (user) => user.email.toLowerCase() === inputEmail
    )

    if (!foundUser) {
      showAlert('error', '❌ This email is not registered! Please sign up first.')
      setIsLoading(false)
      return
    }

    // 2. Verify password match
    if (foundUser.password !== inputPassword) {
      showAlert('error', '❌ Incorrect password! Please try again.')
      setIsLoading(false)
      return
    }

    // 3. Successful Login - Save session
    if (formData.rememberMe) {
      localStorage.setItem('nexasphere_active_user', JSON.stringify(foundUser))
    } else {
      sessionStorage.setItem('nexasphere_active_user', JSON.stringify(foundUser))
    }

    // Dispatch auth change event for Navbar
    window.dispatchEvent(new Event('authChange'))

    setIsLoading(false)
    setIsRedirecting(true)

    // ✅ 1 second delay on the form, then redirect to home
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl rounded-3xl border border-gray-100 sm:px-10 relative overflow-hidden">
          
          {/* Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl"></div>

          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500">
              Sign in to your NexaSphere Tech account
            </p>
          </div>

          {/* Alert Banner - Only for Errors */}
          {alertMessage.text && alertMessage.type === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-2xl text-sm font-medium transition-all duration-300 text-center bg-red-50 text-red-700 border border-red-200"
            >
              {alertMessage.text}
            </motion.div>
          )}

          {/* Success Redirecting Message */}
          {isRedirecting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-2xl text-sm font-medium text-center bg-green-50 text-green-700 border border-green-200"
            >
              ✅ Login successful! Redirecting...
            </motion.div>
          )}

          {/* Login Form - Always visible, no logged-in view */}
          <form onSubmit={handleLoginSubmit} className="space-y-4 relative z-10">
            
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  disabled={isRedirecting}
                  className="w-full border border-gray-300 rounded-full pl-12 pr-5 py-3 outline-none bg-white hover:border-[#193d84] focus:border-[#193d84] focus:ring-2 focus:ring-[#193d84]/20 text-sm transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 ml-1">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  disabled={isRedirecting}
                  className="w-full border border-gray-300 rounded-full pl-12 pr-14 py-3 outline-none bg-white hover:border-[#193d84] focus:border-[#193d84] focus:ring-2 focus:ring-[#193d84]/20 text-sm transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 hover:text-[#193d84] transition disabled:opacity-50"
                  disabled={isRedirecting}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <label className="flex items-center space-x-2 text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  disabled={isRedirecting}
                  className="rounded text-[#193d84] focus:ring-[#193d84] border-gray-300 disabled:cursor-not-allowed"
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => showAlert('error', '📧 Password reset instructions sent to your email.')}
                className="text-[#193d84] font-semibold hover:underline disabled:opacity-50"
                disabled={isRedirecting}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isRedirecting}
              className="w-full bg-[#193d84] hover:bg-[#0b1220] text-white py-3.5 rounded-full font-semibold transition-all duration-300 text-sm shadow-md hover:shadow-xl hover:scale-105 mt-4 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin"></span> Verifying...
                </>
              ) : isRedirecting ? (
                <>
                  <span className="animate-spin">\</span> Redirecting...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Log In
                </>
              )}
            </button>

            {/* Sign Up Link */}
            <div className="mt-8 text-center border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/signup" className="text-[#193d84] font-bold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Login