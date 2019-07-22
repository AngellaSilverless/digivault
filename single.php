<?php
/**
 * The template for displaying all single posts
 *
 * @package digivault
 */
get_header(); 

if (have_posts()) : while (have_posts()) : the_post(); ?>

<!-- ******************* Hero Content ******************* -->

<?php get_template_part("template-parts/hero", "posts"); ?>

<!-- ******************* Hero Content END ******************* -->

<div class="container cols-3-7 pb5 pt3">
	
	<div class="col sidebar">
		
		<div class="title heading heading__secondary-color mb1">Themes</div>
		
		<?php $categories = get_categories(); foreach($categories as $category): ?>
		
		<a class="category mb1" href="<?php echo get_category_link($category->term_id); ?>"><span><?php echo $category->name; ?></span></a>
		
		<?php endforeach; ?>
		
		<?php get_template_part("template-parts/search", "form"); ?>
		
	</div>
	
	<div class="col">
		
		<h2 class="heading heading__md mb0"><?php the_title(); ?></h2>
		
		<div class="post-date mt2 mb3"><?php the_date("d/m/y"); ?></div>
		
		<div class="post-content"><?php the_content(); ?></div>
		
	</div>
	
</div>


<!-- Slider -->

<?php
	
$cat = get_the_category($post->ID)[0]->term_id;
	
$insights = get_posts(array(
	"numberposts"  => 5,
	"category"     => $cat,
	"post__not_in" => array($post->ID)
));

if(sizeof($insights) > 0): ?>

<div class="container pb5 cols-3-11">
	
	<div class="col">
	
		<div class="heading heading__md heading__secondary-color mb1">Related Insights</div>
	
	</div>

</div><?php endif; ?>

<?php set_query_var("insights", $insights); get_template_part("template-parts/slider", "insights"); ?>



<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>


<?php endwhile; endif;
	
get_footer(); ?>
