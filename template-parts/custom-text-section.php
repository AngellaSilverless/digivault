<?php $fields = $fields["text_section"]; ?>

<div class="container custom-text-section pb5 cols-3-11">
	
	<div class="col">
		
		<div class="container no-gutter cols-6 pb2">
		
			<div class="col">
				
				<?php if($fields["section_heading"]): ?>
		
				<h2 class="heading heading__md heading__secondary-color mt0"><?php echo $fields["section_heading"]; ?></h2>
				
				<?php endif; ?>
				
				<div class="copy"><?php echo $fields["section_copy"]; ?></div>
			
			</div>
		
		</div>
	
	</div>

</div>