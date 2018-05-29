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
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import { HamburgerMenu } from './common/HamburgerMenu';
import { store } from '../store';
import { observer } from 'mobx-react/native';
import { ModalBackground } from './common/ModalBackground';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

@observer
export default class App extends React.Component<Props> {

    componentDidMount() {
    }

    render() {
        const iconColor="rgba(255, 255, 255, 0.9)"

        return (
            <View style={{
                flex: 1,
            }}>
                <View style={styles.main}>
                    <Text>mainView</Text>
                </View>
                <View style={styles.bottomBar}>
                    <TouchableWithoutFeedback onPress={e => {
                        store.openMenu()
                    }}><View style={styles.bottomBarIconContainer}>
                        <Icon name="bars" size={24} color={iconColor}/>
                    </View></TouchableWithoutFeedback>
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
                <ModalBackground show={store.isOpenMenu} style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 99,
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}/>
                <HamburgerMenu>
                    <Text>are</Text>
                </HamburgerMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
