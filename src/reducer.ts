import { State } from "./context";
import { v1 as uuid } from "uuid";
import { findIndexByID } from "./utils/findIndexByID";
export type Action =
  | { type: "Add_list"; payload: string }
  | { type: "Add_task"; payload: { taskName: string; listId: string } };
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Add_list":
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), title: action.payload, tasks: [] },
        ],
      };
    case "Add_task":
      {
        const targetListIndex = findIndexByID(
          state.lists,
          action.payload.listId
        );
        state.lists[targetListIndex].tasks.push({
          id: uuid(),
          taskName: action.payload.taskName,
        });
      }
      return { ...state };
    default:
      return state;
  }
};
