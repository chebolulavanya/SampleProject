import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, FlatList, Image, useRef, createRef } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList, DraxScrollView, List, DragEvent } from 'react-native-drax';
import DraggableView from './draggableView';
import { FlatGrid } from 'react-native-super-grid';

const gestureRootViewStyle = { flex: 1 };

export default function DraggableListViews() {
  const draggableItemList = [
    {
      "id": 1,
      "name": "A",
      "background_color": "red"
    },
    {
      "id": 2,
      "name": "B",
      "background_color": "pink"
    },
    {
      "id": 3,
      "name": "C",
      "background_color": "orange"

    },
    {
      "id": 4,
      "name": "D",
      "background_color": "#aaaaff"
    },
    {
      "id": 5,
      "name": "E",
      "background_color": "blue"
    },
    {
      "id": 6,
      "name": "F",
      "background_color": "green"
    },
    {
      "id": 7,
      "name": "G",
      "background_color": "brown"

    },
    {
      "id": 8,
      "name": "H",
      "background_color": "#aaaaff"
    },
    {
      "id": 9,
      "name": "I",
      "background_color": "red"
    },
    {
      "id": 10,
      "name": "J",
      "background_color": "pink"
    },
    {
      "id": 11,
      "name": "K",
      "background_color": "orange"

    },
    {
      "id": 12,
      "name": "L",
      "background_color": "#aaaaff"
    }

  ];
  const FirstReceivingItemList = [
    {
      "id": 13,
      "name": "M",
      "background_color": '#ffaaff'
    },
    {
      "id": 14,
      "name": "N",
      "background_color": '#ffaaff'
    },
    {
      "id": 15,
      "name": "O",
      "background_color": '#ffaaff'
    },
    {
      "id": 16,
      "name": "P",
      "background_color": '#ffaaff'
    }
  ];

  // const scrollRef = useRef<ScrollView>(null);
  const MyRef = React.createRef < ScrollView > (null);


  const data = [{ "id": '1', "value": ['A', 'B', 'C', 'D'] }, { "id": '2', "value": ['E', 'F', 'G', 'H'] }, { "id": '3', "value": ['I', 'J', 'K', 'L'] }, { "id": '4', "value": ['M', 'N', 'O', 'P'] }, { "id": '5', "value": ['Q', 'R', 'S', 'T'] }, { "id": '6', "value": ['U', 'V', 'W', 'Y', 'Z'] }];
  const data1 = ['1','2','3','4','5','6','7','8','9','10']

  const length = data.length
  const size = Dimensions.get('window').width / length;
  const [receivingItemList, setReceivedItemList] = React.useState(FirstReceivingItemList);
  const [dragItemMiddleList, setDragItemListMiddle] = React.useState(draggableItemList);
  const [dragNewItemsList, setDragNewItemsList] = React.useState(data);

  const DragUIComponent = ({ item, index }) => {
    // console.log(item)
    return (
      <DraxView
        // draggable={true} 
        // receptive={true}
        style={[styles.centeredContent, styles.draggableBox, { backgroundColor: 'pink' }]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={150}
        // draggable={dragNewItemsList.length > 0}
        key={index}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          const dragging = viewState && viewState.dragStatus !== 0;
          return (
            <View>
              <Text style={styles.textStyle}>{item}</Text>
            </View>
          );
        }}
        renderHoverContent={({ viewState }) => {
          // const offsetStyle = viewState.grabOffset
          // console.log(viewState.grabOffset)
          // ? {
          //   marginLeft: viewState.grabOffset.x - 48,
          //   marginTop: viewState.grabOffset.y - 48,
          // }
          // : undefined;
          const offsetStyle =
          {
            marginLeft: 43,
            marginTop: 50,
          }

          const combinedStyles = [
            styles.centeredContent,
            styles.draggableBox,
            styles.cyan,
            offsetStyle,
          ];
          if (viewState.dragStatus === 1) {
            combinedStyles.push(styles.hoverDragging);
          }
          return (
            <View style={combinedStyles}>
              <Text style={styles.stagedCount}>{item}</Text>
            </View>
          );
        }}
        onDragDrop={(event) => {
          console.log('iam dragged')
          let selected_item = dragNewItemsList[event.dragged.payload];
          console.log('drop::index', selected_item, index);
          console.log('drop :: payload', event.dragged.payload);
          let newDragItemMiddleList = [...dragNewItemsList];
          // console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
          newDragItemMiddleList[event.dragged.payload] = dragNewItemsList[index];
          setDragNewItemsList(newDragItemMiddleList);
          // let newReceivingItemList = [...receivingItemList];
          // console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
          // newReceivingItemList[index] = selected_item;
          // setReceivedItemList(newReceivingItemList);

          // let newDragItemMiddleList = [...dragItemMiddleList];
          // console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
          // newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
          // console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
          // setDragItemListMiddle(newDragItemMiddleList);
        }
        }
        onReceiveDragDrop={(event) => {
          console.log('iam dropped')
          console.log(event.dragged.payload)
          console.log(index)
          let selected_item = dragNewItemsList[event.dragged.payload];
          console.log('drop::index', selected_item, index);
          // console.log('onReceiveDragDrop :: payload', event.dragged.payload);
          // let newReceivingItemList = [...receivingItemList];
          // console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
          // newReceivingItemList[index] = selected_item;
          // setReceivedItemList(newReceivingItemList);

          // let newDragItemMiddleList = [...dragItemMiddleList];
          // console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
          // newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
          // console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
          // setDragItemListMiddle(newDragItemMiddleList);
        }}
      >
        <Text style={styles.textStyle}>{item}</Text>

      </DraxView>
    );
  }

  const ReceivingZoneUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.draggableBox, { backgroundColor: item.background_color }]}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selected_item = dragItemMiddleList[event.dragged.payload];
          console.log('onReceiveDragDrop::index', selected_item, index);
          console.log('onReceiveDragDrop :: payload', event.dragged.payload);
          let newReceivingItemList = [...receivingItemList];
          console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
          newReceivingItemList[index] = selected_item;
          setReceivedItemList(newReceivingItemList);

          let newDragItemMiddleList = [...dragItemMiddleList];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
          newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
          setDragItemListMiddle(newDragItemMiddleList);
        }}
      />
    );
  }

  const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
  }

  renderCity = (city, index) => {
    // console.log(city)
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          {/* <Image source={require('../../assets/images/ambica.jpeg')} style={styles.image} />
          <Text style={styles.title}>{city.title}</Text> */}
          {/* <SafeAreaView style={{padding:10}}> */}
          <FlatList data={city.value} renderItem={(item, index) =>
            DragUIComponent(item, index)}>
          </FlatList>

          {/* </SafeAreaView> */}

          {/* <DraggableView></DraggableView> */}
        </View>
      </View>
    );
  }

  const isCloseToRight = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToRight = 20;
    return layoutMeasurement.width + contentOffset.x >= contentSize.width - paddingToRight;
  };

  const renderMainItem = () => {
    // const scrollViewRef = useRef<ScrollView>(null);
    return (
      <GestureHandlerRootView
        style={gestureRootViewStyle}>
        <View>
          <Text style={styles.headerStyle}>{'Drag drop and swap between lists'}</Text>
        </View>
        <DraxProvider>
          <View style={styles.container}>
            {/* {receivingItemList.map((item, index) => ReceivingZoneUIComponent({ item, index }))} */}
            <View style={styles.draxListContainer}>
            
            <DraxList
              data={dragItemMiddleList}
              renderItemContent={DragUIComponent}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              ItemSeparatorComponent={FlatListItemSeparator}
              scrollEnabled={true}
            />
          </View>
            {/* <View style={styles.draxListContainer}> */}
            {/* <DraxList
              data={draggableItemList}
              renderItemContent={DragUIComponent}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              ItemSeparatorComponent={FlatListItemSeparator}
              scrollEnabled={true}
            /> */}
            {/* <ScrollView horizontal showsVerticalScrollIndicator={false} scrollEnabled={true} ref={this.MyRef} pagingEnabled
              onScroll={({ nativeEvent }) => {
                
                if (isCloseToRight(nativeEvent)) {
                  //do something
                  console.log('iam at right')
                }
                // if (isCloseToBottom(nativeEvent)) {
                //   //do something
                // }
              }}

              scrollEventThrottle={400}
            >
              {data.map((index, city) => {
                return renderCity(index, city);
              })}
            </ScrollView> */}
            {/* </View> */}

            {/* <FlatList data={item.value} contentContainerStyle={{
                  flexGrow: 1,
                  }} renderItem={(item, index) =>
                  DragUIComponent(item, index)}>
                </FlatList>
               
              )} */}
            {/* <FlatList
            refs={comp => this._listView = comp}
              data={data1}
              renderItem={({ item,index }) => (
                DragUIComponent(item,index)
              )}
              horizontal={true}
              // keyExtractor={item => item.id}
              // numColumns={data.length}
        // initialScrollI÷ndex={this.getData().length - 1}
            /> */}
          </View>
        </DraxProvider>
      </GestureHandlerRootView>
    )
  }

  const renderGrid = () => {
    
    return(
    <GestureHandlerRootView
        style={gestureRootViewStyle}>
  <DraxProvider>
   <View style={styles.container}>
  <FlatGrid
      itemDimension={300}
      data={data}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={50}
      horizontal={true}
      renderItem={({ item,index }) => (
        <FlatList
            refs={comp => this._listView = comp}
              data={data1}
              renderItem={({ item,index }) => (
                DragUIComponent(item,index)
              )}
              ></FlatList>
      )}
    />
     </View>
      </DraxProvider>
        </GestureHandlerRootView>
    )
  }

  return (
    renderMainItem()
    // renderGrid()

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
    // backgroundColor:'red'
  },
  centeredContent: {
    borderRadius: 10,
  },
  // receivingZone: {
  //   height: (Dimensions.get('window').width / 4) - 12,
  //   borderRadius: 10,
  //   width: (Dimensions.get('window').width / 4) - 12,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginRight: 5
  // },
  receivingZone: {
    height: 100,
    borderRadius: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  // draggableBox: {
  //   width: (Dimensions.get('window').width / 4) - 12,
  //   height: (Dimensions.get('window').width / 4) - 12,
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginRight: 5
  // },
  draggableBox: {
    width: (Dimensions.get('window').width / 4) - 12,
    height: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  receivingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  itemSeparator: {
    height: 15
  },
  draxListContainer: {
    padding: 5,
    height: 200
  },
  receivingZoneContainer: {
    padding: 5,
    height: 100
  },
  textStyle: {
    fontSize: 18
  },
  headerStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  cardContainer: {
    justifyContent: 'center',
  },
  card: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    // width: 220,
  },

});