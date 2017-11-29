import json
from flask import Flask, request,jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from nltk.classify import NaiveBayesClassifier
from nltk.corpus import subjectivity
from nltk.sentiment import SentimentAnalyzer
from nltk.sentiment.util import *
import nltk
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
        return {'data':polarity}

api.add_resource(NLTKMeta, '/api/score')
api.add_resource(RandmMeta,'/api/random/sentence')

if __name__ == '__main__':
    app.run()
