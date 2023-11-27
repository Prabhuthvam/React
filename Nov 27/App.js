import './App.css';
import PageComponent from './component/pageComponent';

function App() {
  return (
    <div>
      <div>
      <PageComponent pageValue={123} name={"java"}>Page Title1</PageComponent>
    </div>
    <PageComponent pageValue={100} name={"java"}>Page Title2</PageComponent>
    <PageComponent pageValue={200} name={"javaFullStack"}>Page Title3</PageComponent>
    <PageComponent pageValue={300} name={"Devops"}>Page Title4</PageComponent>



    </div>
    
  );
}

export default App;
