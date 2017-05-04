<article @php(post_class())>
  <header class="title-featImage-container">
    <div class="featured-image-container"><?php if ( has_post_thumbnail()) : ?>
          <?php the_post_thumbnail(); ?>
        <?php endif; ?>
    </div>
    <h1 class="entry-title">{{ get_the_title() }}</h1>
  </header>
  <div class="entry-content">
    @include('partials/entry-meta')
    <svg width="50px" height="7px" viewBox="-2 78 65 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M0.5,81.5 L60.6664352,81.5" id="Line" stroke="#6277DA" stroke-width="3" stroke-linecap="square" fill="none"></path>
    </svg>
    @php(the_content())
  </div>
  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>
  {{-- @php(comments_template('/resources/views/partials/comments.blade.php')) --}}
</article>
