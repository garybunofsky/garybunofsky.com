<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="animated fadeIn"><?php the_title(); ?></h1>
          <span class="date"><?php the_date(); ?></span>
          <div class="entry-content">
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']); ?>
    </footer>
  </article>
<?php endwhile; ?>
