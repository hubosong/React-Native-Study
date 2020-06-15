import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class Views extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Title</Text>
          <Text style={styles.postDescription}>Description</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Title</Text>
          <Text style={styles.postDescription}>Description</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Title</Text>
          <Text style={styles.postDescription}>Description</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Title</Text>
          <Text style={styles.postDescription}>Description</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Title</Text>
          <Text style={styles.postDescription}>Description</Text>
        </View>
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F6D7A',
  },

  postContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 1,
  },

  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  postDescription: {
    color: '#777',
  },


})

/*
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Voltar</Text>
          <Text>Titulo</Text>
          <Text>Perfil</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo tela
    backgroundColor: '#ccc',
  },

  header: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

/*
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo tela
    flexDirection: 'row', //column = vertical (default) e row = horizontal
    //alignItems: 'center', //alinha centro inverso do flexdirection
    //justifyContent: 'center', //alinha centro
    flexWrap: 'wrap', //ajusta para quebrar quando necessario
    alignContent: 'space-between',

  },

  box: {
    flex: 1,
    height: 100,
    //width: 100,
    minWidth: 100, //faz com haja um ajuste na tela empurrando para o bottom quando nao couber na tela
    backgroundColor: '#555',
    borderColor: '#999',
    borderWidth: 5,
    margin: 10,
  },

  'box2': {
    //alignSelf: 'flex-end' //coloca a direita, sobrescrevendo o alignitems (deve colocar o style com array [])
  },

})
*/
