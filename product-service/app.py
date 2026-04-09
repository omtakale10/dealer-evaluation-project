from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = ["Laptop", "Mobile", "Tablet"]

@app.route('/products')
def get_products():
    return jsonify(products)

app.run(host='0.0.0.0', port=5000)