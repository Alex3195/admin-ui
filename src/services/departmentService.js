import axios from "axios";
import authHeader from "../app/authHeader";
const API_URL = process.env.REACT_APP_HOST_BASE_URL;

const getDepartments = () => {
    return axios.get(API_URL + "/department/all", {
        headers: authHeader(),
    });
};
const getDepartmentById = (id) => {
    return axios.get(API_URL + `/department/${id}`, {
      headers: authHeader(),
    });
};
const addDepartment = (data) => {
    return axios.post(API_URL + "/department/add", data, {
      headers: authHeader(),
    });
};

const updateDepartment = (data) => {
    return axios.put(API_URL + "/department/update", data, {
      headers: authHeader(),
    });
};

const deleteDepartment = (id) => {
    return axios.delete(API_URL + `/department/${id}`, {
      headers: authHeader(),
    });
};



export default {
  getDepartmentById,
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
