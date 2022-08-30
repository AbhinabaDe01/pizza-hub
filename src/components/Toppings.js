import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Toppings({pizza, addToppings, addPizza}) {
    const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className='toppings'
    initial={{x: '100vw'}}
    animate={{x:0}}
    transition={{type: 'spring', stiffness: 100}}
    exit={{  x: '-100vw' ,
    transition: 'easeInOut'
    }}
    >
        <div>
        <h2>Choose toppings:</h2>
        <ul>
            {toppings.map((topping) => {
                let spanClass = pizza.Toppings.includes(topping) ? 'active' : 'no'
                return (
                    <motion.li key={topping} onClick={() => addToppings(topping)}
                    whileHover={{
                        scale: 1.2, color: 'white'
                    }}
                    >
                        <span className={spanClass}>{topping}</span>
                    </motion.li>
                )
            })}
        </ul>
        </div>
        

        <div>
            <Link to='/order'>
                <motion.button
                transition={{type: 'spring', stiffness: 120}}
                whileHover={{scale: 1.2,
                    boxShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px",
                    textShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px"
                    }}
                onClick={() => addPizza(pizza)}
                >Order</motion.button>
            </Link>
        </div>
    </motion.div>
  )
}

export default Toppings