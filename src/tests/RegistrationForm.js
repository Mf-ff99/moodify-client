import React from 'react'
import RegistrationForm from '../components/RegistrationForm'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Registration Form', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationForm />)
    })
    it('renders form approriately', () => {
        const wrapper = shallow(<RegistrationForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})