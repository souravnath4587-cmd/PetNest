"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  // Google Sign In
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      toast.success("Google Login Successfully done.");
    } else {
      toast.error("UnAuthorize..");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { email, password } = data;
    console.log(email, password);

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("LogIn Completed Successfully..");
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <Form
        className="flex w-[400] flex-col gap-4 rounded-2xl shadow-2xl p-8 border broder-write/5"
        onSubmit={onSubmit}
      >
        <div className="loginHeader space-y-2">
          <h3 className="text-2xl font-bold ">LogIn</h3>
          <p className="text-sm text-gray-500">
            Enter your email below to login to your account
          </p>{" "}
        </div>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <FaCheck />
            LogIn
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="flex flex-col  space-y-4">
          <p className="text-sm text-gray-500">
            Not registered yet?{" "}
            <Link className="text-blue-500" href="/register">
              {" "}
              Create an account.
            </Link>
          </p>
          <Button
            className=" rounded-none w-full flex gap-4 font-bold"
            variant="outline"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle />
            Login With Google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
