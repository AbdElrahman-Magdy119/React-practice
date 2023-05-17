//انا بحمل الباكج دي علشان استخدم الفورم
import { useForm } from "react-hook-form";

function Register ()
{

  
// دي بجيبها جاهزه علشان فيها الريجستر دي الي بخزن فيها الداتا 
//وفيها الهاندل دي الي فيها الفانكشن الي بتجبلي الداتا من الفورم
//  وفيها الواتش الي بتقراب التغيرات  ولو عايز اشوف كل متغير وهوه قيمته ممكن تتغير يعني اقدر اعرف بيها قيمه المتغيرات الي عندي 
//وفيها الايرور الي راجع لو كان فيه مشكله 
    const { register, handleSubmit, watch,formState: { errors } } = useForm({
      //هنا انا بدي قيمه ابتدائيه للتشيك بوكس بفولس
    defaultValues: {
      checkbox: false,
    }
  });
      

  //دي الفانكشن الي بتعمل سبمت للداتا وبترجع الداتا كلها من الانبوت بتاعي وهنا انا بعملها طباعه لكن المفروض بعد كدا هنا ابعتها للباك
     const submitdata = ( data) => {
        console.log(data);
     }


    return(
        <form className="d-flex justify-content-center mt-5 border p-5 w-50 mx-auto "
        //دي اسم الفانكشن الي بعمل بيها سبمت وبديها الهاندل علشان ترجع كل الداتا من الفورم والانبوت
        onSubmit={handleSubmit(submitdata)} > 
        <section>
           <div className="d-flex flex-column mb-5 input-group">
            <label htmlFor=''>Name</label>
            <input
               className="form-control w-100"
               type='text'
               placeholder="username" //انا لازم ادي اي انبوت عندي اسم لان هوه الي هيخزن فيه الداتا
              //انا هنا بقوله خزن القيمه الي هتتكتب في الانبوت ده في الريجستر باسم عسثقىشةثونفس الاسم الي قبله
              // وكمان بحط الفالديت الي عايزه ذي هنا عاملها ب تروو انها مطلوبه
              {...register('userName',{required:true})}
            />
            
            {errors?.userName?.type === 'required'&&  // هنا بعمل الفالديت علشان الرساله الي هتظهر لو كان فيه عندي مشكله وبختار حسب الفالد
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
           
           <div className="d-flex flex-column mb-5 input-group"> 
            <label htmlFor=''>confirm Password</label>
            <input
               className="form-control w-100"
               type='password'
               placeholder="confirm Password"
               {...register("confirm_password", {
                  required: true,                 //دي طريقه الفالد بتاعت الكنفيرم باسورد
                  validate: (val) => {
                    if (watch('password') != val) {
                      return "Your passwords do no match";
                    }
                  },
                 })}
            />
             {errors?.confirm_password?.type === 'required'&&  //ممكن نستخدم اكتر من فالديت عادي براحتي وحسب اللوجيك
               <div className="alert alert-danger mt-2"> This input is required </div>
             }
             {errors?.confirm_password?.type === 'validate'&&
               <div className="alert alert-danger mt-2">Your passwords do no match </div>
             }
           </div> 
           <div className="d-flex flex-column mb-5 input-group">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" 
            {...register('checkbox',{required:true})}
            />
           <label class="form-check-label" for="flexCheckDefault">
           click here
           </label>
            {errors?.checkbox?.type === 'required'&&
               <div className="alert alert-danger mt-2"> This input is required </div>
            }

         
           </div>  
           <div className="d-flex flex-column mb-5 input-group ">
                <select class="form-select w-100" aria-label="Default select example"
                    {...register('select',{required:true})}
                    >
                    <option selected>Open this select Gender</option>
                    <option value="1">male</option>
                    <option value="2">female</option>
                </select>  
                {errors?.select?.type === 'required'&& //هنا مع الفالديت ممكن السيليكت متشتغلش لان هي اصلا بتكون تلقائي مختاره فهوه دايما هيكون ليها قيمه
                    <div className="alert alert-danger mt-2"> This input is required </div>
                }
           </div> 
           <div>
            <button className="btn btn-primary w-100" >Submit</button>
           </div>
        </section>

       </form>
    )
}

export default Register;