/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostWebapiAccountLogin } from "@/api/endpoints/account/account";
import { routesObject } from "@/lib";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
const FormSchema = z.object({
  username: z.string().min(5, {
    message: "نام کاربری شامل حداقل 5 کارکتر میباشد ",
  }),
  password: z.string().min(6, {
    message: "رمز عبور شامل 6  کارکتر میباشد ",
  }),
});

export const useLoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate: loginMutate, isLoading: loginLoading } =
    usePostWebapiAccountLogin({
      mutation: {
        onSuccess: (res: any) => {
          if (res?.data?.data !== null) {
            toast.success("با موفقیت وارد شدید", {
              position: "top-center",
            });
            const userToken = res?.data?.data?.userToken;
            Cookies.set("userToken", userToken);
            navigate(`${routesObject.REQUEST.main}?isAccsess=true`);
          } else {
            toast.error(res?.data?.message, {
              position: "top-center",
            });
          }
        },
        onError: (err) => {
          toast.error(err?.message);
        },
      },
    });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    loginMutate({
      data: {
        username: data?.username,
        password: data?.password,
      },
    });
  };
  return { onSubmit, form, loginLoading };
};
