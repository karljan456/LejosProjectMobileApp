import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Chart from "./Chart";
import { useGetObstacle } from "../hooks/useGetObstacle";

export default function Statistics() {

    const data = useGetObstacle("../rest/robot/getobstacles")

    return (
        <View style={styles.statisctics}>
            <Text style={styles.title} >Statistics</Text>
            <Text style={styles.obstacle}>Obstacle Detection</Text>
            <Text style={styles.obstacleData}>Obstacles detected last time: {data} times</Text>
            <Chart />
        </View>
    )

}


const styles = StyleSheet.create({
    statisctics: {
        height: '100%',
        width: '100%',
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    obstacle: {
        marginLeft: 20,
        fontSize: 25
    },
    obstacleData: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})