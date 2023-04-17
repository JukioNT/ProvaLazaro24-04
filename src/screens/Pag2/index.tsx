import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function Pag2({setPageI}:IPage) {

    return(
        <View style={styles.container}>
            <Text>Pag 2</Text>
            <TouchableOpacity onPress={() => setPageI(1)}>
                <Text>{"<<"}</Text>
            </TouchableOpacity>
        </View>
    )
}