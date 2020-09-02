export class Show 
{
    async getShowByName (showName)
    {
        try {
            let response = await fetch (`placeholder`);
            let jsonifiedResponce = await response.json();
            return jsonifiedResponse;
        }
        catch (error) {
            return "No matches.  Please check spelling and try again";
        }
    }
}