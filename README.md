# Different Guessing Game

In the video tutorial, you worked on a guessing game where you select the target value and the computer tries to guess it. In this project, you will write a new guessing game where the computer selects the target and you try to guess it. The range for the target number is 1 to 100 -- if you guess using good binary search methodology, you should never need more than 7 guesses to figure out the target value.

This project doesn't have much style -- that might be a distraction. This project will help you figure out how to pass props and functions as needed to get the game to play correctly. 

You may think you should start with a copy of the video tutorial project -- do NOT do that. There are enough differences that trying to start with that other project will lead you astray and make it very difficult. It is much better to start from scratch, with a brand new empty project, and build it as you have seen in the videos. Figure out what has to happen and where it should happen, and build components and functions in layers, starting with the essential elements and adding to them. For example, the computer generates a random number to start the game and needs to hold that number in state and pass it in props as needed. Start the empty project with generating that random number and display it to make sure it works. You can (probably should) copy the code for generating the random number from the video tutorial project, making changes as needed for this project. Then add in the next piece, getting input from the user to compare to that target value. You may find guidance about that in the video tutorial project, and should take advantage of that. But pay attention to the differences between this project and the video tutorial project and adjust the code for this project's functionality. Add a button below the TextInput field for the user to indicate they have finished typing their guess, so that the comparison of the guess to the target number happens only when the user has finished entering their guess. Keep building, level by level, to add in the functionality to do the comparison and give the hint (the computer specifies the hint in this game, no buttons involved), and to handle the game-over functionality. When the game is over, display how many guesses it took as well as the target number. 

There is a lot of code in the video tutorial project that you can copy into this new project. For example, the code to generate a random number is needed here. Does it need to exclude the user's choice? In this version of the game, the user is guessing, not setting the target number, so that exclusion of the user's number doesn't make sense. So that exclusion parameter in the code to generate the random number is not necessary and needs to be removed. Because that random number needs to be generated at the start of the game, it no longer belongs in the GameScreen.js file, where it is found in the video tutorial project. That project has a StartGameScreen.js file -- is that needed in this project? No, it is not. The StartGameScreen in that project gets input from the user for the target number; that is not part of this new project. The other project has a GameOverScreen.js file -- this new project does need to check if the game is over and display the same information, so that file can be copied into this new project. It will need only minor changes, since the number in this new project is the generated target number, not the user's number from the video tutorial project. There is a lot of code in the video tutorial project that is not needed in this project. There are components for Card, Header, Input, and NumberContainer, and a colors file -- you don't need to use any of those. All of those components, except Header, were used in the StartGameScreen, which is not part of this project, and the Header does not have to be included either. So this project should be a little simpler in the number of files.

Note that your name needs to appear at the top of the screen.

Take 3 screenshots.

![p](https://github.com/bell-kevin/differentGuessingGame/blob/main/Screenshot%20from%202023-03-02%2016-19-33.png)

![p](https://github.com/bell-kevin/differentGuessingGame/blob/main/Screenshot%20from%202023-03-02%2015-40-24.png)

![p](https://github.com/bell-kevin/differentGuessingGame/blob/main/Screenshot%20from%202023-03-02%2016-13-43.png)

Submission: Zip together the root folder and the 3 screenshots, and submit the single zipped folder.

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

Check out App.js here in the code files for the computer algorithm code.

## Reading: Storing Projects 

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
