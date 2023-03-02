import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ClassComponent from "./components/ClassComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import Condition from "./components/BooleanCondition";
import PersonList from "./components/ListDemo";
import ListDemo from "./components/ListDemo";
import PageComponent from "./components/PageComponent";

// bootstrap import 
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import TableComponent from "./components/TableComponent";
import Table from "./components/TableComponent";
import JSXPropery from "./components/JSXProperty";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          color: "orange",
          fontSize:"80px"
        }}
      >
        This is App.js
      </h1>

      {/* <HelloWorld /> */}

      {/* <ClassComponent/> */}

      {/* <ConditionalRendering /> */}


      {/* <Condition/> */}

      {/* <ListDemo/> */}

      {/* <PageComponent/> */}

      {/* <Table/> */}

      <JSXPropery/>
    </div>
  );
}

export default App;
