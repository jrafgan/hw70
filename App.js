import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Reducer from './store/reducer';
import { createStore} from 'redux';
import { Provider, connect } from 'react-redux';

const store = createStore(Reducer);

const SYMBOLS = [1, 2, 3, '-', 4, 5, 6, '+', 7, 8, 9, '/', '*', 0, '.', '=', '%', '<', 'M+', 'M-', 'CE'];

class App extends React.Component {


_onPressButton = (item) => {
    try {
        this.setState({printedOperations: this.state.printedOperations + item});
        if (item === '=') {

            this.setState({printedOperations: eval(this.state.printedOperations)})
        } else if (item === 'CE') {
            this.setState({printedOperations: '', memory: 0})
        } else if (item === 'M+') {
            this.setState({
                memory: eval(this.state.memory + this.state.printedOperations),
                printedOperations: eval(this.state.memory + this.state.printedOperations)
            })
        } else if (item === 'M-') {
            this.setState({
                memory: eval(this.state.memory - this.state.printedOperations),
                printedOperations: eval(this.state.memory - this.state.printedOperations)
            })
        } else if (item === '%') {
            this.setState({printedOperations: eval(this.state.printedOperations) / 100})
        } else if (item === '<') {
            this.setState({printedOperations: String(this.state.printedOperations).slice(0, -1)})
        }
    } catch (e) {
        this.setState({printedOperations: 'Error!'});
    }
};

render()
{
    return (
        <Provider store={store}>
        <View style={styles.container}>
            <View style={styles.digitWindow}>
                <Text>Casio</Text>
                <View style={styles.mainWindow}><Text
                    style={styles.operations}>{this.state.printedOperations}</Text></View>
            </View>
            <View style={styles.buttonBox}>
                {SYMBOLS.map((item, ndx) => {
                    return <TouchableOpacity id={item} style={typeof (item) === 'number' ? styles.digit : styles.symbol}
                                             key={ndx} onPress={() => this._onPressButton(item)}>
                        <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
                })}
            </View>
        </View>
        </Provider>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    digitWindow: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 30,
        marginHorizontal: 17,
    },
    digit: {
        width: 90,
        height: 90,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,

    },
    symbol: {
        width: 90,
        height: 90,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    buttonBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 15,

    },
    mainWindow: {
        height: 70,
        marginTop: 30,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    operations: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

const mapStateToProps = state => ({
    printedOperations: state.printedOperations
});

const mapDispatchToProps = dispatch => {
    return {
        insertValue: (item)=>dispatch({type: 'INSERT_VALUE', value: item}),

        calculate: ()=>dispatch({type: 'CALCULATE'}),

        deleteLastOne: ()=>dispatch({type: 'DELETE_LAST_ONE'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
