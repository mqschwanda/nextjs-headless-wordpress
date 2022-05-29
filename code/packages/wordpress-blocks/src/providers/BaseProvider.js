import { UiProvider } from '@mqs/ui'


export function BaseProvider ({
	children,
}) {
	return (
		<UiProvider>
			{ children }
		</UiProvider>
	)
}
