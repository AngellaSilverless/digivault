<div class="custom-overview-panel pb5">

	<?php $panels = $fields["overview_panel_contact"]; foreach($panels as $panel): ?>
	
	<div class="container <?php echo $panel["panel_position"] == "right" ? "cols-3-7-13" : "cols-8-11"; ?>">
	
		<div class="col info pt5 pb5">
			
			<div>
			
				<h2 class="heading heading__md custom-heading"><?php echo $panel["panel_heading"]; ?></h2>
				
				<div class="contact-info">
					
					<?php $contact = get_field("contact_info", "options"); ?>
					
					<div class="heading heading__sm heading__tertiary-color">Address</div>
					<div class="info"><?php echo $contact["address"]; ?></div>
					
					<div class="heading heading__sm heading__tertiary-color">Phone</div>
					<a class="info link" href="tel:<?php echo $contact["phone"]; ?>"><?php echo $contact["phone"]; ?></a>
					
					<div class="heading heading__sm heading__tertiary-color">Email</div>
					<a class="info link" href="mailto:<?php echo $contact["email"]; ?>"><?php echo $contact["email"]; ?></a>
					
				</div>
			
			</div>
			
		</div>
			
		<div class="col">
		
			<div class="image fullheight" style="background-image: url(<?php echo $panel["panel_image"]["url"]; ?>);"></div>
		
		</div>
	
	</div>
	
	<?php endforeach; ?>

</div>