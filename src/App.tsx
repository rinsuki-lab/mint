/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React = require('react')
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    StatusBar,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends React.Component<Props> {

    componentDidMount() {
    }

    render() {
        const iconColor="rgba(255, 255, 255, 0.9)"

        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text>mainView</Text>
                </View>
                <View style={styles.bottomBar}>
                    <View style={styles.bottomBarIconContainer}>
                        <Icon name="bars" size={24} color={iconColor}/>
                    </View>
                    <View style={{
                        flex: 1,
                        borderLeftColor: "rgba(0, 0, 0, 0.1)",
                        borderRightColor: "rgba(0, 0, 0, 0.1)",
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        justifyContent: "center",
                    }}><Text style={{
                        color: iconColor,
                        textAlign: "center",
                    }}>title</Text></View>
                    <View style={styles.bottomBarIconContainer}>
                        <Icon name="pencil" size={24} color={iconColor}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        backgroundColor: "#fafafa",
        flex: 1,
    },
    bottomBar: {
        flexDirection: "row",
        backgroundColor: "#595f6f",
        height: 48,
    },
    bottomBarIconContainer: {
        width: 48,
        justifyContent: "center",
        alignItems: "center",
    }
});
