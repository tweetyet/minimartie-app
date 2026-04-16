import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { register as accountRegister } from "../../../services/auth";
import ButtonSpinner from "../../../components/ButtonSpinner";
const RegisterForm = () => {

     const navigate = useNavigate();
    
      const {
        register,
        handleSubmit,
        watch,
        formState: { isSubmitting },
      } = useForm();
    
      const handleRegister = async (data) => {
        console.log(data);
    
        const res = await accountRegister(data);
    
        const json = await res.json();
    
        if(res.status === 200){
          toast.success("Register Successfully");  
          // console.log(json)
          navigate("/login");
        } else {
          toast.error(json.message);
        }
    
    
      };

  return (
     <form
              onSubmit={handleSubmit(handleRegister)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#A16207]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
                  placeholder="eg. John Doe"
                />
              </div>
    
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#A16207]"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
                  placeholder="eg. john@company.com"
                />
              </div>
    
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#A16207]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
                  required
                />
              </div>
    
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-[#A16207]"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  {...register("password_confirmation")}
                  className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
                  required
                />
              </div>
    
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-[#A16207]/40 rounded bg-[#A16207] focus:ring-[#A16207]"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-[#A16207]/80"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-[#A16207] hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
    
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center text-white bg-[#A16207]/90 hover:bg-[#A16207] focus:ring-4 focus:outline-none focus:ring-[#A16207]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
              >
                {isSubmitting ? <ButtonSpinner /> : "Create an account"}
              </button>
    
              <p className="text-sm font-light text-[#A16207]/80">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#A16207] hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
  )
}

export default RegisterForm
