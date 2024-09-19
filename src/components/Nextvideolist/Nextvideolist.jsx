import './Nextvideolist.scss';

export default function Nextvideolist({ videoDetails, clickVideo }){
    return(
        <section className='nextvideo'>
            <p className="nextvideo__title">Next videos</p>
                {videoDetails.map((video)=>(
                    <div className="nextvideo__cards" key={video.id} onClick={() => clickVideo(video)}>
                        <div className='nextvideo__img'>
                            <img className="nextvideo__thumbnail" src={video.image} alt="thumbnail-img"/>
                        </div>
                        <div className="nextvideo__copy">
                            <div className="nextvideo__copy-title">{video.title}</div>
                            <div className="nextvideo__copy-author">{video.channel}</div>
                        </div>
                    </div>
                ))}
        </section>
    );
};

