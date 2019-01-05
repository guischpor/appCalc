import React from 'react';
import {
    Text,
    View,
    Picker,
    StyleSheet
} from 'react-native';

export default class Operacao extends React.Component {
    render() {
        return (
            <View>
                <Picker
                    style={styles.operacao}
                    selectedValue= {this.props.operacao}
                    onValueChange= {
                        op => {this.props.atualizarOperacao(op);}
                    }
                >
                    <Picker.Item label='Soma' value='soma' />
                    <Picker.Item label='Subtração' value='subtracao' />
                    <Picker.Item label='Multiplicação' value='multiplicacao' />
                    <Picker.Item label='Divisão' value='subtracao' />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    operacao: {
        marginTop: 15,
        marginBottom: 15,
    },
});