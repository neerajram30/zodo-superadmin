import { create } from "zustand";

const useSelectedHospital = create((set) => ({
  selectedHospital: {},
  setSelectedHospital: (hospital) => set({ selectedHospital: hospital }),
}));

export default useSelectedHospital;
