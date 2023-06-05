import { StyleSheet, View } from "react-native";
import Controller from "./Controller";
import SwitchSelector from 'react-native-switch-selector'
import Statistics from './Statistics';
import { useState } from "react";


export default function Selector() {

    const options = [{ label: "Controller", value: "Controller" }, { label: "Statistics", value: "Statistics" }]

    const [selectedTab, setSelectedTab] = useState(<Controller />);

    const SelectedTab = () => {
        
        switch (selectedTab) {

            case 'Controller':

                return <Controller/>

            case 'Statistics':

                return <Statistics/>

        }
    }

    return (
        <View style={styles.selector}>
            <SwitchSelector
                options={options}
                initial={0}
                buttonColor={'#228C22'}
                hasPadding
                onPress={(value) => {
                    setSelectedTab(value);
                }}
            />
            {SelectedTab()}
        </View>

    );

}

const styles = StyleSheet.create({
    selector: {
        marginVertical: 20,
        marginTop: '20%',
    }
})