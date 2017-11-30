export class URLS{
    //prod
    public static cloud_provider = "https://my-cloud-project.herokuapp.com";
    //dev
    //public static cloud_provider = "";
    
    public static RANDOM_SENTENCE_URL = URLS.cloud_provider + "/api/random/sentence/";
    public static GET_NLTK_SCORE_URL = URLS.cloud_provider +"/api/opensource/score/";
    public static GET_AZURE_SCORE_URL = URLS.cloud_provider +"/api/azure/score/";
    public static GET_WATSON_SCORE_URL = URLS.cloud_provider + "/api/watson/score/";
    public static GET_GOOGLE_SCORE_URL = URLS.cloud_provider + "/api/google/score/";
}