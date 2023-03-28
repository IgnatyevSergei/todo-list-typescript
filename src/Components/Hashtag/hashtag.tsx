import React from 'react';
import './hashtag.scss'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "../../reducer/reducer";
import {getHashtagAC} from "../../actions/action";

const Hashtag = (): JSX.Element => {
    const state = useSelector((state: InitialStateType) => state.taskInfo)
    const dispatch = useDispatch()
    const hashTag = state.map((el) => el.hashtag)
    const chooseUniqHashtag = (arr: Array<string>) => {
        let result: Array<string> = ['All'];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
    const uniqHashtag = chooseUniqHashtag(hashTag)

    const handelFilterItems = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        dispatch(getHashtagAC(e.currentTarget.textContent))
    }


    return <div className='hashTag-container'>
        {uniqHashtag.map((el) => {
            if (el.length > 0) {
                return (
                    <div key={el} onClick={handelFilterItems} className='hashTagIcon'> {el}</div>
                )
            }
        })}
    </div>

}

export default Hashtag;