import React from "react";
import BotCard from "../components/BotCard";

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

export default BotCollection;
