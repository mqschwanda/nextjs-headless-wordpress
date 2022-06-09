/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import { getSaveElement } from '@wordpress/blocks';
import { reduceDefaultBlockAttributes } from '@mqs/wordpress-blocks/utils';
import block from '@mqs/wordpress-blocks/blocks/button/block';

/**
 * Internal dependencies
 */
// import Edit from '@mqs/wordpress-blocks/blocks/button/edit';
import Save from '@mqs/wordpress-blocks/blocks/button/save';

describe( 'Button block', () => {
	const defaultAttributes = reduceDefaultBlockAttributes( block );

	describe( 'save', () => {
		beforeAll( () => {
			getSaveElement(
				{ name: block.name, save: Save },
				defaultAttributes
			);
		} );

		it( 'renders without crashing', () => {
			const screen = render( <Save attributes={ defaultAttributes } /> );
			expect( screen.container ).toBeTruthy();
		} );
	} );

	// TODO: setup edit tests
	// describe( 'edit', () => {
	// 	it( 'renders without crashing', () => {
	// 		const screen = render(
	// 			<Edit
	// 				attributes={ defaultAttributes }
	// 				setAttributes={ jest.fn() }
	// 				onReplace={ jest.fn() }
	// 				insertBlocksAfter={ jest.fn() }
	// 			/>
	// 		);
	// 		expect( screen.container ).toBeTruthy();
	// 	} );
	// } );
} );
