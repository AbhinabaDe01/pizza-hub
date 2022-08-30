import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Base({pizza, addBase}) {

    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base"
    initial={{x: '100vw'}}
    animate={{x:0}}
    transition={{type: 'spring', stiffness: 100}}
    exit={{  x: '-100vw' ,
    transition: ''
    }}
    >
        <div>
        <h2>Choose a base:</h2>
        <ul>
            {bases.map((base) => {
                let spanClass = pizza.base === base ? 'active' : 'no'
                return (
                    <motion.li key={base} onClick={() => addBase(base)}
                    whileHover={{
                        scale: 1.2, color: 'white'
                    }}
                    >
                        <span className={spanClass}>{base}</span>
                    </motion.li>
                )
            })}
        </ul>
        </div>
        

        {pizza.base && 
        <div className="next">
            <Link to='/toppings'>
                <motion.button
                initial={{x:'-100vw'}}
                animate={{x: 0}}
                transition={{type: 'spring', stiffness: 120}}
                    whileHover={{scale: 1.2,
                    boxShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px",
                    textShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px"
                    }}
                >Next</motion.button>
            </Link>
        </div>}
    </motion.div>
  )
}

export default Base