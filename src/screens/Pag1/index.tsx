import { ComponentPageTitulo } from "../../components/index"
import { Text, View, TouchableOpacity, ImageBackground } from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function Pag1({setPageI}:IPage) {
    const background = require("../../assets/background.png")
    return(
        <ImageBackground source={background} style={styles.container}>
            <ComponentPageTitulo/>
        </ImageBackground>
    )
}