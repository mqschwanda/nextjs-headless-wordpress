import { ReactNode } from "react"

export type HelloProps = React.ClassAttributes<HTMLSpanElement>

export function Hello ({
	...props
}: HelloProps) {
	return (
		<span {...props}/>
	)
}
