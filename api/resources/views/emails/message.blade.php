@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            Фестываль LIDBEER
        @endcomponent
    @endslot

    Вы атрмалі гэтае паведамленне з формы зваротнай сувязі ад карыстальніка:
    <br>
    <br>
    <b>Імя:</b> {{ $name }}<br>
    <b>Email:</b> {{ $email }}<br>
    <b>Тэлефон:</b> +375{{ $phone }}<br>
    <b>Паведамленне:</b> {{ $feedback }}<br>

    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
        &copy;{{\Carbon\Carbon::now()->year}} Фестываль LIDBEER. Ўсе правы абаронены
        @endcomponent
    @endslot
@endcomponent
