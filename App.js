import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Kutya from './Kutya';
import Kereses from './Kereses';
import Felvitel from './Felvitel';
import Kapcsolat from './Kapcsolat';
import Nevjegy from './Nevjegy';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Kutya_lap({ navigation }) {
  return (
     <Kutya />
  );
}

function Kutya_kereses({ navigation }) {
  return (
     <Kereses />
  );
}

function Kutya_felvitel({ navigation }) {
  return (
     <Felvitel />
  );
}

function Kapcsolat_felvitel({ navigation }) {
  return (
     <Kapcsolat />
  );
}

function Nevjegy_kiiras({ navigation }) {
  return (
     <Nevjegy />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Kutyák" component={Kutya_lap} />
        <Drawer.Screen name="Kutya keresés" component={Kutya_kereses} />
        <Drawer.Screen name="Kutya adatainak felvitele" component={Kutya_felvitel} />
        <Drawer.Screen name="Kapcsolat felvitele" component={Kapcsolat_felvitel} />
        <Drawer.Screen name="Kapcsolat" component={Nevjegy_kiiras} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}