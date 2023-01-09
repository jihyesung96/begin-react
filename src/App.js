import './App.css';
import ClassComponent2 from './components/ClassComponent2';
import ClassCounter2 from './components/ClassCounter2';
import FunComponent2 from './components/FunComponent2';
// import ClassComponent from './components/ClassComponent';
// import ClassCounter from './components/ClassCounter';
// import FuncComponent from './components/FuncComponent';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent name="ggg">안녕하세요</ClassComponent> */}
      {/* <ClassComponent >나는 name이 없어</ClassComponent> */}
      {/* 안녕하세요는 childern으로  */}
      {/* <FuncComponent>하하하하</FuncComponent> */}
      {/* <ClassCounter/> */}
      
      {/* {name : "green" ,childern:"안녕하세요"}=> props */}
      <FunComponent2 name="green">안녕하세요</FunComponent2>
      <ClassComponent2 name="abc">하하하</ClassComponent2>
      <ClassCounter2></ClassCounter2>
    </div>
  );
}

export default App;
