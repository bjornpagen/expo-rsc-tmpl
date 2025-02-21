import "server-only"

import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { expo } from "@better-auth/expo"
import { db } from "@/db"
import * as schema from "@/db/schema"

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema
	}),
	advanced: {
		generateId: false
	},
	emailAndPassword: {
		enabled: true
	},
	plugins: [expo()],
	trustedOrigins: ["myapp://"]
})
