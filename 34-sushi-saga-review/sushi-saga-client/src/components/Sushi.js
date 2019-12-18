import React from 'react'

const Sushi = ({ sushi, handleClick, eaten }) => {
  return (
    <div className='sushi'>
      <div className='plate' onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */

        eaten ? null : (
          <img
            src='http://clipart-library.com/images_k/sushi-transparent/sushi-transparent-3.png'
            width='100%'
          />
        )}
      </div>
      <h4 className='sushi-details'>
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
