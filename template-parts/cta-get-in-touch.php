<?php
	
$fields = get_field("get_in_touch", "options");

$background = $fields["get_in_touch_image"] ? $fields["get_in_touch_image"]["url"] : "";

?>

<div class="cta-get-in-touch" style="background-image: url(<?php echo $background; ?>);">

	<div class="container cols-3-12">
		
		<div class="col">
			
			<a href="<?php echo get_permalink($fields["get_in_touch_target"]); ?>">
				
				<h2 class="heading heading__primary-color heading__lg mt2 mb2"><?php echo $fields["get_in_touch_heading"]; ?></h2>
				
			</a>
		
		</div>
	
	</div>

</div>