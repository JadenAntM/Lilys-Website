import React from 'react';
import TikTokEmbed from './TikTokEmbed'; // Adjust this import path as necessary

const Profile = () => {
    return (
        <section id="profile">
            <div className="background" />
            <div className="section__pic-container">
                <img
                    src="./Pics/Profile_pic.jpeg"
                    alt="My Profile Picture"
                    width="150"
                    height="150"
                />
            </div>
            <div className="section__text">
                <h1 className="title">@lilyvarie</h1>
                <div className="email_text">
                    <img
                        src="./Pics/gmail.2.jpg"
                        alt="Email Icon"
                        className="icon"
                        width="24"
                        height="24"
                    />
                    <a href="mailto:lilyvariebiz@gmail.com">lilyvariebiz@gmail.com</a>
                </div>
                <div className="btn-container">
                    <button className="btn btn-color-1">Coming Soon!</button>
                    <button
                        className="btn btn-color-2"
                        onClick={() => (window.location.href = 'https://www.amazon.ca/hz/wishlist/ls/1NDDEQ4JDD4J?ref_=wl_share')}
                    >
                        Wish List ♥
                    </button>
                    <button
                        className="btn btn-color-3"
                        onClick={() => (window.location.href = 'https://www.snapchat.com/add/lilyvarie')}
                    >
                        Snapchat
                    </button>
                    <button
                        className="btn btn-color-4"
                        onClick={() => (window.location.href = 'https://www.tiktok.com/@lilyvarie?_t=8cMDL5prhNW&_r=1')}
                    >
                        TikTok
                    </button>
                    <button
                        className="btn btn-color-5"
                        onClick={() => (window.location.href = 'https://www.instagram.com/lilyvarie/?hl=en')}
                    >
                        Instagram
                    </button>
                    <button
                        className="btn btn-color-6"
                        onClick={() => (window.location.href = 'https://www.depop.com/lilyvarie/')}
                    >
                        Depop
                    </button>
                </div>
            </div>
            <TikTokEmbed /> {/* Embedding TikTok */}
            <footer>
                <p>Copyright © 2023 Lily Varie. All Rights Reserved.</p>
            </footer>
        </section>
    );
};

export default Profile;
