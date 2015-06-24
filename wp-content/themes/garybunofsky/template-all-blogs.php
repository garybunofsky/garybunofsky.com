<?php
/**
 * Template Name: All Blogs
 */
?>


<?php while (have_posts()) : the_post(); ?>
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-md-offset-6">
				<h1 class="animated fadeIn"><?php echo get_the_title( $ID ); ?></h1>	
				<div class="mT2">
					<?php get_template_part('templates/content', 'page'); ?>
					<?php
					$args = array( 'posts_per_page' => 25, 'order'=> 'DSC', 'orderby' => 'meta_value' );
					$postslist = get_posts( $args );
					foreach ( $postslist as $post ) :
					  setup_postdata( $post ); ?> 
						<div>
							<h2><a href="<?php echo get_permalink($post->ID); ?>"><?php the_title(); ?></a></h2>
							<span class="date">Written on <?php the_date();?><br />
							 by Gary Bunofsky</span>
							<br />
							<div class="row">
								<div class="col-xs-8">
									<a class="btn"href="<?php echo get_permalink($post->ID); ?>">Read</a>
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

