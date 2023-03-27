import React from 'react';
import './hashtag.scss'
import {useSelector} from "react-redux";
import {InitialStateType} from "../../reducer/reducer";

const Hashtag = ():JSX.Element => {
    const state = useSelector((state: InitialStateType) => state.taskInfo)
    const hashTag = state.map((el) => el.hashtag)
    const chooseUniqHashtag = (arr: Array<string>) => {
        let result: Array<string> = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
    const uniqHashtag = chooseUniqHashtag(hashTag)


    return <>
        {uniqHashtag.map((el)=>{
            if (el.length>0) {
                return (
                    <div key={Date.now()} className='hashTag-container'>
                        <div className='hashTagIcon'> {el}</div>
                    </div>
                )
            }
        })}
    </>

}

export default Hashtag;