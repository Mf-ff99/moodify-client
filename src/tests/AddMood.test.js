import React from 'react'
import AddMood from '../components/AddMood'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`AddMood component`, () => {
    it('Renders without crashing', () => {
        shallow(<AddMood />)
    })
    it('renders form approriately', () => {
        const wrapper = shallow(<AddMood />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})