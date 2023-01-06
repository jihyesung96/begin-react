import './App.css';
// import ClassComponent from './components/ClassComponent';
import ClassCounter from './components/ClassCounter';
// import FuncComponent from './components/FuncComponent';



function App() {
  return (
    <div className="App">
      {/* <ClassComponent name="ggg">안녕하세요</ClassComponent> */}
      {/* <ClassComponent >나는 name이 없어</ClassComponent> */}
      {/* 안녕하세요는 childern으로  */}
      {/* <FuncComponent>하하하하</FuncComponent> */}
      <ClassCounter/>
    </div>
  );
}

export default App;
