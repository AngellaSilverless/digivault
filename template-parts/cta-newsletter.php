<div class="cta-newsletter">

	<div class="container pt7 pb7 cols-3-12">
		
		<div class="col">
			
			<div class="container no-gutter cols-7-5">
			
				<div class="col">
					
					<h2 class="title heading mt0">Newsletter</h2>
					
					<div class="heading heading__md"><?php echo get_field("newsletter", "options")["newsletter_heading"]; ?></div>
				
				</div>
				
				<div class="col form">
					
					<?php echo do_shortcode('[contact-form-7 id="127" title="Newsletter" html_id="form-newsletter"]'); ?>
					
				</div>
			
			</div>
		
		</div>
	
	</div>

</div>