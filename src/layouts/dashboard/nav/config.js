// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'home',
    path: '/',
    icon: icon('ic_user'),
  },

  {
    title: 'projects',
    path: '/projects',
    icon: icon('ic_analytics'),
  },

];

export default navConfig;
