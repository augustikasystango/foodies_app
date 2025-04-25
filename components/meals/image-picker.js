'use client'
import classes from './image-picker.module.css'
import { useRef ,useState} from 'react';
import Image from 'next/image';


export default function ImagePicker({ label, name }) {
    const imageInputRef = useRef();
    const [pickedImage,setPickedImage]=useState();

    const handleImageChange=(event)=>{
        event.preventDefault();
        const file = event.target.files[0];
        if(!file){
            setPickedImage(null);
            return 
        }
        const fileReader = new FileReader();

        fileReader.onload=()=>{
           setPickedImage( fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    const handlePickClick=()=> {
        imageInputRef.current.click(); 
    }
    return (<div className={classes.picker}>
        <label htmlFor='image'>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked!</p>}
                {pickedImage && <Image src={pickedImage} alt="Image selected  by the user" fill/>}
            </div>
            <input type='file' id='image' 
            className={classes.input}
            required
            accept='image/png , image/jpeg' name={name} ref={imageInputRef} 
            onChange={handleImageChange}/>
            <button className={classes.button} type='button'onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>)
}