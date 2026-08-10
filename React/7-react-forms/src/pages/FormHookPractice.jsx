import { useState } from "react";
import { useForm } from "react-hook-form";

export const FormHookPractice = () => {

    const [isSuccess, setIsSuccess] = useState(false);

    const {
        reset,
        register,
        getValues,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur",
        defaultValues : {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            age: 35,
            hobbies: ["Coding"],
            message: "Write message here...",

        }
    });

    const onSubmit = (data)=> {
        console.log(data);
        setIsSuccess(true);
        reset();
        setTimeout(()=> {
            setIsSuccess(false);
        }, 3000)
    }

    return (
        <div>
            <h2 className="!m-4">Form Hook Practice</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-96">
                <div className="m-4">
                    <input
                        placeholder="Enter Name"
                        {...register("name", {
                            required: "Name field is required",
                            minLength: {
                                value: 5,
                                message: "Name minimum length should be 5"
                            },
                        })}
                        className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.name && <small className="text-red-500">{errors.name.message}</small>}
                </div>
                <div className="m-4">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        {...register("email", {
                            required: "Please Enter Email",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address. Please enter a valid email. e.g. xxxx_yyyy@email.com"
                            }
                        })}
                        className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.email && <small className="text-red-500">{errors.email.message}</small>}
                </div>
                <div className="m-4">
                    <input
                        type="password"
                        placeholder="Enter Password"
                        {...register("password", {
                            required: "Please Enter Password",
                            minLength: {
                                value: 6,
                                message: "At least 6 characters"
                            },
                            maxLength: {
                                value: 20,
                                message: "Maximum 20 characters"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,20}$/,
                                message: "Password must be Alphanumeric characters and must have 1 special character. e.g. Abc123(@ $ ! % * ? & #)"
                            }
                        })}
                        className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                </div>
                <div className="m-4">
                    <input
                        type="password"
                        placeholder="Enter Confirm Password"
                        {...register("confirmpassword", {
                            required: "Please Enter Confirm Password",
                            validate: value => value === getValues("password") || "Password do not match."
                        })}
                        className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.confirmpassword && <small className="text-red-500">{errors.confirmpassword.message}</small>}
                </div>
                <div className="m-4">
                    <input
                        type="number"
                        placeholder="Enter Age"
                        {...register("age", {
                            min: {
                                value: 18,
                                message: "Age must be greater than or equal to 18"
                            },
                            max: {
                                value: 60,
                                message: "Age must be less than or equal to 60"
                            }
                        })}
                        className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.age && <small className="text-red-500">{errors.age.message}</small>}
                </div>
                <div className="m-4 grid grid-cols-2">
                    <div>
                        <input type="radio" value="Male" {...register("gender", {required: "Please select any Gender"})} /> Male
                    </div>
                    <div>
                        <input type="radio" value="Female" {...register("gender", {required: "Please select any Gender"})} /> Female
                    </div>
                    {errors.gender && <small className="col-span-2 text-red-500">{errors.gender.message}</small>}
                </div>
                <div className="m-4">
                    <select
                        {...register("country", {
                            required: "Please select the Country"
                        })}
                        className="w-full rounded-md py-2.5 px-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                        <option value="">- Select Country -</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Iran">Iran</option>
                        <option value="Bangladesh">Bangladesh</option>
                    </select>
                    {errors.country && <small className="text-red-500">{errors.country.message}</small>}
                </div>
                <div className="m-4">
                    <input type="checkbox" value="Reading" {...register("hobbies")} /> Reading <br />
                    <input type="checkbox" value="Swimming" {...register("hobbies")} /> Swimming <br />
                    <input type="checkbox" value="Coding" {...register("hobbies")} /> Coding <br />
                    <input type="checkbox" value="Searching" {...register("hobbies")} /> Searching <br />
                </div>
                <div className="m-4">
                    <textarea
                        placeholder="Message..."
                        {...register("message")}
                        className="border w-full block rounded-md py-2 px-4 rounded-md h-20"
                    />
                </div>
                <div className="m-4">
                    <input
                        type="checkbox"
                        value="Accept Policy" {...register("policy", {
                            required: "Kindly check the Terms and Conditions."
                        })}
                    /> <span className="text-xs">Accept the privacy policy and terms and conditions.</span> <br />
                    {errors.policy && <small className="text-red-500">{errors.policy.message}</small>}
                </div>
                <div className="flex gap-4 m-4">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="border hover:bg-gray-200 font-medium rounded-md px-4 py-1 cursor-pointer"
                    >
                        Reset
                    </button>
                    <button
                        disabled={!isValid && isSubmitting}
                        className="border hover:bg-blue-400 bg-blue-300 hover:text-white font-medium rounded-md px-4 py-1 cursor-pointer"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
                {isSuccess ? (
                    <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm font-medium">
                        <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Form Successfully Submitted.</span>
                    </div>
                ) : null}
            </form>
        </div>
    )
}
