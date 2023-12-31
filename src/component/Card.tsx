import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

export default function Card({ ...props }: ViewProps) {
	props.style = StyleSheet.compose(cardStyle, props.style);
	return <View {...props} />;
}

export const cardStyle: ViewStyle = {
	backgroundColor: "rgba(0, 0, 0, 0.8)",
	borderWidth: 1.5,
	borderColor: "#9932CC",
	// @ts-ignore
	backdropFilter: "blur(5px)",
	borderRadius: 12,
	minHeight: 550,
	width: "100vw",
	maxWidth: 800,
	alignSelf: "center",
	padding: 20,
	shadowRadius: 10,
	shadowOpacity: .4,
};