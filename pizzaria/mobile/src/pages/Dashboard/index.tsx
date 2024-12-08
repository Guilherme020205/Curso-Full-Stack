import React, { useContext } from "react";
import { Text,Button, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard(){
    const {signOut} = useContext(AuthContext)
    return(
        <View>
            <Text>DashBoard</Text>
            <Button
                title='Sair'
                onPress={signOut}
            />
        </View>
    )
}