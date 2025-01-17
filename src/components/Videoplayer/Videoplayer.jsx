import './Videoplayer.scss';
import views  from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import formatDateToMMDDYYYY from '../../utils/utils';

export default function Videoplayer({ videoDetails }){
   
    return(
        
        <div className='video'>
            <div className='video__title'>{videoDetails.title}</div>
            <hr className="video__border video__border--modifier"/>
            <section className="video__containers">
                <div className="video__container1">
                    <div className="video__author">By {videoDetails.channel}</div>
                    <div className="video__date">{formatDateToMMDDYYYY(videoDetails.timestamp)}</div>
                </div>
                <div className='video__likes-views'>
                    <div className="video__container2">
                        <img src={views} alt="views-icon" className="video__views-icon" />
                        <p className="video__views">{videoDetails.views}</p>
                    </div> 
                    <div className="video__container3">
                        <img src={likes} alt="likes-icon" className="video__likes-icon" />
                        <p className="video__likes">{videoDetails.likes}</p>
                    </div>
                </div>
            </section>
            <hr className="video__border"/>
            <article className='description'>
                <p className='description__copy'>
                    {videoDetails.description}
                </p>
                <p className='description__comments'>{videoDetails.comments.length} Comments</p>
            </article>
        </div>
        
    )
}