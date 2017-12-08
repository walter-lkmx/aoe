<div class="page-header">
  <h1>{!! App\title() !!}</h1>
</div>
<?php 
	if (is_author() ) {
		echo "<div class='author-box'><div class='metadata'><div class='avatar-container'>".get_wp_user_avatar(get_the_author_meta('ID'))."</div><a href='".get_author_posts_url(get_the_author_meta('ID'))."'rel='author' class='fn'><h2>".get_the_author()."</h2></a>";
		echo "<p class='author-description'>".esc_textarea(the_author_meta('description'))."</p></div></div>";
	}
?>
