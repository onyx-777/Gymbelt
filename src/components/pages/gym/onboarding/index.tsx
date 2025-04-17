"use client";
import useStore from "@/context/gym-registration/gym-setup-context";
import React from "react";
import OnboardingHome from "./steps/onboarding_welcome";
import OnboardingInput from "./steps/onboarding-input";
import {
  Bike,
  CheckIcon,
  ContactIcon,
  DumbbellIcon,
  Globe,
  HomeIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  facilitiesSchema,
  gymNameAddressSchema,
  gymTypeSchema,
  licenseGSTSchema,
  logoWebsiteSchema,
  membershipSchema,
  phoneEmailSchema,
  servicesSchema,
  sloganSubdomainSchema,
} from "@/schemas/onboarding";
import { AnimatePresence, motion } from "framer-motion";
import OnboardingNav from "./onboarding-nav";
import OnboardingRadio from "./steps/onboarding-radio";
import { z } from "zod";
import { TextShimmer } from "@/components/ui/text-shimmer";
import {
  facilities,
  gymTypes,
  services,
} from "@/constants/gym/features-facilities";
import { IconStretching } from "@tabler/icons-react";
import OnboardingSelector from "./steps/onboarding-selector";
import OnboardingMembershipCarousal from "./steps/onboarding_membership/onboarding_membership-carousal";
import OnboardingCompleted from "./steps/onboarding-completed";

type Props = {
  email: string;
  firstName: string;
};

