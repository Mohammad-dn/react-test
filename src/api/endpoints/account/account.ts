/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * WebAPIForExam
 * OpenAPI spec version: 1.0
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import * as axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { WebAPIAccountLoginRequest } from "../../model";

export const postWebapiAccountLogin = (
  webAPIAccountLoginRequest: WebAPIAccountLoginRequest,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.default.post(
    `https://exam.pishgamanasia.com/webapi/Account/Login`,
    webAPIAccountLoginRequest,
    options
  );
};

export const getPostWebapiAccountLoginMutationOptions = <
  TError = AxiosError<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postWebapiAccountLogin>>,
    TError,
    { data: WebAPIAccountLoginRequest },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postWebapiAccountLogin>>,
  TError,
  { data: WebAPIAccountLoginRequest },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postWebapiAccountLogin>>,
    { data: WebAPIAccountLoginRequest }
  > = (props) => {
    const { data } = props ?? {};

    return postWebapiAccountLogin(data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostWebapiAccountLoginMutationResult = NonNullable<
  Awaited<ReturnType<typeof postWebapiAccountLogin>>
>;
export type PostWebapiAccountLoginMutationBody = WebAPIAccountLoginRequest;
export type PostWebapiAccountLoginMutationError = AxiosError<unknown>;

export const usePostWebapiAccountLogin = <
  TError = AxiosError<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postWebapiAccountLogin>>,
    TError,
    { data: WebAPIAccountLoginRequest },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationResult<
  Awaited<ReturnType<typeof postWebapiAccountLogin>>,
  TError,
  { data: WebAPIAccountLoginRequest },
  TContext
> => {
  const mutationOptions = getPostWebapiAccountLoginMutationOptions(options);

  return useMutation(mutationOptions);
};
