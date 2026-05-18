"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const [password, setPassword] = useState("");

  const handleRegistationSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { email, name, photo, password } = data;

    // console.log(email, password);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      image: photo,
      email: email,
      password: password,
      callbackURL: "/login",
    });
    console.log(res);

    if (error) {
      alert(error.message);
    } else {
      alert("successfully done..");
      redirect("/login");
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      {" "}
      <Form
        className="flex w-[400] flex-col gap-4 rounded-2xl shadow-2xl p-8"
        onSubmit={handleRegistationSubmit}
      >
        <div className="loginHeader space-y-2">
          <h3 className="text-2xl font-bold ">Registation</h3>
          <p className="text-sm text-gray-500">
            Enter your email below to create an account
          </p>{" "}
        </div>
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (!/^[A-Za-z\s]+$/.test(value)) {
              return "Only letters are allowed";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Please Enter Your name." />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="photo"
          type="text"
          // validate={(value) => {
          //   if (!/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i.test(value)) {
          //     return "Enter a valid image URL";
          //   }
          //   return null;
          // }}
        >
          <Label>Photo</Label>
          <Input placeholder="Enter your image url" />
          <FieldError />
        </TextField>
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
          value={password}
          onChange={(value) => setPassword(value)}
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
        <TextField
          isRequired
          name="confirmPassword"
          type="password"
          validate={(value) => {
            if (value !== password) {
              return "Passwords do not match";
            }
            return null;
          }}
        >
          <Label>Confirm Password</Label>
          <Input placeholder="Confirm your password" />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button className="rounded-none w-full" type="submit">
            <FaCheck />
            Create An Account
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
