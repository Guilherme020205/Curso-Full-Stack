import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function app() {

  const [nome, setNome] = useState('Fulano')

  function handleMudaNome() {
    setNome("Sujeito Programador")
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28 }}>Sujeito Programador</Text>

      <Text style={styles.title}>Style diferente um</Text>
      <Text style={[styles.title, styles.text]}>Style diferente dois</Text>

      <Text style={styles.nome}>{nome}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleMudaNome}
      >
        <Text style={styles.buttonText}>Mudar Nome</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    paddingTop: 28
  },
  button: {
    backgroundColor: "blue",
    height: 40,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 35
  },

  buttonText: {
    color: "#fff",
    fontWeight: 'bold'
  },

  title: {
    fontSize: 35,
    color: '#121212',
    fontWeight: "bold"
  },
  text: {
    color: "red"
  },

  nome: {
    fontSize: 40,
    color: '#121212',
    fontWeight: "bold",
    textAlign: 'center'
  }
})