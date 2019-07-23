<?php $fields = get_field("accreditations", "options"); ?>

<div class="cta-accreditations pt7 pb7">

	<div class="container cols-3-12">
		
		<div class="col">
			
			<div class="heading heading__md heading__primary-color">Accreditations</div>
		
			<div class="container no-gutter cols-6 pt3 pb3">
				
				<div class="col">
				
					<div class="copy"><?php echo $fields["copy"]; ?></div>
					
				</div>
			
			</div>
			
			<div class="gallery-small">
				
				<?php foreach($fields["gallery"] as $image): ?>
				
				<img src="<?php echo $image["url"]; ?>" alt="<?php echo $image["alt"]; ?>">
				
				<?php endforeach; ?>
			
			</div>
		
		</div>
	
	</div>

</div>