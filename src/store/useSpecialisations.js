import { create } from "zustand";

const useSpecialisations = create((set) => ({
  specialisations: [],
  setSpecialisations: (specialisation) => set({ specialisations: specialisation }),
  addNewSpecialisation: (specialisation) => set((state) => ({ specialisations: [...state.specialisations, specialisation] })),
}));

export default useSpecialisations;
