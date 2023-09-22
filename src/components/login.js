import React, { useEffect } from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';
import FileViewer from "react-native-file-viewer";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import CheckboxTree from 'react-native-checkbox-tree';
import AntDesign from 'react-native-vector-icons/AntDesign';


const dropDownData = [{
  "code": 200,
  "data": [
      {
          "id": 118,
          "name": "INDIA",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "HH:mm",
          "language": "xx",
          "parentRegionId": 0,
          "autosavetimelimit": 900000
      },
      {
          "id": 428,
          "name": "North-1",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
      },
      {
          "id": 429,
          "name": "North-2",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
      },
      {
          "id": 430,
          "name": "EAST",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
      },
      {
          "id": 431,
          "name": "CENTRAL",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
      },
      {
          "id": 432,
          "name": "South",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
      },
      {
          "id": 433,
          "name": "WEST",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 118,
          "autosavetimelimit": 900000
      },
      {
          "id": 434,
          "name": "EUP",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 435,
          "autosavetimelimit": 900000
      },
      {
          "id": 435,
          "name": "WUP",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
      },
      {
          "id": 436,
          "name": "UK",
          "isDefaultUserRegion": true,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
      },
      {
          "id": 437,
          "name": "Delhi",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
      },
      {
          "id": 438,
          "name": "Rajasthan",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 428,
          "autosavetimelimit": 900000
      },
      {
          "id": 439,
          "name": "Chandigarh",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
      },
      {
          "id": 440,
          "name": "Himachal Pradesh",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 439,
          "autosavetimelimit": 900000
      },
      {
          "id": 441,
          "name": "Haryana",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
      },
      {
          "id": 442,
          "name": "Jammu & Kashmir",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
      },
      {
          "id": 443,
          "name": "Punjab",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 429,
          "autosavetimelimit": 900000
      },
      {
          "id": 444,
          "name": "West Bengal",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
      },
      {
          "id": 445,
          "name": "Odisha",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
      },
      {
          "id": 446,
          "name": "Assam",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
      },
      {
          "id": 447,
          "name": "Bihar",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
      },
      {
          "id": 448,
          "name": "Jharkhand",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 430,
          "autosavetimelimit": 900000
      },
      {
          "id": 449,
          "name": "ROM (Pune)",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 451,
          "autosavetimelimit": 900000
      },
      {
          "id": 450,
          "name": "Mumbai",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 433,
          "autosavetimelimit": 900000
      },
      {
          "id": 451,
          "name": "Nagpur",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 433,
          "autosavetimelimit": 900000
      },
      {
          "id": 452,
          "name": "Gujarat",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 433,
          "autosavetimelimit": 900000
      },
      {
          "id": 453,
          "name": "Goa - Corlim",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 431,
          "autosavetimelimit": 900000
      },
      {
          "id": 454,
          "name": "CG",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "HH:mm",
          "language": "xx",
          "parentRegionId": 431,
          "autosavetimelimit": 900000
      },
      {
          "id": 455,
          "name": "MP",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 431,
          "autosavetimelimit": 900000
      },
      {
          "id": 456,
          "name": "Karnataka",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
      },
      {
          "id": 457,
          "name": "Kerala",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
      },
      {
          "id": 458,
          "name": "Andhra Pradesh",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
      },
      {
          "id": 459,
          "name": "Telangana",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
      },
      {
          "id": 460,
          "name": "TN-1",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 461,
          "autosavetimelimit": 900000
      },
      {
          "id": 461,
          "name": "TN-2",
          "isDefaultUserRegion": false,
          "isLaunch": false,
          "timezone": "UTC +5:30",
          "dateformat": "dd/MM/yyyy",
          "timeformat": "hh:mm a",
          "language": "xx",
          "parentRegionId": 432,
          "autosavetimelimit": 900000
      }
  ]
}];
const mainData = dropDownData[0].data;
const seperatedData = dropDownData[0].data;;
var dropDownStrings = [];
var mainDropDownStrings = [];
var mainArrayCount = 0;
var nestedArray = [];
export default function Login({onLogin, username, setUsername}) {


 useEffect(() =>{
    for(var i = 0; i<mainData.length; i++)
    {

        if(mainData[i].parentRegionId == 0)
        {
             // for child objects
      dropDownStrings = [];
      for(var j = 0; j<seperatedData.length; j++)
      {
        
        if(mainData[i].id == seperatedData[j].parentRegionId)
        {
         dropDownStrings.push({'id':seperatedData[j].id,'value':seperatedData[j].name})
        }
      }
      mainDropDownStrings.push({'id':mainData[i].id,'value':mainData[i].name,'childs':dropDownStrings})
        }

    }

    if(mainArrayCount != mainData.length)
    {
        dropDownStrings = [];
        mainArrayCount = mainDropDownStrings.length;
        mainDropDownStrings = setSubDropDownStrings(mainDropDownStrings);
    }
   
 },[]);

 setSubDropDownStrings = (arrayOfStrings) =>{
    console.log('iam coming here')
    var others = [];
    for(var i = 0; i<arrayOfStrings.length; i++)
    {
        if(arrayOfStrings[i].childs != null && arrayOfStrings[i].childs.length != 0)
        {
         for(var j = 0; j<arrayOfStrings[i].childs.length; j++)
         {
           mainArrayCount = mainArrayCount + 1;
           for(var k = 0; k<mainData.length; k++)
             {
                console.log('id',arrayOfStrings[i].childs[j].id)
                console.log('parentId',mainData[k].parentRegionId)
               if(arrayOfStrings[i].childs[j].id == mainData[k].parentRegionId)
               {
                mainArrayCount = mainArrayCount + 1;
                if(arrayOfStrings[i].childs[j].childs != null && arrayOfStrings[i].childs[j].childs.length != 0)
                {
                    var childData = arrayOfStrings[i].childs[j].childs;
                    childData.push({'id':mainData[k].id,'value':mainData[k].name})
                    arrayOfStrings[i].childs[j].childs = childData;
                }
                else{

                    arrayOfStrings[i].childs[j] = {'id':arrayOfStrings[i].childs[j].id,'value':arrayOfStrings[i].childs[j].value,'childs':[{'id':mainData[k].id,'value':mainData[k].name}]}

                }
                // mainDropDownStrings = [];
                // mainDropDownStrings = arrayOfStrings;
                others = arrayOfStrings;
                // return others;
               }
               else
               {
                others = arrayOfStrings;
                // return others;
               }
             
         }
        }
         if(mainArrayCount != mainData.length && mainArrayCount <= mainData.length)
         {
            mainDropDownStrings = setSubDropDownStrings(arrayOfStrings[i].childs);
             console.log('arrayOfSTrings length',others)
            //  return others;
         }
         else
         {
             console.log('mainDropDownStringsArray',arrayOfStrings)
             console.log('original data',mainData)
            //  return arrayOfStrings;
         }
        }
    }
    nestedArray = others;
    return others
 }

 renderDropDown = () =>{
    console.log('iam called')
    console.log(nestedArray)
  return  <CheckboxTree
    data={nestedArray}
    textField="shopName"
    childField="childs"
    textStyle={{ color: 'black' }}
    iconColor="black"
    iconSize={26}
    openIcon={<AntDesign name="arrowdown" size={26} />}
    closeIcon={<AntDesign name="arrowright" size={26} />}
    checkIcon={<View />}
    unCheckIcon={<View />}
    renderItem={item => (
      <View style={styles.wrapItem}>
        <AntDesign
          style={styles.iconItem}
          name="folderopen"
          size={20}
        />
        <Text style={styles.text}>{item.value}</Text>
      </View>
    )}
    onSelect={item => {
      console.log(`Selected ${item.length} item`);
    }}
  />
 }
 

  openDocument = () => {
  //   const path = FileViewer.open("https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf") // absolute-path-to-my-local-file.
  // .then(() => {
  //   // success
  //   console.log('successs')
  // })
  // .catch((error) => {
  //   // error
  //   console.log('eroor',error)
  // });
  console.log('dropDownData',dropDownData[0].data);


  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Button title={'Login'} onPress={openDocument} />
      {/* <Dropdown
                style={this.getIsRequired() ? styles.requiredInputStyle : styles.inputStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={this.state.records}
                search
                containerStyle={styles.containerStyle}
                maxHeight={300}
                labelField="label"
                valueField="value"
                dropdownPosition={'auto'}
                placeholder={translate('select')}
                searchPlaceholder={translate('search')}
                value={this.state.value}
                onFocus={this.state.isFocus}
                onBlur={this.state.isBlur}
                onChange={item => {
                    this.setValue(item);
                }}
                renderItem={this.dropdownRenderItem}
            /> */}
           {/* { this.renderDropDown() } */}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 10
},
displayName: {
    fontSize: 13,
    marginBottom: 4,
    // fontFamily: fonts.type.newMedium,
    // color: colors.lableTextColor,
    textTransform: 'capitalize'
},
// inputStyle:{
//     borderColor: '#D4DAE5', 
//     borderWidth: 1,
//     backgroundColor: colors.white,
//     borderRadius: 4,
//     fontSize: 14,
//     fontFamily: fonts.type.newRegular,
//     includeFontPadding: false,
//     paddingVertical: 1
// },
inputStyle: {
    borderColor: '#D4DAE5',
    borderWidth: 1,
    marginBottom: 6,
    borderRadius: 4,
    fontSize: 14,
    // fontFamily: fonts.type.newRegular,
    includeFontPadding: false,
    paddingHorizontal: 12,
    paddingVertical: 5,
},
requiredInputStyle: {
    // borderColor: colors.red,
    borderWidth: 1,
    marginBottom: 6,
    borderRadius: 4,
    fontSize: 14,
    // fontFamily: fonts.type.newRegular,
    includeFontPadding: false,
    lineHeight: 16,
    paddingHorizontal: 12,
    paddingVertical: 5
},
placeholderStyle: {
    fontSize: 14,
    // color: colors.hintColor
},
selectedTextStyle: {
    fontSize: 14,
    // fontFamily: fonts.type.newRegular,
    includeFontPadding: false,
    // color: colors.black
},
iconStyle: {
    width: 20,
    height: 20,
},
inputSearchStyle: {
    height: 40,
    fontSize: 14,
},
containerStyle: {
    borderColor: '#D4DAE5',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4
},
modal3: {
    height: 300,
    width: 300
},
modal: {
    justifyContent: 'center',
    alignItems: 'center'
},
btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
},
item: {
    borderBottomColor: '#D4DAE5',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12
},
textItem: {
    flex: 1,
    fontSize: 14,
    // fontFamily: fonts.type.newRegular,
    includeFontPadding: false,
    // color: colors.black
},
icon: {
    marginRight: 5,
},
customErrorMessage: {
    fontSize: 12,
    // fontFamily: fonts.type.newRegular,
    // color: colors.red
},
displayNameContainer: {
    flexDirection: 'row'
},
astric: {
    // color: colors.red,
    justifyContent: 'center',
    fontSize: 13,
    // fontFamily: fonts.type.newMedium
},
selectedStyleChip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    // borderColor: colors.lightGray, 
    borderWidth: 1,
    // backgroundColor: colors.white,
    // shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    // shadowOffset: {
    //     width: 0,
    //     height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
    // Shadows and elevation are creating UI on Android while tapping on chip
},
textSelectedStyle: {
    marginRight: 5,
    fontSize: 14,
    // fontFamily: fonts.type.newRegular,
},
// container: {
//     flex: 1,
//     paddingVertical: 40,
//   },
  wrapItem: {
    flexDirection: 'row',
    marginVertical: 8
  },
  text: {
    fontSize: 18
  },
  iconItem:{
    marginHorizontal: 8
  }
});
