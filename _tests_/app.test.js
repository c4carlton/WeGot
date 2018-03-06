import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const React = require('react');
const App = require('../client/src/components/App');

configure({ adapter: new Adapter() });

describe('Photo Gallery App', () => {
  it('should render a .slideshow class', async () => {
    const component = mount(<App />);
    await expect(component.find('.slideshow').length).toEqual(1);
  });

  it('should render a .gallery class', async () => {
    const component = mount(<App />);
    await expect(component.find('.gallery').length).toEqual(1);
  });
});
