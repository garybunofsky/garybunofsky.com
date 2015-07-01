	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-7">
				<h1 class="animated fadeIn"><?php get_template_part('templates/page', 'header'); ?></h1>
				<div class="mT2">
					<?php if (!have_posts()) : ?>
					    <?php _e('<p>Sorry, no results were found.</p>', 'sage'); ?>
					  <?php get_search_form(); ?>
					<?php endif; ?>

					<?php while (have_posts()) : the_post(); ?>
					  <?php get_template_part('templates/content', get_post_type() != 'post' ? get_post_type() : get_post_format()); ?>
					  <hr />
					<?php endwhile; ?>

					<?php the_posts_navigation(); ?>
				</div>
			</div>
		</div>
	</div>