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
import { Button } from '@mqs/ui';
import {
	ExternalLink,
	PanelBody,
	SelectControl,
	ToggleControl,
	/* eslint-disable @wordpress/no-unsafe-wp-apis */
	__experimentalText as Text,
	__experimentalSpacer as Spacer,
	TextControl,
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
							<ExternalLink href="https://mui.com/material-ui/api/button/">
								{ __(
									'Button API documentation',
									'text_domain_to_modify'
								) }
							</ExternalLink>
							.
						</Text>
					</Spacer>

					<SelectControl
						label={ __( 'Color', 'text_domain_to_modify' ) }
						help={ __(
							'The color of the component. It supports both default and custom theme colors.',
							'text_domain_to_modify'
						) }
						value={ color }
						onChange={ ( value ) =>
							setAttributes( { color: value } )
						}
						options={ block.attributes.color.enum.map(
							( value ) => ( { label: value, value } )
						) }
					/>
					<ToggleControl
						label={ __( 'Disabled', 'text_domain_to_modify' ) }
						help={ __(
							'If true, the component is disabled.',
							'text_domain_to_modify'
						) }
						checked={ disabled }
						onChange={ () =>
							setAttributes( { disabled: ! disabled } )
						}
					/>
					<ToggleControl
						label={ __(
							'Disable Elevation',
							'text_domain_to_modify'
						) }
						help={ __(
							'If true, no elevation is used.',
							'text_domain_to_modify'
						) }
						checked={ disableElevation }
						onChange={ () =>
							setAttributes( {
								disableElevation: ! disableElevation,
							} )
						}
					/>
					<ToggleControl
						label={ __(
							'Disable Focus Ripple',
							'text_domain_to_modify'
						) }
						help={ __(
							'If true, the keyboard focus ripple is disabled.',
							'text_domain_to_modify'
						) }
						checked={ disableFocusRipple }
						onChange={ () =>
							setAttributes( {
								disableFocusRipple: ! disableFocusRipple,
							} )
						}
					/>
					<ToggleControl
						label={ __(
							'Disable Ripple',
							'text_domain_to_modify'
						) }
						help={ __(
							'If true, the ripple effect is disabled. Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.',
							'text_domain_to_modify'
						) }
						checked={ disableRipple }
						onChange={ () =>
							setAttributes( { disableRipple: ! disableRipple } )
						}
					/>
					<ToggleControl
						label={ __( 'Full Width', 'text_domain_to_modify' ) }
						help={ __(
							'If true, the button will take up the full width of its container.',
							'text_domain_to_modify'
						) }
						checked={ fullWidth }
						onChange={ () =>
							setAttributes( { fullWidth: ! fullWidth } )
						}
					/>
					<TextControl
						label={ __( 'Href', 'text_domain_to_modify' ) }
						help={ __(
							'The URL to link to when the button is clicked. If defined, an a element will be used as the root node.',
							'text_domain_to_modify'
						) }
						onChange={ ( value ) =>
							setAttributes( { href: value } )
						}
						value={ href }
					/>
					<SelectControl
						label={ __( 'Size', 'text_domain_to_modify' ) }
						help={ __(
							'The size of the component. small is equivalent to the dense button styling.',
							'text_domain_to_modify'
						) }
						value={ size }
						onChange={ ( value ) =>
							setAttributes( { size: value } )
						}
						options={ block.attributes.size.enum.map(
							( value ) => ( { label: value, value } )
						) }
					/>
					<SelectControl
						label={ __( 'Variant', 'text_domain_to_modify' ) }
						help={ __(
							'The variant to use.',
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
			</Button>
		</EditProvider>
	);
}
