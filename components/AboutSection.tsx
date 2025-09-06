'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Shield,
  Award,
  Users,
  Briefcase,
  GraduationCap
} from 'lucide-react'

const skills = [
  { name: 'Cloud Infrastructure', icon: Cloud, technologies: ['AWS', 'GCP', 'Kubernetes', 'Docker'] },
  { name: 'Programming Languages', icon: Code2, technologies: ['Python', 'Golang', 'JavaScript', 'Ruby', 'Bash', 'C'] },
  { name: 'DevOps & CI/CD', icon: GitBranch, technologies: ['GitHub Workflows', 'Ansible', 'CloudFormation'] },
  { name: 'Observability', icon: Shield, technologies: ['CloudWatch', 'ELK Stack', 'Datadog'] },
]

const experience = [
  {
    company: 'Coinbase Inc.',
    position: 'Software Engineer',
    duration: 'Mar 2025 - Present',
    description: 'Streamlining all software build-to-release CI/CD pipelines at Coinbase through internally developed tools and automation, focusing on highly scalable and secure deployments in EC2, Kubernetes, and Lambda.',
    achievements: ['Implementing SPIFFE/SPIRE authentication across 1M+ daily API requests', 'Revamping self-hosted Artifactory as source of truth for all artifacts', 'Automating engineering workflows with AI assisted tools (Cursor, Claude, MCPs)']
  },
  {
    company: 'Yahoo Inc.',
    position: 'Software Engineer',
    duration: 'Dec 2021 - Mar 2025',
    description: 'Spearheaded the migration of Location APIs for Yahoo Mail, Fantasy, and Weather apps, transitioning from on-prem VMs to AWS and GCP (EKS GKE), utilizing Kubernetes and Docker containerization tools.',
    achievements: ['Optimized Kubernetes orchestration to handle 250K RPS, cutting response latency by 20%', 'Refined CI/CD pipelines, slashing deployment times by 50%', 'Realized $400,000 in annual savings by migrating to cloud-native services']
  }
]

const education = [
  {
    degree: 'B.S. Computer Science (Human Computer Interaction and Research)',
    school: 'The University of Chicago',
    year: '2021',
    description: 'B.A. Economics (Data Science)'
  },
  {
    degree: 'High School Diploma',
    school: 'Stuyvesant High School New York City',
    year: '2017',
    description: 'Specialized Mathematics and Science Program'
  }
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4"
            >
              About <span className="text-primary-500">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
            >
              Passionate developer with a love for creating innovative solutions and beautiful user experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-secondary-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                  My Story
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-4">
                  Hey there! I'm David, a Software Engineer who loves working with cloud infrastructure 
                  and making systems run smoother. I got into this field because I enjoy solving 
                  complex problems and building things that actually work at scale.
                </p>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mb-4">
                  Right now I'm at Coinbase, where I spend my days making our build and deployment 
                  processes faster and more secure. I've helped migrate big systems from old servers 
                  to the cloud, and it's pretty satisfying to see everything run better afterward.
                </p>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  I'm AWS certified and always excited about new tools that can make developers' 
                  lives easier. When I'm not working, you'll find me tinkering with side projects 
                  or learning about the latest tech trends.
                </p>
              </div>

            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-secondary-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
                  Technical Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5 text-primary-500" />
                          <span className="text-secondary-900 dark:text-white font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-8 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="flex-1 bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-secondary-900 dark:text-white">
                        {job.position}
                      </h4>
                      <span className="text-primary-500 font-medium">{job.duration}</span>
                    </div>
                    <h5 className="text-lg font-medium text-primary-500 mb-3">{job.company}</h5>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                      {job.description}
                    </p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                          <div className="w-2 h-2 bg-primary-500 rounded-full" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-4 h-4 bg-primary-500 rounded-full flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
