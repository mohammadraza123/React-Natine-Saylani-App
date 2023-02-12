import welcome from "./SCREENS/welcome"
import signup from "./SCREENS/signup"
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



function App(){
    return (
        <>
        <welcome/>
        <signup/>
        </>
    )
}



export default App


// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//     return (
//         <>
//         <welcome/>
//                 <signup/>
        
//         <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={welcome}
//           options={{title: 'Welcome'}}
//           />
//         <Stack.Screen name="Profile" component={signup} />
//       </Stack.Navigator>
//     </NavigationContainer>
//           </>
//   );
// };

// export default MyStack;


 