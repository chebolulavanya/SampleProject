// import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// import { StyleSheet, Text, View, Dimensions,Button } from 'react-native';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// // fake data generator
// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset}-${new Date().getTime()}`,
//     content: `item ${k + offset}`
//   }));

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// /**
//  * Moves an item from one list to another list.
//  */
// const move = (source, destination, droppableSource, droppableDestination) => {
//   const sourceClone = Array.from(source);
//   const destClone = Array.from(destination);
//   const [removed] = sourceClone.splice(droppableSource.index, 1);

//   destClone.splice(droppableDestination.index, 0, removed);

//   const result = {};
//   result[droppableSource.droppableId] = sourceClone;
//   result[droppableDestination.droppableId] = destClone;

//   return result;
// };
// const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: "none",
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // change background colour if dragging
//   background: isDragging ? "lightgreen" : "grey",

// //   // styles we need to apply on draggables
// //   ...draggableStyle
// });
// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   padding: grid,
//   width: 250
// });

// function QuoteApp() {
//   const [state, setState] = useState([getItems(10), getItems(5, 10)]);

//   function onDragEnd(result) {
//     const { source, destination } = result;

//     // dropped outside the list
//     if (!destination) {
//       return;
//     }
//     const sInd = +source.droppableId;
//     const dInd = +destination.droppableId;

//     if (sInd === dInd) {
//       const items = reorder(state[sInd], source.index, destination.index);
//       const newState = [...state];
//       newState[sInd] = items;
//       setState(newState);
//     } else {
//       const result = move(state[sInd], state[dInd], source, destination);
//       const newState = [...state];
//       newState[sInd] = result[sInd];
//       newState[dInd] = result[dInd];

//       setState(newState.filter(group => group.length));
//     }
//   }

