from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd
import pickle as pkl

app = Flask(__name__)

model = joblib.load('static/data/Resources/model.joblib')
# loads scaler in, check filename
scaler = joblib.load('static/data/Resources/scaler.joblib')

# Home Page


@ app.route('/')
def home():
    return render_template('home.html')


# Predictor
@ app.route('/predictor')
def predictor():
    return render_template('predictor.html')


@ app.route('/predict', methods=['POST'])
def predict():

    dataInput = (request.json)
    data = {}
    try:

        for x in range(52):
            if int(dataInput['week']) == x+1:
                data[f"week_of_year_{x+1}"] = [1]
            else:
                data[f"week_of_year_{x+1}"] = [0]
        for x in range(10):
            if int(dataInput['store']) == x and x+1 != 9:
                data[f"Store_{x+1}"] = [1]
            elif x+1 != 9:
                data[f"Store_{x+1}"] = [0]
            else:
                continue
        for x in range(3):
            if int(dataInput['product']) == x+1:
                data[f"Product_{x+1}"] = [1]
            else:
                data[f"Product_{x+1}"] = [0]
        if float(dataInput["price"]) < float(dataInput["basePrice"]):
            data['promotion'] = [1]
        else:
            data['promotion'] = [0]
        data["Base Price"] = [float(dataInput["basePrice"])]
        data["Price"] = [float(dataInput["price"])]
        data["Is_Holiday"] = [float(dataInput["holiday"])]


    except:
        return jsonify({'quantity': -1})

    input_df = pd.DataFrame(data)
    output = model.predict(input_df)

    return jsonify({"quantity": output[0]})


@ app.route('/projections')
def projections():
    return render_template('projections.html')


@ app.route('/predict_projections', methods=['POST'])
def predict_projections():

    dataInput = (request.json)
    data = {}
    try:

        for x in range(52):
            if int(dataInput['week']) == x+1:
                data[f"week_of_year_{x+1}"] = [1]
            else:
                data[f"week_of_year_{x+1}"] = [0]
        for x in range(10):
            if int(dataInput['store']) == x and x+1 != 9:
                data[f"Store_{x+1}"] = [1]
            elif x+1 != 9:
                data[f"Store_{x+1}"] = [0]
            else:
                continue
        for x in range(3):
            if int(dataInput['product']) == x+1:
                data[f"Product_{x+1}"] = [1]
            else:
                data[f"Product_{x+1}"] = [0]
        if int(dataInput["price"]) < int(dataInput["basePrice"]):
            data['promotion'] = [1]
        else:
            data['promotion'] = [0]
        data["Base Price"] = [int(dataInput["basePrice"])]
        data["Price"] = [int(dataInput["price"])]
        data["Is_Holiday"] = [int(dataInput["holiday"])]


    except:
        return jsonify({'quantity': -1})

    input_df = pd.DataFrame(data)
    output = model.predict(input_df)

    return jsonify({"quantity": output[0]})


# Data Page
@app.route('/data')
def data():
    return render_template('data.html')


# Model Page
@app.route('/eda')
def eda():
    return render_template('eda.html')

# Model Page
@app.route('/model')
def hypertuning():
    return render_template('model.html')

# About Page


@app.route('/about')
def about():
    return render_template('about.html')

# Error Handler Page


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':

    # Run this when running on LOCAL server...
    app.run(debug=True)

    # ...OR run this when PRODUCTION server.
    # app.run(debug=False)
