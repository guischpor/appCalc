import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

export default class Comando extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title='Calcular'
                    onPress={this.props.acao}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    button: {
        width: 300,
        borderRadius: 30,
    }
});
