import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

export default function Controller() {

    const [speed, setSpeed] = useState(200)

    return (
        <View style={styles.container}>
            <Text style={styles.speedTitle}>Speed</Text>
            <Text style={styles.setSpeed}>Set speed:</Text>
            <View style={styles.sliderView}>
                <Slider style={styles.slider} value={speed} minimumValue={200} maximumValue={1300} step={50} maximumTrackTintColor={'#B90E0A'}
                    minimumTrackTintColor={'orange'} thumbTintColor={'yellow'} onValueChange={(value) => {
                        setSpeed(value);
                    }} />
                <Text style={styles.currentSpeed}>Current Speed {speed}</Text>
            </View>

            <Text style={styles.navTitle}>Navigation</Text>
            <View style={styles.navigation}>
                <View style={styles.top}>
                    <FontAwesome.Button style={styles.arrowButtons} name="arrow-up" backgroundColor={'#FC4C4E'} size={70} color={'black'} onPress={() => { console.log("Pressed!") }}>
                    </FontAwesome.Button>
                </View>
                <View style={styles.middleButtons}>
                    <View style={styles.right}>
                        <FontAwesome.Button style={styles.arrowButtons} name="arrow-right" backgroundColor={'#FC4C4E'} size={70} color={'black'} onPress={() => { console.log("Pressed!") }}>
                        </FontAwesome.Button>
                    </View>
                    <View>
                        <FontAwesome.Button style={styles.arrowButtons} name="arrow-left" backgroundColor={'#FC4C4E'} size={70} color={'black'} onPress={() => { console.log("Pressed!") }}>
                        </FontAwesome.Button>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <FontAwesome.Button style={styles.arrowButtons} name="arrow-down" backgroundColor={'#FC4C4E'} size={70} color={'black'} onPress={() => { console.log("Pressed!") }}>
                    </FontAwesome.Button>
                </View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FC4C4E',
        width: '100%',
        marginTop: '20%',
        height: '100%'
    },
    speedTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    setSpeed: {
        fontSize: 20,
        paddingLeft: 10
    },
    slider: {
        backgroundColor: 'yellow',
        margin: 10,
    },
    sliderView: {
        padding: 20,

    },
    currentSpeed: {
        fontWeight: 'bold',
        fontSize: 15
    },
    navTitle: {
        textAlign: 'center',
        fontSize: 30
    },
    arrowButtons: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
    },
    arrowButtonsContainer: {
        marginTop: 40,
    },
    middleButtons: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        paddingHorizontal: 100
    },
    leftArrow: {

    },
    rightArrow: {

    },
    top: {
        paddingHorizontal: '37.8%'
    },
    right: {
        paddingLeft: '45%'
    },
    bottom: {
        paddingHorizontal: '37.8%'
    },
    navigation: {
        marginTop: 20
    }

});