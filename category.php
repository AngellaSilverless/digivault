<?php
/**
 * The template for displaying all categories
 *
 * @package digivault
 */
get_header();?>

<!-- ******************* Hero Content ******************* -->

<?php $heroImage = get_field('hero_background_image');?>

<div class="hero h50" style="background-image: url('http://digivault.local/wp-content/uploads/2019/07/christopher-burns-Kj2SaNHG-hg-unsplash_v2.jpg');">

	<div class="container cols-3-9">
		
		<div class="col hero__content">
		
			<h1 class="heading heading__xl heading__light slow-fade"><?php echo get_the_category()[0]->name; ?></h1>
		
		</div>
	
	</div>

</div>

<!-- ******************* Hero Content END ******************* -->

<!-- Slider -->

<div class="container pt7 pb5 cols-3-9-11" id="filter-insights">
	
	<div class="col">
	
		<div class="title heading heading__secondary-color mb1">Other Themes</div>
		
		<?php $categories = get_categories(); foreach($categories as $category): if($category->term_id != get_the_category()[0]->term_id): ?>
		
		<a class="category category__inline mb1" href="<?php echo get_category_link($category->term_id); ?>"><span><?php echo $category->name; ?></span></a>
		
		<?php endif; endforeach; ?>
	
	</div>
	
	<div class="col wrapper-search-form">
		
		<?php get_template_part("template-parts/search", "form"); ?>
		
	</div>
	
</div>

<?php
	
$cat = get_the_category()[0]->term_id;
	
$insights = get_posts(array(
	"numberposts" => -1,
	"category"    => $cat
));

?>

<?php set_query_var("insights", $insights); get_template_part("template-parts/slider", "insights"); ?>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>
	
<?php get_footer(); ?>
