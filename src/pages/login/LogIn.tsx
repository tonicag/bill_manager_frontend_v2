import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { logIn } from "@/services/auth/auth.service";
import { LogInResponse } from "@/services/auth/interfaces/logInResponse";
import { useAuthContext } from "@/common/contexts/AuthContext";
import { useLocalStorage } from "usehooks-ts";
import { Navigate, useNavigate } from "react-router-dom";
import { CompanyDTO } from "@/interfaces/company.dto";
const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string(),
});

const LogIn = () => {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [, setCompany] = useLocalStorage<CompanyDTO | null>("company", null);
  const authContext = useAuthContext();
  const navigate = useNavigate();

  if (token) return <Navigate to={"/dashboard"} />;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = (await logIn(values)) as LogInResponse;
    if (data && data.token) {
      authContext.setToken(data.token);
      authContext.setAuthState(true);

      if (data.company) setCompany(data.company);

      navigate("/dashboard");
    }
  }
  return (
    <div className="w-full flex items-center justify-center h-full bg-slate-50">
      <div className="w-1/3  bg-gray-300 p-8 rounded-md ">
        <div className="w-full flex justify-center items-center p-1">
          <p className="text-xl font-bold">Log In</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-center ">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
