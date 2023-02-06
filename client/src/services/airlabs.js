import axios from 'axios';

// Airports search API.
// Full API Doc: https://airlabs.co/docs/suggest
// Signup to get an APIKEY

const baseAPI = 'https://airlabs.co/api/v9/';

const searchCities = async (keyword) => {
  const response = await axios.get(baseAPI + 'suggest', {
    params: {
      q: keyword,
      api_key: process.env.REACT_APP_AIRLABS_APIKEY,
    },
  });
  return response?.data?.response?.airports;
};

export default searchCities;
