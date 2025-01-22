import { atomWithStore } from "jotai-zustand";
import { create } from "zustand";

import { JSX } from "react";

type State = {
  code?: JSX.Element | undefined | string;
  isGenerating?: boolean;
};

const store = create<State>(state => ({
  code: undefined,
  isGenerating: false
}));

export const inputOutputState = atomWithStore(store);
