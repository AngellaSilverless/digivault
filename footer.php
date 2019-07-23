<?php
/**
 * The template for displaying the footer
 * @package digivault
 */
?>

</main>

<footer class="footer">
	
	<div class="socket">
	
		<div class="container cols-1-8-13 pt4 pb2">
			
			<div class="col logo">
				<?php
				
				$image = get_field("logo", "options");
				
				if(!empty($image)): ?>
				
				<a href="<?php echo home_url(); ?>"><img id="digivault-logo" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
				
				<?php endif; ?>
				
			</div>
			
			<div class="col info">
				
				<div><?php echo get_field("footer_text", "options"); ?></div>
				
				<div class="highlight">Digivault Limited <?php echo date("Y"); ?>. All rights reserved.</div>
				
			</div>
			
			<div class="col menus container no-gutter cols-4">
				
				<div class="col">
					
					<h3>Follow us</h3>
					
					<?php $socials = get_field("social_media", "options"); if($socials && sizeof($socials) > 0): ?>
					
					<ul>
					
						<?php foreach($socials as $social): ?>
						
						<li><a href="<?php echo $social["url"]; ?>"><?php echo $social["label"]; ?></a></li>
							
						<?php endforeach; ?>
					
					</ul>
					
					<?php endif; ?>
					
				</div>
				
				<div class="col">
					
					<h3>Useful Links</h3>
					
					<?php wp_nav_menu(array(
						'menu' => 'Useful links'
					)); ?>
					
				</div>
				
				<div class="col">
					
					<h3>Need help?</h3>
					
					<?php wp_nav_menu(array(
						'menu' => 'Need help'
					)); ?>
					
				</div>
				
			</div>
			
		</div>
			
	</div>

</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
