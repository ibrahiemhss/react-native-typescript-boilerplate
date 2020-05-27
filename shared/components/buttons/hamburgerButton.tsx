import React from 'react';
import { Icon } from 'react-native-elements';
import GlobalLtrStyle from '../../styles/global.ltr.style';
import * as NavigationService from '../../services/navigationService';
import { Icon } from 'react-native-elements';

const HamburgerButton = (): JSX.Element => (
  <Icon
    name="menu"
    size={30}
    style={GlobalLtrStyle.HamburgerIcon}
    name="menu"
    onPress={() => NavigationService.openDrawer()}
  />
);

export default HamburgerButton;
