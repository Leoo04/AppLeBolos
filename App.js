import { useFonts, 
  Kanit_200ExtraLight,
  Kanit_600SemiBold} from '@expo-google-fonts/kanit';
import {View} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produtos';
import Sobre from './src/telas/Sobre';
import ListaProd from './src/telas/ListaProd';

import mocks from './src/mocks/produto';
import mocks_sobre from './src/mocks/sobre';
import mocks_cardapio from './src/mocks/cardapio';


function MenuKit(){
  return <Produto {...mocks}/>
}

function MenuSobre() {
  return <Sobre {...mocks_sobre}/>
}

function MenuLista() {
  return <ListaProd {...mocks_cardapio}/>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if(route.name === "Kit"){
                iconName = focused
                ? 'restaurant'
                : 'restaurant-outline';
                } else if(route.name === "Sobre nós"){
                  iconName = focused
                  ? 'information-circle'
                  : 'information-circle-outline';
                } else if(route.name === "Produtos"){
                  iconName = focused
                  ? 'list'
                  : 'list-outline';
                } else if (route.name === "Lista de desejos"){
                  iconName = focused
                  ? 'heart'
                  : 'earth-outline';
                } else if (route.name === "Menu"){
                  iconName = focused
                  ? 'list'
                  : 'list-outline';
                }
                
              return <Ionicons name={iconName} size={size} color={color}/>
            },
              tabBarActiveTintColor: 'orange',
              tabBarInactiveTintColor: 'gray',
              tabBarHideOnKeyboard: true,
              headerShown: false,
          })}>
            <Tab.Screen name="Kit" component={MenuKit}/>
            <Tab.Screen name="Sobre nós" component={MenuSobre}/>
            <Tab.Screen name="Menu" component={MenuLista}/>
            <Tab.Screen name="Lista de desejos" component={MenuKit}/>
            </Tab.Navigator>
}            
            

export default function App() {

  //Carrega a fonte para dentro do projeto
  const [ fonteCarregada ] = useFonts ({"KanitRegular" : Kanit_200ExtraLight, 
                                        "KanitBold" : Kanit_600SemiBold});

  //Se a fonte não tiver sido carregada, não exibe o projeto
  if(!fonteCarregada) {
    return <View />
  }
  
  return <NavigationContainer >
            <TabsMenu />
        </NavigationContainer>
}