const OnboardingComponent = ({ firstName, email }: Props) => {
  const store = useStore();

  // const methods = useForm<GymInfoOnboardingSchemaType>({
  //   resolver: zodResolver(gymInfoOnboardingSchema),
  //   defaultValues: {
  //     gymAddress: "",
  //     gymEmail: email,
  //     gymGSTNumber: "",
  //     gymLicenseNumber: "",
  //     gymLogo: "",
  //     gymName: "",
  //     gymPhoneNumber: "",
  //     gymType: "",
  //     gymWebsite: "",
  //     slogan: "",
  //     subdomain: "",
  //   },
  // });

  const methodsGymNameAddress = useForm<z.infer<typeof gymNameAddressSchema>>({
    resolver: zodResolver(gymNameAddressSchema),
    defaultValues: {
      gymName: "",
      gymAddress: "",
    },
  });

  // 2. Gym Type Form
  const methodsGymType = useForm<z.infer<typeof gymTypeSchema>>({
    resolver: zodResolver(gymTypeSchema),
    defaultValues: {
      gymType: "",
    },
  });

  // 3. Phone and Email Form
  const methodsPhoneEmail = useForm<z.infer<typeof phoneEmailSchema>>({
    resolver: zodResolver(phoneEmailSchema),
    defaultValues: {
      gymPhoneNumber: "",
      gymEmail: email,
    },
  });

  // 4. Logo and Website Form (Optional)
  const methodsLogoWebsite = useForm<z.infer<typeof logoWebsiteSchema>>({
    resolver: zodResolver(logoWebsiteSchema),
    defaultValues: {
      gymLogo: "",
      gymWebsite: "",
    },
  });

  // 5. Slogan and Subdomain Form
  const methodsSloganSubdomain = useForm<z.infer<typeof sloganSubdomainSchema>>(
    {
      resolver: zodResolver(sloganSubdomainSchema),
      defaultValues: {
        slogan: "",
        subdomain: "",
      },
    }
  );

  // 6. License Number and GST Number Form
  const methodsLicenseGST = useForm<z.infer<typeof licenseGSTSchema>>({
    resolver: zodResolver(licenseGSTSchema),
    defaultValues: {
      gymLicenseNumber: "",
      gymGSTNumber: "",
    },
  });

  // 7. Services Form
  // In the parent component where methodsServices is defined
  const methodsServices = useForm<z.infer<typeof servicesSchema>>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      services: [], // Initialize as an empty array instead of empty string
    },
  });

  // 8. Facilities Form
  const methodsFacilities = useForm<z.infer<typeof facilitiesSchema>>({
    resolver: zodResolver(facilitiesSchema),
    defaultValues: {
      facilities: [],
    },
  });

  // 9. Membership Form
  const methodsMembership = useForm<z.infer<typeof membershipSchema>>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      planName: "", // Set the default value for planName
      services: [], // Set the default value for services (empty array)
      facilities: [], // Set the default value for facilities (empty array)
      duration: "1-Month" as const, // Set the default value for duration
      price: "", // Set the default value for price
    },
  });

  const gymName = methodsGymNameAddress.getValues("gymName");

  console.log(gymName);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNextStep = async (data: any) => {
    console.log("Form Data:", data);

    if (store.step === 1) {
      // Store basic info data
      store.setGymNameAddress({
        gymName: data.gymName,
        gymAddress: data.gymAddress,
      });

      console.log("gymNameAddress Info Stored:", store.getCompleteData());
    } else if (store.step === 2) {
      // Store gym type data
      store.setGymType({
        gymType: data.gymType,
      });

      console.log("gymType Info Stored:", store.getCompleteData().gymType);
    } else if (store.step === 3) {
      // Store phone and email data
      store.setPhoneEmail({
        gymPhoneNumber: data.gymPhoneNumber,
        gymEmail: data.gymEmail,
      });

      console.log(
        "phoneEmail Info Stored:",
        store.getCompleteData().phoneEmail
      );
    } else if (store.step === 4) {
      // Store logo and website data (Optional)
      store.setLogoWebsite({
        gymLogo: data.gymLogo,
        gymWebsite: data.gymWebsite,
      });

      console.log(
        "logoWebsite Info Stored:",
        store.getCompleteData().logoWebsite
      );
    } else if (store.step === 5) {
      // Store slogan and subdomain data
      store.setSloganSubdomain({
        slogan: data.slogan,
        subdomain: data.subdomain,
      });

      console.log(
        "sloganSubdomain Info Stored:",
        store.getCompleteData().sloganSubdomain
      );
    } else if (store.step === 6) {
      // Store license number and GST number data
      store.setLicenseGST({
        gymLicenseNumber: data.gymLicenseNumber,
        gymGSTNumber: data.gymGSTNumber,
      });

      console.log(
        "licenseGST Info Stored:",
        store.getCompleteData().licenseGST
      );
    } else if (store.step === 7) {
      // Store services data
      store.setServices(data.services);

      console.log("services Info Stored:", store.getCompleteData().services);
    } else if (store.step === 8) {
      // Store facilities data
      store.setFacilities(data.facilities);

      console.log(
        "facilities Info Stored:",
        store.getCompleteData().facilities
      );
    } else if (store.step === 9) {
      // Store membership data
      // store.setMembership({
      //   membership: data.membership,
      // });

      store.increaseStep();

      console.log("data in handleNextStep : ", data);

      console.log(
        "membership Info Stored:",
        store.getCompleteData().memberships
      );
    }
    // After storing data, you can move to the next step (if needed)
    store.increaseStep();
  };

  const onboardingflow = () => {
    switch (store.step) {
      case 0:
        return <OnboardingHome firstName={firstName} />;

      case 1:
        return (
          <OnboardingInput
            form={methodsGymNameAddress}
            FirstInputType="text"
            SecondInputType="text"
            FirstInputPlaceholder="What do you call your gym?"
            FirstLabel="What is the name of your gym ?"
            FirstRegisterName={"gymName"}
            Icon={HomeIcon}
            SecondInputPlaceholder="Where is your gym ?"
            SecondLabel="Where is your gym ?"
            SecondRegisterName={"gymAddress"}
            componentHeadline="Please tell us about your gym"
            onSubmit={handleNextStep}
          />
        );

      case 2:
        return (
          <OnboardingRadio
            form={methodsGymType}
            onSubmit={handleNextStep}
            Componentfor="Type"
            Icon={DumbbellIcon}
            registerName="gymType"
            list={gymTypes}
            componentHeadline={
              <>
                What is the type of{" "}
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl leading-16 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
              </>
            }
            label="Select the Type"
          />
        );

      case 3:
        return (
          <OnboardingInput
            form={methodsPhoneEmail}
            FirstInputType="number"
            FirstRegisterName={"gymPhoneNumber"}
            FirstLabel="What Is Your Gym Contact Number ?"
            FirstInputPlaceholder="How do we call your gym?"
            Icon={ContactIcon}
            SecondInputType="email"
            SecondInputPlaceholder="what is your Gym Email ?"
            SecondLabel="Email Address of your Gym?"
            SecondRegisterName={"gymEmail"}
            componentHeadline={
              <>
                How to contact{" "}
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl leading-16 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
              </>
            }
            onSubmit={handleNextStep}
          />
        );

      case 4:
        return (
          <OnboardingInput
            form={methodsLogoWebsite}
            FirstInputType="text"
            FirstRegisterName={"gymLogo"}
            FirstLabel="What is the logo of Your Gym ?"
            FirstInputPlaceholder="Upload your gym logo"
            SecondInputType="text"
            SecondInputPlaceholder="Enter your website link ?"
            SecondLabel="Does your gym have a website ?"
            SecondRegisterName={"gymWebsite"}
            componentHeadline={<>Digital Identity</>}
            onSubmit={handleNextStep}
          />
        );

      case 5:
        return (
          <OnboardingInput
            form={methodsSloganSubdomain}
            FirstInputType="text"
            FirstRegisterName={"slogan"}
            FirstLabel="What is the slogan of Your Gym ?"
            FirstInputPlaceholder="Enter the slogan"
            Icon={Globe}
            SecondInputType="text"
            SecondInputPlaceholder={`your-subdomain.${process.env.NEXT_PUBLIC_DOMAIN}`}
            SecondLabel="Enter the subdomain do you like ?"
            SecondRegisterName={"subdomain"}
            componentHeadline={
              <>
                Branding
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl leading-16 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
              </>
            }
            onSubmit={handleNextStep}
          />
        );

      case 6:
        return (
          <OnboardingInput
            form={methodsLicenseGST}
            FirstInputType="text"
            FirstRegisterName={"gymLicenseNumber"}
            FirstLabel="What Is Your Gym License Number ?"
            FirstInputPlaceholder="Enter the license number"
            Icon={CheckIcon}
            SecondInputType="text"
            SecondInputPlaceholder="Your Gym GST Number"
            SecondLabel="What is your Gym GST Number ?"
            SecondRegisterName={"gymGSTNumber"}
            componentHeadline={
              <>
                Verify{" "}
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl leading-16 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
              </>
            }
            onSubmit={handleNextStep}
          />
        );

      case 7:
        return (
          <OnboardingSelector
            componentHeadline={
              <>
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl leading-16 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
                Services
              </>
            }
            form={methodsServices}
            label="services"
            list={services}
            onSubmit={handleNextStep}
            registerName="services"
            Icon={IconStretching}
          />
        );

      case 8:
        return (
          <OnboardingSelector
            componentHeadline={
              <>
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl leading-16 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
                Facilities
              </>
            }
            form={methodsFacilities}
            label="facilities"
            list={facilities}
            onSubmit={handleNextStep}
            registerName="facilities"
            Icon={Bike}
          />
        );

      case 9:
        return (
          <OnboardingMembershipCarousal
            form={methodsMembership}
            onSubmit={handleNextStep}
            registerName="gymMembership"
            componentHeadline={
              <>
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl leading-16 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
                Membership
              </>
            }
          />
        );

      case 10:
        return <OnboardingCompleted />;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-7 p-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={store.step} // Ensure unique key for each step
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-fit text-center"
        >
          {onboardingflow()}
        </motion.div>
        <motion.div
          key={`nav-${store.step}`} // Add unique key for nav component
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full max-w-sm flex justify-center items-center h-fit p-3 text-center"
        >
          {store.step > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full flex justify-center items-center h-fit text-center"
            >
              <OnboardingNav
                submitForm={handleNextStep}
                form={
                  store.step === 1
                    ? methodsGymNameAddress // Type assertion for each step's form
                    : store.step === 2
                    ? methodsGymType
                    : store.step === 3
                    ? methodsPhoneEmail
                    : store.step === 4
                    ? methodsLogoWebsite
                    : store.step === 5
                    ? methodsSloganSubdomain
                    : store.step === 6
                    ? methodsLicenseGST
                    : store.step === 7
                    ? methodsServices
                    : store.step === 8
                    ? methodsFacilities
                    : store.step === 9
                    ? methodsMembership // Added missing ternary operator here
                    : methodsGymNameAddress // Default form for the first step
                }
              />{" "}
            </motion.div>
          )}{" "}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OnboardingComponent;
