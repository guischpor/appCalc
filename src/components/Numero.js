import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default class Numero extends React.Component {
    render() {
        return (
            <View style={styles.backgroundView}>
                <TextInput
                    style={styles.numero}
                    value={this.props.num}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    numero: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        borderWidth: 5,
        borderColor: '#2196f3',
        height: 80,
        width: 140,
        elevation: 5,
    },

});