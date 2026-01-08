import { zodResolver } from "@hookform/resolvers/zod"
import { personalDetailsSchema } from "../utils/schema"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { useNavigate } from "react-router-dom"
import { useFormStore } from "../store/useFormStore"

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
    <div className="max-w-md mx-auto p-4">
      <h1 className="font-bold text-3xl mb-10 text-center">Personal Details</h1>

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
            className="border p-2 w-full" />

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
            className="border p-2 w-full"/>

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
            className="border p-2 w-full"/>
            {errors.address?.city && (
                <p className="text-red-500 text-sm">{errors.address.city?.message}</p>
            )}

          <input 
            {...register('address.state')}
            type="text" id="address" placeholder="Enter your state" 
            className="border p-2 w-full"/>

           {errors.address?.state && (
                <p className="text-red-500 text-sm">{errors.address.state?.message}</p>
            )}

            <input 
            {...register('address.country')}
            type="text" id="address" placeholder="Enter your country" 
            className="border p-2 w-full"/>
            {errors.address?.country && (
                <p className="text-red-500 text-sm">{errors.address.country?.message}</p>
            )}

            <input 
            {...register('address.pincode')}
            type="text"
            inputMode="numeric" 
            id="address" 
            placeholder="Enter your pincode" 
            className="border p-2 w-full"/>


            {/* errors */}
            

           

            

            {errors.address?.pincode && (
                <p className="text-red-500 text-sm">{errors.address.pincode?.message}</p>
            )}




        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-300">
            Submit
        </button>
      </form>
    </div>
  )
}

export default PersonalDetails
