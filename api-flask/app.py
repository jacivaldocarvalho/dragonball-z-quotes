import random
from flask import jsonify, request, Flask
from flask_cors import CORS, cross_origin
import pandas as pd

DbzApi = Flask(__name__)
cors = CORS(DbzApi)
DbzApi.config['CORS-HEADERS'] = 'Content-Type'
quotes_csv = pd.read_csv('dbzQuotes.csv', names=['Speakers', 'Quotes'])

def get_random_quote():
    rq = random.randint(1, len(quotes_csv))
    speaking = quotes_csv.values[rq][0]
    quote = quotes_csv.values[rq][1]
    quote_obj = {"speaker": speaking, "quote": quote}
    return quote_obj

@cross_origin()
@DbzApi.route('/', methods=['GET'])
def dashboard():
    return jsonify(get_random_quote())

if __name__ == '__main__':
    DbzApi.run(host='127.0.0.1',port=5000)