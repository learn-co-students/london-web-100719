import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui cards bot-army-row">
          {this.props.bots.map(bot => (
            <BotCard bot={bot} handleClick={() => this.props.delistBot(bot)} />
          ))}
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
