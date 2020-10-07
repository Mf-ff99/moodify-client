import React from 'react'
import Nav from '../components/nav'

import { shallow } from 'enzyme'

it('renders without crashing', () => {
    shallow(<Nav />)
})