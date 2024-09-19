import './Button.scss';

export default function Button({ prop,url }){
    return(
        <div className="upload">
            <button className='upload__button'>
                <img className="upload__img" src={url} alt="upload-icon" />
                {prop}
            </button>
         </div> 
    );
}