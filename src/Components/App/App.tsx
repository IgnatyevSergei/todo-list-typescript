import React from "react";
import HeaderComponent from "../Header-component/header-component";
import TodoList from "../Todo-list";
import "./app.scss";
import {Provider} from "react-redux";
import store from "../../store";
import AddTaskBlock from "../Add-task-block";
import Hashtag from "../Hashtag";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <HeaderComponent/>
                <AddTaskBlock/>
                <TodoList/>
                <Hashtag/>
            </div>
        </Provider>
    );
}

export default App;
