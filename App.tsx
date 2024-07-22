import React from 'react';
import { FC } from 'react';
import AppNavigation from './src/layouts/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

interface Props { }
const App: FC<Props> = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;


