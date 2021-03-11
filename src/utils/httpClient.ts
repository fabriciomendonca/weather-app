import axios from 'axios';

export const ENDPOINTS = {
  cities: {
    root: '/cities',
  },
  forecasts: {
    root: '/forecasts',
  },
};

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3030',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json charset=utf-8',
  },
});
