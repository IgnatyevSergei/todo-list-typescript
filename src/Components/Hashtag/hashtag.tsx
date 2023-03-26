import React from 'react';
import './hashtag.scss'
import {useSelector} from "react-redux";
import {InitialStateType, TaskInfoItemType} from "../../reducer/reducer";

const Hashtag = () => {
    const state = useSelector((state:InitialStateType) => state.taskInfo)
    return (<div className='hashTag-container'>
            {state.map((item)=> {
                if (item.hashtag.length>0){
                    return (
                        <div className='hashTagIcon' key={item.id}> {item.hashtag}</div>
                    )
                }

            } ) }
    </div>

    );
};

export default Hashtag;