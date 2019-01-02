import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Cabecalho extends React.Component {
    render() {
        return (
            <View style={styles.navBarStyle}>
                <Text style={styles.titleStyle}>Calculadora 1.0</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBarStyle: {
        backgroundColor: '#2196f3',
        padding: 10,
        elevation: 5,
        alignItems: 'center',
    },

    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});