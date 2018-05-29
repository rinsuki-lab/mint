import React = require("react")
import {
    Animated,
    View,
    ViewStyle,
    Easing,
} from "react-native"

interface Props {
    show: boolean
    style: ViewStyle
}

interface State {
    anim: Animated.Value
}

export class ModalBackground extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            anim: new Animated.Value(props.show ? 1 : 0)
        }
    }

    render() {
        const { show, style } = this.props
        const { anim } = this.state
        return <Animated.View style={{
            ...style,
            opacity: anim,
        }} pointerEvents="none" />
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.show != this.props.show) {
            Animated.timing(
                this.state.anim,
                {
                    toValue: nextProps.show ? 1 : 0,
                    easing: Easing.inOut(Easing.ease),
                    duration: 300,
                }
            ).start()
        }
    }
}