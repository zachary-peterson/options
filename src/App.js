import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components/Landing';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { mainReducer } from './store'

const store = createStore(mainReducer, applyMiddleware(thunk, logger))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route to='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
