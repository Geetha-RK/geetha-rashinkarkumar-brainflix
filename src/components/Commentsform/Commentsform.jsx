import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { BASE_URL, API_KEY } from '../../utils/apiconfig';
import './Commentsform.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import comm from '../../assets/icons/add_comment.svg';
import { useState } from 'react';
import axios from "axios";
import formatDateToMMDDYYYY from '../../utils/utils';


export default function Commentsform({ videoDetails, getCurrentApi }){
    const [newcomment, setNewComment] = useState("");

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
        await axios.post( `${BASE_URL}/videos/${id}/comments?api_key=${API_KEY}`,postcomment)
        await getCurrentApi(id); 
        setNewComment("");
        }catch(error){
            console.error("Error posting the comment", error);
        }

    }

    const handleDeleteComment = async (commentId) => {
        let id = videoDetails.id;

        try {
            await axios.delete(`${BASE_URL}/videos/${id}/comments/${commentId}?api_key=${API_KEY}`);
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