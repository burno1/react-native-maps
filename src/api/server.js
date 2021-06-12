import axios from 'axios';

// PUT YOUR IPV4 INTO THE MARKED PLACE
const server = axios.create({
  baseURL: 'http://<YOUR_IPV4>:3000/markers',
}
);

export default server
