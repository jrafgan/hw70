import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const SYMBOLS = [1, 2, 3, '-', 4, 5, 6, '+', 7, 8, 9, '/', '*', 0, '.', '=', '%', '<', 'M+', 'M-', 'CE', 'MS', 'MC'];

class Main extends React.Component {

    _onPressButton = (item) => {

            if (item === '=') {
                this.props.calculate();

            } else if (item === 'CE') {
                this.props.clear();

            } else if (item === 'M+') {
                this.props.memoryPlus();

            } else if (item === 'M-') {
                this.props.memoryMinus();

            } else if (item === 'MS') {
                this.props.memorySave();

            } else if (item === 'MC') {
                this.props.memoryClear();

            } else if (item === '%') {
                this.props.percent();

            } else if (item === '<') {
                this.props.deleteLast();

            } else {
                this.props.insertValue(item);
            }
    };

    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.digitWindow}>
                        <Text>Casio</Text>
                        <Text>M: {this.props.memory}</Text>
                        <View style={styles.mainWindow}><Text
                            style={styles.operations}>{this.props.printedOperations}</Text></View>
                    </View>
                    <View style={styles.buttonBox}>
                        {SYMBOLS.map((item, ndx) => {
                            return <TouchableOpacity id={item}
                                                     style={typeof (item) === 'number' ? styles.digit : styles.symbol}
                                                     key={ndx} onPress={() => this._onPressButton(item)}>
                                <Text style={styles.text}>{item}</Text>
                            </TouchableOpacity>
                        })}
                    </View>
                </View>
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
        height: 80,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,

    },
    symbol: {
        width: 90,
        height: 80,
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

const mapStateToProps = state => {
    return {
        printedOperations: state.printedOperations,
        memory: state.memory,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        insertValue: (item) => dispatch({type: 'INSERT_VALUE', value: item}),

        calculate: () => dispatch({type: '='}),

        clear: () => dispatch({type: 'CE'}),

        memoryPlus: () => dispatch({type: 'M+'}),

        memoryMinus: () => dispatch({type: 'M-'}),

        percent: () => dispatch({type: '%'}),

        deleteLast: () => dispatch({type: '<'}),

        memorySave: () => dispatch({type: 'MS'}),

        memoryClear: () => dispatch({type: 'MC'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
