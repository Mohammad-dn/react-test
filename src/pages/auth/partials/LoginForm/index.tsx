import { Button, Input } from "@/components";
import { useLoginForm } from "./hook";
export function LoginForm() {
  const { form, loginLoading, onSubmit } = useLoginForm();
  return (
    <form
      {...form}
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col px-8 pb-10  "
    >
      <div className="text-center mt-2 mb-4">ورود</div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 items-center justify-start">
          <div className="self-start  text-neutral-500">نام کاربری</div>
          <Input type="text" {...form.register("username")} />
          <p className="text-red-500 font-bold text-xs pt-2 self-start">
            {form.formState.errors.username?.message}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start">
          <div className="self-start  text-neutral-500">رمز عبور</div>
          <Input type="password" {...form.register("password")} />
          <p className="text-red-500 font-bold text-xs pt-2 self-start">
            {form.formState.errors.username?.message}
          </p>
        </div>
        <Button className="rounded-full" type="submit">
          {loginLoading ? "در حال ارسال اطلاعات" : "ورود"}
        </Button>
      </div>
    </form>
  );
}
