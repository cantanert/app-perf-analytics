import axios from "axios";
import {generateQueryUri} from "./queryUriGenerator";

export default class Requester{
  constructor() {}

  async post(path, body = {}, config){
    axios.post(path, body, config)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
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