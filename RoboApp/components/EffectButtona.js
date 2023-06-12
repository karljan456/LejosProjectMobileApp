import {Button, StyleSheet, View} from 'react-native'
import { useFetchPostCommand } from '../hooks/useFetchPostCommand';
import { useState } from 'react';

export default function EffectButtons({style}) {

    const [command, setCommand] = useState();

    useFetchPostCommand({ url: "../rest/robot/writecommand", command: command })

    return (<View style={style}>
        <View style={styles.buttonsRowOne}>
            <View style={styles.button}><Button title='Lights' color="#013220" onPress={() => { setCommand(9) }}>Lights</Button></View>
            <View style={styles.button}><Button title='Pause' color={'#228C22'} onPress={() => { setCommand(8) }}>Pause</Button></View>
            <View style={styles.button}><Button title='Music' color={'#90EE90'} onPress={() => { setCommand(6) }}>Music</Button></View>
        </View>
        <View style={styles.buttonsRowTwo}>
            <View style={styles.button}><Button title='Dance' color={'#8FD400'} onPress={() => { setCommand(1) }}>Dance</Button></View>
            <View style={styles.button}><Button title='Continue' color={'#355E3B'} onPress={() => { setCommand(7) }}>Continue</Button></View>
            <View style={styles.button}><Button title='Stop' color={'#808000'} onPress={() => { setCommand(0) }}>Stop</Button></View>
        </View>
    </View>)

}

const styles = StyleSheet.create({
    buttonsRowOne: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 2
    },
    buttonsRowTwo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex:1
    },
    button: {
        width: 100,
        height: 50
    }
})