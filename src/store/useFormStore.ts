import { create } from 'zustand';

interface FormState {
  name: string;
  email: string;
  message: string;
  setField: (field: string, value: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  name: '',
  email: '',
  message: '',
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));
