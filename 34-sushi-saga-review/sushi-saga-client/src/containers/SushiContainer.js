import React, { Fragment } from 'react'
import Button from '../components/Button'
import Sushi from '../components/Sushi'

const SushiContainer = ({
  sushis,
  eatSushi,
  hasSushiBeenEaten,
  getMoreSushis
}) => {
  return (
    <Fragment>
      <div className='belt'>
        {sushis.map(sushi => (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            handleClick={() => eatSushi(sushi)}
            eaten={hasSushiBeenEaten(sushi)}
          />
        ))}
        <Button onClick={getMoreSushis}>
          More sushis! <h1>LOL</h1>
        </Button>
      </div>
    </Fragment>
  )
}

export default SushiContainer
