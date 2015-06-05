<?php use Roots\Sage\Nav; ?>
<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-md-offset-6">
        <h2 class="site_title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Gary Bunofsky, Designer &amp; Developer</a></h2>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12 col-md-offset-6">
        <hr class="fullW"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-md-offset-6">
        <div class="nav">
          <?php wp_nav_menu( array('menu' => 'Main Menu' )); ?>
        </div>
      </div>
    </div>
  </div>
</header>
