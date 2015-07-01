<?php use Roots\Sage\Nav; ?>
<header class="banner navbar navbar-default navbar-static-top" role="banner">
<div class="container">
    <!--div class="row">
      <div class="col-md-10 col-md-offset-7">
        <hr class="fullW"/>
      </div>
    </div-->
    <div class="row">
      <div class="col-md-10 col-md-offset-7">
        <h2 class="site_title"><a href="<?php echo esc_url( home_url( '/' ) );?>">Gary Bunofsky, Designer &amp; Developer</a></h1>
        <div class="nav">
          <?php wp_nav_menu( array('menu' => 'Main Menu' )); ?>
        </div>
      </div>
    </div>
  </div>
  <!--div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-7">
        <h1 class="site_title"><a href="< ?php echo esc_url( home_url( '/' ) ); ?>">Gary Bunofsky, Designer &amp; Developer</a></h2>
      </div>
    </div>
  </div-->
</header>
