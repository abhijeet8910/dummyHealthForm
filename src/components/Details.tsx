import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod';
import { detailsSchema } from '../utils/schema';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useFormStore } from '../store/useFormStore';

//infer type
type DetailForm = z.infer<typeof detailsSchema>;

const Details = () => {
  const navigate = useNavigate();
  const storedDetails = useFormStore((state) => state.details);
  const setDetails = useFormStore((state) => state.setDetails);

    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<DetailForm>({
        resolver: zodResolver(detailsSchema),
        // defaultValues: {
        //   name: '',
        //   email: '',
        //   age: undefined,
        //   gender: 'male',
        // }
        defaultValues: storedDetails as DetailForm
    });

    const onSubmit = (data: DetailForm) => {
        console.log("Form Data:", data);
        setDetails(data);
      navigate('/personalDetails');
        
        ///todo - send data to backend
    };

    return (
        <div className='max-w-md m-auto p-4 border-2 rounded-2xl'>
            <h1 className="text-center text-4xl font-bold">Step1:-Details</h1>

            {/* Attach handleSubmit to the form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block">Name</label>
                    <input 
                        {...register("name")} // Spread the register function
                        type="text" 
                        id="name"
                        placeholder="Enter your name"
                        className="border p-2 w-full"
                    />
                    {/* Display Zod validation errors */}
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                <div>
                  <label htmlFor="email" className='block'>Email</label>
                  <input 
                  {...register('email')}
                  //spread the email function
                  type='email'
                  id='email'
                  placeholder='Enter your email'
                  className='border p-2 w-full '
                   />
                   {/* error */}
                   {errors.email && (
                    <p className='text-red-500 text-sm'>{errors.email.message}</p>
                   )}
                </div>

                {/* age field */}
                <div>
                    <label htmlFor="age"
                    className='block'>Age</label>
                    <input 
                    {...register('age', {valueAsNumber: true})}
                    type='number' 
                    id='age'
                    placeholder='Enter age'
                    className='border p-2 w-full'/>
                    {/* error */}
                    {errors.age && (
                        <p className='text-sm text-red-500'>{errors.age.message}</p>
                    )}
                </div>
                {/* gender field */}
                <div>
                    <label htmlFor="gender"
                    className='block'>Gender</label>
                    <select 
                    {...register('gender')}
                    id='gender'
                    className='border p-2 w-full'>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                    {/* error */}
                    {errors.gender && (
                        <p className='text-sm text-red-500'>{errors.gender.message}</p>
                    )}
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-300">
                   Next
                </button>
            </form>
        </div>
    );
};

export default Details;
