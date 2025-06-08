import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface RegistrationState {
  step: number;

  // Form Data
  gymNameAddress: {
    gymName: string;
    streetAddress: string;
    city: string;
    state: string;
    pinCode: string;
  };
  gymType: {
    gymType: string;
  };
  gymBusinessTypeModel: {
    businessModel: string;
    businessType: string;
  };
  phoneEmail: {
    gymPhoneNumber: string;
    gymEmail: string;
  };
  logoWebsite: {
    gymLogo: string;
    gymWebsite?: string;
  };
  sloganSubdomain: {
    slogan: string;
    subdomain: string;
  };
  licenseGST: {
    gymLicenseNumber?: string;
    gymGSTNumber?: string;
  };
  services: { services: string[] };
  facilities: { facilities: string[] };
  memberships: {
    planName: string;
    services: string[];
    facilities: string[];
    duration: "1-Month" | "3-Month" | "6-Month" | "12-Month";
    price: string;
  }[];

  // Step Controls
  setStep: (newStep: number) => void;
  increaseStep: () => void;
  decreaseStep: () => void;

  // Form Data Setters
  setGymNameAddress: (
    data: Partial<RegistrationState["gymNameAddress"]>
  ) => void;
  setGymType: (data: Partial<RegistrationState["gymType"]>) => void;
  setGymBusinessTypeModel: (
    data: Partial<RegistrationState["gymBusinessTypeModel"]>
  ) => void;
  setPhoneEmail: (data: Partial<RegistrationState["phoneEmail"]>) => void;
  setLogoWebsite: (data: Partial<RegistrationState["logoWebsite"]>) => void;
  setSloganSubdomain: (
    data: Partial<RegistrationState["sloganSubdomain"]>
  ) => void;
  setLicenseGST: (data: Partial<RegistrationState["licenseGST"]>) => void;
  setServices: (data: string[]) => void;
  setFacilities: (data: string[]) => void;
  setMemberships: (data: RegistrationState["memberships"]) => void;

  // Get Complete Data
  getCompleteData: () => Omit<
    RegistrationState,
    | "step"
    | "setStep"
    | "increaseStep"
    | "decreaseStep"
    | "setGymNameAddress"
    | "setGymType"
    | "setGymBusinessTypeModel"
    | "setPhoneEmail"
    | "setLogoWebsite"
    | "setSloganSubdomain"
    | "setLicenseGST"
    | "setServices"
    | "setFacilities"
    | "setMemberships"
    | "getCompleteData"
    | "resetStore"
  >;

  // Reset Store
  resetStore: () => void;
}

// Initial state
const initialState: Omit<RegistrationState, keyof RegistrationState & string> =
  {
    step: 0,
    gymNameAddress: {
      gymName: "",
      streetAddress: "",
      city: "",
      state: "",
      pinCode: "",
    },
    gymType: {
      gymType: "",
    },
    gymBusinessTypeModel: {
      businessModel: "",
      businessType: "",
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
    services: { services: [] },
    facilities: { facilities: [] },
    memberships: [],
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

    setGymBusinessTypeModel: (data) =>
      set((state) => ({
        gymBusinessTypeModel: { ...state.gymBusinessTypeModel, ...data },
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

    setServices: (data) => set({ services: { services: [...data] } }),

    setFacilities: (data) => set({ facilities: { facilities: [...data] } }),

    setMemberships: (data) => set(() => ({ memberships: data })),

    // Get Complete Data
    getCompleteData: () => ({
      gymNameAddress: get().gymNameAddress,
      gymType: get().gymType,
      gymBusinessTypeModel: get().gymBusinessTypeModel,
      phoneEmail: get().phoneEmail,
      logoWebsite: get().logoWebsite,
      sloganSubdomain: get().sloganSubdomain,
      licenseGST: get().licenseGST,
      services: get().services,
      facilities: get().facilities,
      memberships: get().memberships,
    }),

    // Reset Store
    resetStore: () => set(initialState),
  }))
);

export default useStore;
export const TOTAL_ONBOARDING_STEPS = 11;
