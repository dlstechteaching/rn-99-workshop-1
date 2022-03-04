import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IOnboardingItem } from "../types/onboarding";
import { Navigation } from "./Navigation";

export type AppStackNavigatorParamList = {
    [Navigation.Home] : undefined,
    [Navigation.A] : undefined,
    [Navigation.B] : undefined,
    [Navigation.C] : undefined,
    [Navigation.Onboarding] : {
        stepIndex: number,
        data: IOnboardingItem[],
    },
};

export type HomeStackScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.Home
>;

export type AScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.A
>;

export type BScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.B
>;

export type CScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.C
>;

export type OnboardingScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.Onboarding
>;