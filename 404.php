<?php
/**
 * The template for displaying 404 pages
 *
 * @package digivault
 */

get_header(); ?>

<!-- ******************* Hero Content ******************* -->

<?php $heroImage = get_field("not_found_background_image", "options"); ?>

<div class="hero h75" style="background-image: url(<?php echo $heroImage["url"]; ?>);">

	<div class="container cols-3-9">
		
		<div class="col hero__content">
		
			<h1 class="heading heading__xl heading__light slow-fade">Oops! That page can't be found.</h1>
		
		</div>
	
	</div>

</div>

<!-- ******************* Hero Content END ******************* -->

<div class="container pt5 pb5 cols-3-11">
	
	<div class="col search-header">
	
		<div class="small-description">It looks like nothing was found at this location. Maybe try one of the links below or a search?</div>
	
	</div>

</div>

<div class="container pb5 cols-3-9-11" id="filter-insights">
	
	<div class="col">
	
		<div class="title heading heading__secondary-color mb1">Recent Posts</div>
		
		<?php $categories = get_categories(); foreach($categories as $category): if($category->term_id != get_the_category()[0]->term_id): ?>
		
		<a class="category category__inline mb1" href="<?php echo get_category_link($category->term_id); ?>"><span><?php echo $category->name; ?></span></a>
		
		<?php endif; endforeach; ?>
	
	</div>
	
	<div class="col wrapper-search-form">
		
		<?php get_template_part("template-parts/search", "form"); ?>
		
	</div>
	
</div>

<?php $insights = get_posts(array(
	"posts_per_page" => 5
)); ?>

<?php set_query_var("insights", $insights); get_template_part("template-parts/slider", "insights"); ?>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>

<?php get_footer(); ?>