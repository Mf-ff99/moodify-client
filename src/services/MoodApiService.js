import config from '../config'
import TokenService from './TokenService'

const MoodApiService = {
    postMood(note, mood) {
        return fetch(`${config.API_ENDPOINT}/moods`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                note: note,
                current_mood: mood,
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