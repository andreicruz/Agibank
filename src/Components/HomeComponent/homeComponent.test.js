import React from 'react';
import HomeComponent from './index.js';
import Banner from '../Banner/index.js';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("Should render the Home component", () => {

  const homeComponent = mount(<HomeComponent />)

  expect(homeComponent.find(Banner)).toHaveLength(3)
  expect(homeComponent.find(Banner).at(0).text()).toEqual("people")
  expect(homeComponent.find(Banner).at(1).text()).toEqual("films")
  expect(homeComponent.find(Banner).at(2).text()).toEqual("planets")
}
)