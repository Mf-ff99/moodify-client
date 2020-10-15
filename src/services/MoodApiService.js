import config from '../config'
import TokenService from './TokenService'

const MoodApiService = {
    postMood(note, mood, category, hours_slept) {
        return fetch(`${config.API_ENDPOINT}/moods`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                note: note,
                current_mood: mood,
                category_id: category,
                hours_slept: hours_slept,
            }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    getMoods() {
        return fetch(`${config.API_ENDPOINT}/moods`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
    }

export default MoodApiService