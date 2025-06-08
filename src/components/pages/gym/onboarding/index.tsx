"use client";
import useStore from "@/context/gym-registration/gym-setup-context";
import React from "react";
import OnboardingHome from "./steps/onboarding_welcome";
import OnboardingInput from "./steps/onboarding-input";
import {
  Bike,
  BriefcaseBusinessIcon,
  CheckIcon,
  ContactIcon,
  DumbbellIcon,
  Globe,
  HomeIcon,
  IdCardIcon,
  ActivityIcon,
  TicketIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  businessTypeandModelSchema,
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
      city: "",
      pinCode: "",
      state: "",
      streetAddress: "",
    },
  });

  // 2. Gym Type Form
  const methodsGymType = useForm<z.infer<typeof gymTypeSchema>>({
    resolver: zodResolver(gymTypeSchema),
    defaultValues: {
      gymType: "",
    },
  });

  // 2. Gym Type Form
  const methodsGymTypeandModel = useForm<
    z.infer<typeof businessTypeandModelSchema>
  >({
    resolver: zodResolver(businessTypeandModelSchema),
    defaultValues: {
      businessModel: "",
      businessType: "",
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
      store.setGymNameAddress({
        gymName: data.gymName,
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        pinCode: data.pinCode,
      });
      console.log("gymNameAddress Info Stored:", store.getCompleteData());
    } else if (store.step === 2) {
      store.setGymType({
        gymType: data.gymType,
      });
      console.log("gymType Info Stored:", store.getCompleteData().gymType);
    } else if (store.step === 3) {
      store.setPhoneEmail({
        gymPhoneNumber: data.gymPhoneNumber,
        gymEmail: data.gymEmail,
      });
      console.log(
        "phoneEmail Info Stored:",
        store.getCompleteData().phoneEmail
      );
    } else if (store.step === 4) {
      // ✅ Step 4: Business Type and Model
      store.setGymBusinessTypeModel({
        businessModel: data.businessModel,
        businessType: data.businessType,
      });
      console.log(
        "businessTypeAndModel Info Stored:",
        store.getCompleteData().gymBusinessTypeModel
      );
    } else if (store.step === 6) {
      // ✅ Step 5: Logo and Website (previously incorrect at step 4)
      store.setLogoWebsite({
        gymLogo: data.gymLogo,
        gymWebsite: data.gymWebsite,
      });
      console.log(
        "logoWebsite Info Stored:",
        store.getCompleteData().logoWebsite
      );
    } else if (store.step === 5) {
      store.setSloganSubdomain({
        slogan: data.slogan,
        subdomain: data.subdomain,
      });
      console.log(
        "sloganSubdomain Info Stored:",
        store.getCompleteData().sloganSubdomain
      );
    } else if (store.step === 7) {
      store.setLicenseGST({
        gymLicenseNumber: data.gymLicenseNumber,
        gymGSTNumber: data.gymGSTNumber,
      });
      console.log(
        "licenseGST Info Stored:",
        store.getCompleteData().licenseGST
      );
    } else if (store.step === 8) {
      store.setServices(data.services);
      console.log("services Info Stored:", store.getCompleteData().services);
    } else if (store.step === 9) {
      store.setFacilities(data.facilities);
      console.log(
        "facilities Info Stored:",
        store.getCompleteData().facilities
      );
    } else if (store.step === 10) {
      store.setMemberships(data); // Use your actual setter logic here
      console.log("data in handleNextStep : ", data);
      console.log(
        "membership Info Stored:",
        store.getCompleteData().memberships
      );
    }

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
            FirstInputPlaceholder="Registered Gym Name"
            FirstLabel="What is the name of your gym ?"
            FirstRegisterName={"gymName"}
            Icon={HomeIcon}
            componentHeadline="Please tell us about your gym"
            onSubmit={handleNextStep}
            step1
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
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
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
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
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
            form={methodsGymTypeandModel}
            FirstInputType="text"
            FirstRegisterName={"businessModel"}
            FirstLabel="Select Modal of your gym ?"
            FirstInputPlaceholder="Select Modal of your gym"
            Icon={BriefcaseBusinessIcon}
            SecondInputType="text"
            SecondInputPlaceholder="Select type of your gym"
            SecondLabel="Select type of your Gym?"
            SecondRegisterName={"businessType"}
            componentHeadline={
              <>
                Business Info{" "}
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
              </>
            }
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
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
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
            form={methodsLogoWebsite}
            Icon={IdCardIcon}
            FirstInputType="text"
            FirstRegisterName={"gymLogo"}
            FirstLabel="What is the logo of Your Gym ?"
            FirstInputPlaceholder="Upload your gym logo"
            SecondInputType="text"
            SecondInputPlaceholder="Website link ? Leave blank if none"
            SecondLabel="Does your gym have a website ?"
            SecondRegisterName={"gymWebsite"}
            componentHeadline={
              <>
                Digital Identity{" "}
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
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
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
              </>
            }
            onSubmit={handleNextStep}
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
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
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
            Icon={ActivityIcon}
          />
        );

      case 9:
        return (
          <OnboardingSelector
            componentHeadline={
              <>
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
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

      case 10:
        return (
          <OnboardingMembershipCarousal
            form={methodsMembership}
            onSubmit={handleNextStep}
            registerName="gymMembership"
            Icon={TicketIcon}
            componentHeadline={
              <>
                <div className="text-theme">
                  {/* Check if gymName is a string or object and display accordingly */}
                  <TextShimmer
                    duration={1.2}
                    className="text-2xl sm:text-3xl md:text-4xl leading-14 font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                  >
                    {gymName.trim() !== "" ? gymName : "Gym"}
                  </TextShimmer>
                </div>
                Membership
              </>
            }
          />
        );

      case 11:
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
                    ? methodsGymNameAddress
                    : store.step === 2
                    ? methodsGymType
                    : store.step === 3
                    ? methodsPhoneEmail
                    : store.step === 4
                    ? methodsGymTypeandModel
                    : store.step === 5
                    ? methodsSloganSubdomain
                    : store.step === 6
                    ? methodsLogoWebsite
                    : store.step === 7
                    ? methodsLicenseGST
                    : store.step === 8
                    ? methodsServices
                    : store.step === 9
                    ? methodsFacilities
                    : store.step === 10
                    ? methodsMembership
                    : methodsGymNameAddress
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
