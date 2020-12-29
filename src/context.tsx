import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";
export const data: State = {
  lists: [
    {
      id: "0",
      title: "IT",
      tasks: [{ id: "c0", taskName: "Learn Typescript" }],
    },
    {
      id: "10",
      title: "Health",
      tasks: [{ id: "c2", taskName: "Go to the gym at 4" }],
    },
    {
      id: "2",
      title: "My love",
      tasks: [{ id: "c3", taskName: "Dont forget her" }],
    },
  ],
};

export interface State {
  lists: List[];
}
interface List {
  id: string;
  title: string;
  tasks: Task[];
}
interface Task {
  id: string;
  taskName: string;
}
interface AppContextProps {
  state: State;
  dispatch({}): void;
}

const AppContext = React.createContext<AppContextProps>({} as AppContextProps);

export const AppProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

//hooks
export const useGlobalContext = () => useContext(AppContext);
