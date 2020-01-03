import { combineReducers } from "redux";
import { ACTION_TYPES } from "./action_types";

const initialState = {
  bots: [],
  enlistedBots: [],
  selectedBotId: null
};

const bots = (bots = initialState.bots, action) => {
  if (action.type === ACTION_TYPES.ADD_BOTS) {
    return [...bots, ...action.payload.bots];
  }
  return bots;
};

const selectedBotId = (botId = initialState.selectedBotId, action) => {
  if (action.type === ACTION_TYPES.SELECT_BOT) {
    return action.payload.bot.id;
  }
  return botId;
};

const enlistedBots = (
  currentEnlistedBotIds = initialState.enlistedBots,
  action
) => {
  if (action.type === ACTION_TYPES.ENLIST_BOT)
    return [...currentEnlistedBotIds, action.payload.bot.id];
  if (action.type === ACTION_TYPES.DELIST_BOT)
    return currentEnlistedBotIds.filter(bid => bid !== action.payload.bot.id);

  return currentEnlistedBotIds;
};

export default combineReducers({
  bots,
  selectedBotId,
  enlistedBots
});
