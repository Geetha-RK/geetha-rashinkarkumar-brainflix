import "./Upload.scss";
import thumbnail from "../assets/images/Upload-video-preview.jpg";
import publish from "../assets/icons/publish.svg";
import Button from "../components/Button/Button";
import Swal from "sweetalert2";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Upload() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const formRef = useRef(null);
    const navigate = useNavigate();
    let alertmsg = ""; 
    const namePattern = /^[A-Za-z\s]+$/;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Here");
        if (!isFormValid()) {
            Swal.fire({
                icon: "Error",
                title: "Publish Failed",
                text: alertmsg,
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Video uploaded successfully!",
            }).then(() => {
                resetForm();
                navigate("/"); 
            });
        }
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const isFormValid = () => {
        if (!title || !description) {
            alertmsg = "Enter all the fields.\n";
          } else {
            if (title.length > 50) {
              alertmsg += "Title should not exceed 50 characters.\n";
            }
            if (!namePattern.test(title)) {
              alertmsg += "Title can contain letters and spaces only.\n";
            }
            if (description.length > 200) {
              alertmsg += "Description should not exceed 200 characters.";
            }
          }
          if (alertmsg) {
            return false; 
          }
          return true; 
        };
    

    const handleCancelClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                resetForm();
                Swal.fire("Cancelled", "Your action has been cancelled.", "success");
            }
        });
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
            <form ref={formRef} >
                <div className="uploads__container2">
                    <label className="uploads__label" htmlFor="title">
                        TITLE YOUR VIDEO
                    </label>
                    <input
                        className="uploads__title"
                        type="text"
                        name="title"
                        placeholder="Add a title to your video"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <label className="uploads__label" htmlFor="description">
                        ADD A VIDEO DESCRIPTION
                    </label>
                    <textarea
                        name="description"
                        className="uploads__title uploads__title--description"
                        placeholder="Add a description to your video"
                        value={description}
                        onChange={handleDescriptionChange}
                    ></textarea>
                </div>
                <hr className="uploads-border uploads-border--modifier" />
                <div className="uploads__container3">
                    <div className="uploads__publish" onClick={handleFormSubmit}>
                        <Button prop="PUBLISH" url={publish} from="publish" isPublish={true}/>
                    </div>
                    <div onClick={handleCancelClick}>
                        <Button prop="Cancel" url={publish} from="cancel" isCancel={true}/>
                    </div>
                </div>
            </form>
        </>
    );
}
