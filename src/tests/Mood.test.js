import React from 'react'
import Mood from '../components/mood'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const moodProps = [
    {
        id: 1,
        current_mood: 6,
        note: 'today sucked',
        category_id: 2,
        user_id: 1,
        date_added: '2020-09-04 11:37:30',
    }, {
        id: 2,
        current_mood: 6,
        note: 'today sucked',
        category_id: 2,
        user_id: 1,
        date_added: '2020-09-04 11:37:30',
    }, {
        id: 3,
        current_mood: 6,
        note: 'today sucked',
        category_id: 2,
        user_id: 1,
        date_added: '2020-09-04 11:37:30',
    }, {
        id: 4,
        current_mood: 6,
        note: 'today sucked',
        category_id: 2,
        user_id: 1,
        date_added: '2020-09-04 11:37:30',
    },
]

describe('Mood Component', () => {

    it('renders without crashing', () => {
        shallow(<Mood props={moodProps} />)
    })

    it('renders props approriately', () => {
        const wrapper = shallow(<Mood props={moodProps} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})