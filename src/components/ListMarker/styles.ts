import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    listMarker: {
        margin: 10,
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textMarker:{
        marginLeft: 5,
        fontSize: 32,
        color: colors.white
    }
})