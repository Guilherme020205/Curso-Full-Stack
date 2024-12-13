import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CategoryProps } from "../../pages/Order";

interface ModalPickerProops{
    options:CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: (item: CategoryProps) => void;
}

const {width: WIDTH, height: HEIGTH} = Dimensions.get('window')

export default function ModalPicker({options, handleCloseModal, selectedItem}: ModalPickerProops) {
    
    function onPressItem(item: CategoryProps){
        console.log(item);
        selectedItem(item);
        handleCloseModal();
    }

    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={ () => onPressItem(item)}>
            <Text style={styles.item}>
                {item?.name}
            </Text>
        </TouchableOpacity>
   ))

    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
           <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    content: {
        width: WIDTH - 20,
        height: HEIGTH / 2,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 4
    },
    option: {
        alignItems: 'flex-start',
        borderTopWidth: 0.8,
        borderTopColor: '#8a8a8a'
    },
    item:{
        margin: 18,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#101026'
    }
})
