import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/icons/icoMoon.json';
import Colors from './Colors';
import Fonts from './Fonts';
import Images from './Images';
import Metrics from './Metrics';

const Icons = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
export { Colors, Fonts, Images, Metrics, Icons };
