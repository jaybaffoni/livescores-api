# LiveScores API

A proxy backend to call an insecure API and return it.
Hosting the LiveScores React with https requires all API calls to be secured as well, and the requisite API is not.

## Running the application

The application can be run locally in the project directory as long as Node.js and NPM are installed:
```
node app
```

## Using Heroku

This project can be hosted easily on Heroku, especially since it doesn't require any additional connections such as a database.

* [Heroku](https://www.heroku.com/) - Heroku Homepage
* [Live API](https://livescores-api.herokuapp.com/) - Application running on my account

Netlify runs the frontend as a secured site, and the scores API is not secured.
This app is essentially a proxy to call the scores API.

* [React](https://github.com/jaybaffoni/livescores-react) - GitHub project for frontend

## Testing

The application has only one route. It returns current football scores in JSON format.

## Author

* **James Baffoni** - *Initial work* - [jaybaffoni](https://github.com/jaybaffoni)

