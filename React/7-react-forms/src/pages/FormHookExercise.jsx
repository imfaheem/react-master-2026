import { Controller, useForm } from "react-hook-form"
import { CustomSelect } from "../components/CustomSelect";
import { countries } from "../utils";

export const FormHookExercise = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            country: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="m-4">
            <h2>FormHook Exercise</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <input
                        type="text"
                        {...register("name", {
                            required: "Enter your name"
                        })}
                    />
                </p>
                {errors.name && <small>{errors.name.message}</small>}
                <p>
                    <Controller
                        name="country"
                        control={control}
                        rules={{
                            required: "Select your country"
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <CustomSelect
                                    name={field.name}
                                    value={field.value}
                                    onChange={field.onChange}
                                    options={countries}
                                    className="border rounded-md py-2 px-4 w-80 cursor-pointer"
                                />
                                {fieldState.error && <small>{fieldState.error.message}</small>}
                            </>
                        )}
                    />
                </p>
                <button type="submit" className="bg-sky-500 mt-2 text-white px-2 py-1 rounded-md w-20">Submit</button>
            </form>
        </div>
    )
}
