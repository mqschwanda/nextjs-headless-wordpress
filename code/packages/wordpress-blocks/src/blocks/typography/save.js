/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

import { SaveProvider } from '../../providers/SaveProvider';
import { Typography } from '@mqs/ui';

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
		align,
		gutterBottom,
		noWrap,
		paragraph,
		variant,
		children,
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<SaveProvider>
			<Typography
				// TODO: remove span compnent workaround for error thrown by nested `<p><div/></p>` 
				component="span"
				align={ align }
				gutterBottom={ gutterBottom }
				noWrap={ noWrap }
				paragraph={ paragraph }
				variant={ variant }
			>
				<RichText.Content
					{ ...blockProps }
					tagName="span"
					value={ children }
				/>
			</Typography>
		</SaveProvider>
	);
}
