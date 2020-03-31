import axios from 'axios';

const APIClient = {
    query (url) {
        return axios.get(url)
            .then((res) => res.data)
            .catch((error) => {
                console.log(error);
            });
    }
};
export default APIClient;
