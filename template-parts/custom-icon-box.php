<div class="container pb5 cols-3-11">
	
	<div class="col">
		
		<?php $fields = $fields["icon_box"]; ?>
		
		<?php if($fields["box_title"]): if(is_front_page()): ?>
		
		<h2 class="heading heading__md heading__secondary-color"><?php echo $fields["box_title"]; ?></h2>
		
		<?php else: ?>
			
		<h2 class="heading-icon-box mb3"><?php echo $fields["box_title"]; ?></h2>
		
		<?php endif; endif; ?>
		
		<div class="container custom-box-icon cols-4 pb2">
			
		<?php foreach($fields["box_items"] as $icon): ?>
		
			<div class="col">
				
				<?php if($icon["box_icon"]): ?>
				
					<div class="icon"><?php echo file_get_contents($icon["box_icon"]); ?></div>
					
				<?php endif; if($icon["box_heading"]): ?>
					
					<h3 class="heading heading__sm heading__primary-color"><?php echo $icon["box_heading"]; ?></h3>
				
				<?php endif; if($icon["box_copy"]): ?>
				
					<div class="copy"><?php echo $icon["box_copy"]; ?></div>
				
				<?php endif; if($icon["box_button_target"]): ?>
				
					<div><a href="<?php echo get_permalink($icon["box_button_target"]); ?>" class="button mt2"><span>Read More</span></a></div>
				
				<?php endif; ?>
			
			</div>
		
		<?php endforeach; ?>
			
		</div>
	
	</div>

</div>