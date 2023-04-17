import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function Pag1({setPageI}:IPage) {

    return(
        <View style={styles.container}>
            <Text>Pag 1</Text>
            <TouchableOpacity onPress={() => setPageI(2)}>
                <Text>{">>"}</Text>
            </TouchableOpacity>
        </View>
    )
}