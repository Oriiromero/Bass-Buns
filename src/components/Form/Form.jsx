import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from "react-hook-form";
import './Form.css';

const Form = () => {

    const [formData, setFormData] = useState();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState('Send');

    const onSubmit = (data) => {

        setLoading(true);

        let obj = {
            name: data.name,
            surname: data.surname,
            email: data.email,
            phone: data.phone,
            message: data.message
        }

        setFormData(obj);

        setTimeout(() => {
            setLoading(false),
            reset();
        }, 4000)


        setButtonText('Sent ✔');
        console.log(obj);
    }

    return (
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", backgroundColor: "transparent", boxShadow: 'none' }} className='contact-form'>
            <CardContent sx={{ width: "100%" }}>
                <Typography gutterBottom style={{ color: "#FF9F29", fontFamily: "'Bebas Neue', sans-serif", fontSize: "25px" }}>
                    Contact Us!
                </Typography>
                <Typography variant="body2" gutterBottom style={{ color: "#EEEEEE", fontFamily: "'Bebas Neue', sans-serif", fontSize: "20px" }}>
                    Fill up the form and our team will get back to you within 24 hours.
                </Typography>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", backgroundColor: "transparent", boxShadow: 'none' }}>
                    <form className="contact-main_form" onSubmit={handleSubmit(onSubmit)}>
                        <label className='form-label' >Name</label>
                        <input
                            className="contact-main_form__input"
                            type="text"
                            placeholder="Your name..."
                            {...register("name", { required: true })}
                        />
                        {errors.name?.type === 'required' && <span className="error-message">Name is required</span>}
                        <label className='form-label'>Surname</label>
                        <input
                            className="contact-main_form__input"
                            type="text"
                            placeholder="Your surname..."
                            {...register("surname", { required: true })}
                        />
                        {errors.surname?.type === 'required' && <span className="error-message">Surname is required</span>}
                        <label className='form-label'>Email</label>
                        <input
                            className="contact-main_form__input"
                            type="email"
                            placeholder="Your email..."
                            {...register("email", { required: true })}
                        />
                        {errors.email?.type === 'required' && <span className="error-message">Email is required</span>}
                        <label className='form-label'>Phone</label>
                        <input
                            className="contact-main_form__input"
                            type="number"
                            max="10"
                            placeholder="Your phone..."
                            {...register("phone", { required: false })}
                        />
                        <label className='form-label'>Message</label>
                        <textarea
                            className="contact-main_form__textarea"
                            placeholder="Your message..."
                            {...register("message", { required: true })}
                            maxLength={200}
                        />
                        {errors.message?.type === 'required' && <span className="error-message">Message is required</span>}
                        <button className="contact-main_form__btn">
                            {!loading ?
                                buttonText
                                :
                                <LoadingButton loading variant="text" size="medium" style={{ color: "white" }} />
                            }
                        </button>
                    </form>
                </Card>
            </CardContent>
        </Card>
    )
}

export default Form;
