{{--
  Template Name: Employer solutions
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.employer-solutions-welcome')
  @endwhile
@endsection
