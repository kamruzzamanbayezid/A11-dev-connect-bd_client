import axios from "axios";

const instance = axios.create({
      baseURL: 'https://a11-dev-connect-bd-server.vercel.app/',
      withCredentials: true
});

const useAxios = () => {
      return instance;
};

export default useAxios;