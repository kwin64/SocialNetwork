import React from "react";
import preloader from '../../../assets/preloader.gif'

const Preloader: React.FC = () => {
    return <div>
        <img src={preloader}/>
    </div>
}

export default Preloader;