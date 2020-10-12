import React from 'react'
import LoginForm from '../components/LoginForm'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`LoginForm`, () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />)
    })
    it('renders form approriately', () => {
        const wrapper = shallow(<LoginForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})