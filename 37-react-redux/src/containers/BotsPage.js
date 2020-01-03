import React from "react";
import API from '../API'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    allBots: [],
    enlistedBots: [],
    selectedBot: undefined
  }

  componentDidMount() {
    API.getBots()
      .then(allBots => this.setState({ allBots }))
  }

  botsIncludeClass = (bots, className) => {
    console.log(bots.map(bot => bot.bot_class), className)
    return bots.map(bot => bot.bot_class).includes(className)
  }

  enlistBot = bot => {
    if (this.state.enlistedBots.includes(bot.id)) return;
    if (this.botsIncludeClass(this.state.enlistedBots.map(id => this.state.allBots.find(b => b.id === id)), bot.bot_class)) return;

    this.setState({
      enlistedBots: [...this.state.enlistedBots, bot.id]
    })
  }

  delistBot = bot => {

    this.setState({
      enlistedBots: this.state.enlistedBots.filter(id => id !== bot.id)
    })
  }

  selectBot = selectedBot => this.setState({ selectedBot })

  botIsEnlisted = bot => this.state.enlistedBots.includes(bot.id)
  botIsNotEnlisted = bot => !this.state.enlistedBots.includes(bot.id)

  render() {
    const botsForCollection = this.state.allBots.filter(this.botIsNotEnlisted)
    const selectedBotIsEnlisted = this.state.selectedBot && this.botIsEnlisted(this.state.selectedBot)
    const enlistedBots = this.state.enlistedBots.map(id => this.state.allBots.find(b => b.id === id))

    return (
      <div>
        <YourBotArmy bots={enlistedBots} delistBot={this.delistBot} />
        {
          this.state.selectedBot ?
            <BotSpecs
              bot={this.state.selectedBot}
              back={() => this.setState({ selectedBot: undefined })}
              handleEnlistedToggle={() =>
                selectedBotIsEnlisted ?
                  this.delistBot(this.state.selectedBot) :
                  this.enlistBot(this.state.selectedBot)
              }
              enlistButtonLabel={selectedBotIsEnlisted ? 'DELIST' : 'ENLIST'}
            /> :
            <BotCollection
              bots={botsForCollection}
              handleBotClick={this.selectBot}
            />
        }
      </div>
    );
  }

}

export default BotsPage;
