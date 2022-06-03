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
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

import { EditProvider } from '../../providers/EditProvider';
import { Typography } from '@mqs/ui';
import {
	ExternalLink,
	PanelBody,
	SelectControl,
	ToggleControl,
	/* eslint-disable @wordpress/no-unsafe-wp-apis */
	__experimentalText as Text,
	__experimentalSpacer as Spacer,
	/* eslint-enable @wordpress/no-unsafe-wp-apis */
} from '@wordpress/components';
import block from './block.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes    Data stored by a block.
 * @param {Function} props.setAttributes Update individual attributes based on user interactions.
 * @param {Function} props.mergeBlocks
 * @param {Function} props.onReplace
 * @param {Function} props.onRemove
 * @param {boolean}  props.isSelected    Whether the block is currently selected.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {
	attributes,
	setAttributes,
	mergeBlocks,
	onReplace,
	onRemove,
	isSelected, // eslint-disable-line no-unused-vars
} ) {
	const {
		align,
		gutterBottom,
		noWrap,
		paragraph,
		variant,
		children,
	} = attributes;
	const blockProps = useBlockProps();

	return (
		<EditProvider>
			<InspectorControls>
				<PanelBody
					title={ __( 'Material UI', 'text_domain_to_modify' ) }
					initialOpen
				>
					<Spacer marginBottom={ 2 }>
						<Text>
							{ __(
								'To learn more about what each attribute does, view the Material UI',
								'text_domain_to_modify'
							) }{ ' ' }
							<ExternalLink href="https://mui.com/material-ui/api/typography/">
								{ __(
									'Typography API documentation',
									'text_domain_to_modify'
								) }
							</ExternalLink>
							.
						</Text>
					</Spacer>

					<SelectControl
						label={ __( 'Align', 'text_domain_to_modify' ) }
						help={ __(
							'Set the text-align on the component.',
							'text_domain_to_modify'
						) }
						value={ align }
						onChange={ ( value ) =>
							setAttributes( { align: value } )
						}
						options={ block.attributes.align.enum.map(
							( value ) => ( { label: value, value } )
						) }
					/>
					<ToggleControl
						label={ __( 'Gutter Bottom', 'text_domain_to_modify' ) }
						help={ __(
							'If true, the text will have a bottom margin.',
							'text_domain_to_modify'
						) }
						checked={ gutterBottom }
						onChange={ () =>
							setAttributes( { gutterBottom: ! gutterBottom } )
						}
					/>
					<ToggleControl
						label={ __( 'No Wrap', 'text_domain_to_modify' ) }
						help={ __(
							'If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).',
							'text_domain_to_modify'
						) }
						checked={ noWrap }
						onChange={ () => setAttributes( { noWrap: ! noWrap } ) }
					/>
					<ToggleControl
						label={ __( 'Paragraph', 'text_domain_to_modify' ) }
						help={ __(
							'If true, the element will be a paragraph element.',
							'text_domain_to_modify'
						) }
						checked={ paragraph }
						onChange={ () =>
							setAttributes( { paragraph: ! paragraph } )
						}
					/>
					<SelectControl
						label={ __( 'Variant', 'text_domain_to_modify' ) }
						help={ __(
							'Applies the theme typography styles.',
							'text_domain_to_modify'
						) }
						value={ variant }
						onChange={ ( value ) =>
							setAttributes( { variant: value } )
						}
						options={ block.attributes.variant.enum.map(
							( value ) => ( { label: value, value } )
						) }
					/>
				</PanelBody>
			</InspectorControls>
			<Typography
				align={ align }
				gutterBottom={ gutterBottom }
				noWrap={ noWrap }
				paragraph={ paragraph }
				variant={ variant }
			>
				<RichText
					{ ...blockProps }
					identifier="children"
					tagName="span"
					value={ children }
					onChange={ ( value ) =>
						setAttributes( { children: value } )
					}
					data-empty={ children ? false : true }
					onMerge={ mergeBlocks }
					onReplace={ onReplace }
					onRemove={ onRemove }
				/>
			</Typography>
		</EditProvider>
	);
}
