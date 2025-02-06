"use client"

import { Redirect as ExpoRedirect } from "expo-router"
import type { ComponentProps } from "react"

export function Redirect({
	href
}: { href: ComponentProps<typeof ExpoRedirect>["href"] }) {
	return <ExpoRedirect href={href} />
}
