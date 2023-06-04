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
                <Slider style={styles.slider} value={speed} minimumValue={200} maximumValue={1300} step={50} maximumTrackTintColor={'#90EE90'}
                    minimumTrackTintColor={'#006400'} thumbTintColor={'yellow'} onValueChange={(value) => {
                        setSpeed(value);
                    }} />
                <Text style={styles.currentSpeed}>Current Speed: {speed} degrees/second</Text>
            </View>

            <Text style={styles.navTitle}>Navigation</Text>
            <View style={styles.navigation}>
                <View style={styles.top}>
                    <FontAwesome.Button name="arrow-up" backgroundColor={'#4CBB17'} size={69} color={'black'} onPress={() => { console.log("Pressed!") }}>
                    </FontAwesome.Button>
                </View>
                <View style={styles.middleButtons}>
                    <View style={styles.right}>
                        <FontAwesome.Button name="arrow-right" backgroundColor={'#4CBB17'} size={70} color={'black'} onPress={() => { console.log("Pressed!") }}>
                        </FontAwesome.Button>
                    </View>
                    <View style={styles.left}>
                        <FontAwesome.Button name="arrow-left" backgroundColor={'#4CBB17'} size={70} color={'black'} onPress={() => { console.log("Pressed!") }}>
                        </FontAwesome.Button>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <FontAwesome.Button name="arrow-down" backgroundColor={'#4CBB17'} size={69} color={'black'} onPress={() => { console.log("Pressed!") }}>
                    </FontAwesome.Button>
                </View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#4CBB17',
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
        fontSize: 24,
        paddingLeft: 10
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
        fontSize: 30
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
        width:'100%'
    },
    left:{
        width:'100%'
    },
    bottom: {
        marginHorizontal: '38%'
    },
    navigation: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }

});