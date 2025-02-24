import { AxiosError } from "axios";
import { axiosInstance } from "../../../shared/lib/axiosInstance";
import { IApiResponseReject, IApiResponseSuccess } from "../../../shared/types";
import { ISignInData, ISignUpData, UserWithTokenType } from "../model";
import { defaultRejectedAxiosError } from "../../../shared/consts";

enum AUTH_API_ROUTES {
  REFRESH_TOKENS = "/auth/refreshTokens",
  SIGN_UP = "/auth/signUp",
  SIGN_IN = "/auth/signIn",
  SIGN_OUT = "/auth/signOut",
}

export default class UserApi {
  static async refreshTokens(): Promise<
    IApiResponseSuccess<UserWithTokenType> | IApiResponseReject
  > {
    try {
      const response = await axiosInstance.get<
        IApiResponseSuccess<UserWithTokenType>
      >(AUTH_API_ROUTES.REFRESH_TOKENS);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }

  static async signUp(
    userData: ISignUpData
  ): Promise<IApiResponseSuccess<UserWithTokenType> | IApiResponseReject> {
    try {
      const { data } = await axiosInstance.post<
        IApiResponseSuccess<UserWithTokenType>
      >(AUTH_API_ROUTES.SIGN_UP, userData);
      console.log(data, 1111);
      
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }

  static async signIn(
    userData: ISignInData
  ): Promise<IApiResponseSuccess<UserWithTokenType> | IApiResponseReject> {
    try {
      const { data } = await axiosInstance.post<
        IApiResponseSuccess<UserWithTokenType>
      >(AUTH_API_ROUTES.SIGN_IN, userData);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }

  static async signOut(): Promise<
    IApiResponseSuccess<null> | IApiResponseReject
  > {
    try {
      const { data } = await axiosInstance.get<IApiResponseSuccess<null>>(
        AUTH_API_ROUTES.SIGN_OUT
      );
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }
}
