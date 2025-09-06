'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Code, Zap, Shield } from 'lucide-react'

const dynamicTexts = [
  'Software Engineer',
  'Cloud Infrastructure Specialist',
  'Kubernetes Expert',
  'DevOps Engineer',
  'AWS Certified',
  'CI/CD Automation',
]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-200 dark:bg-secondary-700 rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                David
              </span>
            </motion.h1>

            {/* Dynamic text */}
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-16 flex items-center justify-center"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary-700 dark:text-secondary-300">
                {dynamicTexts[currentTextIndex]}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto leading-relaxed"
            >
              I'm a Software Engineer at Coinbase who loves working with cloud infrastructure 
              and making systems run better. I enjoy solving complex problems and building 
              things that actually work at scale.
            </motion.p>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: Code, title: 'Cloud Infrastructure', description: 'AWS, GCP, Kubernetes expertise' },
              { icon: Zap, title: 'CI/CD Automation', description: 'Streamlined build-to-release pipelines' },
              { icon: Shield, title: 'Security & Scalability', description: 'SPIFFE/SPIRE authentication systems' },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm rounded-xl border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-white/20 dark:bg-secondary-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-secondary-800/30 transition-colors duration-200 border border-white/20 dark:border-secondary-700/20"
          >
            <ChevronDown className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
