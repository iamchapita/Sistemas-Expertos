import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
	providedIn: 'root',
})
export class AxiosServiceService {
	private apiUrl = 'http://localhost:3000/';
	private axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: this.apiUrl,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	public async getRegisteredUsers(): Promise<any[]> {
		try {
			const response = await this.axiosInstance.get('users');
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}
