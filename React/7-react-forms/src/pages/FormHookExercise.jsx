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
        <div>
            <h2>FormHook Exercise</h2>
            <br />
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
                                />
                                {fieldState.error && <small>{fieldState.error.message}</small>}
                            </>
                        )}
                    />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}
