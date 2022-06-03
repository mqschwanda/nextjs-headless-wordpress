/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

import { SaveProvider } from '../../providers/SaveProvider';
import { Button } from '@mqs/ui';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param {Object} props
 * @param {Object} props.attributes Data stored by a block.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save( { attributes } ) {
	const {
		children,
		color,
		disabled,
		disableElevation,
		disableFocusRipple,
		disableRipple,
		endIcon,
		fullWidth,
		href,
		size,
		startIcon,
		variant,
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<SaveProvider>
			<Button
				color={ color }
				disabled={ disabled }
				disableElevation={ disableElevation }
				disableFocusRipple={ disableFocusRipple }
				disableRipple={ disableRipple }
				endIcon={ endIcon }
				fullWidth={ fullWidth }
				href={ href }
				size={ size }
				startIcon={ startIcon }
				variant={ variant }
			>
				<RichText.Content
					{ ...blockProps }
					tagName="span"
					value={ children }
				/>
			</Button>
		</SaveProvider>
	);
}
