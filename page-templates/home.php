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

<?php set_query_var("fields", get_field("main_heading")); set_query_var("home", true); get_template_part("template-parts/custom", "main-heading"); ?>

<!-- Icon Box -->

<?php set_query_var("fields", get_field("icon_box")); get_template_part("template-parts/custom", "icon-box"); ?>

<!-- Overview Panel -->
	
<?php set_query_var("fields", get_field("overview_panel")); get_template_part("template-parts/custom", "overview-panel"); ?>

<!-- Icon Box -->

<?php set_query_var("fields", get_field("icon_box_2")); get_template_part("template-parts/custom", "icon-box"); ?>

<!-- Text Section -->

<?php set_query_var("fields", get_field("text_section")); get_template_part("template-parts/custom", "text-section"); ?>

<!-- Slider -->

<?php $insights = get_posts(); ?>

<?php set_query_var("insights", $insights); get_template_part("template-parts/slider", "insights"); ?>

<!-- Link Section -->

<?php set_query_var("fields", get_field("link_section")); get_template_part("template-parts/custom", "link-section"); ?>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>


<?php get_footer();?>