import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { DraxProvider, DraxView } from 'react-native-drax';
import { GestureHandlerRootView }  from "react-native-gesture-handler";

const SampleDragDrop = () => {
  const [received, setReceived] = React.useState([]);
  const [staged, setStaged] = React.useState([]);
  return (
    <GestureHandlerRootView style={styles.container}>
    <DraxProvider>
      <View style={styles.container}>
        <DraxView
          style={[styles.centeredContent, styles.receivingZone, styles.magenta]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (
              <>
                <Text>Receiving Zone</Text>
                <Text style={styles.incomingPayload}>{payload || '-'}</Text>
                <Text style={styles.received}>{received.join(' ')}</Text>
              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            setReceived([
              ...received,
              event.dragged.payload || '?',
            ]);
          }}
        />
        <View style={{height: 10}} />
        <View style={styles.palette}>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.red]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'R'}
            longPressDelay={0}
          >
            <Text>Red</Text>
          </DraxView>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.green]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'G'}
            longPressDelay={0}
          >
            <Text>Green</Text>
          </DraxView>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.blue]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'B'}
            longPressDelay={0}
          >
            <Text>Blue</Text>
          </DraxView>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'Y'}
            longPressDelay={0}
          >
            <Text>Yellow</Text>
          </DraxView>
        </View>
        <View style={{height: 10}} />
        <DraxView
          dragPayload={staged.join(' ')}
          draggable={staged.length > 0}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            const dragging = viewState && viewState.dragStatus !== 0;
            const combinedStyles = [
                styles.centeredContent,
                styles.receivingZone,
                styles.cyan,
              ];
            if (dragging) {
              combinedStyles.push({ opacity: 0.2 });
            } else if (receivingDrag) {
              combinedStyles.push(styles.receiving);
            }
            return (
              <View style={{justifyContent: 'center',
              alignItems: 'center',height: 200,
              borderRadius: 10,backgroundColor: '#aaffff'}}>
                <Text>Staging Zone</Text>
                <Text style={styles.incomingPayload}>{payload || '-'}</Text>
                <Text style={styles.received}>{staged.join(' ')}</Text>
              </View>
            );
          }}
          renderHoverContent={({ viewState }) => {
            const offsetStyle = viewState.grabOffset
              ? {
                marginLeft: viewState.grabOffset.x - 30,
                marginTop: viewState.grabOffset.y - 30,
              }
              : undefined;
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
                <Text style={styles.stagedCount}>{staged.length}</Text>
              </View>
            );
          }}
          onReceiveDragDrop={(event) => {
            setStaged([
              ...staged,
              event.dragged.payload || '?',
            ]);
          }}
          onDragDrop={() => setStaged([])}
        />
      </View>
    </DraxProvider>
    </GestureHandlerRootView>
  );
}

const FlatListItemSeparator = () => {
        return (<View style={styles.itemSeparator} />);
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 20,
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
    backgroundColor:'red',
    height:600
    // alignItems: 'center',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    height: 200,
    borderRadius: 10,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  received: {
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  green: {
    backgroundColor: '#aaffaa',
  },
  blue: {
    backgroundColor: '#aaaaff',
  },
  red: {
    backgroundColor: '#ffaaaa',
  },
  yellow: {
    backgroundColor: '#ffffaa',
  },
  cyan: {
    backgroundColor: '#aaffff',
  },
  magenta: {
    backgroundColor: '#ffaaff',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  stagedCount: {
    fontSize: 18,
  },
  itemSeparator: {
        height: 15
      },
});

export default SampleDragDrop;
