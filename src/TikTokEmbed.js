import React, { useEffect } from 'react';

const TikTokEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const tiktokEmbedHTML = {
        __html: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@lilyvarie/video/7191910436445375749" data-video-id="7191910436445375749" style="max-width: 605px;min-width: 325px;"> <section> ... </section> </blockquote>`
    };

    return (
        <div dangerouslySetInnerHTML={tiktokEmbedHTML} className="tiktok-embed-container" />
    );
};

export default TikTokEmbed;
