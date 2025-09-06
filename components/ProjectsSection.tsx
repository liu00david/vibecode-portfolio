'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ExternalLink, 
  Github, 
  X,
  Code2,
  Smartphone,
  Globe,
  Database,
  Zap,
  Shield,
  Users
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Korelearn',
    description: 'A Korean learning app I\'m building to help beginners actually learn useful Korean, not just random phrases.',
    longDescription: 'I\'m working on a Korean learning app that focuses on teaching real, practical Korean that people actually use. Instead of memorizing random phrases, users learn the alphabet properly and practice with conversations they\'d have while traveling or ordering food. The goal is to make something better than Duolingo by focusing on what really matters.',
    image: '/api/placeholder/600/400',
    technologies: ['Figma', 'AWS Firebase', 'AI Integration', 'Mobile Development'],
    features: [
      'Alphabet comprehension and dictation',
      'Real and useful dialogues',
      'Topic-based learning (travel, restaurant)',
      'AI-powered user-unique learning paths',
      'Better than Duolingo experience',
      'Mobile-first design'
    ],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Mobile App',
    status: 'In Development',
    icon: Smartphone
  },
  {
    id: 2,
    title: 'Valorant Autoplay',
    description: 'Built automation tools for a popular game to help players level up more efficiently.',
    longDescription: 'I created some automation tools for a popular video game that help players gain experience points without having to grind manually. The tools include progress tracking, performance metrics, and visual overlays so users can see how well everything is working.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Game Automation', 'Performance Metrics', 'Visual Overlays'],
    features: [
      'Automated gameplay',
      'Progress tracking',
      'Performance metrics',
      'Dynamic visual overlays',
      'Experience point accumulation',
      'User-friendly interface'
    ],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Automation',
    status: 'Completed',
    icon: Zap
  }
]

const categories = ['All', 'Mobile App', 'Automation']

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4"
            >
              My <span className="text-primary-500">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
            >
              Here are a couple of projects I've been working on in my spare time.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="h-16 w-16 text-primary-500" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-primary-500">
                            {project.category}
                          </span>
                          <div className="flex space-x-2">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 hover:bg-primary-100 dark:hover:bg-primary-900 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 transition-colors duration-200"
                            >
                              <Github className="h-4 w-4" />
                            </motion.a>
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 hover:bg-primary-100 dark:hover:bg-primary-900 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 transition-colors duration-200"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.a>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-200">
                          {project.title}
                        </h3>

                        <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      {selectedProject && <selectedProject.icon className="h-6 w-6 text-primary-500" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        {selectedProject?.title}
                      </h3>
                      <p className="text-primary-500 font-medium">{selectedProject?.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors duration-200"
                  >
                    <X className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                  </button>
                </div>

                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {selectedProject && <selectedProject.icon className="h-24 w-24 text-primary-500" />}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                      About This Project
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {selectedProject?.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject?.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full" />
                          <span className="text-secondary-600 dark:text-secondary-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <motion.a
                      href={selectedProject?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-secondary-900 dark:bg-white text-white dark:text-secondary-900 rounded-lg font-semibold hover:bg-secondary-800 dark:hover:bg-secondary-100 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject?.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
