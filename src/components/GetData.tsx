import { useFormStore } from "../store/useFormStore"
import { buttonBaseDesign } from "./Details";

const GetData = () => {
    const storedDetails = useFormStore((state) => state.details);
    const storedPersonalDetails = useFormStore((state) => state.personalDetails);
    const storedMeasurements = useFormStore((state) => state.measurements);


    //submit function
    const handleSubmit = () => {
        console.log(storedDetails, storedPersonalDetails, storedMeasurements);
        //Todo - send data to backend
    }
  return (
    <div className="flex flex-col gap-4 max-w-sm m-auto">
      <h1 className="text-bold text-3xl text-center mb-5">Review Your Application</h1>
      
      <div className="border p-4 border-gray-300 rounded-xl">
        {/* basic info */}
        <p>Name: {storedDetails.name}</p>
        <p>Email: {storedDetails.email}</p>
        <p>Age: {storedDetails.age}</p>
        <p>Gender: {storedDetails.gender}</p>
      </div>

      {/* personal info */}
      <div className="border p-4 border-gray-300 rounded-xl">
        <p>Father Name: {storedPersonalDetails.fatherName}</p>
        <p>Mother Name: {storedPersonalDetails.motherName}</p>
        <p>City: {storedPersonalDetails.address.city}</p>
        <p>State: {storedPersonalDetails.address.state}</p>
        <p>Country: {storedPersonalDetails.address.country}</p>
        <p>Pincode: {storedPersonalDetails.address.pincode}</p>
      </div>

      {/* measurements   */}
      <div className="border p-4 border-gray-300 rounded-xl">
        <p>Height: {storedMeasurements.heightCm}</p>
        <p>Weight: {storedMeasurements.weightKg}</p>
        <p>Systolic BP: {storedMeasurements.systolicBP}</p>
        <p>Diastolic BP: {storedMeasurements.diastolicBP}</p>
        <p>Heart Rate: {storedMeasurements.heartRate}</p>
        <p>Temperature: {storedMeasurements.temperature}</p>
      </div>

      <button type="submit" className={`${buttonBaseDesign}`} onClick={ handleSubmit}>Final Submit</button>
    </div>
  )
}

export default GetData
