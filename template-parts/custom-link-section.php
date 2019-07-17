<?php $section = $fields["link_section"]; ?>

<div class="container custom-text-section pb8 cols-3-11">
	
	<div class="col">
		
		<?php if($section["link_heading"]): ?>

		<h2 class="heading heading__md heading__tertiary-color mt0"><?php echo $section["link_heading"]; ?></h2>
		
		<?php endif; ?>
		
		<?php $link = $section["link_type"] == "page" ? get_permalink($section["link_page"]) : $section["link_url"]; ?>
		
		<div><a href="<?php echo $link ?>" class="button mt2"><span><?php echo $section["link_button_label"] ?></span></a></div>
	
	</div>

</div>