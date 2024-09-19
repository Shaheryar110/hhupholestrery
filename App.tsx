/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Box, Button, ButtonText, GluestackUIProvider, Text } from "@gluestack-ui/themed"
import { config } from './config/gluestack-ui.config';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigation/RootNavigator';
import 'react-native-gesture-handler'; // Make sure this line is added at the top
import { enableScreens } from 'react-native-screens';
import BottomTab from './src/Components/BottomTab';
enableScreens();



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    console.log(config.tokens.colors.orange100, 'config.tokens.colors.orange100 ');

  }, [])

  return (


    <GluestackUIProvider config={config}>
      <SafeAreaView style={{ flex: 1 }} >
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </GluestackUIProvider>

  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
