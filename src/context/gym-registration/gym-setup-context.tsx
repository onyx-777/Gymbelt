import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface RegistrationState {
  step: number;

  // Basic Info Form Data
  basicInfo: {
    gymPhoneNumber: string;
    gymName: string;
    gymAddress: string;
    gymEmail: string;
    gymType: string;
  };

  // Branding Form Data
  brandingInfo: {
    gymLogo: string;
    gymWebsite: string;
    slogan: string;
    subdomain: string;
  };

  // Additional Info
  additionalInfo: {
    gymGSTNumber: string;
    gymLicenseNumber: string;
  };

  // Step Controls
  setStep: (newStep: number) => void;
  increaseStep: () => void;
  decreaseStep: () => void;

  // Form Data Setters
  setBasicInfo: (data: Partial<RegistrationState["basicInfo"]>) => void;
  setBrandingInfo: (data: Partial<RegistrationState["brandingInfo"]>) => void;
  setAdditionalInfo: (
    data: Partial<RegistrationState["additionalInfo"]>
  ) => void;

  // Get Complete Data
  getCompleteData: () => {
    basicInfo: RegistrationState["basicInfo"];
    brandingInfo: RegistrationState["brandingInfo"];
    additionalInfo: RegistrationState["additionalInfo"];
  };

  // Reset Store
  resetStore: () => void;
}

const initialState = {
  step: 3,
  basicInfo: {
    gymName: "",
    gymAddress: "",
    gymPhoneNumber: "",
    gymEmail: "",
    gymType: "",
  },
  brandingInfo: {
    gymLogo: "",
    gymWebsite: "",
    slogan: "",
    subdomain: "",
  },
  additionalInfo: {
    gymGSTNumber: "",
    gymLicenseNumber: "",
  },
};

const useStore = create<RegistrationState>()(
  devtools((set, get) => ({
    ...initialState,

    setStep: (newStep: number) => set({ step: newStep }),
    increaseStep: () => set((state) => ({ step: state.step + 1 })),
    decreaseStep: () => set((state) => ({ step: state.step - 1 })),

    setBasicInfo: (data) =>
      set((state) => ({
        basicInfo: { ...state.basicInfo, ...data },
      })),

    setBrandingInfo: (data) =>
      set((state) => ({
        brandingInfo: { ...state.brandingInfo, ...data },
      })),

    setAdditionalInfo: (data) =>
      set((state) => ({
        additionalInfo: { ...state.additionalInfo, ...data },
      })),

    getCompleteData: () => ({
      basicInfo: get().basicInfo,
      brandingInfo: get().brandingInfo,
      additionalInfo: get().additionalInfo,
    }),

    resetStore: () => set(initialState),
  }))
);

export default useStore;
