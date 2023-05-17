import { useForm } from "react-hook-form";

function Login ()
{
    const { register, handleSubmit, formState: { errors } } = useForm();
      
     const submitdata = ( data) => {
        console.log(data);
     }




    return(
       <form className="d-flex justify-content-center mt-5 border p-5 w-50 mx-auto "
        onSubmit={handleSubmit(submitdata)} >
        <section>
           <div className="d-flex flex-column mb-5 input-group">
            <label htmlFor=''>Name</label>
            <input
               className="form-control w-100"
               type='text'
               placeholder="username"
              {...register('userName',{required:true})}
            />
            {errors?.userName?.type === 'required'&&
               <div className="alert alert-danger mt-2"> This input is required </div>
            }
           </div> 
           <div className="d-flex flex-column mb-5 input-group">
            <label htmlFor=''>Password</label>
            <input
               className="form-control w-100"
               type='password'
               placeholder="password"
               {...register('password',{required:true,pattern: /^[A-Za-z]+$/i } )}
            />
             {errors?.password?.type === 'required'&&
               <div className="alert alert-danger mt-2"> This input is required </div>
             }
              {errors?.password?.type === 'pattern'&&
               <div className="alert alert-danger mt-2"> no match pattern  </div>
              }
           </div> 
           <div>
            <button className="btn btn-primary w-100" >Submit</button>
           </div>
        </section>

       </form>
    )
}

export default Login;