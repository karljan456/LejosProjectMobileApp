import { View, StyleSheet } from "react-native";
import {VictoryPie} from 'victory-native'

export default function Chart() {

    
    return (
<View style={styles.container}>
<VictoryPie
innerRadius={100}
colorScale={["#98FB98", "#088F8F", "#00563B", "9ACD32", "#50C878" ]}
  data={[
    { x: "1 lap", y: 35 },
    { x: "3 lap", y: 40 },
    { x: "2 lap", y: 55 }
  ]}
/>
</View>
)


}

const styles = StyleSheet.create({

    container:{
        height: '100%',
    }

})