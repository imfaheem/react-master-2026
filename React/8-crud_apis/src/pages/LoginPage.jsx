import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import { FaRegCheckCircle } from 'react-icons/fa';
import { VscGitPullRequestError } from 'react-icons/vsc';

import AuthContext from '../context/AuthContext';
import { getCurrentUser, loginUser } from '../services/authApi';

import Alert from '../ui/Alert';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const { setIsAuthenticated } = useContext(AuthContext);

    const {
        reset,
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        }
    });

    const onSubmit = async (data) => {
        setError(null);
        setIsSuccess(false);
        try {
            const response = await loginUser(data);
            
            // Temporary storing accessToken and refreshToken in LocalStorage
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refreshToken);

            // ContextAPI 
            setIsAuthenticated(true);

            // Get Access Token
            const accessToken = localStorage.getItem("accessToken");
            // Protected Request
            const authorizedUser = await getCurrentUser(accessToken);
            // Protected Response
            console.log("Access Token Response", authorizedUser);

            setIsSuccess(true);
            reset();
            setTimeout(()=>{
                setIsSuccess(false);
                navigate("/");
            }, 2000)
        } catch(err) {
            console.log("ERROR:", err);
            console.log("STATUS:", err.response?.status);
            console.log("RESPONSE:", err.response?.data);
            setError(`${err.message}. May be, Invalid Username or Password.`);
        }
    }

    return (
        <>
            <h1 className="text-center uppercase !text-4xl !font-bold m-0">Login Page</h1>
            <div className="h-[calc(100dvh-190px)] flex justify-center items-center">
                <section className="border border-gray-300 rounded-xl p-6 w-96">
                    <h2 className='!text-blue-500 !font-semibold uppercase'>User Login Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='py-4'>
                        <Controller
                            name='username'
                            control={control}
                            rules={{ required: "Please enter your Username" }}
                            render={({field, fieldState}) => (
                                <>
                                    <InputField
                                        label="Enter your Username"
                                        name={field.name}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                    {fieldState.error && <Alert variant='error' className='!py-1 mt-2 text-sm'>{fieldState.error.message}</Alert>}
                                </>
                            )}
                        />
                        <div className="flex flex-col mt-4">
                            <label className="text-gray-500 text-sm font-medium mb-1 block">Enter your Password</label>
                            <input
                                type='password'
                                className="block border border-gray-300 rounded p-1 appearance-none indent-1"
                                {...register("password", {
                                    required: "Please enter your Password",
                                    minLength: {
                                        value: 6,
                                        message: "At least 6 characters"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum 20 characters"
                                    },
                                })}
                            />
                            {errors.password && <Alert variant='error' className='!py-1 mt-2 text-sm'>{errors.password?.message}</Alert>}
                        </div>
                        <Button
                            type="submit"
                            size="lg"
                            variant='post'
                            disabled={isSubmitting}
                            className='w-full mt-4 uppercase font-semibold'
                        >
                            {isSubmitting ? "Logging In..." : "Login"}
                        </Button>
                        {error && (
                            <Alert
                                variant="error"
                                className="!my-4 flex-row justify-start"
                            >
                                <VscGitPullRequestError className="text-3xl" />
                                <span>{error}</span>
                            </Alert>
                        )}
                    </form>
                    {isSuccess && (
                        <Alert variant="success" className="!mt-4">
                            <FaRegCheckCircle className="text-3xl" />
                            <span>User Successfully Logged In.</span>
                        </Alert>
                    )}
                </section>
            </div>
        </>
    )
}
