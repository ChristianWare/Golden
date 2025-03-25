"use client";

import styles from "./ContactForm.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (response.messageId) {
      toast.success("Thanks! We will be in touch soon 😀");
    } else {
      toast.error("Please try again sometime");
    }

    reset();
    setLoading(false);
  };

  return (
    <div className={styles.content}>
      <div className={styles.bottom}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formTop}>
            <div className={styles.labelInputBox}>
              <input
                id='firstName'
                type='text'
                placeholder='First Name'
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className={styles.error}>*** First Name is required</span>
              )}
            </div>
            <div className={styles.labelInputBox}>
              <input
                id='lastName'
                type='text'
                placeholder='Last Name'
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className={styles.error}>*** Last Name is required</span>
              )}
            </div>
            <div className={styles.labelInputBox}>
              <input
                id='company'
                type='text'
                placeholder='Phone Number'
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className={styles.error}>*** Last Name is required</span>
              )}
            </div>
            <div className={styles.labelInputBox}>
              <input
                id='company'
                type='text'
                placeholder='How did you hear about us?'
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className={styles.error}>*** Last Name is required</span>
              )}
            </div>
            <div className={styles.everythingElse}>
              <div className={styles.labelInputBox}>
                <input
                  id='senderEmail'
                  type='email'
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  placeholder='Email'
                  maxLength={500}
                />
                {errors.email && (
                  <span className={styles.error}>*** Email is required</span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.formBottom}>
            <div className={styles.labelInputBox}>
              <label htmlFor='message'>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id='message'
                maxLength={5000}
                {...register("message", { required: true })}
                placeholder='No solicitations, please.'
              />
              {errors.message && (
                <span className={styles.error}>*** Message is required</span>
              )}
            </div>
            <div className={styles.btnBtnContainer}>
              <div className={styles.btnContainer}>
                <FalseButton
                  btnType='yellow'
                  text={loading ? "Sending..." : "Submit →"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
