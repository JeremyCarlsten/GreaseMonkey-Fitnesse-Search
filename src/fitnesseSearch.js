// ==UserScript==
// @name           Fitnesse Search
// @description    Search for a Fitnesse Page
// @author         Jeremy Carlsten
// @require        http://code.jquery.com/jquery-latest.js
// @include        http://*FrontPage*
// @version        1.2
// ==/UserScript==

$(document).ready(function(){
    var locationUrl = $(location).attr('href').toLowerCase();
    
    var form = $('<form style="float:right"></form>');
	form.append('<input type="text" name="search" placeholder="Search for a title..." />');
    
    if(locationUrl.search(/search/i) > 0){
        form.append('<input type="submit" name="submit" id="search" value="Search Again!"/>'); 
    }else{
		form.append('<input type="submit" name="submit" id="search" value="Search"/>'); 
    }
    
    $('.header').prepend(form);
    
    $('form #search').on('click', function(e){
    	e.preventDefault();
        var searchString = $('form [name="search"]').val();
        var url = "http://localhost:9034/FrontPage?search&searchType=title&searchString=" + searchString;
        
        console.log(url);
        $(location).attr('href', url);
    });

	
});