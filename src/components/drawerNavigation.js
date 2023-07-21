import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import UserScreen from './user';
import 'react-native-gesture-handler';
import ProfileScreen from './profileScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomeScreen} />
      <Drawer.Screen name="Article" component={UserScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer