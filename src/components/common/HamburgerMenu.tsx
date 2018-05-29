import React = require("react")
import {
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Text,
} from "react-native"
// はよマージしろ
// https://github.com/react-community/react-native-safe-area-view/pull/25
const SafeAreaView = require("react-native-safe-area-view").default
import { observer } from "mobx-react/native"
import { store } from "../../store";

@observer
export class HamburgerMenu extends React.Component {
    render() {
        const { children } = this.props
        const isOpen = store.isOpenMenu
        return <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: isOpen ? 0 : -240,
            right: isOpen ? 0 : undefined,
            zIndex: 100,
        }}>
            <ScrollView style={{
                backgroundColor: "white",
                width: 240,
            }}><SafeAreaView>
                {children}
            </SafeAreaView></ScrollView>
            <TouchableWithoutFeedback onPress={e => store.closeMenu()}><View style={{
                position: "absolute",
                left: 240,
                right: 0,
                top: 0,
                bottom:0,
                opacity: isOpen ? 1 : 0,
            }}></View></TouchableWithoutFeedback>
        </View>
    }
}