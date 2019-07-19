<?php
	
$insights = get_posts();

if($insights): $count = 1; ?>

<div class="slider-insights mb10">
	
	<div class="slider-wrapper">
		
		<?php foreach($insights as $item): ?>
		
		<div class="slider-item<?php if($count == 2) echo " current"; ?>" order="<?php echo $count; ?>">
		
			<a href="<?php echo get_permalink($item->ID); ?>" id="link-insight">
				
				<div class="item" style="background-image: url(<?php echo get_field("hero_background_image", $item->ID)["sizes"]["large"]; ?>);">
					
					<div class="content">
						
						<h2 class="heading heading__md"><?php echo $item->post_title; ?></h2>
						
						<div class="info">
							
							<div class="title"><?php echo get_the_category($item->ID)[0]->name; ?></div>
							
							<div class="wrapper-more">
							
								<div class="read-more">
									
									<span>Read More</span>
									
									<?php get_template_part("template-parts/newspaper"); ?>
									
								</div>
							
							</div>
						
						</div>
						
					</div>
					
				</div>
				
			</a>
		
		</div>
		
		<?php $count++; endforeach; ?>
	
	</div>
	
	<div class="control-wrap">
		
		<div class="prev">‹</div>
		
		<div class="next">›</div>
	
	</div>
	
</div>

<?php endif;?>