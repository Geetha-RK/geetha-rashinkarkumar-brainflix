import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import './Commentsform.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import comm from '../../assets/icons/add_comment.svg';
import { useState } from 'react';
import axios from "axios";


export default function Commentsform({ videoDetails, getCurrentApi }){
    const [newcomment, setNewComment] = useState("");
    
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

    const comment =(event) => {
        setNewComment(event.target.value);
    }

    const handleComment = async(event) => {
        event.preventDefault();
        let id = videoDetails.id;
    
        console.log("Comment id",id);
        const postcomment = {
            "name" : "Geetha",
            "comment" : newcomment
        }
        try{
        await axios.post( `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments?api_key=41bfcc3e-1518-4576-9462-da7e64187139`,postcomment)
        await getCurrentApi(id); 
        setNewComment("");
        }catch(error){
            console.error("Error posting the comment", error);
        }

    }

    const handleDeleteComment = async (commentId) => {
        let id = videoDetails.id;

        try {
            await axios.delete(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/comments/${commentId}?api_key=41bfcc3e-1518-4576-9462-da7e64187139`);
            await getCurrentApi(id); 
        } catch (error) {
            console.error("Error deleting the comment", error);
        }
    };

    const sortedComments = [...videoDetails.comments].sort((a, b) => b.timestamp - a.timestamp);

    return(
        <>
        <form className='form' onSubmit={handleComment}>
            <div className="form__container1">
                <Avatar prop={avatar}/>
            </div>
            <div className='form__container2'>
                <div className="form__container3">
                    <label className="form__commentLable" htmlFor="form__comment-id">JOIN THE CONVERSATION</label>
                    <textarea className="form__comment" id="form__comment-id" required name="formComment" placeholder="Add a new comment" onChange={comment} value={newcomment}></textarea>
                </div>
                <div className="form__container4">
                    <Button prop="COMMENT" url={comm} from="comment"/>
                </div>
            </div>
            
        </form>  

        <section className='comment'>
        <hr className="video__border"/>
        {sortedComments.map((video, index) => (
            <div className='comment__body'>
                <div className="comment__align ">
                    <div className="comment__avatar">
                    <Avatar />
                    </div> 
                    <div className="comment__main">
                        <div className="comment__head">
                            <p className="comment__name">{video.name}</p>
                            <p className="comment__date">{formatDateToMMDDYYYY(video.timestamp)}</p>
                        </div>
                        <p className="comment__text">{video.comment}</p>
                        <button onClick={() => handleDeleteComment(video.id)} className="comment__delete-button">
                            Delete
                        </button>
                    </div>
                </div>
                <hr className="video__border"/>
            </div>
            ))}
        </section> 
        </>
    );
}