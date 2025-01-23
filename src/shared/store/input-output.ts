import { atomWithStore } from "jotai-zustand";
import { JSX } from "react";
import { create } from "zustand";

type State = {
  code?: string | JSX.Element;
  isGenerating?: boolean;
};

const store = create<State>(() => ({
  code: undefined,
  isGenerating: false
}));

export const inputOutputState = atomWithStore(store);
