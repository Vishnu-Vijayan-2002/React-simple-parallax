import React from 'react'
import { Carousel } from 'react-bootstrap'
function Slidde({slideData}) {
  return (
    <div>
        
        <Carousel interval={1000}>
                { slideData.map((item)=>(
                <Carousel.Item>
                  <img src={item.images} alt="" />
                        
                </Carousel.Item>
          
        ))
            }
            </Carousel>
    </div>
  )
}

export default Slidde
