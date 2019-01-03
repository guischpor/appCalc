import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Numero from './Numero';

export default class Entrada extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <Numero />
                <Numero />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});