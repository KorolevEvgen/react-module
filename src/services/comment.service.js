import {axiosService} from './axios.service';
import {urls} from '../configs/urls';

export const commentService = {
    getByPostId: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}
