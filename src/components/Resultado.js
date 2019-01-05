import React from 'react';
import {
    Text,
    View
} from 'react-native';

import Visor from './Visor';

export default class Resultado extends React.Component {
    render() {
        return (
            <View>
                <Visor
                    resultado={this.props.resultado}
                />
            </View>
        );
    }
}

// const Resultado = props => (
//     <View>
//         <Text>Resultado</Text>
//     </View>
// );

// export {Resultado};