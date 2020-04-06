import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist/es/types';
import { Store } from '../reducers/types';
import Routes from '../Routes';

type PersistorStore = {
  store: Store;
  persistor: Persistor;
};

type Props = {
  store: PersistorStore;
  history: History;
};

const Root = ({ store: { store, persistor }, history }: Props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default hot(Root);
