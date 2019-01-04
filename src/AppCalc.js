import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import Topo from './components/Topo';
import Resultado from './components/Resultado';
import Painel from './components/Painel';


export default class AppCalc extends React.Component {
    render() {
        return (
            <View >
                <Topo />
                <Resultado />
                <Painel />
            </View>
        );
    }
}
