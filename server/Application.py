import json
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from nltk.classify import NaiveBayesClassifier
from nltk.corpus import subjectivity
from nltk.sentiment import SentimentAnalyzer
from nltk.sentiment.util import *
import nltk
import requests

nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer

app = Flask(__name__)
api = Api(app)
sid = SentimentIntensityAnalyzer()


class RandmMeta(Resource):
    def get(self):
        d = {}
        with open('output.csv', 'r', encoding='utf8', errors='ignore') as f:
            reader = csv.reader(f, dialect='excel')
            # reader  = f.read();
            d = {'data': [{'score': i[0], 'sentence': i[1]} for i in reader]}
        return random.choice(d['data'])


class NLTKMeta(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        sentence = json_data["sentence"]
        polarity = sid.polarity_scores(sentence)
        return {'data': polarity}


class MicrosoftMeta(Resource):
    def post(self):
        microsoft = Microsoft()
        json_data = request.get_json(force=True)
        sentence = json_data["sentence"]
        result = microsoft.getScore(sentence)
        return {'data': result}


api.add_resource(NLTKMeta, '/api/opensource/score/')
api.add_resource(MicrosoftMeta, '/api/azure/score/')
api.add_resource(RandmMeta, '/api/random/sentence/')









#vendors
class Microsoft(object):
    url = "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment"
    headers = {'Ocp-Apim-Subscription-Key': '4f3d38b315c74e578e5a70777c0c92ad',
               'Content-Type': 'application/json'}
    data = {"documents": [{"id": "1", "text": ""}]}



    def getScore(self, sentence):
        self.data['documents'][0]["text"] = sentence
        r = requests.post(self.url, headers=self.headers, data=json.dumps(self.data))
        return r.json()



if __name__ == '__main__':
    app.run()

