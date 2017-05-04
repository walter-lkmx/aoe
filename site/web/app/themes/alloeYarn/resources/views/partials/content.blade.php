<article @php(post_class())>
    <div class="post-content">
    	<header>
            <h2 class="entry-title"><a href="{{ get_permalink() }}">{{ get_the_title() }}</a></h2>
        </header>
        <!-- /header -->
        	<div class="entry-excerpt">
        	@include('partials/entry-meta')
            <div class="entry-summary">
                @php(the_excerpt())
            </div>
        	</div>
    </div>
    <div class="feature-image">
        <?php if ( has_post_thumbnail()) : ?>
        <?php the_post_thumbnail(); ?>
        <?php endif; ?>
    </div>
</article>
