<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-7">
          <h1 class="animated fadeIn"><?php the_title(); ?></h1>
          <div class="entry-content mT4">
            <?php the_content(); ?>
            <div class="row mT5">
              <div class="col-md-24">
                <h3>Share Post</h3>
              </div>
              <div class="col-xs-8">
                <a href="http://twitter.com/share?text=<?php the_title(); ?> via @GaryBunofsky" class="btn">Twitter</a>
              </div>
              <div class="col-xs-8">
                <a href="http://www.linkedin.com/shareArticle?mini=true&url=garybunofsky.com&title=<?php the_title(); ?>" class="btn">LinkedIn</a>
              </div>
              <div class="col-xs-8">
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
