export class Show 
{
    async getShowByName (showName)
    {
        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.apikey}&s=${showName}`);
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse;
        }
        catch (error) {
            return "No matches.  Please check spelling and try again";
        }
    }
}