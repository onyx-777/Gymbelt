import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface RegistrationState {
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
  services: { services: string[] }; // Object with services array
  facilities: { facilities: string[] }; // Object with facilities array
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
  setPhoneEmail: (data: Partial<RegistrationState["phoneEmail"]>) => void;
  setLogoWebsite: (data: Partial<RegistrationState["logoWebsite"]>) => void;
  setSloganSubdomain: (
    data: Partial<RegistrationState["sloganSubdomain"]>
  ) => void;
  setLicenseGST: (data: Partial<RegistrationState["licenseGST"]>) => void;
  setServices: (data: string[]) => void; // Set services as an array inside the services object
  setFacilities: (data: string[]) => void; // Set facilities as an array inside the facilities object
  setMemberships: (data: RegistrationState["memberships"]) => void;

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
    memberships: RegistrationState["memberships"];
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
  services: { services: [] }, // Object containing services array
  facilities: { facilities: [] }, // Object containing facilities array
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

    setServices: (data) => set({ services: { services: [...data] } }), // Setting services inside the object

    setFacilities: (data) => set({ facilities: { facilities: [...data] } }), // Setting facilities inside the object

    setMemberships: (data) =>
      set(() => ({
        memberships: data, // Setting memberships array
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
      memberships: get().memberships,
    }),

    // Reset Store
    resetStore: () => set(initialState),
  }))
);

export default useStore;

export const TOTAL_ONBOARDING_STEPS = 10;
