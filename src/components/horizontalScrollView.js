// 

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView,SafeAreaView, FlatList } from 'react-native';
import DraggableView from './horizontalScrollView';


var data = ['1','2','3','4','5','6'];
export default class HorizontalScrollView extends Component {

    
  renderCity(city) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          {/* <Image source={require('../../assets/images/ambica.jpeg')} style={styles.image} />
          <Text style={styles.title}>{city.title}</Text> */}
           <SafeAreaView style={{padding:10}}>
            <FlatList data={['one','two','three']} renderItem={({item}) => 
            <Image source={require('../../assets/images/ambica.jpeg')} style={styles.image} />}>

            </FlatList>
            </SafeAreaView>

            {/* <DraggableView></DraggableView> */}
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          {data.map(city => {
            return this.renderCity(city);
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  cardContainer: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    width: 220,
  },
});