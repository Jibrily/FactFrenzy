import { View, StyleSheet, FlatList } from "react-native"
import {
	Button,
	TextInput,
	MD3Colors,
	Text,
	HelperText,
} from "react-native-paper"
import { useState } from "react"

const FactInput = (props) => {
	const topics = [
		"Animals",
		"Geography",
		"Astronomy",
		"Science",
		"Biology",
		"Chemistry",
		"Technology",
		"Physics",
		"Fiction",
	]

	return (
		<View style={styles.inputContainer}>
			<Text
				variant="labelLarge"
				style={styles.label}
			>
				Pick a Topic or Enter a Keyword
			</Text>

			<View style={styles.topicContainer}>
				<FlatList
					data={topics}
					renderItem={({ item }) => (
						<Button
							style={styles.topicItems}
							mode={
								item == props.selectedTopic
									? "contained"
									: "text"
							}
							textColor={MD3Colors.neutral100}
							onPress={() => props.onTopicSelect(item)}
						>
							{item}
						</Button>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: 16 }}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>

			<HelperText
				type="error"
				visible={props.showError}
			>
				Enter a Keyword or Select a Topic
			</HelperText>

			<TextInput
				style={styles.input}
				textColor="white"
				underlineColor="transparent"
				activeUnderlineColor="transparent"
				placeholder="Enter a Keyword"
				onChangeText={(text) => props.onFactInput(text)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	label: {
		marginBottom: 24,
		color: MD3Colors.neutral80,
	},
	topicContainer: {
		marginBottom: 4,
	},
	topicItems: {
		borderColor: MD3Colors.neutral100,
	},
	inputContainer: {
		marginBottom: 24,
	},
	input: {
		height: 60,
		borderRadius: 12,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
		backgroundColor: "#1e1e1e",
		borderColor: "#1e1e1e",
	},
})

export default FactInput
