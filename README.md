# Mediatool interview exercise

Welcome to the Mediatool exercise preparing for your on site interview. In this repository you will find an initial react app that is
set up with transpilers and livereload so that you won't need to focus on such things.

Below you will find instructions for how to run the app and the exercise itself. Good luck!

## Working with the application

After cloning this repo, install all dependencies using `yarn` or `npm`. When that is complete, run the server by executing `yarn demo` or `npm run demo`.
You will now be able to access the initial application through your browser at `http://localhost:3000`.

In the folder `lib` you will find an file called `index.jsx` that is the main file for your application. You can import other files from there.
You will also find the file `style.less` which is the base for styling. There are no requirements on a nice look and feel for this exercise but if
you do feel that you want to add some css or less, you can do that in this file. Whenever you make changes to any of these files or imports form them, the application should update by itself.

## mt-ui
We have provided you with the dependency `mt-ui` that you may use to structure the graphic components of the app. It is not a requirement that you use it, just something
that might make it easier for you so that you can focus on code and not on the looks of the application. It contains a grid that is explained on the initial page.

# The exercise - Ranking app
The goal of this exercise is to create a ranking app based on some users and their scores.
In this repository you will find two files containing initial data `lib/user.js` and `lib/scores.js`.

Create a React app that displays a ranking list where each user from the files is displayed only once. The list should be in descending order where the first user is the one with the highest score, the second user is the next best and so on.
If you click on a user, a separate list should be visible showing all the scores for that user in descending order.
The app should also have a form where you can enter new scores with the user's name and score.
If the user name does not already exist, that name should be added to the ranking list.
New data does not need to be saved on reload.

## Excel import
The app should also handle excel import of scores. We have prepared the app so that you can drag and drop an excel file into a dropzone on the page, from there the excel file is parsed and the data should be available to you.
Start the app to see how this works. You will find a file `scores.xlsx` in this repo that you can import to your app.
