import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer tests', () => {
  test('should render and match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a').first().text()).toBe('Dighital');
  });
});
