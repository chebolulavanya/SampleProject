import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity,Header } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,NestableScrollContainer, NestableDraggableFlatList
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView }  from "react-native-gesture-handler";

const NUM_ITEMS = 5;
function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
  key: string;
  label: string;
  height: number;
  width: number;
  backgroundColor: string;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${index}`,
    label: String(index) + "",
    height: 100,
    width: 60 + Math.random() * 40,
    backgroundColor,
  };
});
const initialData1: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
    const backgroundColor = getColor(index);
    return {
      key: `item-${index}`,
      label: String(index) + "",
      height: 100,
      width: 60 + Math.random() * 40,
      backgroundColor,
    };
  });
  const initialData2: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
    const backgroundColor = getColor(index);
    return {
      key: `item-${index}`,
      label: String(index) + "",
      height: 100,
      width: 60 + Math.random() * 40,
      backgroundColor,
    };
  });
  const initialData3: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
    const backgroundColor = getColor(index);
    return {
      key: `item-${index}`,
      label: String(index) + "",
      height: 100,
      width: 60 + Math.random() * 40,
      backgroundColor,
    };
  });

  const keyExtractor = (item: Item) => item.key;


export default function DraggableView() {
  const [data, setData] = useState(initialData);

const [data1, setData1] = useState(initialData1);
const [data2, setData2] = useState(initialData2);
const [data3, setData3] = useState(initialData3);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    return (
        
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? "red" : item.backgroundColor },
          ]}
        >
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      </ScaleDecorator>


    );
  };

  return (
    <GestureHandlerRootView style={{flex: 1,alignItems:'center'}}>
    <DraggableFlatList
      data={data}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}
    />
          </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});


// import React, { useState } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import {
//   NestableScrollContainer,
//   NestableDraggableFlatList,
//   ScaleDecorator,
//   RenderItemParams,
// } from 'react-native-draggable-flatlist';

// import { mapIndexToData, Item } from '../utils/helper';
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// const NUM_ITEMS = 5;

// const initialData1: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);
// const initialData2: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);
// const initialData3: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);

// export default function Basic() {
//   const [data1, setData1] = useState(initialData1);
//   const [data2, setData2] = useState(initialData1);
//   const [data3, setData3] = useState(initialData1);

//   const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
//     return (
//       <ScaleDecorator>
//         <TouchableOpacity
//           activeOpacity={1}
//           onLongPress={drag}
//           disabled={isActive}
//           style={[
//             styles.rowItem,
//             { backgroundColor: isActive ? 'red' : item.backgroundColor },
//           ]}>
//           <Text style={styles.text}>{item.text}</Text>
//         </TouchableOpacity>
//       </ScaleDecorator>
//     );
//   };

//   const keyExtractor = (item: Item) => item.key;

//   return (
//     <GestureHandlerRootView style={{flex: 1,alignItems:'center'}}>
//     <NestableScrollContainer style={{ backgroundColor: 'seashell' }} horizontalScrollView="true">
//       <Header text={'List 1'} />
//       <NestableDraggableFlatList
//         data={data1}
//         onDragEnd={({ data }) => setData1(data)}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//       />
//       <Header text={'List 2'} />
//       <NestableDraggableFlatList
//         data={data2}
//         onDragEnd={({ data }) => setData2(data)}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//       />
//       <Header text={'List 3'} />
//       <NestableDraggableFlatList
//         data={data3}
//         onDragEnd={({ data }) => setData3(data)}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//       />
//     </NestableScrollContainer>
//     </GestureHandlerRootView>
//   );
// }

// function Header({ text }: { text: string }) {
//   return (
//     <View>
//       <Text
//         style={{
//           fontSize: 24,
//           fontWeight: 'bold',
//           padding: 24,
//           color: '#555',
//         }}>
//         {text}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   rowItem: {
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
