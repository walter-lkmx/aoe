<article @php(post_class())>
  <header>
    @include('partials/entry-meta')
    <h1 class="entry-title">{{ get_the_title() }}</h1>
  </header>
  <div class="feature-image">
        <?php if ( has_post_thumbnail()) : ?>
        <?php the_post_thumbnail(); ?>
        <?php endif; ?>
  </div>
  <div class="entry-content">
    @php(the_content())
    <div class="author-box">
      <div class="metadata">
        <div class="avatar-container">
          <?php echo get_wp_user_avatar(get_the_author_meta('ID')); ?> 
        </div>
        <a href="{{ get_author_posts_url(get_the_author_meta('ID')) }}" rel="author" class="fn"><h2>{{ get_the_author() }}</h2></a>
        <p class="author-description"><?php esc_textarea(the_author_meta('description'));?></p> 
      </div>
    </div>
  </div>
  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>
  @php(comments_template('/partials/comments.blade.php'))
</article>
