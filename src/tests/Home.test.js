import React from 'react'
import Home from '../components/home'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Home component`, () => {
    it('Renders without crashing', () => {
        shallow(<Home />)
    })
    it('renders form approriately', () => {
        const wrapper = shallow(<Home />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})