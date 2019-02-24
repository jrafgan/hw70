import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image} from "expo";

const SYMBOLS = [1, 2, 3, '-', 4, 5, 6, '+', 7, 8, 9, '/', '*', 0, '=', '%', '<', '.', 'M+', 'M-', 'CE'];

export default class App extends React.Component {
    _onPressButton = () => {
        console.log();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.digitWindow}>
                    <Text>Casio</Text>
                    <View style={styles.mainWindow}><Text>Digits will be here</Text></View>
                </View>
                <View style={styles.buttonBox}>
                    {SYMBOLS.map((item, ndx) => {
                        return <TouchableOpacity style={styles.button} key={ndx} onPress={e => this._onPressButton(e)}>
                            <Text>{item}</Text>
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
    },
    button: {
        width: 90,
        height: 90,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    buttonBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mainWindow: {
        height: 100,
        marginTop: 30,
    }
});
