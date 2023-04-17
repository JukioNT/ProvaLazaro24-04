import React from "react"
import { ComponentPageTitulo, ComponentListImage, ComponentPanelTitulo } from "../../components/index"
import { Text, View, TouchableOpacity, ImageBackground, FlatList } from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function Pag2({setPageI, pageNumber}:IPage) {
    const img1 = require("../../assets/img1.png")
    const img2 = require("../../assets/img2.png")
    const pag2Texto = [
        {id: '1', text: "As Melhores!", img: img1},
        {id: '2', text: "Pra curtir!", img: img2},
    ]
    return(
        <View style={styles.container}>
            <ComponentPageTitulo setPageI={setPageI} pageNumber={pageNumber}/>
            <View style={styles.panel}>
                <ComponentPanelTitulo titulo="Aplicativo Para ouvir sua música preferida"/>
                <FlatList
                    data={pag2Texto}
                    renderItem={({item})=>
                    <ComponentListImage key={item.id} text={item.text} img={item.img}/>
                }
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}