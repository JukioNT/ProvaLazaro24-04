import {StyleSheet} from "react-native"
import {colors} from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20
    }
})