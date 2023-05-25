import { createContext } from "react";

const UserContext = createContext();
const ChildrenContext = createContext();
const SelectedChildIdContext = createContext();
const ChildDataContext = createContext();

export {
  UserContext,
  ChildrenContext,
  SelectedChildIdContext,
  ChildDataContext,
};
