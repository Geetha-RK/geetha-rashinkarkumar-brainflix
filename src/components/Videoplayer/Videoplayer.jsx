import './Videoplayer.scss';

export default function Videoplayer({ videoDetails }){
    
    function formatDateToMMDDYYYY(input) {       
        const date = (input instanceof Date) ? input : new Date(input);
    
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date');
        }
    
        const month = String(date.getMonth() + 1); 
        const day = String(date.getDate());
        const year = date.getFullYear();
        
        return `${month}/${day}/${year}`;
    }
   
    return(
        <>
        <div className='video'>
            <video className='video_img' controls poster={videoDetails.image}></video>
        </div>
        <div className='video__title'>{videoDetails.title}</div>
        <hr className="video__border"/>
        <section className="video__containers">
            <div className="video__container1">
                <div className="video__author">By {videoDetails.channel}</div>
                <div className="video__date">{formatDateToMMDDYYYY(videoDetails.timestamp)}</div>
            </div>
            <div className='video__likes-views'>
                <div className="video__container2">
                    <img src="src\assets\icons\views.svg" alt="views-icon" class="video__views-icon" />
                    <p className="video__views">{videoDetails.views}</p>
                </div> 
                <div className="video__container3">
                    <img src="src\assets\icons\likes.svg" alt="likes-icon" class="video__likes-icon" />
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
        </>
    );
}