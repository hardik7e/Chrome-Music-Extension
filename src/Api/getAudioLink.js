import axios from 'axios';

export default axios.create({
  baseURL: 'https://server.ylight.xyz',
  // baseURL: 'https://ylight.glitch.me',
});