<?php
/**
 * Template Name: All Articles Template
 */
?>


<?php while (have_posts()) : the_post(); ?>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
					<h1 class="animated fadeIn"><?php echo get_the_title( $ID ); ?></h1>
					<?php
					$args = array( 'posts_per_page' => 10, 'order'=> 'DSC', 'orderby' => 'meta_value' );
					$postslist = get_posts( $args );
					foreach ( $postslist as $post ) :
					  setup_postdata( $post ); ?> 
						<div>
							<h2><?php the_title(); ?></h2>
							<span class="date"><?php the_date(); ?></span>
							<?php the_excerpt(); ?>
							<a class="btn"href="<?php echo get_permalink($post->ID); ?>">Continue Reading</a>
						</div>
						<hr class="sm" />
					<?php
					endforeach; 
					wp_reset_postdata();
					?>
			</div>
		</div>
	</div>
<?php endwhile; ?>

