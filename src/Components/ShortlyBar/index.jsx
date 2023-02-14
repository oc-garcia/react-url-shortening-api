import style from './Shortlybar.module.css'
import Button from "../Button";
import React from 'react';
import { useForm } from 'react-hook-form';

const ShortlyBar = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
    return (
        <>
        <div  className={style.background}>
            <form className={style.inputContainer} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input 
                    className={errors.Link ? style.input_error : style.input_ok}
                     placeholder='Shorten a link here...'
                     {...register("Link", {required: "Please add a link", pattern: { value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i, message: "Looks like thiks is not a valid url"}})}
                    />
                    <span>{errors.Link?.message}</span>
                </div>
                <Button text="Shorten it!"/>          
            </form>
        </div>
        </>
    )
}

export default ShortlyBar