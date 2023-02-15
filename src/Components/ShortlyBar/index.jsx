import style from './Shortlybar.module.css'
import Button from "../Button";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReturnedLinks from './ReturnedLinks';

const ShortlyBar = () => {

const [listOfLinks, setListOfLinks] = useState([])

const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async input => {
  console.log(input);
  console.log(errors);
  let apiEndPoint = "https://api.shrtco.de/v2/shorten?url="
  let url = `${apiEndPoint}${input.link}`
  let response = await fetch(url)
  let data = await response.json();
  console.log(data)
setListOfLinks([...listOfLinks, {linkOriginal: data.result.original_link, linkShort: data.result.short_link2}])
  }
    return (
        <>
        <div  className={style.background}>
            <form className={style.inputContainer} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input 
                     className={errors.link ? style.input_error : style.input_ok}
                     placeholder='Shorten a link here...'
                     {...register("link", {required: "Please add a link"})}
                    />
                    <span>{errors.link?.message}</span>
                </div>
                <Button text="Shorten it!"/>          
            </form>
        </div>
        {listOfLinks.map(link => <ReturnedLinks key={link.linkOriginal} linkOriginal={link.linkOriginal} linkShort={link.linkShort} />)}
        </>
    )
}

export default ShortlyBar