<?php
/**
 * Template Name: Contact Template
 */
?>


<?php while (have_posts()) : the_post(); ?>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h1 class="animated fadeIn"><?php echo get_the_title( $ID ); ?></h1>
				<div class="mT4">
					<?php get_template_part('templates/content', 'page'); ?>
					<?php echo do_shortcode( '[contact-form-7 id="53" title="Inquire"]' ); ?>
				</div>
			</div>
		</div>
	</div>
<?php endwhile; ?>