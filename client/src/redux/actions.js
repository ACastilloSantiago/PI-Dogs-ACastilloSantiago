import {
  GET_DOGBYID,
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOGSBYRAZA,
  POST_DOG,
  FILTER,
  ORDER,
  RESET,
  TEMPFILTER,
} from "./actions-types";
import axios from "axios";

//
export const reset = () => {
  console.log("reset");
  return {
    type: RESET,
  };
};

export const tempFilter = (value) => {
  console.log("tempfilter", value);
  return {
    type: TEMPFILTER,
    payload: value,
  };
};
export const filter = (value) => {
  console.log("filter", value);
  return {
    type: FILTER,
    payload: value,
  };
};
export const order = (value) => {
  console.log("order", value);

  return {
    type: ORDER,
    payload: value,
  };
};

//
export const getDogById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: GET_DOGBYID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getDogsByRaza = (raza) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/dogs/name?name=${raza}`
      );
      return dispatch({
        type: GET_DOGSBYRAZA,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/dogs`);
      return dispatch({
        type: GET_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/temperaments`);
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const postDog = (dog) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/dogs`;
      const { data } = await axios.post(endpoint, dog);
      console.log([data]);
      return dispatch({
        type: POST_DOG,
        payload: [data],
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
