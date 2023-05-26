import { View, StyleSheet, ScrollView } from "react-native"
import { MD3Colors, Text } from "react-native-paper"

const FactDisplay = (props) => {
	return (
		<View style={styles.factDisplayContainer}>
			<ScrollView
				style={styles.factContainer}
				showsVerticalScrollIndicator
			>
				<Text style={styles.factText}>{props.currentFact}</Text>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	factDisplayContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	factContainer: {
		backgroundColor: "#1e1e1e",
		borderRadius: 24,
		maxHeight: 480,
	},
	factText: {
		color: MD3Colors.neutral100,
		borderRadius: 24,
		fontSize: 32,
		padding: 24,
		fontFamily: "Poppins-Medium",
		lineHeight: 40,
		letterSpacing: 1,
	},
})

export default FactDisplay
