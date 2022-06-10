/**
 * Build a default attributes object given a wordpress block json object.
 *
 * @param {Object} block
 *
 * @return {Object} default block attributes
 */
export function reduceDefaultBlockAttributes( block ) {
	return Object.keys( block.attributes ).reduce(
		( attributes, attribute ) => ( {
			...attributes,
			[ attribute ]: block.attributes[ attribute ].default,
		} ),
		{}
	);
}
