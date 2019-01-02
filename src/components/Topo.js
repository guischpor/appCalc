import React from 'react';
import {
    Text,
    View
} from 'react-native';

import Cabecalho from './Cabecalho';

export default class Topo extends React.Component {
    render() {
        return (
            <View>
                <Cabecalho />
            </View>
        );
    }
}

// const Topo = props => (
//     <View>
//         <Text>Topo</Text>
//     </View>
// );

// export {Topo};