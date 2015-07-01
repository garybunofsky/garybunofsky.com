	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-7">
				<h1 class="animated fadeIn">Search Results</h1>
				<div class="mT2">
					<?php if (!have_posts()) : ?>
					    <?php _e('
					    		<p>It does\'t look like we can find what you\'re looking for. You might want to:</p>
					    		<ul>
					    			<li>Try a different spelling</li>
					    			<li>Use fewer words</li>
					    			<li>Return to the <a href="/">homepage</a></li>
					    			<li>Send me an <a href="mailto:gary@garybunofsky.com?subject=Can%20not%20find">email</a></li>
					    		</ul>
					    ', 'sage'); ?>
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