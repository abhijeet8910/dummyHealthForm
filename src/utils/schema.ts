// import z from 'zod';

// export const detailsSchema = z.object({
//     name: z.string().min(3, 'Name must be at least 3 characters').max(30, 'Name must be at most 30 characters'),
//     email: z.email(),
//     age: z.number('Age must be a number').min(1, 'Age must be at least greater than 0').max(120, 'Age must be less than 120'),
//     gender: z.enum(['male', 'female', 'other']),
// });

// export const personalDetailsSchema = z.object({
//     fatherName: z.string().min(3, 'Name must be at least 3 characters').max(30, 'Name must be at most 30 characters'),
//     motherName: z.string().min(3, 'Name must be at least 3 characters').max(30, 'Name must be at most 30 characters'),
//     address: z.object({
//         city: z.string().min(3, 'City must be at least 3 characters').max(20, 'City must be at most 20 characters'),
//         state: z.string().min(3, 'City must be at least 3 characters').max(20, 'City must be at most 20 characters'),
//         country: z.string().min(3, 'City must be at least 3 characters').max(20, 'City must be at most 20 characters'),
//         pincode: z.string().regex(/^[1-9][0-9]{5}$/, "Pincode must be a valid 6-digit Indian pincode"),

//     }),
// });

// export const measurementSchema = z.object({
//     heightCm: z.number('Height must be a number').min(50, 'Height must be at least 50 cm').max(250, 'Height must be at most 250 cm'),

//     weightKg: z.number('Weight must be a number').min(10, 'Weight must be at least 10 kg').max(300, 'Weight must be at most 300 kg'),

//     systolicBP: z.number('Systolic BP must be a number').min(70, 'Systolic BP must be at least 70').max(250, 'Systolic BP must be at most 250').optional(),

//    diastolicBP: z.number('Diastolic BP must be a number').min(40, 'Diastolic BP must be at least 40').max(150, 'Diastolic BP must be at most 150').optional(),

//    heartRate: z.number('Heart Rate must be a number').min(30, 'Heart Rate must be at least 30').max(220, 'Heart Rate must be at most 220').optional(),

//    temperature: z.number('Temperature must be a number').min(95,'Temperature must be at least 95').max(107, 'Temperature must be at most 107').optional(),
// });




// //other schemas
// // export const symptomsSchema = z.object({

// // })


import { z } from "zod";

/* ========== DETAILS SCHEMA ========== */
export const detailsSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),

  age: z.coerce
    .number({ invalid_type_error: "Age must be a number", required_error: "Age is required" })
    .min(1, "Age must be greater than 0")
    .max(120, "Age must be less than 120"),

  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required" }),
});

/* ========== PERSONAL DETAILS SCHEMA ========== */
export const personalDetailsSchema = z.object({
  fatherName: z
    .string({ required_error: "Father's name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),

  motherName: z
    .string({ required_error: "Mother's name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),

  address: z.object({
    city: z
      .string({ required_error: "City is required" })
      .min(3, "City must be at least 3 characters")
      .max(20, "City must be at most 20 characters"),

    state: z
      .string({ required_error: "State is required" })
      .min(3, "State must be at least 3 characters")
      .max(20, "State must be at most 20 characters"),

    country: z
      .string({ required_error: "Country is required" })
      .min(3, "Country must be at least 3 characters")
      .max(20, "Country must be at most 20 characters"),

    pincode: z
      .string({ required_error: "Pincode is required" })
      .regex(/^[1-9][0-9]{5}$/, "Pincode must be a valid 6-digit Indian pincode"),
  }),
});

/* ========== MEASUREMENT SCHEMA ========== */
export const measurementSchema = z.object({
  heightCm: z.coerce
    .number({ invalid_type_error: "Height must be a number" })
    .min(50, "Height must be at least 50 cm")
    .max(250, "Height must be at most 250 cm"),

  weightKg: z.coerce
    .number({ invalid_type_error: "Weight must be a number" })
    .min(10, "Weight must be at least 10 kg")
    .max(300, "Weight must be at most 300 kg"),

  systolicBP: z.coerce
    .number({ invalid_type_error: "Systolic BP must be a number" })
    .min(70, "Systolic BP must be at least 70")
    .max(250, "Systolic BP must be at most 250")
    .optional(),

  diastolicBP: z.coerce
    .number({ invalid_type_error: "Diastolic BP must be a number" })
    .min(40, "Diastolic BP must be at least 40")
    .max(150, "Diastolic BP must be at most 150")
    .optional(),

  heartRate: z.coerce
    .number({ invalid_type_error: "Heart Rate must be a number" })
    .min(30, "Heart Rate must be at least 30")
    .max(220, "Heart Rate must be at most 220")
    .optional(),

  temperature: z.coerce
    .number({ invalid_type_error: "Temperature must be a number" })
    .min(95, "Temperature must be at least 95")
    .max(107, "Temperature must be at most 107")
    .optional(),
});

