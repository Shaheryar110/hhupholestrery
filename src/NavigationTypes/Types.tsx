import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
    home: undefined;
    cleaningService: undefined;
    commercialService: undefined;
    BottomTab: NavigatorScreenParams<RootBottomTabParams>;
    Feedback: undefined;
    Privacy: undefined;
    Upholstery: undefined;


};

export type RootBottomTabParams = {
    home: undefined;
    service: undefined;
    contact: undefined;

}

export type cleaningServiceScreenProps = NativeStackScreenProps<
    BottomTabParamList,
    'cleaningService'
>;
export type commercialServiceScreenProps = NativeStackScreenProps<
    BottomTabParamList,
    'commercialService'
>;
export type HomeScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParams, 'home'>,
    NativeStackScreenProps<BottomTabParamList>
>;
export type SettingsScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParams, 'service'>,
    NativeStackScreenProps<BottomTabParamList>
>;
export type UpholsteryScreenProps = NativeStackScreenProps<
    BottomTabParamList,
    'Upholstery'
>;