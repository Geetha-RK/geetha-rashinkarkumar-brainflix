import './Button.scss';

export default function Button({ prop,url,from, isCancel, isPublish }){
    return(
        
            <div className="upload">
                <button className={`upload__button ${isCancel ? 'upload__button--cancel' : ''} ${isPublish ? 'upload__button--publish' : ''}`} type={from ==='cancel' ? 'button':'submit' }>
                    <img className="upload__img" src={url} alt="upload-icon" />
                    {prop}
                </button>
            </div> 
        
    );
}