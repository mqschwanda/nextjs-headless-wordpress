import { BaseProvider } from './BaseProvider';

export function SaveProvider ({
	children,
}) {
	return (
		<BaseProvider>
			{ children }
		</BaseProvider>
	)
}
