import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Show } from './show.js';

$(document).ready(function()
{
    $("$searchButton").click(function()
    {
        $("showStuff").text("");
        $("showCard").hide();
        $("showCard").show();
        let showName = $("#showSearch").val();
        let newShow = "";
        console.log(showName + " " + newShow);
    });
});