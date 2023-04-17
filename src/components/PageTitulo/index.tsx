import React from "react"
import { Text, View } from "react-native" 
import { styles } from "./styles"

export function PageTitulo() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Solta o som</Text>
            <Text style={styles.text}>{">>"}</Text>
        </View>
    )
}