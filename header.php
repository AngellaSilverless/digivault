<?php
/**
 * Header
 *
 * @package digivault
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
    
<head>

<meta charset="UTF-8">
<meta name="description" content=" ">
<meta name="keywords" content=" ">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Digivault</title>

<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Unna&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" type="image/x-icon" />

<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<div id="page" class="site-wrapper">
	
		<main><!--closes in footer.php-->
		
			<nav id="nav">
				
				<div class="container fullwidth cols-12">
					
					<div class="col container cols-4-8">
						
						<div class="col logo">
							<?php
							
							$image = get_field("logo", "options");
							
							if(!empty($image)): ?>
							
							<a href="<?php echo home_url(); ?>"><img id="digivault-logo" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
							
							<?php endif; ?>
						</div>
						
						<div class="col menu">
							
							<div class="menu-trigger"><img src="<?php echo get_stylesheet_directory_uri() . "/inc/img/bars.svg"; ?>"></div>
								
							<?php
							
							wp_nav_menu(array(
								'theme_location'  => 'main-menu',
								'container_class' => 'mainMenu'
							));
							
							?>
						</div>
					
					</div>
				
				</div>
		
			</nav>
		