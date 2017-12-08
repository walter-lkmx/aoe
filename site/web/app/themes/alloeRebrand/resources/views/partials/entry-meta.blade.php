<div class="metadata">
	<div class="avatar-container">
		<?php echo get_wp_user_avatar(get_the_author_meta('ID')); ?> 
	</div>
   	<p class="byline author vcard">
        {{ __('By', 'sage') }} <a href="{{ get_author_posts_url(get_the_author_meta('ID')) }}" rel="author" class="fn">
    {{ get_the_author() }} 
  		</a>
    </p>{{-- {{ get_author_posts_url(get_the_author_meta('ID')) }}--}}
    {{-- with no date --}}
   {{-- <time class="updated" datetime="{{ get_post_time('c', true) }}"></time>  --}}
   {{-- widt date --}}
   <time class="updated" datetime="{{ get_post_time('c', true) }}"> / {{ get_the_date() }}</time>
</div>
