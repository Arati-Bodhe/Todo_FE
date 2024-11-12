

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './Stack';


function MainNav() {

  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>

  );
}


export default MainNav;
