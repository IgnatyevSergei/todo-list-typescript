import React from "react";
import HeaderComponent from "../Header-component/header-component";
import TodoList from "../Todo-list";
import "./app.scss";
import ModalWindow from "../Common/Modal-window";
import {Provider} from "react-redux";
import store from "../../store";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <HeaderComponent/>
                <ModalWindow/>
                <TodoList/>
            </div>
        </Provider>
    );
}

export default App;
