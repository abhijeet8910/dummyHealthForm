import { zodResolver } from "@hookform/resolvers/zod"
import { personalDetailsSchema } from "../utils/schema"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { useNavigate } from "react-router-dom"
import { useFormStore } from "../store/useFormStore"

import { baseDesign, buttonBaseDesign } from "./Details"

//infer types
type personalDetailsSchemaType = z.infer<typeof  personalDetailsSchema>



const PersonalDetails = () => {
    const navigate = useNavigate();

    //zustand data
    const storedPersonalDetails = useFormStore((state) => state.personalDetails);
    const setPersonalDetails = useFormStore((state) => state.setPersonalDetails);
   

    const {
            register,
         handleSubmit,
        formState:{errors}
    } = useForm<personalDetailsSchemaType>({
     resolver: zodResolver(personalDetailsSchema),
    
    defaultValues: storedPersonalDetails
});

const onSubmit = (data: personalDetailsSchemaType) => {
    console.log("Form Data:", data);
    //storing Zustand data
    setPersonalDetails(data);
    navigate('/measurements');
   
    
}


  return (
    <div className="max-w-sm m-auto p-4 border-2 rounded-2xl mt-5">
      <h1 className="font-bold text-3xl mb-10 text-center">Step2:-Personal Details</h1>

      <form onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
      className="flex flex-col gap-4">
        {/*  */}
        <div>
            <label htmlFor="fatherName" className="block">FatherName</label>
            <input 
            {...register('fatherName')}
            type="text" 
            id="fatherName"
            placeholder="Enter your father name"
            className={`${baseDesign} ${errors.fatherName ? 'border-red-400' : 'border-blue-300'}`} />

            {/* errors */}
            {errors.fatherName && (
                <p className="text-red-500 text-sm">{errors.fatherName.message}</p>
            )}
        </div>

        {/* motherName */}
        <div>
            <label htmlFor="motherName" className="block">MotherName</label>
            <input
            {...register('motherName')} 
            type="text" 
            id="motherName" 
            placeholder="Enter your mother name"
            className={`${baseDesign} ${errors.motherName ? 'border-red-400' : 'border-blue-300'}`}/>

            {/* errors */}
            {errors.motherName && (
                <p className="text-red-500 text-sm">{errors.motherName.message}</p>
            )}
        </div>
    {/* address */}
        <div>
            <label htmlFor="address" className="block">Address</label>
            <input 
            {...register('address.city')}
            type="text" id="address" placeholder="Enter your city" 
            className={`${baseDesign}`}/>
            {errors.address?.city && (
                <p className="text-red-500 text-sm">{errors.address.city?.message}</p>
            )}

          <input 
            {...register('address.state')}
            type="text" id="address" placeholder="Enter your state" 
            className={`${baseDesign}`}/>

           {errors.address?.state && (
                <p className="text-red-500 text-sm">{errors.address.state?.message}</p>
            )}

            <input 
            {...register('address.country')}
            type="text" id="address" placeholder="Enter your country" 
            className={`${baseDesign}`}/>
            {errors.address?.country && (
                <p className="text-red-500 text-sm">{errors.address.country?.message}</p>
            )}

            <input 
            {...register('address.pincode')}
            type="text"
            inputMode="numeric" 
            id="address" 
            placeholder="Enter your pincode" 
            className={`${baseDesign}`}/>


            {/* errors */}
            

           

            

            {errors.address?.pincode && (
                <p className="text-red-500 text-sm">{errors.address.pincode?.message}</p>
            )}




        </div>

        <button type="submit" className={`${buttonBaseDesign}`}>
            Next
        </button>
      </form>
    </div>
  )
}

export default PersonalDetails
