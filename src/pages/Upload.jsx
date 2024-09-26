import "./Upload.scss";

import thumbnail from '../assets/images/Upload-video-preview.jpg';
import publish from '../assets/icons/publish.svg';
import Button from "../components/Button/Button";

export default function Upload(){
    return(
        <>
         <hr className="upload-border"/>
         
            <h1 className="uploads">Upload Video</h1>
            <hr className="uploads-border uploads-border--modifier"/>
            
            <div className="uploads__container1">
                <label className="uploads__label" for="thumbnail">VIDEO THUMBNAIL</label>
                <img className="uploads__thumbnail" name="thumbnail" src={thumbnail} alt="video-thumbnail" />
            </div>
            <div className="uploads__container2">
                <label className="uploads__label" for="title">TITLE YOUR VIDEO</label>
                <input className="uploads__title" type="text" name="title" placeholder="Add a title to your video"/>
                <label className="uploads__label" for="description">ADD A VIDEO DESCRIPTION</label>
                <textarea name="description" className="uploads__title uploads__title--description" placeholder="Add a description to your video"></textarea>
            </div>
         <hr className="uploads-border uploads-border--modifier"/>
        <div className="uploads__container3">
            <Button prop="PUBLISH" url={publish} />
            <p className="uploads__cancel">CANCEL</p>
         </div>
        </>
    )
}