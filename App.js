import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}

// import * as React from 'react';
// import Order from './src/screens/Order';
// export default function App() {
//   return <Order />;
// }