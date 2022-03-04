import images from "../assets";
import { IOnboardingItem } from "../types/onboarding";

export const dataForBScreen = [
    {
        uid: 0,
        type: 'DESIGN',
        title: 'Create a new landing page Hero image',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies commodo erat, vel laoreet mi porta eget. Donec blandit orci mollis ex auctor, in hendrerit nunc pretium',
        badges: ['#Design', '#Visual', '#SPRINT 2'],
        comments: ['test', 'test', 'test']
    },
    {
        uid: 1,
        type: 'DESIGN',
        title: 'Create a new landing page Hero image',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies commodo erat, vel laoreet mi porta eget. Donec blandit orci mollis ex auctor, in hendrerit nunc pretium',
        badges: ['#Design', '#Visual', '#SPRINT 2'],
        comments: ['test', 'test', 'test']
    },
    {
        uid: 2,
        type: 'DESIGN',
        title: 'Create a new landing page Hero image',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies commodo erat, vel laoreet mi porta eget. Donec blandit orci mollis ex auctor, in hendrerit nunc pretium',
        badges: ['#Design', '#Visual', '#SPRINT 2'],
        comments: ['test', 'test', 'test']
    }
];

export const dataForCScreen = [
    {
      title: "General",
      data: [
          {
            iconName: 'ios-notifications-outline',
            title: 'Notifications',
            desc: 'Customize notifications'
          },
          {
            iconName: 'ellipsis-horizontal-outline',
            title: 'More customization',
            desc: 'Customize it more to fit your usage'
          },
        ]
    },
    {
      title: "Support",
      data: [
        {
          iconName: 'phone-portrait-outline',
          title: 'Contact',
        },
        {
          iconName: 'mail',
          title: 'Feedback',
        },
        {
            iconName: 'shield',
            title: 'Privacy Policy',
          },
          {
            iconName: 'alert-outline',
            title: 'About',
          },
      ]
    }
  ];

export const dataForOnboardingScreen: IOnboardingItem[]  = [
  {
    title: 'Welcome to monumental habits',
    desc: 'We can help you to be a better version of yourself',
    image: images.intro
  },
  {
    title: 'Create new habit easily',
    desc: 'We can help you to be a better version of yourself',
    image: images.habits
  },
  {
    title: 'Keep track of your progress',
    desc: 'We can help you to be a better version of yourself',
    image: images.progress
  },
  {
    title: 'Join a supportive community',
    desc: 'We can help you to be a better version of yourself',
    image: images.communitySupport
  }
];