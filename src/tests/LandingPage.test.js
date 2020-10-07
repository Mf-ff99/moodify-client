import React from 'react'
import LandingPage from '../components/LandingPage'

import { shallow } from 'enzyme'

describe(`LandingPage component`, () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />)
    })
})