<?php
/**
 * This hook is called during each page load, after the theme is initialized. 
 * It is generally used to perform basic setup, registration, and init actions 
 * for a theme.
 * 
 * @see https://developer.wordpress.org/reference/hooks/after_setup_theme/
 */

/**
 * This function is hooked into the after_setup_theme hook, which runs
 * before the init hook.
 */
function mqs_after_setup_theme() {
	// Add support for block styles.
	add_theme_support('wp-block-styles');

	function filter_block_categories_all($block_categories, $editor_context) {
		array_push(
			$block_categories,
			array(
				'slug'  => 'material',
				'title' => __('Material', 'text_domain_to_modify'),
				'icon'  => null,
			)
		);
	
		return $block_categories;
	}
	
	add_filter('block_categories_all', 'filter_block_categories_all', 10, 2);

	/*
	 * Register all blocks
	 * 
	 * TODO: To prevent foot guns, make sure CI is added to validate block directory.
	 */
	$block_build_directory = __DIR__ . '/../node_modules/@mqs/wordpress-blocks/build/blocks';
	$block_names = array_diff(scandir($block_build_directory), array('.', '..'));

	foreach ($block_names as $key => $block_name) {
		// path to the folder where the block.json file is located
		$block_type = "$block_build_directory/$block_name";
		/**
		 * Registers the block using the metadata loaded from the `block.json` file.
		 * Behind the scenes, it registers also all assets so they can be enqueued
		 * through the block editor in the corresponding context.
		 *
		 * @see https://developer.wordpress.org/reference/functions/register_block_type/
		 */
		register_block_type($block_type);
	}

	// Enqueue editor styles.
	add_editor_style('editor-style.css');
}

add_action('after_setup_theme', 'mqs_after_setup_theme');
