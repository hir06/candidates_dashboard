# Candidates Dashboard

# The candidates dashboard is the web app made to help HR to manage the candidate list for jobs
##Features

1. fetch and display the list of the candidates
2. sorting by the columns: year_of_experience, position_applied, application_date
3. filtering by name, status, position_applied
4. persisting filter via query params on page refresh

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# The initial planning and choices could be found under the design folder as well as via below links
1. state choices : https://www.mindmeister.com/map/2657463212
2. Initial ideas and thought process : https://excalidraw.com/#json=BBzwOPUYT2zpA37Sy6dGj,favkvxyYy6MAE30i0LyTgQ
## Available Scripts for the project to facilitate the development and deployment in future  

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## future scope
Due to limitations of time could not include this but would love to
- performant grid to handle more data
- debouncing on filters
- improving ux for filters for eg. support of multiselect and including filters in table header itself to make grid more reusable
- can customise the grid with flexible filters and column types to accept them as props 
and act on that
- BUG fixes: due to the state choices and having sorting and filters living in custom hook it was getting tricky to maintain the direction hence the UI doesn't reflect asc and desc order
- more type safety 
- add test using RTL and also behavioural test on entire application
- can add caching and localStorage as well memoize props from react to avoid more API calls and computations
- have added some TODOs as well in files to look at it later and to adhere to timelines
- improvising css to have common reusable styles, mixins and variable to support design system changes
