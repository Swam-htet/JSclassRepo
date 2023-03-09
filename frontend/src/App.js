import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ClassComponent from "./components/ClassComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import Condition from "./components/BooleanCondition";
import PersonList, {ListDemoOwn} from "./components/ListDemo";
import ListDemo from "./components/ListDemo";
import PageComponent from "./components/PageComponent";
import "./components/ownComponent/Tab.css";

// bootstrap import 
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import TableComponent from "./components/TableComponent";
import Table from "./components/TableComponent";
import JSXPropery from "./components/JSXProperty";
import CSSComponent from "./components/CSSComponent";
import Box from "./components/passing property to child";
import ListRendering from "./components/list rendering";
import EventDemo from "./components/interaction/EventDemo";
import TodoListEventDemo from "./components/interaction/TodoListEventDemo";
import Counter from "./components/interaction/Counter";
import ListEventDemo from "./components/interaction/ListEventDemo";
import AddNewListItem from "./components/interaction/AddNewListItem";
import Tab from "./components/ownComponent/Tab";


function App() {
    // list
    let headers = ['Tab 1', 'Tab 2', "Tab 3"];

    return (
        <div className="App">
            <h1
                style={{
                    color: "orange",
                    fontSize: "80px"
                }}
            >
                This is App.js
            </h1>

            {/* <HelloWorld /> */}

            {/* <ClassComponent/> */}

            {/* <ConditionalRendering /> */}

            {/* <Condition/> */}

            {/*<ListDemo/>*/}

            {/* <PageComponent/> */}

            {/* <Table/> */}

            {/*<JSXPropery/>*/}

            {/*<CSSComponent/>*/}
            {/*<Box>*/}
            {/*    <h1>This is box</h1>*/}
            {/*    <ListDemo/>*/}
            {/*</Box>*/}

            {/*<ListRendering/>*/}

            {/*<ListDemoOwn/>*/}

            {/*<EventDemo/>*/}


            {/*<ListEventDemo/>*/}

            {/*<Counter/>*/}
            {/*<Counter/>*/}


            {/*<AddNewListItem/>*/}

            {/*<TodoListEventDemo/>*/}

            <Tab headers={headers}>
                <div className={'child bg-success'}>
                    <h1>Tab One</h1>
                </div>
                <div className={'child bg-danger'}>
                    <h1>Tab Two</h1>
                </div>
                <div className={'child bg-secondary'}>
                    <h1>Tab Three</h1>
                </div>
            </Tab>


        </div>
);
}

export default App;
