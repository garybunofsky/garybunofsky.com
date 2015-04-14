<?php
/**
 * Template Name: All Blogs
 */
?>


<?php while (have_posts()) : the_post(); ?>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h1 class="animated fadeIn"><?php echo get_the_title( $ID ); ?></h1>
				<div class="mT4">
					<?php
					$args = array( 'posts_per_page' => 10, 'order'=> 'DSC', 'orderby' => 'meta_value' );
					$postslist = get_posts( $args );
					foreach ( $postslist as $post ) :
					  setup_postdata( $post ); ?> 
						<div>
							<h2><?php the_title(); ?></h2>
							<span class="date"><?php the_date(); ?></span>
							<br />
							<div class="row">
								<div class="col-xs-4">
									<a class="btn"href="<?php echo get_permalink($post->ID); ?>">Read Post</a>
								</div>
							</div>
						</div>
					<?php
					endforeach; 
					wp_reset_postdata();
					?>
				</div>
			</div>
		</div>
	</div>
<?php endwhile; ?>

