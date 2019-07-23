<?php
	
$heroImage = get_field('hero_background_image');

if(!$heroImage) {
	$insights = get_page_by_path("insights");
	$heroImage = get_field("hero_background_image", $insights);
}

if($heroImage):

?>

<div class="hero-posts container fullwidth cols-3-13">
	
	<div class="col" style="background-image: url(<?php echo $heroImage['url']; ?>);"></div>	

</div><!--hero-->

<?php endif; ?>