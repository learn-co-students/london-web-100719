import React from "react";
import { ACTION_TYPES } from "../action_types";
import { connect } from "react-redux";

const BotSpecs = props => {
  let { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon plus circle" />;
      break;
    case "Medic":
      botType = <i className="icon ambulance" />;
      break;
    case "Witch":
      botType = <i className="icon magic" />;
      break;
    case "Captain":
      botType = <i className="icon star" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button fluid" onClick={props.back}>
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                props.isEnlisted ? props.delistBot(bot) : props.enlistBot(bot)
              }
            >
              {props.enlistButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bot: state.bots.find(b => b.id === state.selectedBotId),
    isEnlisted: state.enlistedBots.includes(state.selectedBotId),
    enlistButtonLabel: state.enlistedBots.includes(state.selectedBotId)
      ? "Delist"
      : "enlist"
  };
};
// bot={this.state.selectedBot}
// enlistButtonLabel={selectedBotIsEnlisted ? "DELIST" : "ENLIST"}

const mapDispatchToProps = dispatch => {
  return {
    back: () => dispatch({ type: ACTION_TYPES.DESELECT_BOT }),
    enlistBot: bot =>
      dispatch({ type: ACTION_TYPES.ENLIST_BOT, payload: { bot } }),
    delistBot: bot =>
      dispatch({ type: ACTION_TYPES.DELIST_BOT, payload: { bot } })
  };
};
// back={() => this.setState({ selectedBot: undefined })}
// handleEnlistedToggle={() =>
//   selectedBotIsEnlisted
//     ? this.delistBot(this.state.selectedBot)
//     : this.enlistBot(this.state.selectedBot)
// }

export default connect(mapStateToProps, mapDispatchToProps)(BotSpecs);
