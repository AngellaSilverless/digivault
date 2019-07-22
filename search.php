<?php
/**
 * The template for displaying search results pages
 *
 * @package digivault
 */

get_header(); ?>

<!-- ******************* Hero Content ******************* -->

<?php $heroImage = get_field("search_background_image", "options"); ?>

<div class="hero h75" style="background-image: url(<?php echo $heroImage["url"]; ?>);">

	<div class="container cols-3-9">
		
		<div class="col hero__content">
		
			<h1 class="heading heading__xl heading__light slow-fade"><?php _e( 'You searched for', 'locale' ); ?> '<?php the_search_query(); ?>'</h1>
		
		</div>
	
	</div>

</div>

<!-- ******************* Hero Content END ******************* -->

<?php global $wp_query; ?>

<div class="container pt5 pb5 cols-3-9-11" id="filter-insights">
	
	<div class="col search-header">
	
		<div class="small-description">We found <?php echo $wp_query->found_posts; ?>  results.</div>
	
	</div>
	
	<div class="col wrapper-search-form">
		
		<?php get_template_part("template-parts/search", "form"); ?>
		
	</div>
	
</div>

<?php set_query_var("insights", $wp_query->posts); get_template_part("template-parts/slider", "insights"); ?>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>
	
<?php get_footer(); ?>