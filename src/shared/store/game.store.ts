import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";
import { asyncStorage } from "~/shared/services/async-storege.service";

type TGameStore = {
  isOpened: boolean;
  score: number;
  setIsOpened: (isOpened: boolean) => void;
  updateScore: (newScore: number) => void;
  deleteScore: () => void;
};

export const useGameStore = create<TGameStore>()(
  persist(
    (set, get) => ({
      isOpened: false,
      score: 150,

      setIsOpened: (isOpened) => set({ isOpened }),

      updateScore: (newScore) => set({ score: get().score + newScore }),

      deleteScore: () => set({ score: 0 }),
    }),
    {
      name: "game-storage",
      storage: {
        getItem: async (name: string) => {
          const data = await asyncStorage.getData(name);
          return data ? JSON.parse(data) : null;
        },
        setItem: async (name: string, value: StorageValue<TGameStore>) => {
          await asyncStorage.setData(name, JSON.stringify(value));
        },
        removeItem: async (name: string) => {
          await asyncStorage.removeData(name);
        },
      },
    },
  ),
);
