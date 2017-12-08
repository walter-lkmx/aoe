<header class="banner">
  <div class="container">
    <a class="brand" href="{{ home_url('/') }}"><img src="@asset('images/alloe-logo.svg')" alt="{{ get_bloginfo('name', 'display') }}"></a>
    <nav class="mobile-menu">
      <a><img src="@asset('images/icons8-menu_filled.svg')" alt=""> </a>
    </nav>
    <nav class="nav-primary">
      {{-- @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif --}}
      <a href="/employer-solutions">Solutions</a>
      <a href="">Team</a>
      <a href="/blog">Our Blog</a>
      {{-- <a href="">Media</a>        --}}
      {{-- <a class="work" href="">Work with us</a> --}}
      <a class="subscribe" href="/subscribe" title="" target="_blank">Sign up now</a>
    </nav>
    <nav class="social">
    <a class="download-ios" href="https://itunes.apple.com/us/app/alloe-io/id898822298?mt=8" title="Download our APP in Apple Store" target="_blank">
        <i class="fa fa-apple" aria-hidden="true"></i>
      </a>
      <a class="download-android" href="https://play.google.com/store/apps/details?id=io.alloe" title="Download our APP in Play Store" target="_blank">
        <i class="fa fa-android" aria-hidden="true"></i>
      </a>
          <a href="" class="facebook" target="_blank">
          <i class="fa fa-facebook" aria-hidden="true"></i>
    </a>
    	<a href="https://twitter.com/alloe_io" class="twitter" target="_blank">
    	    <i class="fa fa-twitter" aria-hidden="true"></i>
		</a>
    	<a href="" class="instagram" target="_blank">
    	    <i class="fa fa-instagram" aria-hidden="true"></i>
		</a>
    	<a href="https://www.linkedin.com/company/alloe-io" class="linkedin" target="_blank">
    	    <i class="fa fa-linkedin" aria-hidden="true"></i>
		</a>
    </nav>
  </div>
</header>
