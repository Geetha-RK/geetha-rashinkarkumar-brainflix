import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import './Commentsform.scss';

export default function Commentsform({ videoDetails }){
    console.log("Commentsform",videoDetails);

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
        <section className='form'>
            <div className="form__container1">
                <Avatar prop="src\assets\images\Mohan-muruge.jpg"/>
            </div>
            
            <div className='form__container2'>
                <div className="form__container3">
                    <label className="form__commentLable" htmlFor="form__comment-id">JOIN THE CONVERSATION</label>
                    <textarea className="form__comment" id="form__comment-id" required name="formComment" placeholder="Add a new comment"></textarea>
                </div>
                <div className="form__container4">
                    <Button prop="COMMENT" url="src\assets\icons\add_comment.svg"/>
                </div>
               
            </div>
            
        </section>  

        <section className='comment'>
        <hr className="video__border"/>
        {videoDetails.comments.map((video)=>(
            <div className='comment__body'>
                <div className="comment__align ">
                    <div className="comment__avatar">
                    <Avatar prop="src\assets\images\Mohan-muruge.jpg"/>
                    </div> 
                    <div className="comment__main">
                        <div className="comment__head">
                            <p className="comment__name">{video.name}</p>
                            <p className="comment__date">{formatDateToMMDDYYYY(video.timestamp)}</p>
                        </div>
                        <p className="comment__text">{video.comment}</p>
                    </div>
                </div>
                <hr className="video__border"/>
            </div>
            ))}
        </section> 
        
        </>
    );
}