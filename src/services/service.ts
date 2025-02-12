import { AxiosError, AxiosResponse } from 'axios';
import CreateResponse from './service.model';
import { Service } from './config';

const ERROR_RESPONSE = {
	status: 500,
	data: {
		message: 'Error',
		timestamp: '',
	},
};

const get = async (url: string): Promise<any> => {
	const service = Service();
	const result = service
		.get(url)
		.then(function (response: AxiosResponse) {
			// handle success
			if (response.status === 200 || response.status === 201) {
				return Promise.resolve(response.data);
			}
		})
		.catch(function (error: AxiosError) {
			// TODO: handle error response
			console.log('error response', error);
			return Promise.reject({
				...ERROR_RESPONSE,
				message: `Error from backend: ${JSON.stringify(error)}`,
			});
		});

	return result;
};

export default {
	get,
};
