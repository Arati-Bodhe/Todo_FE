

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './Stack';
import { TabNav } from './Tab';


function MainNav() {

  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>

  );
}


export default MainNav;