//   return (
//     <View>
//       <Button
//         title="Button"
//         onClick={() => {
//           setState([...state, []]);
//         }}
//       >
//         Add new group
//       </Button>
//       <Button
//         title="Button"
//         onClick={() => {
//           setState([...state, getItems(1)]);
//         }}
//       >
//         Add new item
//       </Button>
//       <View style={{ display: "flex" }}>
//         <DragDropContext onDragEnd={onDragEnd}>
//           {state.map((el, ind) => (
//             <Droppable key={ind} droppableId={`${ind}`}>
//               {(provided, snapshot) => (
//                 <View
//                   ref={provided.innerRef}
//                   style={getListStyle(snapshot.isDraggingOver)}
//                   {...provided.droppableProps}
//                 >
//                   {el.map((item, index) => (
//                     <Draggable
//                       key={item.id}
//                       draggableId={item.id}
//                       index={index}
//                     >
//                       {(provided, snapshot) => (
//                         <View
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           style={getItemStyle(
//                             snapshot.isDragging,
//                             provided.draggableProps.style
//                           )}
//                         >
//                           <View
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-around"
//                             }}
//                           >
//                             {item.content}
//                             <Button
//                               title="Button"
//                               onClick={() => {
//                                 const newState = [...state];
//                                 newState[ind].splice(index, 1);
//                                 setState(
//                                   newState.filter(group => group.length)
//                                 );
//                               }}
//                             >
//                               delete
//                             </Button>
//                           </View>
//                         </View>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </View>
//               )}
//             </Droppable>
//           ))}
//         </DragDropContext>
//       </View>
//     </View>
//   );
// }

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<QuoteApp />, rootElement);
// export default QuoteApp;




import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { StyleSheet, Text, View, Dimensions,Button } from 'react-native';

const itemList = [
  {
    "draggable_id": "draggable_1",
    "row_items": [
      {
        "id": "1",
        "name": "A",
        "background_color": "red"
      },
      {
        "id": "2",
        "name": "B",
        "background_color": "pink"
      },
      {
        "id": "3",
        "name": "C",
        "background_color": "purple"
      }
    ]
  },
  {
    "draggable_id": "draggable_2",
    "row_items": [
      {
        "id": "13",
        "name": "E",
        "background_color": "yellow"
      },
      {
        "id": "14",
        "name": "F",
        "background_color": "blue"
      },
      {
        "id": "15",
        "name": "G",
        "background_color": "cyan"
      }
    ]
  },
  {
    "draggable_id": "draggable_3",
    "row_items": [
      {
        "id": "17",
        "name": "I",
        "background_color": "grey"
      },
      {
        "id": "18",
        "name": "J",
        "background_color": "green"
      },
      {
        "id": "19",
        "name": "K",
        "background_color": "orange"
      }
    ]
  }
];

class QuoteApp extends React.Component {
  state = {
    itemList: itemList
  };

  getList = (droppableId) => {
    console.log('getList ::droppableId', droppableId);
    let item_list = this.state.itemList;
    let filtered_item = item_list.find(tappedItem => tappedItem.draggable_id == droppableId);
    console.log('getList :: filtered_item', filtered_item);
    return filtered_item;
  }


  getIndex = (droppableId) => {
    console.log('getIndex ::droppableId', droppableId);
    let item_list = this.state.itemList;
    let findIndex = item_list.findIndex(tappedItem => tappedItem.draggable_id == droppableId);
    console.log('getIndex :: findIndex', findIndex);
    return findIndex;
  }
  onDragEnd = (result) => {
    try {
      const { source, destination } = result;
      console.log('onDragEnd :: droppableId', result);
      // dropped outside the list
      if (!destination) {
        return;
      }
      console.log('onDragEnd :: getList 1', this.state.itemList);
      let state_item_list = this.state.itemList;

      if (source.droppableId === destination.droppableId) {
        let result_index = this.getIndex(source.droppableId);
        console.log('onDragEnd :: getList', this.getList(source.droppableId));
        let result_items = this.reorder(this.getList(source.droppableId), source.index, destination.index);
        console.log('onDragEnd :: result_items', result_items);
        state_item_list[result_index] = result_items;

        this.setState({ itemList: state_item_list });
      } else {
        let result_source_index = this.getIndex(source.droppableId);
        let result_dest_index = this.getIndex(destination.droppableId);
        let result_m = this.move(this.getList(source.droppableId), this.getList(destination.droppableId), source, destination);
        if (result_m == undefined || result_m.source == undefined || result_m.dest == undefined) {
          return;
        }
        state_item_list[result_source_index] = result_m.source;
        state_item_list[result_dest_index] = result_m.dest;
        this.setState({ itemList: state_item_list });
      }
    } catch (e) {
      console.log('onDragEnd ::  exception', e);
    }
  }

  reorder = (list, startIndex, endIndex) => {
    console.log('reorder', list.row_items, startIndex, endIndex);
    let result = Array.from(list.row_items);
    let result_old = result[startIndex];
    let result_new = result[endIndex];
    result[startIndex] = result_new;
    result[endIndex] = result_old;
    console.log('reorder :: result', result);
    let new_obj = { ...list, row_items: result };
    console.log('reorder :: new_obj', new_obj);
    return new_obj;
  }

  /**
 * Moves an item from one list to another list.
 */
  move = (source, destination, droppableSource, droppableDestination) => {
    try {
      const { row_items } = source;
      let result = {};

      console.log('move :: source :: destination', source, destination);
      console.log('move :: droppableSource :: droppableSource', droppableSource, droppableDestination);
      let sourceClone = Array.from(row_items);
      let destClone = Array.from(destination.row_items);
      let first_item = sourceClone[droppableSource.index];
      let second_item = destClone[droppableDestination.index];
      console.log('move :: first_item', first_item);
      console.log('move :: second_item', second_item);
      if (first_item == undefined || second_item == undefined) {
        return;
      }
      sourceClone[droppableSource.index] = second_item;
      destClone[droppableDestination.index] = first_item;
      let source_new_obj = { ...source, row_items: sourceClone };
      let dest_new_obj = { ...destination, row_items: destClone };
      console.log('move :: source_new_obj', source_new_obj);
      console.log('move :: dest_new_obj', dest_new_obj);
      result.source = source_new_obj;
      result.dest = dest_new_obj;
      console.log('move :: dest_new_obj :: result', result);
      return result;

    } catch (e) {
      console.log('move ::  exception', e);
    }
  };


  render() {
    console.log('itemList :: render', this.state.itemList);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.itemList.map((item, index) => (
          <Droppable droppableId={item.draggable_id} direction="horizontal" key={item.draggable_id}>
            {(provided, snapshot) => (
              <View
                ref={provided.innerRef}
                style={getFirstListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {item.row_items.map((item_row, index) => (
                  <Draggable key={item_row.id} draggableId={item_row.id} index={index}>
                    {(provided, snapshot) => (
                      <View
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style, item_row
                        )}
                      >
                        {item_row.name}
                      </View>
                    )}
                  </Draggable>
                ))}
              </View>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    );
  }
}

const grid = 8;

const getFirstListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  padding: grid,
  width: 400
});


const getItemStyle = (isDragging, draggableStyle, item) => ({
  borderRadius: 10,
  height: 70,
  fontSize: 18,
  fontWeight: 'bold',
  width: 70,
  padding: grid * 2,
  marginRight: 10,
  background: item.background_color,
  ...draggableStyle
});


export default QuoteApp;