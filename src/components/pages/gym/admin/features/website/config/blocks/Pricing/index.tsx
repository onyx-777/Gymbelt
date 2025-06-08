/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core";
import { getGymDetails } from "@/actions/db/gym";
import { DebouncedColorPicker } from "../../../components/ui/DebounceColorPicker";
import { Spotlight } from "@/components/ui/spotlight";

export type PricingSectionProps = {
  backgroundColor: string;
  textColor: string;
  gradientColor?: string;
  membershipTemplates?: Array<{
    planName: string;
    price: string | number;
    duration: string;
    services: any[];
    facilities: any[];
  }>;
};

const formatDuration = (duration: string) => {
  const durationMap: { [key: string]: string } = {
    "1-Month": "Monthly",
    "3-Month": "Quarterly",
    "6-Month": "Semi-Annually",
    "12-Month": "Annually",
  };
  return durationMap[duration] || duration;
};

export const PricingSection: ComponentConfig<PricingSectionProps> = {
  label: "Pricing Section",
  fields: {
    backgroundColor: {
      type: "custom",
      label: "Background Color",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Background Color"
          name={name}
          value={value}
          onChange={onChange}
        />
      ),
    },
    textColor: {
      type: "custom",
      label: "Text Color",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Text Color"
          name={name}
          value={value}
          onChange={onChange}
        />
      ),
    },
    gradientColor: {
      type: "custom",
      label: "Gradient Color (Optional)",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Gradient Color"
          name={name}
          value={value || "#ffffff"}
          onChange={onChange}
        />
      ),
    },
  },
  defaultProps: {
    backgroundColor: "#ffffff",
    textColor: "#1F2937",
    gradientColor: "",
  },
  resolveData: async ({ props }) => {
    try {
      const gymData = await getGymDetails();

      if (!gymData?.Gym) {
        return { props };
      }

      const membershipTemplates = gymData.Gym.membershipTemplates;

      return {
        props: {
          ...props,
          membershipTemplates,
        },
      };
    } catch (error) {
      console.error("Error fetching gym details:", error);
      return { props };
    }
  },
  render: ({
    backgroundColor,
    textColor,
    gradientColor,
    membershipTemplates = [],
  }) => {
    return (
      <section
        className="body-font w-full flex justify-center items-center overflow-hidden"
        style={{
          background: gradientColor
            ? `linear-gradient(${gradientColor}, ${backgroundColor})`
            : backgroundColor,
          color: textColor,
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2">
              Pricing{" "}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Choose the perfect plan for your fitness journey
            </p>
          </div>

          <div className="flex w-full justify-center items-center flex-wrap -m-4">
            {membershipTemplates.map((plan, i) => (
              <div key={i} className="p-4 relative xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg bg-gradient-to-br from-gray-800 to-blue-600 flex flex-col relative overflow-hidden">
                  <Spotlight />
                  <h2 className="text-sm text-white tracking-widest title-font mb-1 font-medium">
                    {plan.planName}
                  </h2>
                  <h1 className="text-3xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>${plan.price}</span>
                    <span className="text-base ml-1 font-normal text-gray-300">
                      /{formatDuration(plan.duration)}
                    </span>
                  </h1>
                  <ul className="mb-6 space-y-2 text-white">
                    {plan.services.map((service, idx) => (
                      <li key={idx}>✅ {service}</li>
                    ))}
                    {plan.facilities.map((facility, idx) => (
                      <li key={idx}>✅ {facility}</li>
                    ))}
                  </ul>
                  <button className="w-full text-center bg-white text-primary py-2 px-4 rounded">
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
};
