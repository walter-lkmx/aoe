<article @php(post_class())>
    <div class="feature-image">
        <?php if ( has_post_thumbnail()) : ?>
        <?php the_post_thumbnail(); ?>
        <?php endif; ?>
    </div>
    <header>
        <h2 class="entry-title"><a href="{{ get_permalink() }}">{{ get_the_title() }}</a></h2>
    @include('partials/entry-meta')
    </header>
    <div class="entry-summary">
        @php(the_excerpt())
    </div>
</article>
