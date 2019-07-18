<?php
/**
 * ============== Template Name: Contact
 *
 * @package digivault
 */
get_header();?>

<!-- ******************* Hero Content ******************* -->

<?php get_template_part("template-parts/hero"); ?>

<!-- ******************* Hero Content END ******************* -->

<!-- Main Heading -->

<?php set_query_var("fields", get_field("main_heading")); get_template_part("template-parts/custom", "main-heading"); ?>

<!-- Contact Form -->

<div class="container cols-3-11 pb5">
	
	<div class="col">

		<?php echo do_shortcode('[contact-form-7 id="8" title="Contact" html_id="main-contact"]'); ?>
	
	</div>

</div>

<!-- Footer Image -->

<?php get_template_part("template-parts/cta", "contact"); ?>


<?php get_footer();?>