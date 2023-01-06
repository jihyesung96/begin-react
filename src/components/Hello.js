import React from 'react';
function Hello({name,message,isSpecial}){
    return (
        <>
            <div className='Hello'>
            {/* 조건부렌터링 */}
            {isSpecial && <b>* </b>}  
            {isSpecial ? <b>* </b> : null}    
            {name}님{message}</div>
            <p>재미있는 리액트</p>
        </>
    )
}
//기본값 설정
Hello.defaultProps = {
    name: "이름"
}
export default Hello;