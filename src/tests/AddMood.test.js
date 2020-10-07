import React from 'react'
import AddMood from '../components/AddMood'

import { shallow } from 'enzyme'

describe(`AddMood component`, () => {
    it('Renders without crashing', () => {
        shallow(<AddMood />)
    })
})