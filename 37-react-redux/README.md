`npm i redux react-redux`

in index.js

```
import { Provider } from 'react-redux'
import store from './store'
```

wrap App in a Provider

```
<Provider store={store}>
  <App />
</Provider>
```

in a component

`import { connect } from 'react-redux'`

```
const mapStateToProps = state => {
  return {
    selectedBot: state.selectedBot
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectBot: bot =>
      dispatch({ type: ACTION_TYPES.SELECT_BOT, payload: { botId: bot.id } }),
    deselectBot: () => dispatch({ type: ACTION_TYPES.DESELECT_BOT })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BotsPage)

```
