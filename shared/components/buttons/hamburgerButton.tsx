import React from 'react';
import { Icon } from 'react-native-elements';
import GlobalLtrStyle from '../../styles/global.ltr.style';
import * as NavigationService from '../../services/navigationService';

const HamburgerButton = (): JSX.Element => (
  <Icon
    style={GlobalLtrStyle.HamburgerIcon}
    name="menu"
    onPress={() => NavigationService.openDrawer()}
  />
);

export default HamburgerButton;
