import React from "react";
import Controller from "../Common/Cotroller/controller";
import HeaderComponent from "../Header-component/header-component";
import TodoList from "../Todo-list";
import "./app.scss";
import ModalWindow from "../Common/Modal-window";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
        <ModalWindow/>
      <Controller className="addTaskBtn" text={"Add task"} />
      <TodoList/>
    </div>
  );
}

export default App;
