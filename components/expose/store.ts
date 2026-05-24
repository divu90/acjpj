"use client";
import { useSyncExternalStore } from "react";

type State = {
  drawerOpen: boolean;
  focusedSource: string | null;
};

let state: State = { drawerOpen: false, focusedSource: null };
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => { listeners.add(l); return () => listeners.delete(l); };
const get = () => state;

export function useExposeState<T>(selector: (s: State) => T): T {
  return useSyncExternalStore(subscribe, () => selector(get()), () => selector(get()));
}

export const exposeActions = {
  openSource(id: string) {
    state = { drawerOpen: true, focusedSource: id };
    emit();
  },
  openDrawer() {
    state = { ...state, drawerOpen: true };
    emit();
  },
  closeDrawer() {
    state = { ...state, drawerOpen: false, focusedSource: null };
    emit();
  },
};
