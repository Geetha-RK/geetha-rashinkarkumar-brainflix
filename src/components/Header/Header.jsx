import './Header.scss';

export default function Header(){
    return(
    <div className='header'>
        <div className="header__logocontainer">
            <img className="header__logo" src="src\assets\Logo\BrainFlix-logo.svg" alt="Brainflix-logo" />
        </div>
        <div className="header__searchcontainer">
            <div className='header__search'>
                <img className="header__searchicon" src="src\assets\icons\search.svg" alt="search-icon" />
                <input type="text" name="search-box" className="header__searchtext" placeholder="Search"/>
            </div>
            <div className="header__avatar">
                <img className="header__avatar-img" src="src\assets\images\Mohan-muruge.jpg" alt="mohan-img" />
            </div>
            <div className="header__upload">
                <button className='header__uploadbutton'>
                    <img className="header__uploadimg" src="src\assets\icons\upload.svg" alt="upload-icon" />
                    UPLOAD
                </button>
            </div> 
        </div>
    </div>
    );
}