import { create } from "zustand";

const useHospitalList = create((set) => ({
    hospitalList: [],
    setHospitalList: (newList) => set({ hospitalList: newList }),
    addHospital: (hospital) => set((state) => ({ hospitalList: [...state.hospitalList, hospital] })),
    removeHospital: (hospitalId) => set((state) => ({
        hospitalList: state.hospitalList.filter(hospital => hospital.id !== hospitalId)
    })),
}));

export default useHospitalList;