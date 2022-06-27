import {axiosService} from './axios.service';
import {urls} from '../configs/urls';

export const locationService ={
    getAll: () => axiosService.get(urls.location).then(value =>value.data),
    getById: (id) => axiosService.get(`${urls.location}/${id}`).then(value => value.data)
}
