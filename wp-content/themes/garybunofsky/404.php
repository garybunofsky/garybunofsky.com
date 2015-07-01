<!--
 * Template Name: 404
 *-->


	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-7">
				<h1 class="animated fadeIn">Page Not Found</h1>
				<p>The page you're looking for is not here. Perhaps it was deleted. Perhaps the URL is incorrect. Perhaps you wanted to visit the 404 page.<br /><br />
				If you'd like to search for the missing page, you can use the field below or visit the <a href="http://garybunofsky.com">homepage</a>.</p>
				<div class="row">
					<form role="search" method="get" class="" action="<?= esc_url(home_url('/')); ?>">
					    <div class="col-xs-24">
					    	<label>Search</label>
					    	<input type="search" value="<?= get_search_query(); ?>" name="s" class="form-control" placeholder="" required>
					   	</div>
					    <div class="col-xs-8">
					      <button type="submit" class="search-submit btn"><?php _e('Search', 'sage'); ?></button>
					    </div>
					</form>
				</div>
			</div>
		</div>
	</div>

