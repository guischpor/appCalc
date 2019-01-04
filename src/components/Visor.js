import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';

export default class Visor extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            resultado: '',
        };
    };

    render() {
        return (
            <View>
                <TextInput
                    placeholder='Resultado'
                    editable={false}
                    style={styles.txtInput}
                    value={this.state.resultado}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({

    txtInput: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        borderWidth: 5,
        borderColor: '#2196f3',
        height: 100,
        elevation: 5,
    },
});