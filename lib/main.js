import * as hello from './hello'
import * as api from './api'

hello.greeting();

api.load()
   .then(api.extractGifs)
   .then(api.displayGifs)

export default {}
