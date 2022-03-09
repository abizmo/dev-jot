import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('Header Tests', () => {
  test('should render without profile and match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('dev-jot');
    expect(wrapper.find('.profile')).toHaveLength(0);
  });

  test('should render with profile and match snapshot', () => {
    const wrapper = shallow(<Header profileVisible avatarImgPath="#" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.avatar').children().prop('src')).toBe('#');
  });
});
