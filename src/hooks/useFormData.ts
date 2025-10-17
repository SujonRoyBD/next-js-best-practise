import { useState } from "react";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  town: string;
  state: string;
  experience: string;
}

// ✅ Named export
export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    town: "",
    state: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      town: "",
      state: "",
      experience: "",
    });
  };

  return { formData, handleChange, resetForm };
};
