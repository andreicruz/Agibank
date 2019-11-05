import React from 'react';
import Banner from './index.js';
import { shallow } from 'enzyme';
import Movies from '../../assets/Movies.jpg';


it("Should render the banner component with text and image", () => {
  const props = {
    title: "jurevis",
    image: Movies
  }
  const bannerComponent = shallow(<Banner {...props} />)

  expect(bannerComponent.find('h3')).toHaveLength(1)
  expect(bannerComponent.find('h3').text()).toEqual("jurevis")
  expect(bannerComponent.find('div')).toHaveLength(2)
  expect(bannerComponent.find({ className: 'banner' })).toHaveLength(1)
  expect(bannerComponent.find({ className: 'background' })).toHaveLength(1)
})
