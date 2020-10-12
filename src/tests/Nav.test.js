import React from 'react'
import Nav from '../components/nav'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Nav component ', () => {  

    it('renders without crashing', () => {
        shallow(<Nav />)
    })
    
    it('renders form approriately', () => {
        const wrapper = shallow(<Nav />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})