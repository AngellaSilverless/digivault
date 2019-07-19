<?php
/**
 * ============== Template Name: About
 *
 * @package digivault
 */
get_header();?>

<!-- ******************* Hero Content ******************* -->

<?php get_template_part("template-parts/hero"); ?>

<!-- ******************* Hero Content END ******************* -->

<!-- Main Heading -->

<?php set_query_var("fields", get_field("main_heading")); get_template_part("template-parts/custom", "main-heading"); ?>

<!-- Small Text -->

<?php get_template_part("template-parts/custom", "small-text"); ?>

<!-- Slider -->

<?php get_template_part("template-parts/slider", "content"); ?>

<!-- Overview Panel with Link-->
	
<?php get_template_part("template-parts/custom", "overview-panel-link"); ?>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>


<?php get_footer();?>