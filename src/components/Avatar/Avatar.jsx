import './Avatar.scss';

export default function Avatar({ prop }){
    return(
            <div className="avatar">
                <img className="avatar__img" src={prop} alt="mohan-img" />
            </div>
    );
}


