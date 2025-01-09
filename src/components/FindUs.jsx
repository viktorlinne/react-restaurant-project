import React from 'react';
import {Link} from 'react-scroll'

const FindUs = () => {
    return (
        <div className={"flex items-center justify-center bg-background"}>
            <Link><iframe
                id={"find-us"}
                className={"h-96 shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-lg"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.442148676628!2d12.073869577175577!3d57.
                     48783625703811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fe94a55409011%3A0xfdcd869443c8942d!2sLa%20Mama%20Pizzeria!5e0!3m2!1ssv!2sse!4v1736408964440!5m2!1ssv!2sse"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe></Link>
        </div>
    );

};

export default FindUs;