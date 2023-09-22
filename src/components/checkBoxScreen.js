import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckboxTree from 'react-native-checkbox-tree';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const recursiveData = [
  {
    // shopReportName: 'Name 1',
    // shopCode: '00001',
    // shopType: '2',
    regionId: 1,
    regionName: 'Name 1',
    childs: [
      {
        // shopReportName: 'Name 2',
        // shopCode: '00002',
        // shopType: '3',
        regionId: 2,
        regionName: 'Name 2',
        childs: [
          {
            // shopReportName: 'Name 3',
            // shopCode: '00003',
            // shopType: '4',
            regionId: 3,
            regionName: 'Name 3',
            childs: [
              {
                // shopReportName: 'Name 4',
                // shopCode: '00004',
                // shopType: '4',
                regionId: 4,
                regionName: 'Name 4',
              },
              {
                // shopReportName: 'Name 5',
                // shopCode: '00005',
                // shopType: '4',
                regionId: 5,
                regionName: 'Name 5',
                childs: [
                  {
                    // shopReportName: 'Name 6',
                    // shopCode: '00006',
                    // shopType: '4',
                    regionId: 7,
                    regionName: 'Name 6',
                    childs: [
                      {
                        // shopReportName: 'Name 7',
                        // shopCode: '00007',
                        // shopType: '4',
                        regionId: 7,
                        regionName: 'Name 7',
                      },
                    ],
                  },
                ],
              },
              {
                // shopReportName: 'Name 8',
                // shopCode: '00008',
                // shopType: '4',
                regionId: 8,
                regionName: 'Name 8',
              },
            ],
          },
        ],
      },
    ],
  },
];


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

// export interface Props {}

// const CheckboxTreeScreen: React.FC<Props> = _props => {
//   const [data] = useState<any[]>(recursiveData);
//   const ref: any = useRef();
// export interface Props {}

const CheckboxTreeScreen = (props) => {
  const [data] = useState(recursiveData);
  const [val, setValue] = useState([]);
  const ref = useRef();


  useEffect(() => {
    if (ref && ref.current) {
      ref.current.setSelectedItem([
        {
        //   shopReportName: 'Name 1',
        //   shopCode: '00001',
        //   shopType: '2',
          regionId: 1,
          regionName: 'Name 1',
        },
        {
        //   shopReportName: 'Name 2',xs
        //   shopCode: '00002',
        //   shopType: '3',
          regionId: 2,
          regionName: 'Name 2',
        },
      ]);
    }
  }, [ref]);

// useEffect(() =>{
//     // if(nestedArray.length != 0)
//     // {
//     //     var data = nestedArray[0];
//     //     if (ref && ref.current) {
//     //         ref.current.setSelectedItem([
//     //           {
//     //           //   shopReportName: 'Name 1',
//     //           //   shopCode: '00001',
//     //           //   shopType: '2',
//     //           regionId: nestedArray[0].id,
//     //           regionName: nestedArray[0].value,
//     //           },
//     //         //   {
//     //         //   //   shopReportName: 'Name 2',
//     //         //   //   shopCode: '00002',
//     //         //   //   shopType: '3',
//     //         //     regionId: 2,
//     //         //     regionName: 'Name 2',
//     //         //   },
//     //         ]);
//     //       }
//     // }
    
//     for(var i = 0; i<mainData.length; i++)
//     {

//         if(mainData[i].parentRegionId == 0)
//         {
//              // for child objects
//       dropDownStrings = [];
//       for(var j = 0; j<seperatedData.length; j++)
//       {
        
//         if(mainData[i].id == seperatedData[j].parentRegionId)
//         {
//          dropDownStrings.push({regionId:seperatedData[j].id,regionName:seperatedData[j].name})
//         }
//       }
//       mainDropDownStrings.push({regionId:mainData[i].id,regionName:mainData[i].name,childs:dropDownStrings})
//         }

//     }

//     if(mainArrayCount != mainData.length)
//     {
//         dropDownStrings = [];
//         mainArrayCount = mainDropDownStrings.length;
//         mainDropDownStrings = setSubDropDownStrings(mainDropDownStrings);
//     }
   
//  },[]);

 
setSubDropDownStrings =  async (arrayOfStrings) =>{
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
                console.log('id',arrayOfStrings[i].childs[j].regionId)
                console.log('parentId',mainData[k].parentRegionId)
               if(arrayOfStrings[i].childs[j].regionId == mainData[k].parentRegionId)
               {
                mainArrayCount = mainArrayCount + 1;
                if(arrayOfStrings[i].childs[j].childs != null && arrayOfStrings[i].childs[j].childs.length != 0)
                {
                    var childData = arrayOfStrings[i].childs[j].childs;
                    childData.push({regionId:mainData[k].id,regionName:mainData[k].name})
                    arrayOfStrings[i].childs[j].childs = childData;
                }
                else{

                    arrayOfStrings[i].childs[j] = {regionId:arrayOfStrings[i].childs[j].id,regionName:arrayOfStrings[i].childs[j].value,childs:[{regionId:mainData[k].id,regionName:mainData[k].name}]}

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
            setSubDropDownStrings(arrayOfStrings[i].childs);
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
   await setValue(others);
    console.log('main value is',val)
    if(others.length != 0)
    {
        if (ref && ref.current) {
            ref.current.setSelectedItem([
              {
              //   shopReportName: 'Name 1',
              //   shopCode: '00001',
              //   shopType: '2',
              regionId: others[0].regionId,
              regionName: others[0].regionName,
              },
            //   {
            //   //   shopReportName: 'Name 2',
            //   //   shopCode: '00002',
            //   //   shopType: '3',
            //     regionId: 2,
            //     regionName: 'Name 2',
            //   },
            ]);
          }
    }
 }

  return (
    <View style={styles.container}>
      <CheckboxTree
        ref={ref}
        data={data}
        textField="shopName"
        childField="childs"
        textStyle={{ color: 'black' }}
        iconColor="black"
        iconSize={26}
        openIcon={<AntDesign name="arrowdown" size={26} />}
        closeIcon={<AntDesign name="arrowright" size={26} />}
        renderItem={({ item, isSelect, isOpen, onOpen, onClose, onSelect }) => (
          <View style={styles.wrapItem}>
            {isOpen ? (
              <TouchableOpacity onPress={onClose}>
                <AntDesign size={30} name="arrowright" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onOpen}>
                <AntDesign size={30} name="arrowdown" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={onSelect}>
              <Ionicons
                size={26}
                name={isSelect ? 'checkbox-outline' : 'square-outline'}
              />
            </TouchableOpacity>
            <Text style={styles.name}>{item.regionName}</Text>
          </View>
        )}
        onSelect={item => {
          console.log(`Selected ${item.length} item`);
        }}
      />
    </View>
  );
};

export default CheckboxTreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
