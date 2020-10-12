import React from 'react'
import Chart from '../components/Chart'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Chart component`, () => {
    it('Renders without crashing', () => {
        shallow(<Chart />)
    })
    it('renders form approriately', () => {
        const wrapper = shallow(<Chart />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})