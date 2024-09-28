import './Videothumbnail.scss';

export default function Videothumbnail( {videoDetails} ){

    return(
        <div className='video-thumbnail'>
            <video className='video-thumbnail__img' controls poster={videoDetails.image}>
                <source src={videoDetails.video + "?api_key=geetha"}/>
            </video>
        </div>
    )
}