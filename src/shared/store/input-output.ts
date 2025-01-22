import { atomWithStore } from "jotai-zustand";
import { create } from "zustand";

type State = {
  code?: string;
  isGenerating?: boolean;
};

const store = create<State>(() => ({
  code: undefined,
  isGenerating: false
}));

export const inputOutputState = atomWithStore(store);
