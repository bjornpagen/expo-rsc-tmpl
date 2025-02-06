import { Text, View, Pressable } from "react-native"
import { Link } from "expo-router"
import React from "react"
import { auth } from "@/lib/auth"
import { unstable_headers as headers } from "expo-router/rsc/headers"

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
	const reqHeaders = await headers()
	const session = await auth.api.getSession({
		headers: reqHeaders
	})

	return (
		<View style={styles.container}>
			<Text>
				{session?.user.name ? `Welcome ${session.user.name}!` : "Not signed in"}
			</Text>
			{!session?.user.id && (
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
