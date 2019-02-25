import React from 'react';
import reducer from './store/reducer';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import Main from "./main";

const store = createStore(reducer);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}

