import React from 'react';
import GlobalLtrStyle from '../../styles/global.ltr.style';
import * as NavigationService from '../../services/navigationService';
import Icon from 'react-native-vector-icons/FontAwesome';

const HamburgerButton = (): JSX.Element => (
  <Icon
    name="bars"
    size={30}
    style={GlobalLtrStyle.HamburgerIcon}
    onPress={() => NavigationService.openDrawer()}
  />
);

export default HamburgerButton;
