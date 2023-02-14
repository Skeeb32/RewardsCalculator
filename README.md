# Project Insight: 


### Rewards Calculator

To add users as customers to the code, modify the handleAddTransaction function to include a customer ID in the transaction object. Then, modify the calculateRewards function to group transactions by customer and calculate total rewards for each customer.

The RewardCalculator component in the code has three states: transactions, dollarsSpent, and pointsEarned. Users can input the dollar amount spent and click "Calculate" to update pointsEarned and transactions states. The component shows a message with the number of points earned and a table of transaction history.

To calculate the reward points earned by each customer per month, create a component that takes in an array of transactions, filters by date, calculates rewards, and groups by month and customer.

To customize the appearance of the React components, add CSS styles to adjust font, color, layout, and animations.

The RewardCalculator calculates reward points for a single transaction based on given rules, and displays the total reward points to the user.
