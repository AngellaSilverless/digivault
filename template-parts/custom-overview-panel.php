<div class="custom-overview-panel pb5">

	<?php $panels = $fields["overview_panel"]; foreach($panels as $panel): ?>
	
	<div class="container no-gutter <?php echo $panel["panel_position"] == "right" ? "cols-3-6" : "cols-8-11"; ?>">
	
		<div class="col info">
			
			<div>
			
				<h2 class="heading heading__md custom-heading"><?php echo $panel["panel_heading"]; ?></h2>
				
				<div class="subheading"><?php echo $panel["panel_subheading"]; ?></div>
				
				<div class="copy"><?php echo $panel["panel_copy"]; ?></div>
			
			</div>
			
		</div>
			
		<div class="col">
		
			<div class="image" style="background-image: url(<?php echo $panel["panel_image"]["url"]; ?>);"></div>
		
		</div>
	
	</div>
	
	<?php endforeach; ?>

</div>