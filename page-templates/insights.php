<?php
/**
 * ============== Template Name: Insights
 *
 * @package digivault
 */
get_header();?>

<!-- ******************* Hero Content ******************* -->

<?php get_template_part("template-parts/hero"); ?>

<!-- ******************* Hero Content END ******************* -->

<!-- Main Heading -->

<?php set_query_var("fields", get_field("main_heading")); get_template_part("template-parts/custom", "main-heading"); ?>

<!-- Slider -->

<div class="container pt2 pb5 cols-3-9-11" id="filter-insights">
	
	<div class="col">
	
		<div class="title heading heading__secondary-color mb1">Themes</div>
		
		<?php $categories = get_categories(); foreach($categories as $category): ?>
		
		<a class="category category__inline category__filter mb1" data-name="<?php echo $category->slug; ?>"><span><?php echo $category->name; ?></span></a>
		
		<?php endforeach; ?>
		
		<div class="reset-category"><i class="fas fa-undo"></i></div>
	
	</div>
	
	<div class="col wrapper-search-form">
		
		<?php get_template_part("template-parts/search", "form"); ?>
		
	</div>
	
</div>

<?php $insights = get_posts(array(
	"numberposts" => -1
)); ?>

<div class="wrapper pb5">
	
<?php set_query_var("insights", $insights); get_template_part("template-parts/slider", "insights"); ?>

</div>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>


<?php get_footer();?>