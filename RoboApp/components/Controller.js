import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import {useFetchPostSpeed} from '../hooks/useFetchPostSpeed'
import { useFetchPostCommand } from '../hooks/useFetchPostCommand';

export default function Controller() {

    const [speed, setSpeed] = useState(200);
    const [command, setCommand] = useState();

    useFetchPostSpeed({url:"../rest/robot/writespeed", value:speed});

    useFetchPostCommand({url:"../rest/robot/writecommand", command: command})

    return (
        <View style={styles.container}>
            <Text style={styles.speedTitle}>Speed</Text>
            <Text style={styles.setSpeed}>Set speed:</Text>
            <View style={styles.sliderView}>
                <Slider onSlidingComplete={(value) => {

                }} style={styles.slider} value={speed} minimumValue={200} maximumValue={1300} step={50} maximumTrackTintColor={'#90EE90'}
                    minimumTrackTintColor={'#006400'} thumbTintColor={'yellow'} onValueChange={(value) => {

                        setSpeed(value);

                    }} />
                <Text style={styles.currentSpeed}>Current Speed: {speed} degrees/second</Text>
            </View>

            <Text style={styles.navTitle}>Navigation</Text>
            <View style={styles.navigation}>
                <View style={styles.top}>
                    <FontAwesome.Button name="arrow-up" backgroundColor={'#4CBB17'} size={69} color={'black'} onPress={() => { setCommand(3)}}>
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
            <View style={styles.buttonsRowOne}>
                <TouchableOpacity ></TouchableOpacity>
                <View style={styles.button}><Button title='Lights' color="#013220" onPress={()=>{setCommand(9)}}>Lights</Button></View>
                <View style={styles.button}><Button title='Pause' color={'#228C22'} onPress={()=>{setCommand(8)}}>Pause</Button></View>
                <View style={styles.button}><Button title='Music' color={'#90EE90'} onPress={()=>{setCommand(6)}}>Music</Button></View>
            </View>
            <View style={styles.buttonsRowTwo}>
                <View style={styles.button}><Button title='Dance' color={'#8FD400'} onPress={()=>{setCommand(1)}}>Dance</Button></View>
                <View style={styles.button}><Button title='Continue' color={'#355E3B'} onPress={()=>{setCommand(7)}}>Continue</Button></View>
                <View style={styles.button}><Button title='Stop' color={'#808000'} onPress={()=>{setCommand(0)}}>Stop</Button></View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        marginTop: 10
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
        marginBottom: 5
    },
    navTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    arrowButtonsContainer: {
        marginTop: 40,
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
        marginHorizontal: '38%'
    },
    navigation: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonsRowOne: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    buttonsRowTwo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: 20
    },
    button: {
        width: 100,
        height: 50
    }

});