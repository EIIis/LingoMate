<p align="center">
  <img src="https://user-images.githubusercontent.com/47289830/139682504-41c7558a-b2ea-4ae6-b2e8-845c6d4d7eaf.png" />
</p>

# What is LingoMate?
LingoMate is a web application that allows you to learn new languages by pairing you with someone who knows the language you want to learn! Sign up for an account, get matched, and start learning!  
LingoMate was started by a group of students with a passion for learning new languages. Our background included FIVE different nationalities, which included, Indian :india: Mexican :mexico: Georgian :georgia: Zimbabwean :zimbabwe: and South Korean :kr: so we knew we had to create a web application that would allow people to learn new languages.

# Dependencies
The main source code is written in JavaScript, with the front-end being written in React. The 'back-end', more-so storage, I used Firebase, particulary for the login function. Below are some of the libraries, and how to install them. Though with the package.json file, all of the dependencies should setup.
- [React](https://reactjs.org/): The front-end framework
- [Aphrodite](https://github.com/Khan/aphrodite#readme): A CSS framework
- [Bootstrap](https://getbootstrap.com/): A CSS framework
- [Firebase](https://firebase.google.com/): The database
# Installation and Setup
## Disclaimer: This setup is written for a Unix based machine and not WindowOS. This is because I don't have access to a WindowOS machine, and I know the setup for Windows is qute a bit different.
It's quite easy to get the code up and running. The main thing that you'll need to have setup before following these instructions are to:
1. Have SSH setup on your computer in order to clone the repo. Alternatively, you can just download the repositiory, but I don't know if this guide will work for you.
2. Have npm installed on your computer. This is a package manager that allows you to install and manage dependencies. You can install this by running the following command in your terminal: `npm install -g npm`.  
  
Once you have have the setup ready, in order to get this up and running, just follow this simple guide:
1. Go to the Github [repo](https://github.com/EIIis/LingoMate) and click the `Code` button, select the SSH option, and copy the link. It should look something like this: `git@github.com:EIIis/LingoMate.git`
2. Go to your terminal and naviage to the directory where you'd like to clone the repository. Once you're there, run the following command: `git clone git@github.com:EIIis/LingoMate.git`. It could ask you for your password, so just type in your password.
3. Once you see the `LingoMate` folder, navigate to the inside ot the folder and run the following command: `npm install`. This should install all the dependecies that are needed in order to get the application working.
4. Once installed you can run the application by running the following command: `npm run start`.  
5. After that, you should be able to access the application by going to the following link: `http://localhost:3000/`.  

Once you have it downloaded, you can naviagate the site. Note though that you won't have access to anything Firebase related because the API keys are located on a `.env` file, and for obvious reasons, you won't be able to access that.
# Future Development
- [x] Login system working
- [ ] Add a profile page
- [ ] Add a matchmaking system 
- [ ] Add an peer-to-peer contact page
- [ ] Add chat system with Firebase
- [ ] Fix the styling of the application, get rid of Material-UI
- [ ] Rewrite code to transition away from HTML/CSS to Aphrodite

# Acknowledgements
This project was started as a collaboration that included three engineers, product manager, and a designer. Though I don't have any Github information regarding the PM and designer, the two other engineers were [Tina](https://github.com/tinatinkokoshvili) and [Aishwariya](https://github.com/AishwariyaRanjan). Both were a huge part of the inital development of the project. A link to the original repo can be [found here](https://github.com/tinatinkokoshvili/LingoMate)
