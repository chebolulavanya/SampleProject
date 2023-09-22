import React, { useEffect, useRef, useState, Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, BackHandler, FlatList } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";




const unReadData = [{ "type": "facebook", "message": "hello FB", "time": "03:30 pm", "name": "Henry" }, { "type": "mail", "message": "hello are you available", "time": "03:50 am", "name": "Lavanya" }, { "type": "message", "message": "hello there", "time": "10:30 am", "name": "Venu" }
  , { "type": "message", "message": "hi, how are you", "time": "02:10 pm", "name": "Henry" }, { "type": "facebook", "message": "Fb name", "time": "11:30 pm", "name": "Rajesh" }, { "type": "mail", "message": "hello mail", "time": "05:30 pm", "name": "Ashish" }
  , { "type": "mail", "message": "how your data", "time": "01:30 pm", "name": "Harish" }]

const allData = [{ "type": "mail", "message": "hello FB mail", "time": "03:30 pm", "name": "Virat" }, { "type": "mail", "message": "hello mail", "time": "01:30 am", "name": "Lavanya" }, { "type": "facebook", "message": "hello FB", "time": "03:30 pm", "name": "Vijay" }
  , { "type": "facebook", "message": "hello FB", "time": "03:30 pm", "name": "Banu" }, { "type": "message", "message": "hello FB", "time": "10:30 pm", "name": "Rajesh" }, { "type": "facebook", "message": "hello FB", "time": "03:30 pm", "name": "Revathi" }
  , { "type": "facebook", "message": "hello FB", "time": "03:30 pm", "name": "HariPriya" }]

const recentData = [{ "type": "message", "message": "hello message", "time": "03:30 pm", "name": "Venkat" }, { "type": "message", "message": "hello dear", "time": "03:30 pm", "name": "Virat" }, { "type": "mail", "message": "hello user , what are you doing", "time": "03:30 pm", "name": "Lavanya" }
  , { "type": "facebook", "message": "hello FB", "time": "03:30 pm", "name": "Vinay" }, { "type": "mail", "message": "hello mail", "time": "02:30 am", "name": "Vinay" }, { "type": "facebook", "mail": "hello mailed user", "time": "03:30 pm", "name": "Pooja" }
  , { "type": "message", "message": "hello msg", "time": "01:50 am", "name": "Pavithra" }]
export default class CommunicationPannel extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  componentDidMount = () => {
    // this.createHeader();
  }
  componentWillUnmount() {
    // this.focusListener();

  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };


  render() {

    return (
      <View style={styles.container}>
        <View style={{ height: 50 }}></View>
        <SegmentedControlTab
          values={["First", "Second", "Third"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />

        <FlatList data={this.state.selectedIndex == 1 ? unReadData : this.state.selectedIndex == 2 ? recentData : allData}
          renderItem={(item) => this.renderSubItem(item.item)
          }>
        </FlatList>
      </View>
    );
  }

  renderSubItem = (item) => {
    return (
      <View style={{ height: 90, alignItems: 'center' }}>
        <View style={{
          flexDirection: 'row', padding: 20, borderWidth: 1,
          borderColor: '#D4DAE5', borderRadius: 2, alignItems: 'center'
        }}>
          <View style={{
            height: 40, width: 40, backgroundColor: 'red', borderWidth: 1,
            borderColor: '#D4DAE5', borderRadius: 20, alignItems: 'flex-end', justifyContent: 'flex-end'
          }}>
            <View style={{ backgroundColor: 'green', height: 20, width: 20, borderRadius: 10 }}></View>
          </View>
          <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 10 }}>
            <Text style={{
              color: 'black',
              flex: 1,
              fontSize: 14,
              fontWeight: 'bold',
              includeFontPadding: false,
              paddingTop: 3
            }}>{item.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>name</Text>
              <Text>{item.message}</Text>
            </View>

          </View>
          <View>
            <Text>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  }

  // selectedItem = (item,index) =>{

  // }
}

const FlatListItemSeparator = () => {
  return (<View style={styles.itemSeparator} />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});