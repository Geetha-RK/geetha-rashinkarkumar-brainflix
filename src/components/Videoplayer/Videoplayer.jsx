import './Videoplayer.scss';

export default function Videoplayer({ videoDetails }){
    console.log(videoDetails)
    return(
        <>
        <div className='video'>
            <video className='video_img' controls poster={videoDetails.image}></video>
        </div>
        <div className='video__title'>{videoDetails.title}</div>
        

        </>
    );
}