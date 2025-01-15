import { useState } from "react";
import {sendEmail} from '../email'

const useEmailForm = (section:string) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e:any) => {
    const { value } = e.target;
    setFormData({ ...formData, email: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    sendEmail(formData.email,section)
  };
  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useEmailForm;
