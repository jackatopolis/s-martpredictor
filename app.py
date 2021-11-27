from flask import Flask, render_template, request, jsonify
# from joblib import load
# from pandas import DataFrame

app = Flask(__name__)
# model = load('static/data/model.pkl')
# scaler = load('static/data/scaler.pkl')  # loads scaler in, check filename

# Home Page


@app.route('/')
def home():
    return render_template('home.html')


# About Page
@app.route('/about')
def about():
    return render_template('about.html')


# Predictor
@app.route('/predictor')
def predictor():
    return render_template('predictor.html')


# prediction function
def ValuePredictor(to_predict_list):
    to_predict = np.array(to_predict_list).reshape(1, 7)
    loaded_model = pickle.load(open("static/data/Resources/model.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]

# Predict


@app.route('/predict', methods=['POST'])
def result():
    if request.method == 'POST':
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(int, to_predict_list))
        result = ValuePredictor(to_predict_list)
        console.log(result)
        if int(result):
            prediction = result
        else:
            prediction = 'Data Incomplete'
        return render_template("predictor.html", prediction=prediction)

# def predict():
# dataInput = request.json
# data = {}
# try:
#     for x in range(52):
#         if int(dataInput['week']) == x+1:
#             data[globals()[f"week_of_year_{x+1}"]] = [1]
#         else:
#             data[globals()[f"week_of_year_{x+1}"]] = [0]
#     for x in range(10):
#         if int(dataInput['store']) == x and x+1 != 9:
#             data[globals()[f"Store_{x+1}"]] = [1]
#         elif x+1 != 9:
#             data[globals()[f"Store_{x+1}"]] = [0]
#         else:
#             continue
#     for x in range(3):
#         if int(dataInput['product']) == x+1:
#             data[globals()[f"Product_{x+1}"]] = [1]
#         else:
#             data[globals()[f"Product_{x+1}"]] = [0]
#     if int(dataInput["price"]) < int(dataInput["basePrice"]):
#         data['promotion'] = [1]
#     else:
#         data['promotion'] = [0]
#     data["Base Price"] = [int(dataInput["basePrice"])]
#     data["Price"] = [int(dataInput["price"])]
#     data["Is_Holiday"] = [int(dataInput["holiday"])]
#     input = DataFrame(data)
# except:
#     return jsonify({'quantity': 0})
# output = model.predict(input)
# return jsonify({"quantity": output[0]})


# Data Page
@app.route('/data')
def data():
    return render_template('data.html')


# Model Page
@app.route('/model')
def model():
    return render_template('model.html')


# Error Handler Page
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':

    # Run this when running on LOCAL server...
    app.run(debug=True)

    # ...OR run this when PRODUCTION server.
    # app.run(debug=False)
