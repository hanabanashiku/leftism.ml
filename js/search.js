let sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-list'),
    json: '/search.json'
});
let q = new URL(window.location.href).searchParams.get('q');

$(function() {
    if(q != null) {
        $("#nav-inline-search").val(q);
        $("#search-input").val(q);
        sjs.search(q);
        $("#results").show()
    }

    $('#search-form').on('submit', function(e) {
        return false;
    });
    $('#nav-search-form').on('submit', function(e) {
        onSubmit($('#nav-inline-search').val())
        return false;
    });
    $('#search-input').on('input', function() {
       if($('#search-input').val().length === 0) {
           $("#results").hide()
       }
       else {
           $("#results").show()
       }
    });
});

function onSubmit(query) {
    $("#nav-inline-search").val(query);
    $("#search-input").val(query);
    sjs.search(query);
    $("#results").show();
}