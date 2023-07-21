 //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    //       <Text style={{ color: 'red', textAlign: 'center' }}>
    //         Hello World
    //       </Text>
    //       <Image style={{ width: 30, height: 30, backgroundColor: 'green' }} source={require('../SampleProject/assets/images/ambica.jpeg')}></Image>
    //       <SafeAreaView style={{ height: 50 }}>
    //         <ScrollView style={{ backgroundColor: 'pink' }}>
    //           <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //             aliquip ex ea commodo consequat. Duis aute irure dolor in
    //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</Text>

    //         </ScrollView>
    //       </SafeAreaView>
    //       <Button onPress={() => console.log("iam lavanya")} title="hello"></Button>
    //       <TextInput style={{ height: 30, borderWidth: 1, color: 'black', width: 50 }} onChangeText={(value) => onInputChange(value)}></TextInput>
    //       <SafeAreaView style={{height:40}}><FlatList data={['one','two','three']} renderItem={({item}) => <Text >{item}</Text>}></FlatList>
    //     </SafeAreaView> */}
    //      <View style={{backgroundColor:'green',padding:20,justifyContent:'center'}}>
    //     <Text style={{color:'red',textAlign:'center'}}>
    //       Hello World
    //     </Text>
    //     </View>
    //       <View style={{flex:1}}>
    //       <WebView source={{ uri: 'https://www.npmjs.com/package/react-native-webview' }} style={{height:40,width:200}}></WebView>
    //     </View>
    //       <View style={{flex:1,backgroundColor:'green',width:300,justifyContent:'center'}}>
    //     <Modal
    //         animationType="slide"
    //         transparent={false}
    //         visible={modalVisible}
    //         onRequestClose={() => {
    //           Alert.alert('Modal has been closed.');
    //           setModalVisible(!modalVisible);
    //         }}>
    //         <View >
    //           <View style={styles.modalView}>
    //             <Text style={styles.modalText}>Hello World!</Text>
    //             <Pressable
    //               style={[styles.button, styles.buttonClose]}
    //               onPress={() => setModalVisible(!modalVisible)}>
    //               <Text style={styles.textStyle}>Hide Modal</Text>
    //             </Pressable>
    //           </View>
    //         </View>
    //       </Modal>
    //       <Pressable
    //         style={[styles.button, styles.buttonOpen]}
    //         onPress={() => setModalVisible(true)}>
    //         <Text style={styles.textStyle}>Show Modal</Text>
    //       </Pressable>
    //     </View>
    //       <View style={{flex:1}}>
    //       <ActivityIndicator size={'small'} color='red' animating={true}></ActivityIndicator>
    //     </View>
    //       <View style={{flex:2,backgroundColor:'blue',width:300}}>
    //     <Picker
    //   selectedValue={selectedLanguage}
    //   onValueChange={(itemValue, itemIndex) =>
    //     setSelectedLanguage(itemValue)
    //   }>
    //   <Picker.Item label="Java" value="java" />
    //   <Picker.Item label="JavaScript" value="js" />
    // </Picker>
    //     </View>
    //       <View style={{flex:1}}>
    //     <Switch
    //         trackColor={{false: '#767577', true: '#81b0ff'}}
    //         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
    //         ios_backgroundColor="#3e3e3e"
    //         onValueChange={toggleSwitch}
    //         value={isEnabled}
    //       />
    //     </View>
    //       <View style={{flex:1}}>
    //     <SafeAreaView style={{ flex: 1,
    //     justifyContent: 'center',
    //     backgroundColor: '#ECF0F1',}}>
    //       <StatusBar
    //         animated={true}
    //         backgroundColor="#61dafb"
    //         barStyle={statusBarStyle}
    //         showHideTransition={statusBarTransition}
    //         hidden={hidden}
    //       />

    //       <View style={{padding: 0,}}>
    //         <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
    //       </View>
    //     </SafeAreaView>
    //     </View>
    //       <View style={{flex:1}}>
    //     <Button title={'2-Button Alert'} onPress={
    //       // createTwoButtonAlert
    //       getCurrentPosition

    //       } />
    //     </View>
    //      <View style={{flex:1}}>

    //      <View style={styles.container}>
    //         <TouchableHighlight onPress={_onPressButton} underlayColor="white">
    //          <View style={styles.button1}>
    //             <Text style={styles.buttonText}>TouchableHighlight</Text>
    //            </View>
    //          </TouchableHighlight>
    //          <TouchableOpacity onPress={_onPressButton}>
    //            <View style={styles.button1}>
    //            <Text style={styles.buttonText}>TouchableOpacity</Text>
    //            </View>
    //          </TouchableOpacity>
    //      <TouchableNativeFeedback
    //           onPress={_onPressButton}
    //           background={
    //             Platform.OS === 'android'
    //               ? TouchableNativeFeedback.SelectableBackground()
    //               : undefined
    //           }>
    //           <View style={styles.button1}>
    //             <Text style={styles.buttonText}>
    //               TouchableNativeFeedback{' '}
    //               {Platform.OS !== 'android' ? '(Android only)' : ''}
    //             </Text>
    //           </View>
    //         </TouchableNativeFeedback>
    //         <TouchableWithoutFeedback onPress={_onPressButton}>
    //           <View style={styles.button1}>
    //             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
    //           </View>
    //         </TouchableWithoutFeedback>
    //         <TouchableHighlight
    //           onPress={_onPressButton}
    //           onLongPress={_onLongPressButton}
    //           underlayColor="white">
    //           <View style={styles.button1}>
    //             <Text style={styles.buttonText}>Touchable with Long Press</Text>
    //           </View>
    //         </TouchableHighlight>
    //       </View>
    //     </View>
    //     </View>
    //  <NavigationContainer>
    // <Stack.Navigator>
    //         <Stack.Screen
    //           name="Home"
    //           component={HomeScreen}
    //           options={{title: 'Welcome'}}
    //         />
    //         <Stack.Screen name="Profile" component={ProfileScreen} />
    //       </Stack.Navigator>
    // </NavigationContainer>
    //  <TabNavigationScreen>

    //  </TabNavigationScreen>
    // <MyDrawer>

    // </MyDrawer>
    // <FetchScreen>

    // </FetchScreen>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    //   <Button onPress={() =>
    //   // nativeValue.phoneCall("lavanya",value => {
    //   //   console.log(value);
    //   // })

    //   {
    //     // setOpen(true)
    //     // store.dispatch({ type: 'counter/incremented' })
    //     // store.subscribe(() => console.log(store.getState()))
    //     getApiCall();
    //   }
    //   } title="api">
    //   </Button>
    //   {/* <DatePicker  modal open={open}
    //     date={date} onConfirm={(date) => {
    //       setOpen(false)
    //       setDate(date)
    //     }} onCancel={() => {
    //       setOpen(false)
    //     }}></DatePicker> */}
    //     <Calendar
    //   onDayPress={day => {
    //     setSelected(day.dateString);
    //   }}
    //   markedDates={{
    //     [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
    //   }}
    // />
    // </View>








// function onInputChange(value: String) {

//   console.log(value);
// }



// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

// return (
//   <SafeAreaView style={backgroundStyle}>
//     <StatusBar
//       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//       backgroundColor={backgroundStyle.backgroundColor}
//     />
//     <ScrollView
//       contentInsetAdjustmentBehavior="automatic"
//       style={backgroundStyle}>
//       <Header />
//       <View
//         style={{
//           backgroundColor: isDarkMode ? Colors.black : Colors.white,
//         }}>
//         <Section title="Step One">
//           Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//           screen and then come back to see your edits.
//         </Section>
//         <Section title="See Your Changes">
//           <ReloadInstructions />
//         </Section>
//         <Section title="Debug">
//           <DebugInstructions />
//         </Section>
//         <Section title="Learn More">
//           Read the docs to discover what to do next:
//         </Section>
//         <LearnMoreLinks />
//       </View>
//     </ScrollView>
//   </SafeAreaView>

// );
// }