import React from 'react';
import Cards from './index.js';
import { mount, shallow } from 'enzyme';
import hope from '../../assets/hope1.jpg';

it("Should render the card component", () => {
  const props = {
    route: 'planets'
  }

  const cardsComponent = mount(<Cards route={`oi`}/>)
  console.log(cardsComponent.getElements());
  
  cardsComponent.getElement().getImages('routes');

  expect(cardsComponent.state.objects[0].path).toEqual(hope)

})