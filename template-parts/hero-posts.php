<?php $heroImage = get_field('hero_background_image'); if($heroImage): ?>

<div class="hero-posts container fullwidth cols-3-13">
	
	<div class="col" style="background-image: url(<?php echo $heroImage['url']; ?>);"></div>	

</div><!--hero-->

<?php endif; ?>