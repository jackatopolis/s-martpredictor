# S-Mart Predictor
John Clos, Uchenna Nwagbara, Sharon Colson, Jack Cohen

December 2, 2021

## Background
Context and explanation for why we did this.

## Exploratory Data Analysis
File: eda.ipynb

The first step is acquire a general understanding of the trends and patterns by exploring the dataset. Plotting the data in various ways using the tools outlined led to the following observations.

### Tools
* Jupyter Notebook
* Python Pandas
* Python Matplotlib
* Seaborn

### Observations

1. #### Empirical Cummulative Distribution Function (eCDF)
    * Although in the best week, a store sold more than 2500 units, about 80% of the time, weekly units sold did not exceed 500.
    * Although the highest weekly sales exceeded 25K dollars, over 90% of the data had weekly sales less than 5K dollars.

2. #### Price is dependent on Holiday.

3. #### Units sold is dependent on Holiday.
    * Product 2 is the cheapest product among all the three products, and it sells the most.
    * Product 3 is the most expensive product among all the three products.
    * Additionally, product price did not change during holidays (either it was on promotion or it was not, promotion is independent of Holiday status.)

4. #### Units sold holiday vs non-holiday per store 
5. #### Product sold holiday vs non-holiday by plotting the data.
    
    * It does not seem that holidays have a positive impact for the business. For most of the stores, weekly unit sold during the holiday is as same as the normal days, while store 10 had a decrease during the holidays.
    * Weekly units sold for product 1 had a slightly increase during the holidays, while product 2 and product 3 had a decrease during the holidays.

6. #### Product units sold based on price and holiday. 
    
    * Every product has more than one prices, both at holidays and normal days. The assumption is that one is regular price, another is promotional price.
    * The price gap for product 3 is huge, it was slashed to almost 50% off during promotions.
    * Product 3 made the most sales during non-holidays.

7. #### Product in each store vs units sold and price.
    
    * All of these 9 stores carry these 3 products. They all seem to have similar kind of discount promotions. However, product 3 sells the most units during promotions at store 10.

8. #### Yearly seasonality per store.
    
    * Every store has somewhat seasonality, store 10 has the most obvious seasonal pattern.

9. #### Seasonality per product.

    * Every product has somewhat seasonality, product 2 has two peak seasons per year and product 3 has one.

10. #### Seasonality per product per store in units sold.

    * In general, product 2 sells more units per week than the other products in every store.
    * Once a while, product 3 would exceed product 2 at store 10.

11. #### How holiday and price effect sales by plotting the data.
    
    * The cheaper the price, the more weekly units were sold.
    * Is holiday or not has nothing to do with the unit sold.

12. #### Units sold vs promotion per store.
    
    * Every store sells more during the promotions, there is no exception.

13. #### Units sold per product while on or off promotion. 
    
    * Every product sells more during the promotions, in particular, product 2 and product 3.

14. #### Distribution of price and promotion distribution for units sold.

    * All the stores have the similar price promotion pattern, for some reason, store 10 sells the most during the promotions.

15. #### Price change while on and off promotion and the change in sales.
    
    * Every product has the regular price and promotional price. Product 3 has the highest discount and sells the most during the promotions.

16. #### Observation Summary
    
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

## Model Exploration
File: model.ipynb

X, Y, and Z models were explored. Why each was explored. Etc.

## Model Hyper Tuning
File: hypertuning.ipynb

After exploring potential models, we hypertuned the parameters to increase score to validate etc. 

The following tools and methods were used to hypertune the model.

### Tools
* Scikit-learn
* GridSearchCV

### Method

1. #### Create Gradient Boosting Regression
    * Split data
    * Scale the data
    * Calculating Cross Validation Score across multiple testing sets
     * Classifications use Accuracy and F1 Score
     * Regressions use R2 Score and Mean Absolute Error (MAE)
    * Create a model using Gradient Boosting Regression
    * for 
    # all other steps will be same as classification as shown above
2. Feature Importance on the Model
    * Create a plot of the features
    * Generate a cross validation score
3. Hypertuning the Model
    * Set the parameters
    * Tune the model using GridSearchCV
    * Generate predictions
    * Generate r-squared and validate
4. Final Hypertuned Model
    # create a model using the optimized values
    # Split data
    # Scale the data
    # Calculating Cross Validation Score across multiple testing sets
    # for classification we use accuracy and F1 score
    # for regression we use R2 score and MAE(mean absolute error)
    # all other steps will be same as classification as shown above
    # X_test_scaled['Weekly_Units_Sold']= pred
5. Feature Importance on the Hypertuned Model
    # plot the features for the optimized model
6. Export Model
    # Save the model
    # Save the scaler
    # Load the model 

# Deployment:
# using flask, joblib, pandas and pickle
# create the model
# loads scaler in, check filename
# create the web pages
    # Home Page
    # Predictor
    # Data Page
    # EDA Page
    # Model Page
    # About Page
    # Error Handler Page

# Project and Documentation Uploaded to GitHub:
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
