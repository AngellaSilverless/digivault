<?php $image = get_field("footer")["background_image"]; if($image): ?>

<div class="cta-contact" style="background-image:url(<?php echo $image["url"]; ?>)"></div>

<?php endif; ?>