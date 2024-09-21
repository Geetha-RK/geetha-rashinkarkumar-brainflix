import './Avatar.scss';

export default function Avatar({ prop }){
    return(
            // <div className="avatar">
            //     <img className="avatar__img" src={prop} alt="mohan-img" />
            // </div>
            <div className="avatar">
            {prop ? (
                <img className="avatar__img" src={prop} alt="avatar-img" />
            ) : (
                <div className="avatar__placeholder"></div>
            )}
        </div>
    );
}


