{{--
  Template Name: Front Page
--}}

@extends('layouts.app') 

@section('content') 
  @while(have_posts()) @php(the_post())
    @include('partials.page-header')
    @include('partials.welcome')
    @include('partials.our-numbers')
    @include('partials.not-just-app')
    @include('partials.simple-as')
    @include('partials.our-advocates')
    {{-- @include('partials.content-page') --}}
  @endwhile
@endsection
