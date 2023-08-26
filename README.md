# Startup Progress Tracker App README

Welcome to the Startup Progress Tracker app! This app serves as your comprehensive solution for recording and managing the various steps involved in the progress of your startup. Whether you're just beginning or well on your way, this app will help you stay organized and informed. Below, we've outlined essential information to get you started:

## Features

- **Step Recording:** The app provides a seamless process for recording each step of your startup journey. From initial ideation to product launch and beyond, you can easily log every milestone.

- **Local Storage:** All data related to your startup progress is securely stored using Local Storage. The designated key for this storage is `OAKS_LABS_STORAGE_KEY`, ensuring your data remains easily accessible and private.

- **Customization:** Want to tailor the app to your specific startup workflow? No problem! Head over to the `src/consts.ts` file to modify the `DEFAULT_MILESTONES` array. This empowers you to adapt the default steps to align with your unique business trajectory.

- **Reset Functionality:** Need a fresh start? To reset the app's state, simply remove the current state stored in Local Storage. This action will enable you to begin anew, refining your approach and redefining your milestones as needed.

- **Intuitive Progress Tracking:** The app simplifies progress tracking. Each step can be marked as complete once all preceding steps are finished. Additionally, if you find the need to backtrack, undoing a step will automatically reverse all subsequent steps associated with it.

- **Celebratory Notifications:** As you achieve milestones, the app rewards you with a touch of motivation. Upon completing a milestone, a toast notification will pop up, accompanied by intriguing and random startup-related facts. This not only recognizes your achievements but also keeps you engaged and entertained.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Getting Started

1. **Installation:** Install all dependencies with the command `npm install`.

2. **Recording Progress:** Launch the app with the command `npm start` and open the browser with the app. Here, you can meticulously record each step achieved in your startup journey.

3. **Customize Your Steps:** Tailor the default steps to align with your startup's unique roadmap. Access the `src/consts.ts` file and modify the `DEFAULT_MILESTONES` array as needed.

4. **Resetting the App:** Should you wish to start afresh, consider resetting the app's state. This can be achieved by removing the existing state stored in Local Storage.

5. **Staying Motivated:** Watch out for the toast notifications! As you conquer milestones, the app will surprise you with celebratory messages and intriguing startup facts.

Try the [DEMO](https://silly-cascaron-d51dbe.netlify.app/) here.

## Feedback and Support

We value your experience with the Startup Progress Tracker app. If you encounter any issues, have suggestions for improvements, or simply want to reach out, don't hesitate to email me to erik.dung@gmail.com.

Thank you for choosing the Startup Progress Tracker app. Here's to a successful and organized startup journey! 🚀🌟

