@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            Фестываль LIDBEER
        @endcomponent
    @endslot

    Вы атрмалі заяўку на ўсталяванне партнёрства з:
    <br>
    <br>
    <b>Назва арганізацыі:</b> {{ $name }}<br>
    <b>Кантакты:</b> {{ $contacts }}<br>
    <br>
    <br>
    Дадатковыя сведкі шукайце ў дакументах, што дададзены да паведамлення.
    {{-- Footer --}}
    @slot('footer')
    @component('mail::footer')
    &copy;{{\Carbon\Carbon::now()->year}} Фестываль LIDBEER. Ўсе правы абаронены
@endcomponent
@endslot
@endcomponent
