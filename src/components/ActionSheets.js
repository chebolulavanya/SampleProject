import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  SheetProps,
  SheetManager
} from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import { getStorage, ref as dataRef, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, appnew } from '../firebase';


function ActionButtons({sheetId, payload}) {
  const actionSheetRef = useRef<ActionSheetRef>(null); 
  const gotoMedia = (buttonIndex) => {
        
    }

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      containerStyle={{
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      }}
      indicatorStyle={{
        width:100
      }}
      gestureEnabled={true}>
      <View
        style={{
          padding:20,
          height:300,
          flexDirection:'row',
          width:'100%'
        }}>
        {/* <View style={{
          width:50,
          height:50,
          backgroundColor:'#f7f7f7',
          borderRadius:100,
          marginRight:10
        }} /> */}

        <View style={{flexGrow:1}}>
          {/* <View style={{ width:"100%",height:20,backgroundColor:"#f7f7f7",borderRadius:10,marginBottom:10 }}/>
          <View style={{ width:"80%",height:20,backgroundColor:"#f7f7f7",borderRadius:10 }}/> */}
          <Text style={styles.btn} onPress={() => {gotoMedia(2);
            SheetManager.hide("ActionButtons")}}>photos</Text>
          <Text style={styles.btn} onPress={() => {gotoMedia(1);
            SheetManager.hide("ActionButtons")}} >camera</Text>
          <Text style={styles.btn} onPress={() => {gotoMedia(3);
            SheetManager.hide("ActionButtons")}}>video</Text>
             <Text style={styles.btn} onPress={() => {gotoMedia(4);
            SheetManager.hide("ActionButtons")}}>audio</Text>
             <Text style={styles.btn} onPress={() => {gotoMedia(5);
            SheetManager.hide("ActionButtons")}}>document</Text>
        </View>
        
      </View>
    </ActionSheet>
  );
  
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    borderWidth:2,
    borderColor:'white'
  },
  safeareview: {
    flex: 1,
    backgroundColor: '#e63946',
    padding: 12,
    paddingVertical:20,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  btnTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default ActionButtons;


