import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharactersByName = async (page, query) => {
  const res = await axios.get(`${BASE_URL}/character/?page=${page}&name=${query}`);
  return res.data;
};

export const getSingleCharacter = async id => {
  const res = await axios.get(`${BASE_URL}/character/${id}`);
  return res.data;
};
