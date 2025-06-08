import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core";
import { DebouncedColorPicker } from "../../../components/ui/DebounceColorPicker";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { getGymDetails } from "@/actions/db/gym";

// 🔁 Import your static facilities list here
import { facilities as ALL_FACILITIES } from "@/constants/gym/features-facilities"; // Update this path to your actual file
import { CheckCircle } from "lucide-react";

export type Facility = {
  id: number;
  name: string;
  description: string;
};

export type FacilitiesSectionProps = {
  backgroundColor: string;
  textColor: string;
  gradientColor?: string;
  cardColor: string;
  features?: Facility[];
};

export const FacilitiesSection: ComponentConfig<FacilitiesSectionProps> = {
  label: "Facilities Section",
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
    cardColor: {
      type: "custom",
      label: "Card Color",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Card Color"
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
          value={value || "#000000"}
          onChange={onChange}
        />
      ),
    },
  },
  defaultProps: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    gradientColor: "",
    cardColor: "#EBEBEB",
    features: [],
  },
  resolveData: async ({ props }) => {
    try {
      const gymData = await getGymDetails();
      const facilityNames: string[] = gymData?.Gym?.facilities || [];

      const matchedFacilities = facilityNames
        .map((name) => ALL_FACILITIES.find((fac) => fac.name === name))
        .filter((fac): fac is Facility => !!fac); // Filters out undefined

      return {
        props: {
          ...props,
          features: matchedFacilities,
        },
      };
    } catch (error) {
      console.error("Error fetching facilities:", error);
      return { props };
    }
  },
  render: ({
    backgroundColor,
    textColor,
    gradientColor,
    cardColor,
    features = [],
  }) => {
    return (
      <section
        style={{
          background: gradientColor
            ? `linear-gradient(${gradientColor}, ${backgroundColor})`
            : backgroundColor,
          color: textColor,
        }}
        className="w-full py-24"
      >
        <div
          className={cn(
            styles.container,
            "flex flex-col items-center justify-center"
          )}
        >
          <div className="-mx-4 flex flex-wrap mb-12 w-full">
            <div className="w-full px-4 text-center">
              <h2 className="text-sm text-blue-600 bg-blue-600/10 px-3 py-1 rounded-full w-fit mx-auto mb-4">
                Our Key Facilities
              </h2>
              <p className="text-lg font-medium">
                Built for your best experience
              </p>
            </div>
          </div>

          <div className={cn(styles.featuresWrapper, "px-5")}>
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-wrap justify-center items-center w-fit gap-5 px-5"
              >
                <div
                  style={{ backgroundColor: cardColor }}
                  className="flex flex-col rounded-xl backdrop-blur-3xl w-96 max-w-screen justify-center items-start p-7 gap-5"
                >
                  <div className="flex justify-center items-center w-full gap-3">
                    <CheckCircle className="text-green-600" />
                    <span className="text-xl font-semibold">
                      {feature.name}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
};
