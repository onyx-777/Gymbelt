import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Sign Up New Members in Seconds",
      description: [
        "Gym owners add members easily.",
        "New members fill out their basic info and their profile is created automatically!",
        "No need for extra paperwork.",
      ],
      icon: <IconTerminal2 />,
    },
    {
      title: "Automate Payments and Billing",
      description: [
        "We handle your payments for you!",
        "We automatically process subscriptions, send payment reminders, and track who’s paid.",
        "You won’t have to chase payments again!",
      ],
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Send Automated Notifications",
      description: [
        "We send reminders for you.",
        "Members get notified about payments, upcoming sessions, and missed sessions.",
        "We’ll even send alerts for new offers or promotions!",
      ],
      icon: <IconCloud />,
    },
    {
      title: "Track Gym Performance with Simple Analytics",
      description: [
        "See everything in one place.",
        "Get an overview of your members, payments, attendance, and more on your dashboard.",
        "Understand how your gym is doing with easy financial and usage reports.",
      ],
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Members View Their Own Profile",
      description: [
        "Members can see their own progress.",
        "They can check their attendance, track payments, and even update their profile whenever they want.",
        "It’s simple and easy for them to stay on top of their fitness goals.",
      ],
      icon: <IconAdjustmentsBolt />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string[]; // Description is an array of strings (each string is a bullet point)
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 w-80 relative group/feature dark:border-neutral-800",
        // (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        // index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#7C3AED] group-hover/feature:bg-[#7C3AED] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <ul className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 list-disc">
        {description.map((point, index) => (
          <li key={index} className="mt-4">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
