import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {

    let ref = useRef( null );
    let data = [
        {
            title : "This Is Random Text Generated For Display On The Card.",
            filesize : "1.8 MB",
            close : true,
            footer : { isOpen : true, footerTitle : "Download Now", footerColor : "green" },
        },
        {
            title : "This Is Random Text Generated For Display On The Card.",
            filesize : "2.1 MB",
            close : false,
            footer : { isOpen : true, footerTitle : "Download", footerColor : "blue" },
        },
        {
            title : "This Is Random Text Generated For Display On The Card.",
            filesize : "2.5 MB",
            close : true,
            footer : { isOpen : true, footerTitle : "Upload Here", footerColor : "green" },
        },
        {
            title : "This Is Random Text Generated For Display On The Card.",
            filesize : "2.9 MB",
            close : false,
            footer : { isOpen : true, footerTitle : "Upload", footerColor : "blue" }
        }
    ];
  return (
    <div reference = { ref } className = 'fixed top-0 left-0 z-[3] w-full h-screen flex gap-12'>
        { 
            data.map( ( item ) => (
                <Card data = { item } />
            ))
        }
    </div>
  );
}

export default Foreground;
