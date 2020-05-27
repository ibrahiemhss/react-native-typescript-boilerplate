import React from 'react';
import GlobalLtrStyle from '../../styles/global.ltr.style';
import * as NavigationService from '../../services/navigationService';
import { Icon } from 'react-native-elements';
const HamburgerButton = (): JSX.Element => (

  <Icon style={GlobalLtrStyle.HamburgerIcon} name="arrow-downward" 
  onPress={() => NavigationService.openDrawer()}

  />
 
);

export default HamburgerButton;
