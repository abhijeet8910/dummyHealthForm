
import { create } from "zustand";


//define types
type Details = {
    name: string,
    email: string,
    age: number | null,
    gender: string
};

type Address = {
    city: string,
    state: string,
    country: string,
    pincode: string
};

type PersonalDetails = {
    fatherName: string,
    motherName: string,
    address: Address
}

type Measurements = {
    heightCm: number | null;
    weightKg: number | null;
    systolicBP?: number;
    diastolicBP?: number;
    heartRate?: number;
    temperature?: number;
  };


  //more types
  // type Symptoms = {

  // }

//type of zustand store 
type FormStore = {
    details: Details;
    personalDetails: PersonalDetails;
    measurements: Measurements;

    setDetails: (details: Details) => void;
    setPersonalDetails: (personalDetails: PersonalDetails) => void;
    setMeasurements: (measurements: Measurements) => void;

    resetAll: () => void;
}

//create store 
export const useFormStore = create<FormStore>((set) => ({
    //state
    details: {
      name: "",
      email: "",
      age: null,
      gender: "male",
    },
  

    personalDetails: {
      fatherName: "",
      motherName: "",
      address: {
        city: "",
        state: "",
        country: "",
        pincode: "",
      },
    },
  
    
    measurements: {
      heightCm: null,
      weightKg: null,
    },
  
    //actions
    setDetails: (data) =>
      set({
        details: data,
      }),
  
    setPersonalDetails: (data) =>
      set({
        personalDetails: data,
      }),
  
    setMeasurements: (data) =>
      set({
        measurements: data,
      }),
  
    resetAll: () =>
      set({
        details: {
          name: "",
          email: "",
          age: null,
          gender: "male",
        },
        personalDetails: {
          fatherName: "",
          motherName: "",
          address: {
            city: "",
            state: "",
            country: "",
            pincode: "",
          },
        },
        measurements: {
          heightCm: null,
          weightKg: null,
        },
      }),
  }));
