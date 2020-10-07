import React from 'react'
import Home from '../components/Home'

import { shallow } from 'enzyme'

describe(`Home component`, () => {
    it('Renders without crashing', () => {
        shallow(<Home />)
    })
})