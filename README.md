<h1 align="center">S-Mart Sales Predictor</h1>

<p align="center">John Clos, Uchenna Nwagbara, Sharon Colson, Jack Cohen</p>

<p align="center">https://s-martpredictor.herokuapp.com/</p>
<p align="center">December 2, 2021</p>

<p align="center">
  <img width="250" src="images/S_mart-removebg-preview.png" alt="S-mart logo">
</p>

## Background

For S-Mart and other retailers, setting the right price for a given product is critical for maximizing sales and profits. If the price is too low, profit per unit will be too low to maintain. If the price is too high, the units sold will be too low to maintain and product will be wasted sitting on the shelves. To maximize profits, the business needs to find the optimum price.

Using S-Mart's sales data, our team has trained a machine learning model that will predict the units sold and calculate the estimated revenue for a given scenario. S-mart stores can use this sales prediction tool to ensure that they are properly stocked and staffed for the coming week's sales.

Important note: This page is for learning purposes only and is not meant to be reflective of any actual business. The data is not actual data. However, if you are interested in our work please see our about page for contact information.

Webpage: https://s-martpredictor.herokuapp.com/

- - - -
## Exploratory Data Analysis
***File: eda.ipynb***

The first step is to acquire a general understanding of the trends and patterns by exploring the dataset. Plotting the data in various ways using the tools outlined led to the following observations.

### Tools
* Jupyter Notebook
* Python Pandas
* Python Matplotlib
* Seaborn

