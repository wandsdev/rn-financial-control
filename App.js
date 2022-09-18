import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styleColor } from "./src/styles/style";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home</Text>
		</View>
	);
};

const PeriodScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Period</Text>
		</View>
	);
};

const PostingTypeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Posting Type</Text>
		</View>
	);
};

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: "Lançamentos",
					tabBarLabelStyle: {
						fontSize: 18,
						color: styleColor.primary600,
					},
					tabBarIcon: () => {
						return (
							<Feather
								name="trending-up"
								size={32}
								color={styleColor.primary600}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="PostingType"
				component={PostingTypeScreen}
				options={{
					title: "Tipos de Lançamentos",
					tabBarLabelStyle: {
						fontSize: 18,
						color: styleColor.primary600,
					},
					tabBarIcon: () => {
						return (
							<Feather
								name="trending-up"
								size={32}
								color={styleColor.primary600}
							/>
						);
					},
				}}
			/>
			<Tab.Screen name="Period" component={PeriodScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<TabsNavigation />
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: "purple",
		fontSize: 32,
		letterSpacing: 4,
		fontWeight: "bold",
	},
});
