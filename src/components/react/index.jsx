import React from 'react'
import { motion } from 'framer-motion'
import './styles.css'
import reactLogo from '../../../src/assets/react.svg'
import viteLogo from '/vite.svg'
export const Reaccionando = () => {


  return (
    <>
    <div className='ReaccionandoContainer'>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    <motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -30, right: 50 }}
  transition={2}
  animate={{rotate: -5 }}
  

>
  <p>Zonama</p>
  </motion.div>
    </div>
  
  </>
  )
}