### Observations
1. #### Empirical Cummulative Distribution Function (eCDF)
    > ![image](https://user-images.githubusercontent.com/83737584/144514923-62e05937-f99d-4d4c-a19b-e4be7c1b6469.png)

    * Although in the best week, a store sold more than 2500 units, about 80% of the time, weekly units sold did not exceed 500.
    * Although the highest weekly sales exceeded 25K dollars, over 90% of the data had weekly sales less than 5K dollars.
2. #### Price Is Not Dependent On Holiday
    > ![image](https://user-images.githubusercontent.com/83737584/144515125-463d7a84-152d-4ac3-824e-15edbab3807f.png)

3. #### Units Sold IS Dependent On Holiday
    > ![image](https://user-images.githubusercontent.com/83737584/144515214-d89cc946-dc24-4d56-8eed-2f05c2610f13.png)

    * Product 2 is the cheapest product among all the three products, and it sells the most.
    * Product 3 is the most expensive product among all the three products.
    * Additionally, product price did not change during holidays (either it was on promotion or it was not, promotion is independent of Holiday status.)
4. #### Units Sold: Holiday vs Non-Holiday per Store 
    > ![image](https://user-images.githubusercontent.com/83737584/144515411-b8813d33-6e04-41c0-93b4-36a3a4e9704e.png)

5. #### Product Sold: Holiday vs Non-Holiday 
    > ![image](https://user-images.githubusercontent.com/83737584/144515527-a589af67-c33d-4838-9154-dc2e15c0bd6b.png)

    * It does not seem that holidays have a positive impact for the business. For most of the stores, weekly units sold during the holiday is the same as the normal days, while store 10 actually had a decrease during the holidays.
    * Weekly units sold for product 1 had a slight increase during the holidays, while product 2 and product 3 had a decrease during the holidays.
6. #### Product Units Sold Based on Price and Holiday
    > 
    * Every product has more than one prices, both at holidays and normal days. The assumption is that one is regular price, another is promotional price.
    * The price gap for product 3 is huge, it was slashed to almost 50% off during promotions.
    * Product 3 made the most sales during non-holidays.
8. #### Product in each store vs units sold and price
    * All of these 9 stores carry these 3 products. They all seem to have similar kind of discount promotions. However, product 3 sells the most units during promotions at store 10.
9. #### Yearly seasonality per store
    * Every store has somewhat seasonality, store 10 has the most obvious seasonal pattern.
10. #### Seasonality per product
    * Every product has somewhat seasonality, product 2 has two peak seasons per year and product 3 has one.
11. #### Seasonality per product per store in units sold
    * In general, product 2 sells more units per week than the other products in every store.
    * Once a while, product 3 would exceed product 2 at store 10.
12. #### How holiday and price effect sales by plotting the data
    * The cheaper the price, the more weekly units were sold.
    * Is holiday or not has nothing to do with the unit sold.
13. #### Units sold vs promotion per store
    * Every store sells more during the promotions, there is no exception.
14. #### Units sold per product while on or off promotion
    * Every product sells more during the promotions, in particular, product 2 and product 3.
15. #### Distribution of price and promotion distribution for units sold
    * All the stores have the similar price promotion pattern, for some reason, store 10 sells the most during the promotions.
16. #### Price change while on and off promotion and the change in sales
    * Every product has the regular price and promotional price. Product 3 has the highest discount and sells the most during the promotions.
17. #### Observation Summary
    * Store 10 has the highest average weekly sales among all 9 stores, also Store 10 has the most total weekly units sold.
    * Store 5 has the lowest average weekly sales.
    * The data is 429 weeks beginning 2/5/2010 and ending 10/26/2012. This is 143 weeks of data for 9 stores and 3 products. 
    * The data is evenly distributed. No gaps or staggered start and stop dates.
    * The most selling and crowded Store is Store 10, and the least crowded store is Store 5.
    * In terms of number of units sold, the most selling product is product 2 throughout the year.
    * Stores do not necessarily run product promotions during holidays.
    * Product 2 seems to be the cheapest product, and Product 3 is the most expensive product.
    * Most stores have some kind of seasonality and they have two peak seasons per year.
    * Product 1 sells a little more in February than the other months, Product 2 sells the most around April and July, and Product 3 sells the most around July to September.
    * Each product has its regular price and promotional price. There isn’t significant gap between regular price and promotional price on Product 1 and Product 2, however, Product 3’s promotional price can be slashed to 50% of its original price. Although every store makes this kind of price cut for product 3, store 10 is the one made the highest sales during the price cut.
    * It is not unusual to sell more during promotion than the normal days. Store 10 has made Product 3 the best selling product around July to September.
- - - -
## Model Exploration
***File: model.ipynb***

TO DO: SHARON?

X, Y, and Z models were explored. Why each was explored. Etc.

- - - -
## Model Hyper Tuning
***File: hypertuning.ipynb***

TO DO: ADD MORE

After exploring potential models, we hypertuned the parameters to increase score to validate etc. 

The following tools and methods were used to hypertune the model.

### Tools
* Scikit-learn
* GradientBoostingRegressor
* GridSearchCV

### Method
1. #### Create Gradient Boosting Regression
    * Train, Test, Split the data
    * Scale the data
    * Calculating Cross Validation Score across multiple testing sets
     * Classifications use Accuracy and F1 Score
     * Regressions use R2 Score and Mean Absolute Error (MAE)
    * Create a model using Gradient Boosting Regression
2. #### Feature Importance on the Model
    * Create a plot of the features
    * Generate a cross validation score
3. #### Hypertuning the Model
    * Set the parameters
    * Tune the model using GridSearchCV
    * Generate predictions
    * Generate r-squared and validate
4. #### Final Hypertuned Model
    * Create a model using the optimized values
    * Train, Test, Split the data
    * Scale the data
    * Calculating Cross Validation Score across multiple testing sets
     * Classifications use Accuracy and F1 Score
     * Regressions use R2 Score and Mean Absolute Error (MAE)
    * X_test_scaled['Weekly_Units_Sold'] = pred
5. #### Feature Importance on the Hypertuned Model
    * Plot the features for the optimized model
6. #### Export Model
    * Save the model and scaler for deployment

- - - -
## Model Deployment
***File: app.py***

Webpage: https://s-martpredictor.herokuapp.com/

The prediction tool was deployed on a Heroku webpage through a multi-route Flask application. The following tools and methods were used.

### Tools
* Heroku
* Flask
* Pickle Joblib
* Pandas
* SQLite
* HTML/CSS/JavaScript
* Bootstrap
* Font-Awesome
* D3
* Jinja

### Method
* Import the model and scaler
* Create the webpage's application routes
    * Home Page
    * Predictor
    * Data Page
    * EDA Page
    * Model Page
    * About Page
    * Error Handler Page
* Create POST method route
    * Fetches information from webpage inputs
    * Formats inputs into dataframe
    * Feeds dataframe into scaler and model
    * Returns output back to the webpage
* Use JavaScript D3 for event handling

- - - -
- - - -
- - - -

# TO DO: 
- Add initial paragraph for each section
  - Model Exploration: Sharon/John
  - Model Hyper Tuning



# IMPORTANT RUBRIC NOTES (DELETE WHEN DONE)

Project and Documentation Uploaded to GitHub:

Successfully uploaded to GitHub;

demonstrating professional quality of presentation

GitHub repository is free of unnecessary files and folders and has an appropriate .gitignore in use	

The README is customized to a professional level 

Group Presentation 

All group members spoke during presentation

Group was well prepared

Presentation was relevant to material

Presentation maintains audience interest 

Slide Deck 

Slides are visually clean and professional

Slides are relevant to material

Slides effectively demonstrate project

Slides are clear and maintain audience interest


