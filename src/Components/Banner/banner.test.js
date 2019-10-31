import React from 'react';
import Banner from './index.js';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });
it("should display a banner with links", () => {
  const props = {
    title: 'people',
    image: 'people'
  }

  const banner = mount(<Banner {...props}/>)
  
  expect(banner.find('a').at(0).text()).toEqual("people")
})