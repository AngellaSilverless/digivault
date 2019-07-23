<?php
	
if($insights && sizeof($insights) > 0): $count = 1; ?>

<div class="slider-insights mb5">
	
	<div class="slider-wrapper" style="<?php echo "width:" . (sizeof($insights) * 30) . "vw"; ?>" current-filter="all">
		
		<?php foreach($insights as $item): $category = get_the_category($item->ID)[0]; ?>
		
		<div class="slider-item <?php echo $category->slug; if($count == 2) echo " current"; ?>" order="<?php echo $count; ?>">
			
			<div class="wrapper-item">
		
				<a href="<?php echo get_permalink($item->ID); ?>" id="link-insight">
					
					<?php
						
					$heroImage = get_field("hero_background_image", $item->ID);
					
					if(!$heroImage) {
						$parentPage = get_page_by_path("insights");
						$heroImage = get_field("hero_background_image", $parentPage);
					}
					
					?>
					
					<div class="item" style="background-image: url(<?php echo $heroImage["sizes"]["large"]; ?>);">
						
						<div class="content">
							
							<h2 class="heading heading__md"><?php echo $item->post_title; ?></h2>
							
							<div class="wrapper-info">
								
								<div class="info">
								
									<div class="title"><?php echo $category->name; ?></div>
									
									<div class="wrapper-more">
									
										<div class="read-more">
											
											<span>Read More</span>
											
											<?php get_template_part("template-parts/newspaper"); ?>
											
										</div>
									
									</div>
								
								</div>
							
							</div>
							
						</div>
						
					</div>
					
				</a>
			
			</div>
		
		</div>
		
		<?php $count++; endforeach; ?>
	
	</div>
	
	<?php if($count > 4): ?>
	
	<div class="control-wrap">
		
		<div class="prev">‹</div>
		
		<div class="next">›</div>
	
	</div>
	
	<?php endif; ?>
	
</div>

<?php endif; ?>