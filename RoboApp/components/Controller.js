import { View, Text, StyleSheet, Button } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { useFetchPostSpeed } from '../hooks/useFetchPostSpeed'
import { useFetchPostCommand } from '../hooks/useFetchPostCommand';
import EffectButtons from './EffectButtona';

export default function Controller() {

    const [speed, setSpeed] = useState(200);
    const [command, setCommand] = useState();

    useFetchPostSpeed({ url: "../rest/robot/writespeed", value: speed });

    useFetchPostCommand({ url: "../rest/robot/writecommand", command: command })

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}><Text style={styles.speedTitle}>Speed</Text>
                <Text style={styles.setSpeed}>Set speed:</Text>
                <View style={styles.sliderView}>
                    <Slider style={styles.slider} value={speed} minimumValue={200} maximumValue={1300} step={50} maximumTrackTintColor={'#90EE90'}
                        minimumTrackTintColor={'#006400'} thumbTintColor={'yellow'} onValueChange={(value) => {

                            setSpeed(value);

                        }} />
                    <Text style={styles.currentSpeed}>Current Speed: {speed} degrees/second</Text>
                </View>
            </View>
            <View style={{ flex: 5 }}><Text style={styles.navTitle}>Navigation</Text>
                <View style={styles.navigation}>
                    <View style={styles.top}>
                        <FontAwesome.Button name="arrow-up" backgroundColor={'#4CBB17'} size={69} color={'black'} onPress={() => { setCommand(3) }}>
                        </FontAwesome.Button>
                    </View>
                    <View style={styles.middleButtons}>
                        <View style={styles.right}>
                            <FontAwesome.Button name="arrow-right" backgroundColor={'#4CBB17'} size={70} color={'black'} onPress={() => { setCommand(4) }}>
                            </FontAwesome.Button>
                        </View>
                        <View style={styles.left}>
                            <FontAwesome.Button name="arrow-left" backgroundColor={'#4CBB17'} size={70} color={'black'} onPress={() => { setCommand(2) }}>
                            </FontAwesome.Button>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <FontAwesome.Button name="arrow-down" backgroundColor={'#4CBB17'} size={69} color={'black'} onPress={() => { setCommand(5) }}>
                        </FontAwesome.Button>
                    </View>
                </View>
            </View>
            <EffectButtons style={{flex:1.5}} />
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        flex: 1
    },
    speedTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    setSpeed: {
        fontSize: 24,
        paddingLeft: 10,
    },
    slider: {
        backgroundColor: 'yellow',
    },
    sliderView: {
        paddingHorizontal: 20,
    },
    currentSpeed: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    navTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    middleButtons: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '30%'
    },
    top: {
        marginHorizontal: '38%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        width: '100%'
    },
    left: {
        width: '100%'
    },
    bottom: {
        marginHorizontal: '38%',
    },
    navigation: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});