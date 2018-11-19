import request from 'superagent-bluebird-promise'

const send = () => {
}

export const get = (url) => request.get(url)
export const post = (url, params, additional) => request
  .post(url)
  .send(params)
  .set('Accept', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .then(() => {
    debugger
  }, () => {
    debugger
  })

export default {
  post,
get}
