# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Functional components are stateless and rely on the useState hook to utilize state. Stateful components have access to React's inherent state object and its functionality, allowing you to utilize state by default.
2. When does a componentWillMount function be called? What about a componentWillUpdate?
The former is called in the mounting phase of the React lifecycle, the latter is called during the updating phase and anytime the virtual DOM is updated.
3. Define stateful logic.
Stateful logic refers to when code uses state, which is when some element both stores information and has the power to modify it.   
4. What are the three step of creating a successful test? What is done in each phase?
Step 1 - arrange; in this stage, you set up the test.
Step 2 - act; in this stage, you run the action that you are testing.
Step 3 - assert; in this stage, you determine whether the test was succesful based on certain parameters that you've set.