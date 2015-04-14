<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="animated fadeIn"><?php the_title(); ?></h1>
          <span class="date center"><?php the_date(); ?></span>
          <div class="entry-content">
            <?php the_content(); ?>
            <div class="row mT4">
              <div class="col-md-12">
                <h3>Share Post</h3>
              </div>
              <div class="col-xs-4">
                <a href="http://twitter.com/share?text=<?php the_title(); ?> via @GaryBunofsky" class="btn">Tweet</a>
              </div>
              <div class="col-xs-4">
                <a href="http://www.linkedin.com/shareArticle?mini=true&url=garybunofsky.com&title=<?php the_title(); ?>" class="btn">Share</a>
              </div>
              <div class="col-xs-4">
                <a href="mailto:?to=&body=<?php echo get_permalink(); ?>%0D%0A%20by%20Gary%20Bunofsky%20%0D%0A&subject=<?php the_title(); ?>" class="btn">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']); ?>
    </footer>
  </article>
<?php endwhile; ?>
