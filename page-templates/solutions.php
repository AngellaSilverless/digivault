<?php
/**
 * ============== Template Name: Solutions
 *
 * @package digivault
 */
get_header();?>

<!-- ******************* Hero Content ******************* -->

<?php $heroImage = get_field('hero_background_image');?>

<div class="hero <?php the_field('hero_height');?>" style="background-image: url(<?php echo $heroImage['url']; ?>);">

	<div class="container cols-3-8">
		
		<div class="col hero__content">
		
			<img class="slow-fade" src="<?php echo get_field('hero_heading_image')["url"]; ?>">
		
		</div>
	
	</div>

</div>

<!-- ******************* Hero Content END ******************* -->

<!-- Main Heading -->

<?php set_query_var("fields", get_field("main_heading")); get_template_part("template-parts/custom", "main-heading-logo"); ?>

<!-- Icon Box -->

<?php set_query_var("fields", get_field("icon_box")); get_template_part("template-parts/custom", "icon-box"); ?>

<!-- Link Section -->

<?php set_query_var("fields", get_field("link_section")); get_template_part("template-parts/custom", "link-section"); ?>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>


<?php get_footer();?>