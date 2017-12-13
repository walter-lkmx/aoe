{{-- 
  Template Name: Subscribe 
--}} 
@extends('layouts.app') 
@section('content') 
@while(have_posts()) @php(the_post())
<div class="subscribe ">
    <div class="invitation">
        <h1>Sign up now and be a healthy company</h1>
    </div>                
    <ul class="plans">
        <li class="monthly">
            <h2>Less than 500 employees<br>$9.99</h2>
            <!--p>Nam libero tempore, cum soluta nobis est eligendi optio</p>
            <ul class="features">
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
            </ul-->
            {{-- <a id="addToCartMonthly" href="#" rel="/?add-to-cart=39" title="Monthly subscription to Alloe"> --}}
            <a id="addToCartMonthly" href="#" rel="/?add-to-cart=12" title="Monthly subscription to Alloe">
                <span class="legendMonthly">Subscribe monthly</span>
            </a>
        </li>
        <li class="yearly">
            <h2>501 - 1000 employees<br>$120</h2>
            <!--p>Nam libero tempore, cum soluta nobis est eligendi optio</p>
            <ul class="features">
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
            </ul-->
            {{-- <a id="addToCartYearly" href="#" rel="/?add-to-cart=44" title="Yearly subscription to Alloe"> --}}
            <a id="addToCartYearly" href="#" rel="/?add-to-cart=46" title="Yearly subscription to Alloe">
                <span class="legendYearly">Subscribe yearly</span> 
            </a>
        </li>
        <li class="customized">
            <h2>More than 1000 employees<br>Contact us</h2>
            <!--p>Nam libero tempore, cum soluta nobis est eligendi optio</p>
            <ul class="features">
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
                <li><span>✓</span> Itaque earum rerum</li>
            </ul-->
            <a id="addToCartCustomized" href="#" title="Customized subscription to Alloe">
                <span class="legendCustomized">Contact us</span>
            </a>
        </li>
    </ul>
</div>
@endwhile 
@endsection
