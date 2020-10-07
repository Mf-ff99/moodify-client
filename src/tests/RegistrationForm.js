import React from 'react'
import RegistrationForm from '../components/RegistrationForm'

import { shallow } from 'enzyme'

describe('Registration Form', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationForm />)
    })
})