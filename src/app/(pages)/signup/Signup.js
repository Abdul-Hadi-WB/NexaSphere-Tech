'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, User, Mail, Lock, ArrowRight, CheckCircle, XCircle, Shield } from 'lucide-react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Client',
    agreeToTerms: false
  })

  const [showPassword, setShowPassword] = useState(false)
  const [alertMessage, setAlertMessage] = useState({ type: '', text: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const savedUsers = localStorage.getItem('nexasphere_users')
    if (savedUsers) {
      try {
        setRegisteredUsers(JSON.parse(savedUsers))
      } catch (error) {
        console.error("Error reading users from LocalStorage:", error)
      }
    } else {
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
  }, [])

  const showAlert = (type, text) => {
    setAlertMessage({ type, text })
    setTimeout(() => {
      setAlertMessage({ type: '', text: '' })
    }, 5000)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const inputEmail = formData.email.trim().toLowerCase()

    // 1. Validate Password Match
    if (formData.password !== formData.confirmPassword) {
      showAlert('error', '❌ Passwords do not match! Please verify both fields.')
      setIsLoading(false)
      return
    }

    // 2. Validate Password Length
    if (formData.password.length < 6) {
      showAlert('error', '❌ Password must be at least 6 characters long.')
      setIsLoading(false)
      return
    }

    // 3. Validate Terms Agreement
    if (!formData.agreeToTerms) {
      showAlert('error', '❌ You must accept the Terms of Service to create an account.')
      setIsLoading(false)
      return
    }

    // 4. Check if Email is already registered
    const emailExists = registeredUsers.some(
      (user) => user.email.toLowerCase() === inputEmail
    )

    if (emailExists) {
      showAlert('error', `❌ Email "${inputEmail}" is already registered! Please login instead.`)
      setIsLoading(false)
      return
    }

    // 5. Prepare New User Object
    const newUser = {
      id: 'USR-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      fullName: formData.fullName.trim(),
      email: inputEmail,
      password: formData.password,
      role: formData.role,
      createdAt: new Date().toISOString()
    }

    const updatedUsers = [...registeredUsers, newUser]
    setRegisteredUsers(updatedUsers)
    localStorage.setItem('nexasphere_users', JSON.stringify(updatedUsers))

    // ✅ SUCCESS - BUT NOT LOGGED IN
    setIsSuccess(true)
    showAlert(
      'success',
      `✅ Account created successfully! Please login to continue.`
    )

    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'Client',
      agreeToTerms: false
    })

    setIsLoading(false)

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      window.location.href = '/login'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-16 px-4 sm:px-6">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl rounded-3xl border border-gray-100 sm:px-10 relative overflow-hidden">
          
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#193d84]/5 rounded-full blur-3xl"></div>

          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500">
              Join NexaSphere Tech and start your digital journey
            </p>
          </div>

          {/* Alert Banner */}
          {alertMessage.text && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-2xl text-sm font-medium transition-all duration-300 text-center ${
                alertMessage.type === 'error'
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : alertMessage.type === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}
            >
              {alertMessage.text}
            </motion.div>
          )}

          {/* Success Message with Login Button */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 relative z-10"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Account Created! 🎉</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Your account has been created successfully.
                </p>
              </div>
              <Link
                href="/login"
                className="inline-block w-full bg-[#193d84] hover:bg-[#0b1220] text-white py-3.5 rounded-full font-semibold transition-all duration-300 text-sm shadow-md hover:shadow-xl hover:scale-105"
              >
                Login Now →
              </Link>
              <p className="text-xs text-gray-400">
                Redirecting to login page...
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSignUpSubmit} className="space-y-4 relative z-10">

              {/* Account Role Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 ml-1">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'Client' })}
                    className={`py-2.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                      formData.role === 'Client'
                        ? 'border-[#193d84] bg-[#193d84] text-white shadow-sm'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-[#193d84]'
                    }`}
                  >
                    Client
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'Developer' })}
                    className={`py-2.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                      formData.role === 'Developer'
                        ? 'border-[#193d84] bg-[#193d84] text-white shadow-sm'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-[#193d84]'
                    }`}
                  >
                    Developer
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full border border-gray-300 rounded-full pl-12 pr-5 py-3 outline-none bg-white hover:border-[#193d84] focus:border-[#193d84] focus:ring-2 focus:ring-[#193d84]/20 text-sm transition-all duration-200"
                  />
                </div>
              </div>

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
                    placeholder="name@example.com"
                    required
                    className="w-full border border-gray-300 rounded-full pl-12 pr-5 py-3 outline-none bg-white hover:border-[#193d84] focus:border-[#193d84] focus:ring-2 focus:ring-[#193d84]/20 text-sm transition-all duration-200"
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
                    placeholder="Min 6 characters"
                    required
                    className="w-full border border-gray-300 rounded-full pl-12 pr-14 py-3 outline-none bg-white hover:border-[#193d84] focus:border-[#193d84] focus:ring-2 focus:ring-[#193d84]/20 text-sm transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 hover:text-[#193d84] transition"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 ml-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Repeat password"
                    required
                    className="w-full border border-gray-300 rounded-full pl-12 pr-5 py-3 outline-none bg-white hover:border-[#193d84] focus:border-[#193d84] focus:ring-2 focus:ring-[#193d84]/20 text-sm transition-all duration-200"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="pt-1 px-1">
                <label className="flex items-start space-x-2 text-xs text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-0.5 rounded text-[#193d84] focus:ring-[#193d84] border-gray-300"
                  />
                  <span>
                    I agree to the{' '}
                    <button type="button" className="text-[#193d84] font-semibold hover:underline">
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button type="button" className="text-[#193d84] font-semibold hover:underline">
                      Privacy Policy
                    </button>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#193d84] hover:bg-[#0b1220] text-white py-3.5 rounded-full font-semibold transition-all duration-300 text-sm shadow-md hover:shadow-xl hover:scale-105 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin"></span> Creating Account...
                  </>
                ) : (
                  <>
                    <Shield size={18} />
                    Sign Up
                  </>
                )}
              </button>

              {/* Login Link */}
              <div className="mt-8 text-center border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-[#193d84] font-bold hover:underline">
                    Login
                  </Link>
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  )
}

export default SignUp