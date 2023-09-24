import React from 'react';
import { memo } from 'react';
const style = {
    width:'100%',
    height:'200px',
    backgroundColor:'red'
}
export const ChildArea = memo((props) =>{
    const {open,close} = props;
    return(
        <>
        {open ? (
            <div style={style}>
                <p>子コンポーネント</p>
                <button onClick={close}>閉じる</button>
            </div>
            ):null
        }
        </>
    )
});