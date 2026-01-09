import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { useForm } from "react-hook-form"
import { measurementSchema } from "../utils/schema"
import * as z from "zod"
import { useFormStore } from "../store/useFormStore"
import { useNavigate } from "react-router-dom"


//infer type
type measurementType = z.infer<typeof measurementSchema>

export const measurementFields = [
  {
    name: "heightCm",
    label: "Height (cm)",
    placeholder: "Enter height in cm",
    required: true,
  },
  {
    name: "weightKg",
    label: "Weight (kg)",
    placeholder: "Enter weight in kg",
    required: true,
  },
  {
    name: "systolicBP",
    label: "Systolic BP (mmHg)",
    placeholder: "Enter systolic BP",
    required: false,
  },
  {
    name: "diastolicBP",
    label: "Diastolic BP (mmHg)",
    placeholder: "Enter diastolic BP",
    required: false,
  },
  {
    name: "heartRate",
    label: "Heart Rate (bpm)",
    placeholder: "Enter heart rate",
    required: false,
  },
  {
    name: "temperature",
    label: "Body Temperature (°F)",
    placeholder: "Enter temperature",
    required: false,
  },
] as const satisfies readonly {
  name: keyof measurementType;
  label: string;
  placeholder: string;
  required: boolean;
}[];

const Measurements = () => {
  const navigate = useNavigate();
  //zusatnd
  const storedMeasurements = useFormStore((state) => state.measurements);
  const setMeasurements = useFormStore((state) => state.setMeasurements);

  const {register, handleSubmit, formState:{errors}} = useForm<measurementType>({
      resolver: zodResolver(measurementSchema),
      defaultValues:storedMeasurements as measurementType
  });

  const onSubmit = (data: measurementType) => {
    console.log('Form Data:', data);
    setMeasurements(data);
    navigate('/getData');
  }
  return (
    <div className="max-w-md m-auto p-4 border-2 rounded-2xl">
      <h1 className="text-bold text-3xl text-center mb-5">Measurements</h1>

      <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4">

        <div className="flex flex-col gap-4">
        {measurementFields.map((field) => (
          <div key={field.name}>
          <label htmlFor={field.name} className="block">
                   {field.label}
          {field.required && <span className="text-red-500">*</span>}
        </label>

      <input
        type="number"
        id={field.name}
        placeholder={field.placeholder}
        className="w-full p-2 border border-gray-300"
        {...register(field.name, {
          setValueAs: (v) => (v === "" ? undefined : Number(v)),
      })}
    />

    {errors[field.name] && (
      <p className="text-red-500 text-sm">
        {errors[field.name]?.message}
      </p>
    )}
  </div>
))}

        </div>
        

        



        {/* sumbit button */}
        <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-300">
            Submit
        </button>
      </form>
    </div>
  )
}

export default Measurements
