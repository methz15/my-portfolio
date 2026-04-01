import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Work = ({ isDarkMode }) => {

  const [activeProject, setActiveProject] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  const projectsPerPage = 4
  const totalPages = Math.ceil(workData.length / projectsPerPage)

  const visibleProjects = workData.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  )

  const handleClick = (index) => {
    setActiveProject(activeProject === index ? null : index)
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
      setActiveProject(null)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      setActiveProject(null)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >

      {/* Section Titles */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
         Welcome to my portfolio! Explore a collection of projects showcasing my expertise in full-stack development
      </motion.p>


      {/* Project Grid with Side Navigation */}
      <div className="relative my-10">

        {/* LEFT BUTTON */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`absolute left-[-60px] top-1/2 -translate-y-1/2 
          w-10 h-10 flex items-center justify-center rounded-full border
          transition-all duration-300
          ${currentPage === 0
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700'}
          border-gray-400 dark:border-gray-600
          bg-white dark:bg-gray-800`}
        >
          <span className="text-xl font-bold dark:text-white">&lt;</span>
        </button>


        {/* GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'
        >
          {visibleProjects.map((project, index) => {
            const realIndex = currentPage * projectsPerPage + index
            return (
              <motion.div
                key={realIndex}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleClick(realIndex)}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className='bg-white dark:bg-gray-900 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                  <div>
                    <h2 className='font-semibold dark:text-white'>
                      {project.title}
                    </h2>
                    <p className='text-sm text-gray-700 dark:text-gray-400'>
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>


        {/* RIGHT BUTTON */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`absolute right-[-60px] top-1/2 -translate-y-1/2 
          w-10 h-10 flex items-center justify-center rounded-full border
          transition-all duration-300
          ${currentPage === totalPages - 1
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700'}
          border-gray-400 dark:border-gray-600
          bg-white dark:bg-gray-800`}
        >
          <span className="text-xl font-bold dark:text-white">&gt;</span>
        </button>

      </div>


      {/* Expandable Project Details */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className='overflow-hidden bg-white dark:bg-gray-800 rounded-lg px-8 py-6 mt-6 shadow-lg'
          >
            <h3 className='text-2xl font-semibold mb-3 dark:text-white'>
              {workData[activeProject].title}
            </h3>

            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              {workData[activeProject].longDescription}
            </p>

            {/* Technologies */}
            <div className='flex flex-wrap gap-3 mb-6'>
              {workData[activeProject].technologies.map((tech, i) => (
                <span
                  key={i}
                  className='px-3 py-1 text-sm border rounded-full dark:border-gray-500 dark:text-white'
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={workData[activeProject].github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-5 py-2 border border-gray-700 dark:border-white rounded-full 
              hover:bg-gray-100 dark:hover:bg-gray-700 transition'
            >
              View on GitHub
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                alt='github link'
                className='w-4'
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default Work