import React from "react";
import { Text, View } from "react-native";
import { Marker } from "../Marker";
import { styles } from "./styles";

export interface ITextMarker {
    textMarker: string
}

export function ListMarker({ textMarker }: ITextMarker){
    return(
        <View style={styles.listMarker}>
            <Text style={styles.textMarker}>{textMarker}</Text> 
        </View>
    )
}