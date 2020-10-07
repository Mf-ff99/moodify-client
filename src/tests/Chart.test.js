import React from 'react'
import Chart from '../components/Chart'

import { shallow } from 'enzyme'

describe(`Chart component`, () => {
    it('Renders without crashing', () => {
        shallow(<Chart />)
    })
})