import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Show } from './show.js';

let shows = [];

$(document).ready(function()
{
    $("#toggleResults").hide();
    $(".showCard").hide();
    $("#searchButton").click(function()
    {
        $(".showInfo").text("");
        $(".showCard").hide();
        $(".showCard").show();
        $("#toggleResults").show();
        let showName = $("#showSearch").val();
        console.log(showName);

        (async () => { 
            let newShowSearch = new Show();
            const response = await newShowSearch.getShowByName(showName);
            getElements(response);
        })();

        const getElements = function(response) {
            console.log(response.Response);
            if (showName=='') 
            {
                $(".showInfo").text("Please enter show/movie title.");
            }
            else if (response.Response==='False') 
            {
                $(".showInfo").text("Too many results.  Please enter more information.");
            }
            else
            {
                for(let i =0; i<response.Search.length;i++)
                {
                    $(".showInfo").append(`
                        <ul>
                            <img src="${response.Search[i].Poster} width="150" height="150">
                            ${response.Search[i].Title} 
                            <button onClick = "addShow" type="button" id="addShowButton" class="btn btn-warning">
                                Add to list
                            </button>
                        </ul>
                        <hr>`
                    );
                }
            }
        };
    });

    function addShow(newShow) {
        
    }

    $("#toggleResults").click(function()
    {
        $(".showInfo").toggle();
    });

});