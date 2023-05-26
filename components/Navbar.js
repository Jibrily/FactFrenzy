import { View, StyleSheet } from "react-native"
import { Button, IconButton, MD3Colors } from "react-native-paper"

const Navbar = (props) => {
	return (
		<View style={styles.navbar}>
			<IconButton
				icon={"home"}
				animated={true}
				iconColor={MD3Colors.neutral100}
				size={35}
				style={{
					borderRadius: 12,
				}}
				onPress={props.onGoHome}
			/>
			<Button
				loading={props.isLoading}
				buttonColor={MD3Colors.neutral100}
				rippleColor={MD3Colors.secondary80}
				mode="contained-tonal"
				onPress={props.onGenerate}
			>
				{props.factDisplayed ? "Regenerate" : "Generate"}
			</Button>
			<IconButton
				icon={"content-copy"}
				iconColor={MD3Colors.neutral100}
				size={25}
				onPress={props.onCopyFact}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#1e1e1e",
		alignItems: "center",
		borderRadius: 12,
	},
})

export default Navbar
