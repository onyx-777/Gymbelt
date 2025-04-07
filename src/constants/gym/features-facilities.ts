export type GymServices_FacilitiesTypes = {
  id: number;
  name: string;
  description: string;
};

export const services: readonly GymServices_FacilitiesTypes[] = [
  {
    id: 1,
    name: "Personal Training",
    description:
      "Personalized training programs and one-on-one coaching by certified trainers.",
  },
  {
    id: 2,
    name: "Nutrition Counseling",
    description:
      "Diet plans, meal suggestions, and consultations to achieve fitness goals.",
  },
  {
    id: 3,
    name: "Group Fitness Classes",
    description:
      "Classes such as Zumba, Pilates, Yoga, Kickboxing, CrossFit, etc.",
  },
  {
    id: 4,
    name: "Physical Therapy",
    description:
      "Rehabilitation and therapeutic treatments to recover from injuries.",
  },
  {
    id: 5,
    name: "Weight Loss Programs",
    description:
      "Customized programs focusing on fat loss, metabolism boosting, and fitness.",
  },
  {
    id: 6,
    name: "Massage Therapy",
    description:
      "Various massage therapies like Swedish, Deep Tissue, and Sports massage for relaxation and muscle recovery.",
  },
  {
    id: 7,
    name: "Body Composition Analysis",
    description:
      "In-depth analysis of body fat, muscle mass, and overall health metrics.",
  },
  {
    id: 8,
    name: "Group Sports Training",
    description:
      "Training for team sports like football, cricket, and basketball.",
  },
  {
    id: 9,
    name: "Stretching & Mobility Sessions",
    description:
      "Sessions focused on improving flexibility and preventing injuries.",
  },
  {
    id: 10,
    name: "Corporate Wellness Programs",
    description:
      "Fitness programs designed specifically for corporate employees to promote health and well-being.",
  },
  {
    id: 11,
    name: "Online Fitness Coaching",
    description:
      "Virtual training and fitness consultations for members who prefer training at home.",
  },
  {
    id: 12,
    name: "Recovery Services",
    description:
      "Recovery services such as cryotherapy, foam rolling, and compression therapy.",
  },
  {
    id: 13,
    name: "Yoga Classes",
    description:
      "Yoga classes to improve flexibility, mindfulness, and overall well-being.",
  },
  {
    id: 14,
    name: "Martial Arts & Boxing",
    description: "Training in martial arts like Karate, Taekwondo, and Boxing.",
  },
] as const;

export const facilities: readonly GymServices_FacilitiesTypes[] = [
  {
    id: 1,
    name: "Cardio Equipment",
    description:
      "Includes treadmills, ellipticals, rowing machines, stationary bikes, etc.",
  },
  {
    id: 2,
    name: "Strength Training",
    description: "Free weights, dumbbells, barbells, resistance machines, etc.",
  },
  {
    id: 3,
    name: "Group Fitness Classes",
    description:
      "Yoga, Pilates, Zumba, spinning, kickboxing, functional training, etc.",
  },
  {
    id: 4,
    name: "Personal Training",
    description:
      "One-on-one personal training sessions with certified trainers.",
  },
  {
    id: 5,
    name: "Swimming Pool",
    description: "Indoor or outdoor pools for swimming and aquatic exercises.",
  },
  {
    id: 6,
    name: "Sauna & Steam Room",
    description:
      "Dry sauna and steam room for relaxation and post-workout recovery.",
  },
  {
    id: 7,
    name: "Locker Rooms",
    description:
      "Secure changing rooms with lockers to store personal belongings.",
  },
  {
    id: 8,
    name: "Juice Bar",
    description:
      "A counter offering fresh juices, smoothies, and healthy snacks.",
  },
  {
    id: 9,
    name: "Indoor Cycling Studio",
    description:
      "Specialized cycling studio with spinning bikes for indoor cycling classes.",
  },
  {
    id: 10,
    name: "Yoga Studio",
    description:
      "Dedicated space for practicing yoga, including mats and other props.",
  },
] as const;
