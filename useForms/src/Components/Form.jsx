// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useForm} from "react-hook-form";
import './Form.css'

const Form =()=>{
    const {register,handleSubmit,formState:{errors,isSubmitSuccessful,isSubmitting}}=useForm();

    const onSubmit=async(data)=>{
        await new Promise ((resolve)=>setTimeout(resolve,2000));
        console.log(data);
    }

  return (
    <div >
    
    <form  className="main-container"onSubmit={handleSubmit(onSubmit)}>
    <div className={`container ${isSubmitSuccessful ? 'success' : ''}`}>
                {isSubmitSuccessful ? <h2 className='green'>Registration successful!!</h2> : null}
            </div>
      <div>
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: "First name required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid first name",
            },
          })}
        />
        {errors.firstName && <p className='red'>{errors.firstName.message}</p>}
      </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            {...register("lastName", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Invalid last name",
              },
            })}
          />
          {errors.lastName && <p className='red'>{errors.lastName.message}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Invalid email";
                }
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && <p className='red'>{errors.email.message}</p>}
        </div>
        <div>
                    <input type='password' placeholder='Password'
                        {...register("pass", {
                            required: "Enter your password",
                            minLength:{value:5,message:"Password must be more than 4 characters"},maxLength:{value:20,message:"Password cannot  be more than 20 characters"},
                        })} />
                    {errors.pass &&<p className='red'>{errors.pass.message}</p> }

                </div>

        <div className='btn'>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Register"}
        </button>
        </div>
      </form>
    </div>
  )
}

export default Form
