import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function Order({pizza, data}) {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >
        {pizza && 
        <div  className="order">
            <h3>You have ordered a <motion.span
            animate={{color: 'yellow'}}
            >{pizza.base}</motion.span> pizza with:</h3>
            <ul>
                {pizza.Toppings.map((topping) => (
                    <motion.li key={topping}
                    whileHover={{
                      scale: 1.2,
                      color : 'yellow'
                    }}
                    >{topping}</motion.li>
                ))}
            </ul>
        </div>}
        <div>
          <h3>Your orders are:</h3>
          <div className='orderss'>
          {data && data.map((item) => (
          <div>

            <div className='order-individual' style={{color: 'white'}}>
              <div>
            {item.base} pizza with toppings:  
              </div>
              <div className='order-individual'>
            {item.Toppings.map((topping) => (<p style={{color: 'yellow'}}><i>{topping}, </i></p>))}
              </div>
            </div>
            
          </div>
          ))}
          </div>
          
        </div>
        <div className='order-btn'>
        <Link to='/'>
          <motion.button
            whileHover={{scale: 1.2,
            boxShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px",
            textShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(255, 255, 255, 0.22) 0px 15px 12px"
            }}
          >Order more</motion.button>
        </Link>
        </div>
        
        
    </motion.div>
  )
}

export default Order