// Dealing with side effect
//Project Name- PlacePicker
///

1. The idea behind of this project is to pick your favorite places
2. We can done with the help of longitude and latiude 3. From this level of placepicker have problem :Infinite Loop:- setting avialableplaces 3. We can solve this problem using useEffect() hooks
3. When we are refreshing the our browser we lost our data but we can solve this in browser without backend with help of localStorage
4. Every Side Effect don't need a useEffect hooks
5. Remember when we are use useEffect here it runs Synchronously and exectued by line
6. When we are put this value out of function because we don't need to executed to again and again
7. When user want to remove item from list but after 3 sec item remove even we are clicking on No because behind the scene setTimeOut() is running
8. The problem when we are provide object/function in useEffect dependencies array : Re-Creation of function, the solution is useCallback

///

\*Quiz App Project
///

1. What we can practice in this project
   a. Dealing with Effect Dependecies @ Cleanup
   b. Combining Effects with other react concepts
   c.
2. Shuffling answer : We can't change in original array thta's why we first copy the previous answer and shuffle
3. When we completed quiz then UI break that's why first we check length and then shuffle logic implementing
4. Adding Question Timer
5. Add useCallback function that help handleSelectAnswer function don't re-created
6. Key is unique identifier hich items have changed, updated, or deleted from the Lists

   ///

   <!-- Sending HTTP Requests -->

   ///

7. Directly we can't use fetch() method to fetch data this is the side effect and infinite loop
8. When we use useEffect() then it is executed once after components re-render and avoid infinite loop
9. We can improve this code with help of async and await
10. When we are fetching data from backend it takes some time so we can handle loading state for good user experience
11. Handling HTTP Error

///

<!-- Custom hooks -->
<!-- Rules of Hooks -->

12. React Hooks must not be called outside of React components functions
13. React Hooks must not be called in nested code statements( e.g inside of if-statement)

