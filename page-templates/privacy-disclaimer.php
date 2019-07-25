<?php
/**
 * ============== Template Name: Privacy and Disclaimer
 *
 * @package digivault
 */
get_header(); 

if (have_posts()) : while (have_posts()) : the_post(); ?>

<!-- ******************* Hero Content ******************* -->

<?php get_template_part("template-parts/hero"); ?>

<!-- ******************* Hero Content END ******************* -->

<!-- Content -->

<div class="container spacing cols-12 pt5 pb5">
	
	<div class="col"><?php the_content(); ?></div>

</div>

<!-- CTA - Newsletter -->

<?php get_template_part("template-parts/cta", "newsletter"); ?>

<!-- CTA - Get in Touch -->

<?php get_template_part("template-parts/cta", "get-in-touch"); ?>


<?php endwhile; endif;
	
get_footer(); ?>