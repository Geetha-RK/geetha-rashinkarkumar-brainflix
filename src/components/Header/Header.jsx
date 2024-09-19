import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
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
            <Avatar prop="src\assets\images\Mohan-muruge.jpg"/>
            <Button prop="UPLOAD" url="src\assets\icons\upload.svg"/>
        </div>
    </div>
    );
}