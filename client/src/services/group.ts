import { IGroup } from './../models';
import axios, { AxiosPromise } from 'axios';

export default class GroupService {
  static getAll(): AxiosPromise<IGroup[]> {
    return axios.get<IGroup[]>(process.env.REACT_APP_API_URI + '/groups');
  }
  static async create(newGroup : IGroup): Promise<IGroup> {
    const res = await axios.post<IGroup>(process.env.REACT_APP_API_URI + '/groups', newGroup);
    return await res.data;
  }
}
