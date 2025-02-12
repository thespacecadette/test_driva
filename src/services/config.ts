import axios, { AxiosInstance } from 'axios';

export const Service = (): AxiosInstance =>
	axios.create({
		baseURL: process.env.API_DOMAIN,
		headers: {
			'Content-Type': 'application/json',
		},
	});
