import './Button.scss';
import { Link } from "react-router-dom";

export default function Button({ prop,url,from}){
    return(
        
            <div className="upload">
                <button className='upload__button' type={from ==='cancel' ? 'button':'submit' }>
                    <img className="upload__img" src={url} alt="upload-icon" />
                    {prop}
                </button>
            </div> 
        
    );
}