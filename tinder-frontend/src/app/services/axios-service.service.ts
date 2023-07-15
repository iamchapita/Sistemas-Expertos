import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Users } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AxiosService {
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

	public async getRegisteredUsers() {
		try {
			const response = await this.axiosInstance.get('users');
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	public async updateUser(id: string | number, user: Users) {
		try {
			const response = await this.axiosInstance.put(`users/${id}`, user);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}
