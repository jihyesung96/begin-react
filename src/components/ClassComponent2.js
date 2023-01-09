import React,{ Component } from 'react';
//클래스형은 this.props로 props를 받는다
class ClassComponent2 extends Component {
    render(){
        const {name , children} = this.props
        return (
            <div>
                나는 클래스형 컴포넌트 {name} {children}
            </div> 
        );
    }
};

export default ClassComponent2;