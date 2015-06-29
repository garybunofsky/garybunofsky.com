<?php
/**
 * Template Name: Basic
 */
?>


<?php while (have_posts()) : the_post(); ?>
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-7">
				<h1 class="animated fadeIn"><?php echo get_the_title( $ID ); ?></h1>
				<div class="mT2">
					<?php get_template_part('templates/content', 'page'); ?>
				</div>
			</div>
		</div>
	</div>
<?php endwhile; ?>