import React from "react";

import { AppContainer } from "./styles";
import Column from "./components/Column";
import Card from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";
import { useGlobalContext } from "./context";
function App() {
  const { state, dispatch } = useGlobalContext();
  return (
    <AppContainer>
      {state.lists.map((list, index) => {
        return (
          <Column
            key={list.id}
            title={list.title}
            listIndex={index}
            listId={list.id}
          ></Column>
        );
      })}
      <AddNewItem
        toggleButtonText="+ add new list"
        onAdd={(title) => dispatch({ type: "Add_list", payload: title })}
      />
    </AppContainer>
  );
}

export default App;
