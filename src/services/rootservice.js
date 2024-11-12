import axios from "axios";
import { TextConstant } from "../constants/text";
import ApiConfig from "../config/Config";
import { Logging } from "../config/Logging";

const BASE_URL = ApiConfig.BASE_URL;

async function apiRequest(endPoint, data = {}, method) {
  switch (method) {
    case TextConstant.POST:
      return await handlePostRequest(endPoint, data);
    case TextConstant.GET:
      return await handleGetRequest(endPoint);
    default:
      throw new Error(`Unsupported HTTP method: ${method}`);
  }
};
async function handleGetRequest(endPoint) {
  try {
    const response = await axios.get(`${BASE_URL}${endPoint}`);
    return await handleResponse(response)
  } catch (error) {
    console.error("Error making GET request:", error);
    return await handleError(error)
  }
}
async function handlePostRequest(endPoint, data) {
  try {
    Logging.debug(`Axios.post: ${BASE_URL}${endPoint}`,data)
    const response = await axios.post(`${BASE_URL}${endPoint}`, data);
    if (response) {
      Logging.debug(`Axios.post: ${BASE_URL}${endPoint}@Response`,response.data)
    }
    return await handleResponse(response)
  } catch (error) {
    Logging.error(`Axios.post: ${BASE_URL}${endPoint}@Error`,error.response.data)
    return await handleError(error)
  }
}
async function handleResponse(response) {
  let statusCode = response.data.statusCode;
  // console.log("log ", response.data);
  switch (statusCode) {
    case 200:
    case 201:
      return response.data.data
    default:
      return response.data
  }
};
async function handleError(error) {
  let statusCode = error.response.data.statusCode;
  console.log("log error ", error.response.data);
  if (error.response) {
    switch (statusCode) {
      case 406:
        return error.response.data
        break;
      case 404:
        return error.response.data
      case 500:
        return error.response.data
      default:
        return { success: false, message: message || "An error occurred" };
    }
  } else {
    return { success: false, message: "Network error or no response from server" };
  }


}
export default apiRequest;