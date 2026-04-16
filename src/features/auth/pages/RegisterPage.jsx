import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {

 

  return (
    <section className="dark:bg-gray-900">
  <Toaster />
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Link
      to="/"
   
      className="flex items-center mb-6 text-2xl font-semibold text-[#A16207]"
    >
      <img
        className="size-14 mr-2"
        src="/logo.png"
        alt="logo"
      />
     Minimartie App 
    </Link>

    <div className="w-full backdrop-blur-xl bg-white/30 border border-[#A16207]/30 rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        
        <h1 className="text-xl font-bold leading-tight tracking-tight text-[#A16207] md:text-2xl">
          Create an account
        </h1>

       <RegisterForm/>
      </div>
    </div>
  </div>
</section>
  );
};

export default RegisterPage;