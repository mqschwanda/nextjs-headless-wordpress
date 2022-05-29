import { BaseProvider } from './BaseProvider';

export function EditProvider ({
	children,
}) {
	return (
		<BaseProvider>
			{ children }
		</BaseProvider>
	)
}
