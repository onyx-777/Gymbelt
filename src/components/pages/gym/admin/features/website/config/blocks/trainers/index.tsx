import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";

export type TrainerProps = {
  Trainer_Avatar: string;
  Trainer_Name: string;
  Trainer_Role: string;
  Trainer_Certification?: string;
  Trainer_Tagline: string;
  Trainer_Description: string;
};

export type TrainersSectionProps = {
  trainers: TrainerProps[];
};

export const TrainersSection: ComponentConfig<TrainersSectionProps> = {
  label: "Trainers Section",
  fields: {
    trainers: {
      type: "array",
      min: 1,
      max: 8,
      getItemSummary: (item) => item.Trainer_Name || "Trainer",
      arrayFields: {
        Trainer_Avatar: {
          type: "text",
          placeholder: "trainer-image-url",
          label: "Trainer Avatar",
        },
        Trainer_Certification: {
          type: "text",
          placeholder: "ACE Certified, NASM, CrossFit L1...",
          label: "Trainer Certification",
        },
        Trainer_Name: {
          type: "text",
          placeholder: "Trainer Name",
        },
        Trainer_Role: {
          type: "text",
          placeholder: "Trainer Role",
        },
        Trainer_Tagline: {
          type: "text",
          placeholder: "Trainer Tagline",
        },
        Trainer_Description: {
          type: "textarea",
          placeholder: "Trainer Description",
        },
      },
      defaultItemProps: {
        Trainer_Avatar:
          "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop",
        Trainer_Name: "John Doe",
        Trainer_Role: "Personal Trainer",
        Trainer_Tagline:
          "Push yourself. No one else is going to do it for you.",
        Trainer_Description:
          "John has 10+ years experience helping clients reach their goals through personalized programs.",
        Trainer_Certification: "NASM Certified",
      },
    },
  },
  defaultProps: {
    trainers: [
      {
        Trainer_Avatar:
          "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop",
        Trainer_Name: "Jane Smith",
        Trainer_Role: "Strength & Conditioning Coach",
        Trainer_Tagline: "Train smart. Stay strong.",
        Trainer_Description:
          "Jane Smith is a dedicated coach with a passion for empowering people to push their limits.",
        Trainer_Certification: "ACE Certified",
      },
    ],
  },
  render: ({ trainers }) => {
    return (
      <section className="min-h-screen py-16 px-4 flex flex-col items-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-12">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 text-center"
            >
              <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={trainer.Trainer_Avatar}
                  alt={trainer.Trainer_Name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{trainer.Trainer_Name}</h3>
              <p className="text-blue-600 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full mb-2">
                {trainer.Trainer_Role}
              </p>
              {trainer.Trainer_Certification && (
                <p className="mb-2 text-sm font-semibold text-green-700 flex items-center justify-center gap-1">
                  {trainer.Trainer_Certification} <CheckCircleIcon size={16} />
                </p>
              )}
              <p className="text-sm text-gray-600 mb-4">
                {trainer.Trainer_Description}
              </p>
              <p className="italic text-md font-medium text-gray-800">
                {trainer.Trainer_Tagline}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  },
};
