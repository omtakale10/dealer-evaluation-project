from flask import Flask, jsonify

app = Flask(__name__)

products = ["Laptop", "Mobile", "Tablet"]

@app.route('/products')
def get_products():
    return jsonify(products)

app.run(host='0.0.0.0', port=5000)