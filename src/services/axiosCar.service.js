import axios from 'axios';

import {carsURL} from '../configs/urls';

export const axiosServiceCar = axios.create({baseURL: carsURL})
