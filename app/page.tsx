'use client'
import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import Location from '@/components/Location'
import Login from '@/components/Login'

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState('loading')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      setCurrentScreen('location')
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleLoginClick = () => {
    setCurrentScreen('login')
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className="min-h-screen p-8">
     
    </div>
  )
}