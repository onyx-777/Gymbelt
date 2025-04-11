import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface RegistrationState {
  step: number;

  // Form Data
  gymNameAddress: {
    gymName: string;
    gymAddress: string;
  };
  gymType: {
    gymType: string;
  };
  phoneEmail: {
    gymPhoneNumber: string;
    gymEmail: string;
  };
  logoWebsite: {
    gymLogo: string;
    gymWebsite: string;
  };
  sloganSubdomain: {
    slogan: string;
    subdomain: string;
  };
  licenseGST: {
    gymLicenseNumber: string;
    gymGSTNumber: string;
  };
  services: {
    services: string[];
  };
  facilities: {
    facilities: string[];
  };
  membership: {
    planName: string;
    services: string[];
    facilities: string[];
    duration: "1-Month" | "3-Month" | "6-Month" | "12-Month";
    price: string;
  }[];
  payment: {
    payment: string;
  };

  // Step Controls
  setStep: (newStep: number) => void;
  increaseStep: () => void;
  decreaseStep: () => void;

  // Form Data Setters
  setGymNameAddress: (
    data: Partial<RegistrationState["gymNameAddress"]>
  ) => void;
  setGymType: (data: Partial<RegistrationState["gymType"]>) => void;
  setPhoneEmail: (data: Partial<RegistrationState["phoneEmail"]>) => void;
  setLogoWebsite: (data: Partial<RegistrationState["logoWebsite"]>) => void;
  setSloganSubdomain: (
    data: Partial<RegistrationState["sloganSubdomain"]>
  ) => void;
  setLicenseGST: (data: Partial<RegistrationState["licenseGST"]>) => void;
  setServices: (data: Partial<RegistrationState["services"]>) => void;
  setFacilities: (data: Partial<RegistrationState["facilities"]>) => void;
  setMembership: (data: RegistrationState["membership"]) => void;
  setPayment: (data: Partial<RegistrationState["payment"]>) => void;

  // Get Complete Data
  getCompleteData: () => {
    gymNameAddress: RegistrationState["gymNameAddress"];
    gymType: RegistrationState["gymType"];
    phoneEmail: RegistrationState["phoneEmail"];
    logoWebsite: RegistrationState["logoWebsite"];
    sloganSubdomain: RegistrationState["sloganSubdomain"];
    licenseGST: RegistrationState["licenseGST"];
    services: RegistrationState["services"];
    facilities: RegistrationState["facilities"];
    membership: RegistrationState["membership"];
    payment: RegistrationState["payment"];
  };

  // Reset Store
  resetStore: () => void;
}

const initialState = {
  step: 10,
  gymNameAddress: {
    gymName: "",
    gymAddress: "",
  },
  gymType: {
    gymType: "",
  },
  phoneEmail: {
    gymPhoneNumber: "",
    gymEmail: "",
  },
  logoWebsite: {
    gymLogo: "",
    gymWebsite: "",
  },
  sloganSubdomain: {
    slogan: "",
    subdomain: "",
  },
  licenseGST: {
    gymLicenseNumber: "",
    gymGSTNumber: "",
  },
  services: {
    services: [],
  },
  facilities: {
    facilities: [],
  },
  membership: [],
  payment: {
    payment: "",
  },
};

const useStore = create<RegistrationState>()(
  devtools((set, get) => ({
    ...initialState,

    // Step Controls
    setStep: (newStep: number) => set({ step: newStep }),
    increaseStep: () => set((state) => ({ step: state.step + 1 })),
    decreaseStep: () => set((state) => ({ step: state.step - 1 })),

    // Form Data Setters
    setGymNameAddress: (data) =>
      set((state) => ({
        gymNameAddress: { ...state.gymNameAddress, ...data },
      })),

    setGymType: (data) =>
      set((state) => ({
        gymType: { ...state.gymType, ...data },
      })),

    setPhoneEmail: (data) =>
      set((state) => ({
        phoneEmail: { ...state.phoneEmail, ...data },
      })),

    setLogoWebsite: (data) =>
      set((state) => ({
        logoWebsite: { ...state.logoWebsite, ...data },
      })),

    setSloganSubdomain: (data) =>
      set((state) => ({
        sloganSubdomain: { ...state.sloganSubdomain, ...data },
      })),

    setLicenseGST: (data) =>
      set((state) => ({
        licenseGST: { ...state.licenseGST, ...data },
      })),

    setServices: (data) =>
      set((state) => ({
        services: { ...state.services, ...data },
      })),

    setFacilities: (data) =>
      set((state) => ({
        facilities: { ...state.facilities, ...data },
      })),

    setMembership: (data) =>
      set(() => ({
        membership: data, // Ensuring data is valid
      })),

    setPayment: (data) =>
      set((state) => ({
        payment: { ...state.payment, ...data },
      })),

    // Get Complete Data
    getCompleteData: () => ({
      gymNameAddress: get().gymNameAddress,
      gymType: get().gymType,
      phoneEmail: get().phoneEmail,
      logoWebsite: get().logoWebsite,
      sloganSubdomain: get().sloganSubdomain,
      licenseGST: get().licenseGST,
      services: get().services,
      facilities: get().facilities,
      membership: get().membership,
      payment: get().payment,
    }),

    // Reset Store
    resetStore: () => set(initialState),
  }))
);

export default useStore;

export const TOTAL_ONBOARDING_STEPS = 10;
