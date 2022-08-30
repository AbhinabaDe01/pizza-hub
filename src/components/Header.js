import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Header() {
  return (
    <motion.div className='header'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{type: 'spring', duration: 3}}

    >
      <Link to='/'>
        <motion.div
        whileHover={{
          scale: 1.2,
          color: 'yellow'
        }}
        >Pizza Hub</motion.div>
      </Link>
    </motion.div>
  )
}

export default Header