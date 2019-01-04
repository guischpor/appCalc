import React from 'react';
import {
    Text,
    View,
    Picker,
    StyleSheet
} from 'react-native';

export default class Operacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operacao: '',
        };
    };

    render() {
        return (
            <View>
                <Picker
                    style={styles.operacao}
                    selectedValue= {this.state.operacao}
                    onValueChange= {
                        op => {
                            this.setState({
                                operacao: op
                            })
                        }}
                >
                    <Picker.Item label='Soma' value='soma' />
                    <Picker.Item label='Subtração' value='subtracao' />
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