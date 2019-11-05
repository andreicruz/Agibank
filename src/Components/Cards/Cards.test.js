import React from 'react';
import Cards from './index.js';
import { mount } from 'enzyme';
import hope from '../../assets/hope1.jpg';

it("Should render the card component", () => {
  const props = {
    route: 'planets'
  }

  const cardsComponent = mount(<Cards {...props}/>)
  cardsComponent.instance().getImages(props.route);

  expect(cardsComponent.instance().state.objects[0].path).toEqual(hope)

})