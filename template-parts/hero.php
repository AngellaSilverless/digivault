<?php $heroImage = get_field('hero_background_image');?>

<div class="hero <?php the_field('hero_height');?>" style="background-image: url(<?php echo $heroImage['url']; ?>);">

	<div class="container cols-3-9">
		
		<div class="col hero__content">
			
		<?php if(is_front_page()): ?>
		
			<h1 class="heading heading__lg heading__light home-text-effect"><?php
				
				$heading = get_field('hero_heading');
				
				for($i = 0; $i < strlen($heading); $i++) {
					echo "<span>{$heading[$i]}</span>";
				}
			
			?></h1>
			
			<div class="copy slow-fade"><?php the_field('hero_copy');?></div>
			
			<?php $button = get_field('hero_button'); ?>
			
			<div class="wrapper-button mt0"><a href="<?php echo get_permalink($button["page"]); ?>" class="button button__light mt2"><span><?php echo $button["label"] ?></span></a></div>
			
			<a class="next-section" href="#main-heading">
				<?php get_template_part("template-parts/scroll"); ?>
				<span>Scroll to learn more</span>
			</a>
			
		<?php else: ?>
		
			<h1 class="heading heading__xl heading__light slow-fade"><?php the_field('hero_heading'); ?></h1>
		
		<?php endif; ?>
		
		</div>
	
	</div>

</div><!--hero-->
