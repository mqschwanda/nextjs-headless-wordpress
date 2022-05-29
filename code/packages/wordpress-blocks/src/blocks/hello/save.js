/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

import { SaveProvider } from '../../providers/SaveProvider';
import { Hello } from '@mqs/ui';
import { useMemo } from 'react';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save() {
	const { save } = useBlockProps()
	const props = useMemo(() => save(), [save])

	return (
		<SaveProvider>
			<Hello {...props}>
				{__('Hello – hello from the saved content!', 'text_domain_to_modify')}
			</Hello>
		</SaveProvider>
	);
}
