import I18n from '../../../shared/I18n/I18n';
import * as NavigationService from '../../../shared/services/navigationService';

const customDrawerRoutes = () => {
  const defaultAction = (path) => {
    NavigationService.navigate('Home', {
      screen: path,
    });
    NavigationService.closeDrawer();
  };
  const homeRoute = {
    title: I18n.t('main_screen'),
    path: 'MainScreen',
    icon: 'active_order',
    onclick: () => defaultAction('MainScreen'),
  };
  const aboutUsRoute = {
    title: I18n.t('about_us'),
    path: 'AboutUs',
    icon: 'info',
    onclick: () => defaultAction('AboutUs'),
  };
  return [
    {
      title: I18n.t('section1'),
      data: [homeRoute, aboutUsRoute],
    },
    {
      title: I18n.t('section2'),
      data: [homeRoute, aboutUsRoute],
    },
  ];
};
export default customDrawerRoutes;
