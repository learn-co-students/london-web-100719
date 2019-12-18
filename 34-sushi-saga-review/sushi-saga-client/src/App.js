import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

// Endpoint!
const API = 'http://localhost:3001/sushis'

class App extends Component {
  state = {
    sushis: [],
    money: 100,
    eatenSushis: [],
    sushiIndex: 0
  }

  hasSushiBeenEaten = sushi => this.state.eatenSushis.includes(sushi.id)

  iCantAffordSushi = sushi => this.state.money < sushi.price

  getSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({ sushis }))
  }

  buySushi = sushi => {
    const money = this.state.money - sushi.price
    this.setState({ money })
  }

  eatSushi = sushi => {
    if (this.hasSushiBeenEaten(sushi)) {
      alert('you already ate that sushi!')
      return
    }

    if (this.iCantAffordSushi(sushi)) {
      alert(`you have $${this.state.money} and that costs $${sushi.price}`)
      return
    }

    const eatenSushis = [...this.state.eatenSushis, sushi.id]

    this.buySushi(sushi)
    this.setState({ eatenSushis })
  }

  getMoreSushis = () => {
    const sushiIndex = (this.state.sushiIndex + 4) % this.state.sushis.length
    this.setState({ sushiIndex })
  }

  getCurrentSushis = () => {
    const { sushis, sushiIndex } = this.state
    return sushis.slice(sushiIndex, sushiIndex + 4)
  }

  componentDidMount () {
    this.getSushis()
  }

  render () {
    const { money, eatenSushis } = this.state
    const { eatSushi, hasSushiBeenEaten, getMoreSushis } = this
    const currentSushis = this.getCurrentSushis()
    return (
      <div className='app'>
        <SushiContainer
          sushis={currentSushis}
          eatSushi={eatSushi}
          hasSushiBeenEaten={hasSushiBeenEaten}
          getMoreSushis={getMoreSushis}
        />
        <Table money={money} eatenSushis={eatenSushis} />
      </div>
    )
  }
}

export default App
