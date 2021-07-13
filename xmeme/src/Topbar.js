import React from 'react'
import './Topbar.css';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import HttpIcon from '@material-ui/icons/Http';

function Topbar() {
    return (
        <div className="topbar">
            <form>
                <div className="memeOwner">
                    <AccessibilityIcon />
                    <input
                        className="inputs"
                        // onChange={(e) => setName(e.target.value)}
                        // value={name}
                        placeholder="Enter Name"
                        type="text"
                        required
                    />
                </div>

                <div className="memeURL">
                    <HttpIcon />
                    <input
                        className="inputs"
                        // onChange={(e) => setUrl(e.target.value)}
                        // value={url}
                        placeholder="Enter URL of Meme"
                        type="text"
                        required
                    />
                </div>   

                <div className="memeCaption">
                    <ClosedCaptionIcon />
                    <input
                        className="inputs"
                        // onChange={(e) => setCaption(e.target.value)}
                        // value={caption}
                        placeholder="Optional : Enter Caption"
                        type="text"
                    />
                </div>     
                    
                <button
                    // onClick={sendPost}
                    type="submit"
                    className="memeSubmit"
                >
                    Add Meme
                </ button>

            </form>
        </div>
    )
}

export default Topbar
