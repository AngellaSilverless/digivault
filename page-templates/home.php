<?php
/**
 * ============== Template Name: Home Page
 *
 * @package digivault
 */
get_header();?>

<!-- ******************* Hero Content ******************* -->

<?php get_template_part("template-parts/hero"); ?>

<!-- ******************* Hero Content END ******************* -->

<!-- Main Heading -->

<?php set_query_var("fields", get_field("main_heading")); get_template_part("template-parts/custom", "main-heading"); ?>

<!-- Icon Box -->

<?php set_query_var("fields", get_field("icon_box")); get_template_part("template-parts/custom", "icon-box"); ?>

<!-- Overview Panel -->
	
<?php set_query_var("fields", get_field("overview_panel")); get_template_part("template-parts/custom", "overview-panel"); ?>

<!-- Icon Box -->

<?php set_query_var("fields", get_field("icon_box_2")); get_template_part("template-parts/custom", "icon-box"); ?>

<!-- Text Section -->

<?php set_query_var("fields", get_field("text_section")); get_template_part("template-parts/custom", "text-section"); ?>

<!-- Slider -->
<div class="pb5"><div style="background: grey; color: white; font-size: 4em; height: 6em;">SLIDER BLOCK</div></div>

<!-- Link Section -->

<?php set_query_var("fields", get_field("link_section")); get_template_part("template-parts/custom", "link-section"); ?>


<?php get_footer();?>