import React from "react"
import { Text} from "react-native" 
import { styles } from "./styles"

export interface IPanelTitulo{
    titulo: string
}

export function PanelTitulo({titulo}: IPanelTitulo) {
    return(
        <Text style={styles.text}>{titulo}</Text>
    )
}