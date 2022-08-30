import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Home() {
    return (
        <motion.div className='home'
        exit={{  x: '-100vw' }}
        transition= {{ease: 'easeInOut'}}
        >
            <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            >Welcome to pizza hub</motion.h1>
            <Link to='/base'>

            <motion.button 
            initial={{y : '100vh' }}
            animate={{y : 0}}
            transition={{type: 'spring', stiffness: 50}}
            whileHover={{scale: 1.2,
            boxShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px",
            textShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px"
            }}
            >
                Create Pizza
            </motion.button>

            </Link>
        </motion.div>
    )
}

export default Home