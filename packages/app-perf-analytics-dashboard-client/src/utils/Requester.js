import axios from "axios";
import {generateQueryUri} from "./queryUriGenerator";

export default class Requester{
  constructor() {}

  async post(path, body = {}, config){
    return axios.post(path, body, config)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch(({response}) => {
        return Promise.reject(response);
      })
  }

  async get(path, params, config={}) {
    if(params) path = `${path}${generateQueryUri(params)}`
    return axios.get(path, config)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }

}