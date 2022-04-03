# dot9 UI
Are you working on a React project and have the feeling that the component you are working on has already been implemented by someone else or have you created an awesome component for a client or a personal project and want to share it with all the other members and projects of *dot9*?

Then you have come to the right place! Welcome to **dot9 UI**!

## What is dot9 UI?

dot9 UI is a company wide storybook (https://storybook.js.org/) and is intended to act as a collection of React components and NextJS Pages styled with tailwindCSS (https://tailwindcss.com/) that can be reused for rapid prototyping.

Not only that! You can also use the awesome interface of storybookJS to develop your components in a responsive and modular way!

## How to get access dot9 UI design components?
To access all of dot9 UI's components and pages just visit https://dot9-ui.netlify.app and enter the password `&8$L#2co313O`.

Now you can click through a variety of components and can just copy the source code under the components "Source Code" tab to use it in your own project.

## Didn't find the right component? - How to contribute:
When you want to add an own component to dot9 UI you can just copy the *example/Example.tsx* file to an appropriate location in the nextJS projects tree (NOTE: it cannot be located under the */stories* folder) and create a copy of the */stories/example* folder in the appropriate location under ther */stories* folder.

Next you can edit the filenames and adjust the code to your liking.
The different files should contain the following:

- *Example.tsx*: Your components source code.
- *Example.stories.tsx*: Your components stories and documentation (see https://storybook.js.org/docs/react/get-started/introduction for more information).
- *Example.code.ts*: Paste the code in the string that is displayed in the storybook alongside your component under the "Source Code" tab (should be the same text as in the *Example.tsx* file.

To see a live demo of the storybook that you are editing just enter `yarn storybook` into your terminal.

When you are finished and have created an awesome new component, just open a PR and help letting dot9 UI grow!!!