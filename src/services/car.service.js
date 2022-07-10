import {axiosServiceCar} from './axiosCar.service';
import {carUrls} from '../configs/urls';

export const carService = {
    getAll: () => axiosServiceCar.get(carUrls.cars).then(value => value.data),
    create: (car) => axiosServiceCar.post(carUrls.cars, car).then(value => value.data),
    deleteById: (id)=> axiosServiceCar.delete(`${carUrls.cars}/${id}`)
}
