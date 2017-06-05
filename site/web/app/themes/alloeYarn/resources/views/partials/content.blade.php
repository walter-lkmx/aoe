<article @php(post_class())>
    <div class="post-content">
    	<header>
            <h2 class="entry-title"><a href="{{ get_permalink() }}">{{ get_the_title() }}</a></h2>
        </header>
        <!-- /header -->
        {{-- Featured image just for mobile --}}
        <div class="feature-image">
        <?php if ( has_post_thumbnail()) : ?>
        <?php the_post_thumbnail(); ?>
        <?php endif; ?>
        </div>
        	<div class="entry-excerpt">
        	@include('partials/entry-meta')
            <div class="entry-summary">
                @php(the_excerpt())
                {{-- <svg width="50px" height="7px" viewBox="-2 78 65 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M0.5,81.5 L60.6664352,81.5" id="Line" stroke="#6277DA" stroke-width="3" stroke-linecap="square" fill="none"></path>
                </svg> --}}
            </div>
        	</div>
            
    </div>
    {{-- Featured image just for mobile --}}
    <div class="feature-image">
        <?php if ( has_post_thumbnail()) : ?>
        <?php the_post_thumbnail(); ?>
        <?php endif; ?>
    </div>
</article>
