import { SYSTEM_ERROR } from 'config/CONSTANT';
import axiosInstance from './axiosInstance'
import { LOGIN } from "./CONSTANT";


export const login = (username: string, password:string) => {
    return new Promise((resolve, reject) => {
      try {
        axiosInstance
        .post(
            LOGIN,
            {
                username,
                password
            }
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log("getUserDetails > axios err=", err);
          reject("Error in getUserDetails axios!");
        });
      } catch (error) {
        console.error("in userServices > getUserDetails, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };
