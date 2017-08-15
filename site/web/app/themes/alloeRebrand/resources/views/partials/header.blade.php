<header class="banner">
  <div class="container">
    <a class="brand" href="{{ home_url('/') }}"><img src="@asset('images/alloe-logo.svg')" alt="{{ get_bloginfo('name', 'display') }}"></a>
    
    <nav class="nav-primary">
      {{-- @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif --}}
      <a href="">Employer solutions</a>
      <a href="">Our experts</a>      
      <a href="">Media</a>       
      <a class="work" href="">Work with us</a>
      <a class="subscribe" href="" title="">Subscribe now</a>
      <a class="download-ios" href="" title="Download our APP in Apple Store">
        <i class="fa fa-apple" aria-hidden="true"></i>
      </a>
      <a class="download-android" href="" title="Download our APP in Play Store">
        <i class="fa fa-android" aria-hidden="true"></i>
      </a>
    </nav>
    <nav class="social">
    	<a href="" class="twitter">
    	    <i class="fa fa-twitter" aria-hidden="true"></i>
		</a>
    	<a href="" class="facebook">
    	    <i class="fa fa-facebook" aria-hidden="true"></i>
		</a>
    	<a href="" class="linkedin">
    	    <i class="fa fa-linkedin" aria-hidden="true"></i>
		</a>
    </nav>
  </div>
</header>
