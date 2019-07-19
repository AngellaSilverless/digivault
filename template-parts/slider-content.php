<?php
	
$slider = get_field("content_slider")["content_slider"];

if($slider): $count = 1; ?>

<div class="slider mb10">
	
	<div class="slider-wrapper" style="<?php echo "width:" . (sizeof($slider) * 40) . "vw"; ?>">
		
		<?php foreach($slider as $item): ?>
		
		<div class="slider-item <?php if($count == 2) echo "current"; ?>" order="<?php echo $count; ?>">
		
			<div class="prev">‹</div>
			
			<div class="item" style="background-image: url(<?php echo $item["slider_image"]["url"]; ?>);">
				
				<div class="content">
					<h3 class="heading heading__sm"><?php echo $item["slider_heading"]; ?></h3>
					<div class="subheading"><?php echo $item["slider_subheading"]; ?></div>
					<div class="copy" style="<?php if($count == 2) echo "display: block"; ?>"><?php echo $item["slider_copy"]; ?></div>
				</div>
				
			</div>
			
			<div class="next">›</div>
		
		</div>
		
		<?php $count++; endforeach; ?>
	
	</div>
	
</div>
	
<?php endif; ?>