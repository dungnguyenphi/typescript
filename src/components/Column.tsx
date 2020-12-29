import React, { Children } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "../components/AddNewItem";
import { useGlobalContext } from "../context";
import Card from "./Card";
interface ColumnProps {
  title: string;
  listId: string;
  listIndex: number;
}

const Column = ({
  title,
  listIndex,
  listId,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useGlobalContext();

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[listIndex].tasks.map((task) => {
        return <Card taskName={task.taskName} key={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ add new task"
        dark
        onAdd={(taskName) => {
          console.log(listId);
          dispatch({
            type: "Add_task",
            payload: { taskName: taskName, listId: listId },
          });
        }}
      />
    </ColumnContainer>
  );
};

export default Column;
