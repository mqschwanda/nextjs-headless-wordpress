import { ReactNode } from "react"

export type UiProviderProps = {
	children: ReactNode,
}

export function UiProvider ({
	children,
}: UiProviderProps) {
	return (
		<>
			{ children }
		</>
	)
}
