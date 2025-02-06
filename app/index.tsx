import { Text, View, Pressable } from "react-native"
import { Link } from "expo-router"
import React from "react"
import { getSession } from "@/lib/session"

const styles = {
	container: {
		flex: 1,
		justifyContent: "center" as const,
		alignItems: "center" as const,
		gap: 12
	},
	signInButton: {
		backgroundColor: "#007AFF",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8
	},
	signUpButton: {
		backgroundColor: "#0056b3",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8
	},
	debugButton: {
		backgroundColor: "#34C759",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600" as const
	}
}

export default async function Index() {
	const session = await getSession()

	return (
		<View style={styles.container}>
			<Text>{session ? `Welcome ${session.user.name}!` : "Not signed in"}</Text>
			{!session && (
				<React.Fragment>
					<Link href="/signin" asChild>
						<Pressable style={styles.signInButton}>
							<Text style={styles.buttonText}>Sign In</Text>
						</Pressable>
					</Link>
					<Link href="/signup" asChild>
						<Pressable style={styles.signUpButton}>
							<Text style={styles.buttonText}>Sign Up</Text>
						</Pressable>
					</Link>
				</React.Fragment>
			)}
			<Link href="/debug" asChild>
				<Pressable style={styles.debugButton}>
					<Text style={styles.buttonText}>Debug</Text>
				</Pressable>
			</Link>
		</View>
	)
}
