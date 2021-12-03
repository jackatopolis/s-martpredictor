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
    > ![image](https://user-images.githubusercontent.com/83737584/144524798-df56a0d5-ef45-4e7c-94e7-1e1293e5e23e.png)

    * Every product has more than one price, both at holidays and normal days. The assumption is that one is regular price, another is promotional price.
    * The price gap for product 3 is huge, it was slashed to almost 50% off during promotions.
    * Product 3 made the most sales during non-holidays.
7. #### Product In Each Store vs Units Sold and Price
    > ![image](https://user-images.githubusercontent.com/83737584/144524939-b7824440-76ec-4474-bb4e-1a5168a56986.png)

    * All of these 9 stores carry these 3 products. They all seem to have similar kinds of discount promotions. However, product 3 sells the most units during promotions at store 10.
8. #### Yearly Seasonality per Store
    > ![image](https://user-images.githubusercontent.com/83737584/144525053-bac7647d-6c4c-4a89-af4e-f1d7140a6d27.png)

    * Every store has somewhat seasonality, store 10 has the most obvious seasonal pattern.
9. #### Seasonality per Product
    > ![image](https://user-images.githubusercontent.com/83737584/144525123-7d96a20e-a56a-4415-909c-ed1a0485f349.png)

    * Every product has somewhat seasonality, product 2 has two peak seasons per year and product 3 has one.
10. #### Seasonality per Product per Store in Units Sold
    > ![image](https://user-images.githubusercontent.com/83737584/144525247-27576d7f-abf6-4db9-99ca-a539864473c1.png)

    * In general, product 2 sells more units per week than the other products in every store.
    * Once a while, product 3 would exceed product 2 at store 10.
11. #### Holiday and Price Effect On Sales
    > ![image](https://user-images.githubusercontent.com/83737584/144525389-1b45acfe-3324-46d1-8112-f7c38ba0a9c4.png)

    * The cheaper the price, the more weekly units were sold.
    * Is holiday or not has nothing to do with the unit sold.
12. #### Units Sold vs Promotion per Store
    > ![image](https://user-images.githubusercontent.com/83737584/144525502-99c8ab46-977d-4bbc-bab0-c8e532e7cd90.png)

    * Every store sells more during the promotions, there is no exception.
13. #### Units Sold per Product While On or Off Promotion
    > ![image](https://user-images.githubusercontent.com/83737584/144525580-179c8f0a-f374-45e1-97e5-dad7369940b8.png)

    * Every product sells more during the promotions, in particular, product 2 and product 3.
14. #### Distribution of Price and Promotion 
    > ![image](https://user-images.githubusercontent.com/83737584/144525646-2a4ae93c-20d3-4e6b-b93c-7375039629e1.png)

    * All the stores have the similar price promotion pattern, for some reason, store 10 sells the most during the promotions.
15. #### Price Change While On and Off Promotion and the Change in Sales
    > ![image](https://user-images.githubusercontent.com/83737584/144525761-4cf350a4-91cb-41bc-8e57-725adda173ca.png)

    * Every product has the regular price and promotional price. Product 3 has the highest discount and sells the most during the promotions.
16. #### Observation Summary:
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

### Tools
* Scikit-learn
* Cross Validation

After completing our EDA we chose to run regression to predict the numerical value Weekly Units Sold. We first encoded the data using One-Hot Encoding, then split the data for training and testing, and scaled it. We tested the data on 14 different models before finalizing our model as the Gradient Boost Regressor which gave the highest accuracy by using decision stumps to boost weak features. 
> ![image](https://user-images.githubusercontent.com/83737584/144526568-57e867c9-9562-4719-8d8f-c94d8f975a03.png)
> ![image](https://user-images.githubusercontent.com/83737584/144526594-6224abaa-674e-421c-90d5-30b1cd74fa87.png)

- - - -
## Model Hyper Tuning
***File: hypertuning.ipynb***

### Tools
* Scikit-learn
* GradientBoostingRegressor
* GridSearchCV

After exploring potential models, we then began hypertuning the parameters incrementaly to increase accuracy score. 

The following tools and methods were used for this process.

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
> ![image](https://user-images.githubusercontent.com/83737584/144526944-c9b64e80-6d97-4e1f-9841-19ed7b01022d.png)
> ![image](https://user-images.githubusercontent.com/83737584/144526964-4f944793-d075-46aa-9f5f-15bdd7deeb35.png)

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
> ![image](https://user-images.githubusercontent.com/83737584/144527893-cfd2d418-6275-46a4-8ca5-5f6e63b14606.png)


<hr>
Contacts:
<hr>

Sharon Colson:
* https://www.linkedin.com/in/sharon-colson
* sharon.colson@gmail.com
<hr>

Jack Cohen:
* https://www.linkedin.com/in/jack-cohen-6b573213a
* https://github.com/jackatopolis
<hr>

Uchenna Nwagbara:
* https://www.linkedin.com/in/uchenna-nwagbara-83b613172
* https://github.com/uchenna23
<hr>

John Clos:
* https://www.linkedin.com/in/john-clos-7a41671
* https://github.com/johnclos


