$( document ).ready(function() {
    $( "h1" ).each(function() {
        $(this).attr('id', stringToSlug($( this ).text()));
        $( this ).append('<a href="#'+ stringToSlug($( this ).text()) +'"><i class="fas fa-link anchor-link" id=""></i></a>');
    });

    $( "h2" ).each(function() {
        $(this).attr('id', stringToSlug($( this ).text()));
        $( this ).append('<a href="#'+ stringToSlug($( this ).text()) +'"><i class="fas fa-link anchor-link" id=""></i></a>');
    });

    function stringToSlug(text)
    {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }
});
