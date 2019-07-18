<div class="title heading heading__secondary-color mt2 mb1">Search</div>

<form role="search" method="get" id="searchform" class="searchform" action="http://digivault.local/">
	
	<div class="wrapper-form">
		
		<input type="text" value="" name="s" id="s" class="search-value" placeholder="Search">
		
		<label>
		
			<input type="submit" id="searchsubmit"/>
			
			<?php get_template_part("template-parts/search"); ?>
			
		</label>
		
	</div>
	
</form>