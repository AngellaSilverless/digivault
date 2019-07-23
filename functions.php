<?php
/**
 * Digivault functions and definitions
 *
 * @package digivault
 */

/****************************************************/
/*                       Hooks                       /
/****************************************************/

/* Enqueue scripts and styles */
add_action('wp_enqueue_scripts', 'silverless_scripts');

/* Add Menus */
add_action('init', 'silverless_custom_menu');

/* Dashboard Config */
add_action('wp_dashboard_setup', 'silverless_dashboard_widget');

/* Dashboard Style */
add_action('admin_head', 'silverless_custom_fonts');

/* Remove Default Menu Items */
add_action('admin_menu', 'silverless_remove_menus');

/* Change Posts Columns */
add_filter('manage_posts_columns', 'silverless_manage_columns');

/* Reorder Admin Menu */
add_filter('custom_menu_order', 'silverless_reorder_menu');
add_filter('menu_order', 'silverless_reorder_menu');

/* Remove Comments Link */
add_action('wp_before_admin_bar_render', 'silverless_manage_admin_bar');

/* Allow SVG */
add_filter( 'wp_check_filetype_and_ext', 'silverless_allow_svg', 10, 4 );
add_filter( 'upload_mimes', 'cc_mime_types' );
add_action( 'admin_head', 'fix_svg' );

/* ACF Options Page */
silverless_add_options_page();

/* Position Hero before Content Editor on posts */
add_action( 'edit_form_after_title', 'silverless_pre_title_metabox' );

/****************************************************/
/*                     Functions                     /
/****************************************************/

function silverless_scripts() {
	wp_enqueue_style( 'silverless-style', get_stylesheet_uri() );
	wp_enqueue_script( 'silverless-core-js', get_template_directory_uri() . '/inc/js/compiled.js', array('jquery'), true); 
}

function silverless_custom_menu() {
	register_nav_menus(array(
		'main-menu' => __( 'Main Menu' )
	));
}

function silverless_dashboard_widget() {
	global $wp_meta_boxes;
	wp_add_dashboard_widget('custom_help_widget', 'Silverless Support', 'silverless_dashboard_help');
}

function silverless_dashboard_help() {
	echo file_get_contents(__DIR__ . "/admin-settings/dashboard.html");
}

function silverless_custom_fonts() {
	echo '<style type="text/css">' . file_get_contents(__DIR__ . "/admin-settings/style-admin.css") . '</style>';
}
 
function silverless_remove_menus(){
	remove_menu_page( 'edit-comments.php' ); //Comments
}

function silverless_manage_columns($columns) {
	unset($columns["comments"]);
	return $columns;
}

function silverless_reorder_menu() {
    return array(
		'index.php',                        // Dashboard
		'separator1',                       // --Space--
		'edit.php',                         // Posts
		'edit.php?post_type=page',          // Pages
		'upload.php',                       // Media
		'separator2',                       // --Space--
		'themes.php',                       // Appearance
		'plugins.php',                      // Plugins
		'users.php',                        // Users
		'tools.php',                        // Tools
		'options-general.php',              // Settings
		'wpcf7',                            // Contact Form 7 
   );
}

function silverless_manage_admin_bar(){
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu('comments');
}

function silverless_allow_svg($data, $file, $filename, $mimes) {
 
	global $wp_version;
	if($wp_version !== '5.2.2') {
		return $data;
	}
	
	$filetype = wp_check_filetype( $filename, $mimes );
	
	return [
		'ext'             => $filetype['ext'],
		'type'            => $filetype['type'],
		'proper_filename' => $data['proper_filename']
	];
 
}
 
function cc_mime_types( $mimes ){
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
 
function fix_svg() {
	echo '<style type="text/css">
			.attachment-266x266, .thumbnail img {
				width: 100% !important;
				height: auto !important;
			}
		</style>';
}

function silverless_add_options_page() {
	if(function_exists('acf_add_options_page')) {
		acf_add_options_page(array(
			'page_title' 	=> 'Theme Settings',
			'menu_title'	=> 'Theme Settings',
			'menu_slug' 	=> 'site-general-settings',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));
		acf_add_options_page(array(
			'page_title' 	=> 'Call To Action',
			'menu_title'	=> 'Call To Action',
			'menu_slug' 	=> 'call-to-action',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));
	}
}

function silverless_pre_title_metabox() {
	global $post, $wp_meta_boxes;
	
	$screen     = get_current_screen();
	$privacy    = get_page_by_path('privacy-policy');
	$disclaimer = get_page_by_path('disclaimer');
		
	if(($screen->post_type == "post" && $screen->parent_base == "edit")) {
		do_meta_boxes( get_current_screen(), 'normal', $post );
		unset( $wp_meta_boxes['post']['normal'] );
	}
	
	if(($privacy && $post->ID == $privacy->ID) || ($disclaimer && $post->ID == $disclaimer->ID)) {
		do_meta_boxes( get_current_screen(), 'normal', $post );
		unset( $wp_meta_boxes['page']['normal'] );
	}
}