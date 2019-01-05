import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import Topo from './components/Topo';
import Resultado from './components/Resultado';
import Painel from './components/Painel';


export default class AppCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            operacao: 'soma',
            resultado: ''
        }
    }

    calcular() {
        let resultado = 0;

        switch (this.state.operacao) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
            case 'multiplicacao':
                resultado = parseFloat(this.state.num1) * parseFloat(this.state.num2);
                break;
            case 'divisao':
                resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2);
                break;
            default:
                resultado = 0;
        }
        this.setState({
            resultado: resultado.toString()
        })
    }

    atualizaValor(nomeCampo, numero) {
        const obj = {};
        obj[nomeCampo] = numero;
        this.setState(obj);
    }

    atualizarOperacao(operacao) {
        this.setState({
            operacao
        });
    }

    render() {
        return (
            <View >
                <Topo />
                <Resultado
                    resultado={this.state.resultado}
                />
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    calcular={this.calcular.bind(this)}
                    atualizaValor={this.atualizaValor.bind(this)}
                    atualizarOperacao={this.atualizarOperacao.bind(this)}
                />
            </View>
        );
    }
}
