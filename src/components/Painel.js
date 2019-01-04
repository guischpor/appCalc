import React from 'react';
import {
    View
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export default class Painel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',

        };
    };

    calcular() {
        console.log("Sim, vamos calcular...");
    }

    render() {
        return (
            <View>
                <Entrada
                    num1={this.state.num1}
                    num2={this.state.num2}
                />
                <Operacao />
                <Comando
                    acao={this.calcular}
                />
            </View>
        );
    }
}