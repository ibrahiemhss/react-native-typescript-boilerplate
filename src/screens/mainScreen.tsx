import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { debounce } from 'lodash';
import I18n from '../../shared/I18n/I18n';
import HomePageLtrStyle from '../../shared/styles/homePage.ltr.style';
import Header from '../components/sections/header';
import HamburgerButton from '../../shared/components/buttons/hamburgerButton';
import { Images } from '../../shared/themes';
import RegularButton from '../../shared/components/buttons/regularButton';
import selectLocalImage from '../../shared/services/imagePickingService';
import Utils from '../../shared/modules/Utils';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  openCamera?: () => void;
}

interface State {
  enthusiasmLevel: number;
}

class MainScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      enthusiasmLevel: 1,
    };
  }

  onImagePicked = (photoResponse): void => {
    if (photoResponse.didCancel) {
      return;
    }
    const { uri } = Utils.postableImage(photoResponse);
    console.warn(`image url is ${uri}`);
  };

  render(): JSX.Element {
    return (
        <>
          <Header leftComponent={<HamburgerButton />} />
          <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={HomePageLtrStyle.scrollView}
            >
              <Image style={HomePageLtrStyle.logo} source={Images.logo} />
              <Text>{`Hello ${I18n.t('home_screen.title')}`}</Text>
              <RegularButton
                  title={I18n.t('home_screen.camera')}
                  onPress={() => debounce(selectLocalImage, 500)(this.onImagePicked)}
              />
            </ScrollView>
          </SafeAreaView>
        </>
    );
  }
}
export default MainScreen;
