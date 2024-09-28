import "./Upload.scss";

import thumbnail from "../assets/images/Upload-video-preview.jpg";
import publish from "../assets/icons/publish.svg";
import Button from "../components/Button/Button";

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Upload() {
    const [title,setTitle] = useState([]);
    const [description,setDescription] = useState([]);
    const navigate = useNavigate();

    const handleTitleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) =>{
        setDescription(event.target.value);
    }

    const handlePublishClick = (event) => {
        event.preventDefault(); 
        toast.success("Video Published");
        alert("Video Published");
        navigate(`/`);
      };

    const handleCancelClick = (event) => {
        event.preventDefault(); 
        toast.info("Upload Canceled");
        alert("Upload Canceled");
        navigate(`/`);
      };

  
  return (
    <>
      <hr className="upload-border" />

      <h1 className="uploads">Upload Video</h1>
      <hr className="uploads-border uploads-border--modifier" />

      <div className="uploads__container1">
        <label className="uploads__label" htmlFor="thumbnail">
          VIDEO THUMBNAIL
        </label>
        <img
          className="uploads__thumbnail"
          name="thumbnail"
          src={thumbnail}
          alt="video-thumbnail"
        />
      </div>
      <form >
        <div className="uploads__container2">
          <label className="uploads__label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="uploads__title"
            type="text"
            name="title"
            placeholder="Add a title to your video"
            onChange={handleTitleChange}
          />
          <label className="uploads__label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            className="uploads__title uploads__title--description"
            placeholder="Add a description to your video"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <hr className="uploads-border uploads-border--modifier" />
        <div className="uploads__container3">
          <Button prop="PUBLISH" url={publish} onClick={handlePublishClick}/>
          <p className="uploads__cancel" onClick={handleCancelClick}>CANCEL</p>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false}/>
    </>
  );
}
