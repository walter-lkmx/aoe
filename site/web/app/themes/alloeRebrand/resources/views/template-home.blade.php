{{--
  Template Name: Home
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    {{-- @include('partials.page-header') --}}
    {{-- @include('partials.content-page') --}}
    @include('partials.home-welcome')
    <div class="overall">
      @include('partials.home-our-numbers') 
      @include('partials.home-not-just-app') 
      @include('partials.home-simple-as') 
      @include('partials.home-read-experts')  
    </div>
  @endwhile
@endsection
