# ChecklistSL

Single page web application that aims to help people learning foreign languages while creating checklists.

My wife inspired me to creating that simple app.

Sometimes when she wanted to know translation for an item for her shopping checklist she had to open translation service -> type in item name -> find out translation -> type in translated item in checklist application. It might be a little bit cumbersome to do.

So we thought that would be good idea to combine translation functionality with checklist app.

As for me it was a good opportunity to start learning [React](https://github.com/facebook/create-react-app), [Redux](https://redux.js.org/) and apply [progressive web app philosophy](https://developers.google.com/web/progressive-web-apps/).


## Stack of technologies

Whole project is full javascript stack.

### Database

I am using non-sql database [MongoDB](https://www.mongodb.com/). 
[Mongoose](https://mongoosejs.com/) as nodejs object modeling tool.

### Web API

[ChecklistSLApi Git Repository](https://github.com/AndreySurzhan/ChecklistSLApi)
[ChecklistSLApi Swagger page](https://checklist-sl-api.herokuapp.com/api)

To handle routes, utilize middlewares I use [Exressjs](https://expressjs.com/).

To authenticate and authorize users I implemented Bearer strategy using [Passportjs](http://www.passportjs.org/).
Routes are authenticated with passing [jwt](https://jwt.io/) in header.

Translation logic is implemented on api side.
I was considering using [google translation service](https://cloud.google.com/translate/docs/) but unfortunately there was no free plans for open source projects.
So I ended up utilizing [Yandex.Translate](http://translate.yandex.com/). They kindly provide free access to translation api
Special thanks to [Andrey Sidorov](https://www.npmjs.com/~sidorares) for creating npm [yandex-translate](https://www.npmjs.com/package/yandex-translate).

### Client
This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Redux](https://redux.js.org/).
Components are divided to stateless and smart.

I am trying to apply [progressive web app philosophy](https://developers.google.com/web/progressive-web-apps/) principals.

UI components implement [React Material](https://material-ui.com).

### Deployment/CI

Database, web api, client app - everything is hosted on [heroku](https://help.heroku.com/).
I found it to be very useful service. 
I've been using free plan where I've got up to 500mb of memory.
Building and deployment of the application happens automatically on every push to target branch (in my case it is `master`).
The caveat is that app falls a sleep and it takes seconds to wake it up but that is ok for my testing purposes. 
I am not complaining as everything i've got is free.

### Credits

Thanks to [Drew Hill](https://github.com/arhill05) for occasional consulting and help.


## Development

### Available Scripts (I haven't ejected react yet. So everything below is standard for React CLI)

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
