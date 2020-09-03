import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Show } from './show.js';

$(document).ready(function()
{
    $("#searchButton").click(function()
    {
        $(".showInfo").text("");
        $(".showCard").hide();
        $(".showCard").show();
        let showName = $("#showSearch").val();

        (async () => { 
            let newShowSearch = new Show();
            const response = await newShowSearch.getShowByName(showName);
            getElements(response);
        })();

        const getElements = function(response) {
            console.log(response.Search);
            if (showName=='') 
            {
                $(".showInfo").text("Please enter show/movie title.");
            }
            else
            {
                for(let i =0; i<response.Search.length;i++)
                {
                    $(".showInfo").append(`<ul> <img src="${response.Search[i].Poster} width="150" height="150"> ${response.Search[i].Title} </ul> <hr>`);
                }
            }
        }
    });
});