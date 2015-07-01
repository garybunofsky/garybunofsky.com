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