import {
    LayoutAnimation,
    Animated,
} from "react-native"
import { observable } from "mobx"

export class Store {
    @observable isOpenMenu = false

    openMenu() {
        LayoutAnimation.easeInEaseOut()
        this.isOpenMenu = true
    }

    closeMenu() {
        LayoutAnimation.easeInEaseOut()
        this.isOpenMenu = false
    }
}

export const store = new Store