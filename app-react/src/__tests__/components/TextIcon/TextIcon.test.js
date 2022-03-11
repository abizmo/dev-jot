import { shallow } from "enzyme";
import TextIcon from "../../../components/TextIcon/TextIcon";

describe('TextIcon tests', () => {
  test('should render and match snapshot', () => {
    const props = {
      icon: 'some icon',
      text: 'some text',
      alt: 'some description',
    };
    const wrapper = shallow(<TextIcon {...props} />);

    expect(wrapper.find('h2').text().trim()).toBe(props.text);
    expect(wrapper.find('img').prop('src')).toBe(props.icon);
    expect(wrapper).toMatchSnapshot();
  });
});
