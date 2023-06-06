import { View, StyleSheet, Text } from "react-native";
import { VictoryPie } from 'victory-native'
import { useGetChartData } from "../hooks/useGetChartData";

export default function Chart() {

  const chartData = useGetChartData("../rest/robot/getchartdata")

  return (
    <View style={styles.container}>
      <Text style={styles.titleChart}>Obstacles detected per lap</Text>
      <VictoryPie
        innerRadius={100}
        colorScale={["#98FB98", "#088F8F", "#00563B", "#00FF00", "#50C878"]}
        data={chartData}
        labels={({ datum }) => datum.y}
        labelPosition={({ index }) => index
          ? "centroid"
          : "startAngle"
        }
      />
    </View>
  )


}

const styles = StyleSheet.create({

  container: {
    height: '100%',
    marginBottom: 30,
    marginRight: 30,
  },
  titleChart: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20
  }

})