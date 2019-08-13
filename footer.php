<?php
/**
 * The template for displaying the footer
 * @package digivault
 */
?>

</main>

<footer class="footer">
	
	<div class="socket">
	
		<div class="container cols-1-8-13 pt4 pb3 spacing">
			
			<div class="col logo">
				<?php
				
				$image = get_field("logo", "options");
				
				if(!empty($image)): ?>
				
				<a href="<?php echo home_url(); ?>"><img id="digivault-logo" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
				
				<?php endif; ?>
				
			</div>
			
			<?php $footer_info = get_field("footer", "options"); ?>
			
			<div class="col info">
				
				<div><?php echo $footer_info["footer_text"]; ?></div>
				
				<div class="highlight">Digivault Limited <?php echo date("Y"); ?>. All rights reserved.</div>

			</div>
			
			<div class="col menus container no-gutter cols-4">
				
				<div class="col">
					
					<h3><?php echo $footer_info["headings"]["first_heading"]; ?></h3>
					
					<?php $socials = get_field("social_media", "options"); if($socials && sizeof($socials) > 0): ?>
					
					<ul>
					
						<?php foreach($socials as $social): ?>
						
						<li><a href="<?php echo $social["url"]; ?>"><?php echo $social["label"]; ?></a></li>
							
						<?php endforeach; ?>
					
					</ul>
					
					<?php endif; ?>
					
				</div>
				
				<div class="col">
					
					<h3><?php echo $footer_info["headings"]["second_heading"]; ?></h3>
					
					<?php wp_nav_menu(array(
						'menu' => 'Useful links'
					)); ?>
					
				</div>
				
				<div class="col">
					
					<h3><?php echo $footer_info["headings"]["third_heading"]; ?></h3>
					
					<?php wp_nav_menu(array(
						'menu' => 'Need help'
					)); ?>
					
				</div>
				
			</div>
			
		</div>

<div class="container">
    <div class="legal">
        
        				<p>None of the services mentioned herein have been approved by any authorities in nor outside of United Kingdom. This website is not directed to any person in any jurisdiction where (by reason of that person’s nationality, residence or otherwise) the publication or availability of this website is prohibited</p>
    </div>
    
</div>
			
	</div>

</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
