{{--
  Template Name: Features
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.page-header')
    @include('partials.features')
    {{-- @include('partials.content-page') --}}
  @endwhile
@endsection
