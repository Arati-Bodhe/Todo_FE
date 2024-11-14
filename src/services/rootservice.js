import axios from "axios";
import { TextConstant } from "../constants/text";
import ApiConfig from "../config/Config";
import { Logging } from "../config/Logging";
import { getAuth, setAuth } from "../auth/authToken";
import { API_END_POINT } from "./apiEndPoint";

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
async function authApiRequest(endPoint, data? = {}, method) {
  console.log("endpont",endPoint);
  console.log("method",method);
  switch (method) {
    case TextConstant.POST:
      return await handlePostRequest(endPoint, data,true);
    case TextConstant.GET:
      return await handleGetRequest(endPoint,true);
    default:
      throw new Error(`Unsupported HTTP method: ${method}`);
  }
};
async function handleGetRequest(endPoint,auth=false) {
  try {
    if (auth==true) {
      const tokens = await getAuth();
      const accessToken=tokens?.ACCESS_TOKEN;
      const refreshToken=tokens?.REFRESH_TOKEN
      const headers={
        'Content-Type':'application/json',
        'Authorization':accessToken
      }
     // Logging.debug(`Axios.get: ${BASE_URL}${endPoint}`,{headers:headers})
      const response = await axios.get(`${BASE_URL}${endPoint}`,{headers:headers});
      if (response) {
        //Logging.debug(`Axios.get: ${BASE_URL}${endPoint}@Response`,response.data)
      }
      return await handleResponse(response)
    }else{
      //Logging.debug(`Axios.get: ${BASE_URL}${endPoint}`,data)
      const response = await axios.get(`${BASE_URL}${endPoint}`);
      if (response) {
      //  Logging.debug(`Axios.get: ${BASE_URL}${endPoint}@Response`,response.data)
      }
      if (response && response.headers && endPoint==API_END_POINT.LOGIN) {
        setAuth(response?.headers);
      }
      return await handleResponse(response)
    }
  } catch (error) {
    console.error("Error making GET request:", error);
    Logging.error(`Axios.get: ${BASE_URL}${endPoint}@Error`,error.response.data)
    return await handleError(error)
  }
}
async function handlePostRequest(endPoint, data,auth=false) {
  try {
    if (auth==true) {
      const tokens = await getAuth();
      const accessToken= tokens?.ACCESS_TOKEN;
      const refreshToken=tokens?.REFRESH_TOKEN
      const headers={
        'Content-Type':'application/json',
        'Authorization':accessToken
      }
      console.log("data is ",data);
      
      Logging.debug(`auth Axios.post: ${BASE_URL}${endPoint}`,data);
      const response = await axios.post(`${BASE_URL}${endPoint}`,data,{
        headers:headers
      },
    );
      if (response) {
        Logging.debug(`Axios.post: ${BASE_URL}${endPoint}@Response`,response.data)
      }
      if (response && response.headers && endPoint==API_END_POINT.LOGIN) {
        setAuth(response?.headers);
      }
      return await handleResponse(response)
    }else{
      Logging.debug(`Axios.post: ${BASE_URL}${endPoint}`,data)
      const response = await axios.post(`${BASE_URL}${endPoint}`, data);
      if (response) {
       Logging.debug(`Axios.post: ${BASE_URL}${endPoint}@Response`,response.data)
      }
      if (response && response.headers && endPoint==API_END_POINT.LOGIN) {
        setAuth(response?.headers);
      }
      return await handleResponse(response)
    }
  } catch (error) {
    Logging.error(`Axios.post: ${BASE_URL}${endPoint}@Error`,error.response.data)
    return await handleError(error)
  }
}
async function handleResponse(response) {
  let statusCode = response.data.statusCode;
  // if (response.headers) {
  //   setAuth(response?.headers);
  // }
  switch (statusCode) {
    case 200:
    case 201:
      return response.data
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
      case 404:
        return error.response.data
      case 401:
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
export{ apiRequest,authApiRequest}