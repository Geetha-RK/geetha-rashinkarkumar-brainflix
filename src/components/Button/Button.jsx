import './Button.scss';
import { Link } from "react-router-dom";

export default function Button({ prop,url }){
    return(
        <Link to={'/upload'} className="upload" >
            <div className="upload">
                <button className='upload__button'>
                    <img className="upload__img" src={url} alt="upload-icon" />
                    {prop}
                </button>
            </div> 
         </Link>
    );
}