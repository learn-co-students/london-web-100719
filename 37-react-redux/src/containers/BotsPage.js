import React from "react";
import API from "../API";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import { connect } from "react-redux";
import { ACTION_TYPES } from "../action_types";

class BotsPage extends React.Component {
  state = {
    allBots: [],
    enlistedBots: [],
    selectedBot: undefined
  };

  componentDidMount() {
    API.getBots().then(allBots => this.props.addBots(allBots));
  }

  enlistBot = bot => {
    if (this.state.enlistedBots.includes(bot.id)) return;

    this.setState({
      enlistedBots: [...this.state.enlistedBots, bot.id]
    });
  };

  delistBot = bot => {
    this.setState({
      enlistedBots: this.state.enlistedBots.filter(id => id !== bot.id)
    });
  };

  selectBot = selectedBot => this.setState({ selectedBot });

  botIsEnlisted = bot => this.state.enlistedBots.includes(bot.id);
  botIsNotEnlisted = bot => !this.state.enlistedBots.includes(bot.id);

  render() {
    const botsForCollection = this.state.allBots.filter(this.botIsNotEnlisted);
    const selectedBotIsEnlisted =
      this.state.selectedBot && this.botIsEnlisted(this.state.selectedBot);
    const enlistedBots = this.state.enlistedBots.map(id =>
      this.state.allBots.find(b => b.id === id)
    );

    return (
      <React.Fragment>
        <YourBotArmy bots={enlistedBots} delistBot={this.delistBot} />
        <div className="ui container">
          {this.props.showBotSpecs ? <BotSpecs /> : <BotCollection />}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    showBotSpecs: !!state.selectedBotId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBots: bots =>
      dispatch({ type: ACTION_TYPES.ADD_BOTS, payload: { bots } })
  };
};

const createConnectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default createConnectedComponent(BotsPage);
