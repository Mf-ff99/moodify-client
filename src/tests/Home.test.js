import React from 'react'
import Home from '../components/home'

import { shallow } from 'enzyme'

describe(`Home component`, () => {
    it('Renders without crashing', () => {
        shallow(<Home />)
    })
})