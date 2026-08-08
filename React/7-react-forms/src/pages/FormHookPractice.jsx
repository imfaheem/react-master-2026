import { useForm } from "react-hook-form";

export const FormHookPractice = () => {

    const {
        reset,
        register,
        getValues,
        handleSubmit,
        formState: { errors, isValid, isSubmitting, isSubmitted },
    } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues : {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            age: 35,
            gender: "Male",
            country: "Pakistan",
            hobbies: ["Coding"],
            message: "Write message here...",

        }
    });

    const onSubmit = (data)=> {
        console.log(data);
        reset();
    }

    return (
        <div>
            <h2>Form Hook Practice</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <input
                        placeholder="Enter Name"
                        {...register("name", {
                            required: "Name field is required",
                            minLength: {
                                value: 5,
                                message: "Name minimum length should be 5"
                            },
                        })}
                    />
                </p>
                {errors.name && <small>{errors.name.message}</small>}
                <p>
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
                    />
                </p>
                {errors.email && <small>{errors.email.message}</small>}
                <p>
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
                    />
                </p>
                {errors.password && <small>{errors.password.message}</small>}
                <p>
                    <input
                        type="password"
                        placeholder="Enter Confirm Password"
                        {...register("confirmpassword", {
                            required: "Please Enter Confirm Password",
                            validate: value => value === getValues("password") || "Password do not match."
                        })}
                    />
                </p>
                {errors.confirmpassword && <small>{errors.confirmpassword.message}</small>}
                <p>
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
                    />
                </p>
                {errors.age && <small>{errors.age.message}</small>}
                <div>
                    <input type="radio" value="Male" {...register("gender", {required: "Please select any Gender"})} /> Male
                    <input type="radio" value="Female" {...register("gender", {required: "Please select any Gender"})} /> Female
                </div>
                {errors.gender && <small>{errors.gender.message}</small>}
                <p>
                    <select {...register("country", {
                        required: "Please select the Country"
                    })}>
                        <option value="">- Select Country -</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Iran">Iran</option>
                        <option value="Bangladesh">Bangladesh</option>
                    </select>
                </p>
                {errors.country && <small>{errors.country.message}</small>}
                <div>
                    <input type="checkbox" value="Reading" {...register("hobbies")} /> Reading <br />
                    <input type="checkbox" value="Swimming" {...register("hobbies")} /> Swimming <br />
                    <input type="checkbox" value="Coding" {...register("hobbies")} /> Coding <br />
                    <input type="checkbox" value="Searching" {...register("hobbies")} /> Searching <br />
                </div>
                <p><textarea placeholder="Message..." {...register("message")}/></p>
                <div>
                    <input
                        type="checkbox"
                        value="Accept Policy" {...register("policy", {
                            required: "Kindly check the Terms and Conditions."
                        })}
                    /> Accept the privacy policy and terms and conditions. <br />
                    {errors.policy && <small>{errors.policy.message}</small>}
                </div>
                <button type="button" onClick={() => reset()}>
                    Reset
                </button>
                <button disabled={!isValid || isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                {isSubmitted ? (
                    <p className="submitted">Form Successfully Submitted.</p>
                ) : null}
            </form>
        </div>
    )
}
