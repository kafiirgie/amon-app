import { createContext } from "react";

const UserContext = createContext();
const ChildrenContext = createContext();
const SelectedChildIdContext = createContext();
const ChildDataContext = createContext();
const GoalsContext = createContext();
const MissionsContext = createContext();
const SavingsContext = createContext();

export {
  UserContext,
  ChildrenContext,
  SelectedChildIdContext,
  ChildDataContext,
  GoalsContext,
  MissionsContext,
  SavingsContext,
};
