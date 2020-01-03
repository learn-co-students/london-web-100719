import React from "react";
import BotCard from "../components/BotCard";
import { connect } from "react-redux";
import { ACTION_TYPES } from "../action_types";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui stackable centered cards">
        {this.props.bots.map(bot => (
          <BotCard
            bot={bot}
            handleClick={() => this.props.handleBotClick(bot)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bots: state.bots
  };
};
// bots={botsForCollection}

const mapDispatchToProps = dispatch => {
  return {
    handleBotClick: bot =>
      dispatch({ type: ACTION_TYPES.SELECT_BOT, payload: { bot } })
  };
};
// handleBotClick={this.selectBot}

export default connect(mapStateToProps, mapDispatchToProps)(BotCollection);
