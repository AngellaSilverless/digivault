<?php
	
$panels = get_field("overview_panel")["overview_panel"];

$section = get_field("link_section")["link_section"];

?>

<div class="custom-overview-panel custom-overview-panel-link pb5">

	<?php foreach($panels as $panel): ?>
	
	<div class="container gutter-2 <?php echo $panel["panel_position"] == "right" ? "cols-3-8" : "cols-7-11"; ?>">
	
		<div class="col info pb4 pt4">
			
			<div>
			
				<h2 class="heading heading__md custom-heading"><?php echo $panel["panel_heading"]; ?></h2>
				
				<div class="subheading"><?php echo $panel["panel_subheading"]; ?></div>
				
				<div class="copy"><?php echo $panel["panel_copy"]; ?></div>
				
				<?php if($section["link_heading"]): ?>

				<h2 class="heading heading__md heading__tertiary-color pt2"><?php echo $section["link_heading"]; ?></h2>
				
				<?php endif; ?>
				
				<?php $link = $section["link_type"] == "page" ? get_permalink($section["link_page"]) : $section["link_url"]; ?>
				
				<div><a href="<?php echo $link ?>" class="button mt2"><span><?php echo $section["link_button_label"] ?></span></a></div>
			
			</div>
			
		</div>
			
		<div class="col">
		
			<div class="image" style="background-image: url(<?php echo $panel["panel_image"]["url"]; ?>);"></div>
		
		</div>
	
	</div>
	
	<?php endforeach; ?>

</div>