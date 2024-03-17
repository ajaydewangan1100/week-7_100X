import { TODOS } from "./todos";
import { atomFamily } from "recoil";

// define atomFamily here
export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => {
    return TODOS.find((t) => t.id == id);
  },
});
