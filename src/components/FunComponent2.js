import React,{useState} from 'react';

const FunComponent2 = ({name, children}) => {
    //  {name : "green" ,childern:"안녕하세요"}=> props 
    const [number, setNumber] = useState(0);
    // let number2 = 0;
    const onAddNumber = () =>{
        setNumber(number+1)
    }
    //변수변경이라서 리렌더링이 되지 않는 예제
    // const onAddNumber2 = () =>{
    //     number2++;
    //     console.log(number2);
    // }
    return (
        <div>
            <h2>{number} <button onClick={onAddNumber}>+1</button></h2>
            {name} {children}       
        </div>
    );
};

export default FunComponent2;
