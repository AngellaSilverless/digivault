<?php
/**
 * ============== Template Name: Solutions
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

<!-- Link Section -->

<?php set_query_var("fields", get_field("link_section")); get_template_part("template-parts/custom", "link-section"); ?>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>


<?php get_footer();?>