import React from "react"
import { ComponentPageTitulo, ComponentListMarker, ComponentPanelTitulo } from "../../components/index"
import { Text, View, TouchableOpacity, ImageBackground, FlatList } from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function Pag1({setPageI, pageNumber}:IPage) {
    const background = require("../../assets/background.png")
    const pag1Texto = [
        {id: '1', text: "Crie sua playlist"},
        {id: '2', text: "Escolha suas bandas preferidas"},
        {id: '3', text: "Utiliza IA para sugerir novas músicas"}
    ]
    return(
        <ImageBackground source={background} style={styles.container}>
            <ComponentPageTitulo setPageI={setPageI} pageNumber={pageNumber}/>
            <View style={styles.panel}>
                <ComponentPanelTitulo titulo="Aplicativo Para ouvir sua música preferida"/>
                <FlatList
                    data={pag1Texto}
                    renderItem={({item})=>
                    <ComponentListMarker key={item.id} textMarker={item.text}/>
                }
                keyExtractor={(item) => item.id}
                />
            </View>
        </ImageBackground>
    )
}