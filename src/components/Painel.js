import React from 'react';
import {
    Text,
    View
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export default class Painel extends React.Component {
    render() {
        return (
            <View>
                <Entrada />
                <Operacao />
                <Comando />
            </View>
        );
    }
}

// const Painel = props => (
//     <View>
//         <Text>Painel</Text>
//     </View>
// );

// export {Painel};