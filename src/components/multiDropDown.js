import React, { useEffect, useRef, useState, Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckboxTree from 'react-native-checkbox-tree';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


var dropDownStrings = [];
var mainDropDownStrings = [];
var mainArrayCount = 0;
const ref = useRef < CheckboxTree > (null);
export default class MultiDropDown extends Component {


  constructor(props) {
    super(props);
    this.state = {
      nestedArray: [],
    };

    this.exampleRef = React.createRef()
  }

  componentDidMount = () => {

    for (var i = 0; i < this.props.data.length; i++) {

      if (this.props.data[i].parentRegionId == 0) {
        // for child objects
        dropDownStrings = [];
        for (var j = 0; j < this.props.data.length; j++) {

          if (this.props.data[i].id == this.props.data[j].parentRegionId) {
            dropDownStrings.push({ regionId: this.props.data[j].id, regionName: this.props.data[j].name })
          }
        }
        mainDropDownStrings.push({ regionId: this.props.data[i].id, regionName: this.props.data[i].name, childs: dropDownStrings })
      }

    }

    if (mainArrayCount != this.props.data.length) {
      dropDownStrings = [];
      mainArrayCount = mainDropDownStrings.length;
      this.setSubDropDownStrings(mainDropDownStrings);
    }
  }

  setSubDropDownStrings = (arrayOfStrings) => {
    console.log('iam coming here')
    var others = [];
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].childs != null && arrayOfStrings[i].childs.length != 0) {
        for (var j = 0; j < arrayOfStrings[i].childs.length; j++) {
          mainArrayCount = mainArrayCount + 1;
          for (var k = 0; k < this.props.data.length; k++) {
            if (arrayOfStrings[i].childs[j].regionId == this.props.data[k].parentRegionId) {
              mainArrayCount = mainArrayCount + 1;
              if (arrayOfStrings[i].childs[j].childs != null && arrayOfStrings[i].childs[j].childs.length != 0) {
                var childData = arrayOfStrings[i].childs[j].childs;
                childData.push({ regionId: this.props.data[k].id, regionName: this.props.data[k].name })
                arrayOfStrings[i].childs[j].childs = childData;
              }
              else {

                arrayOfStrings[i].childs[j] = { regionId: arrayOfStrings[i].childs[j].regionId, regionName: arrayOfStrings[i].childs[j].regionName, childs: [{ regionId: this.props.data[k].id, regionName: this.props.data[k].name }] }

              }

              others = arrayOfStrings;
            }
            else {
              others = arrayOfStrings;
            }
          }
        }
        if (mainArrayCount != this.props.data.length && mainArrayCount <= this.props.data.length) {
          this.setSubDropDownStrings(arrayOfStrings[i].childs);
          console.log('arrayOfSTrings length', others)
          //  return others;
        }
        else {
          console.log('mainDropDownStringsArray', arrayOfStrings)
          console.log('original data', this.props.data)
          //  return arrayOfStrings;
        }
      }
    }
    this.setState({ nestedArray: others}, () => {
      console.log('nestedArray', this.state.nestedArray)
      if (this.state.nestedArray != 0) {
        var data = this.state.nestedArray[0];
        console.log('is is', data.regionId)
        console.log('is is', data.regionName)
        if (this.exampleRef && this.exampleRef.current) {
          // this.exampleRef.current.setSelectedItem([
          //   {
          //     regionId: this.state.nestedArray[0].regionId,
          //     regionName: this.state.nestedArray[0].regionName,
          //   },
          //   {
          //     regionId: this.state.nestedArray[0].childs[0].regionId,
          //     regionName: this.state.nestedArray[0].childs[0].regionName,
          //   },
          // ]);
        }
      }
    })


  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.nestedArray.length != 0 ? <CheckboxTree
          ref={this.exampleRef}
          data={this.state.nestedArray}
          textField="shopName"
          childField="childs"
          textStyle={{ color: 'black' }}
          iconColor="black"
          iconSize={20}
          openIcon={<AntDesign name="right" size={20} />}
          closeIcon={<AntDesign name="down" size={20} />}
          renderItem={({ item, isSelect, isOpen, onOpen, onClose, onSelect }) => (
            <View style={styles.wrapItem}>
              {isOpen ? (
                <TouchableOpacity onPress={onClose}>
                  <AntDesign size={20} name="down" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onOpen}>
                  <AntDesign size={20} name="right" />
                </TouchableOpacity>
              )}
              <TouchableOpacity>
                {/* <Ionicons
                  size={20}
                  name={isSelect ? 'checkbox-outline' : 'square-outline'}
                /> */}
                <Text style={styles.name} onPress={onSelect}>{item.regionName}</Text>
              </TouchableOpacity>
              
            </View>
          )}
          onSelect={item => {
            console.log(`Selected ${item.regionName} item`);
            const value = this.props.data.find(element => {
              // if(item.regionId == element.id)
              // {
              //   this.props.onPress(element);
              // }
            })
            
          }}
          onClose={item =>{
              console.log('is closed')
          }}
          onOpen={item =>{
        console.log('is opened')
          }}

        /> : null}
      </View>
    );
  }

  pressItem = (item) =>{
    console.log(`Selected ${item} item`);
    console.log(`Selected ${item.regionName} item`);
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  wrapItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
  name: {
    fontSize: 20,
    marginLeft: 8,
  },
});


