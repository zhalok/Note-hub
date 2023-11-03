# Notehub
Ultimate Solution for Course Resource Management.

---

# Keypoints 
- Managing all academic resources in one place
- Sharing educational resources with other learners
- Having a discussion forum

# Used technologies and frameworks
- React JS
- Node JS
- Express JS
- MongoDB
- Material Design
- REST API

## Demo

Here is a working live demo : https://notehub-font-end.web.app/

## A step by step guide to set up and run the project in your computer.

Clone the project

```bash
  git clone https://github.com/cse-250-2018/G02-Resource-Sharing.git
```

You'll need node.js in your local device to run the project. Check if it is already installed.

```bash
  node -v
```

or,

```bash
  npm -v
```

The system should display the Node.js and npm version installed on your system.

If not already installed download and install it from [here](https://nodejs.org/en/download/)

Go to the project directory

```bash
  cd G02-Resource-Sharing
```

Go to the back-end directory

```bash
  cd back-end
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Open another terminal and go to the front-end directory

```bash
  cd front-end
```

Install dependencies

```bash
  npm install
```

Start the project

```bash
  npm start
```

Now the project should run in your device at https://localhost:3000

## F.A.Q

<ol>
<li>
<b>Question:</b> I have given npm start but why its not working? <br>
<b>Answer</b>: Make sure that you have <i>node_modules</i> folder in your project directory <br>
If you dont have that run the command <i>npm install</i>
</li>
<br>
<li>
<b>Question:</b> I have run the command npm install but not working still 
<br>
<b>Answer:</b> Please make sure that the directory where you are running the command has the <i>package.json</i> file 
<br>
Specially windows users please open powershell not cmd 
<br>When you open powershell or git bash it opens on the current directory but when you open cmd then it opens on the root directory  C:\ in most of the cases then you have to navigate all the way to the project direcotry. 
</li>
<br>
<li>
<b>Question:</b> I have run the npm install command and I also have the package.json file as well but still not working 
<br> 
<b>Answer:</b>
 Probably you are having trouble with deprications. In node js we have all the depedency packages in package.json. Also there is a file named <i>package_lock.json</i> 
 this file locks the dependency version of the dependencies to the version while it was during development 
 <br>
 So it often happens that while being in production some dependency packages get totally depricated to run on machine to be runned 
 <br>
 In such a case delete the <i>package_lock.json</i> file and then run <i>npm install</i>
 <br>
 If still you are having problems the please copy the problem statement from the terminal and google it :3
</li>
<br>
<li>
<b>
Question:
</b> I have clicked the request button but no email was sent 
<br>
<b>Answer:</b> Then its the problem of SMTP. Do one thing change the id pass and give your id pass in the send email file which controlls the email sending functionality but before that 
you are really sending the email to a proper client
<br>Still if its not working out then please open the developer console of your browser then copy the problem and then google it :3
<br>
One of the vital reasons of this is that the email field while registration doesnt have any validation so I faced this issue I once given my registration in the field of email so there was some problem 
<br>
However we planned to add an email validation in the form but couldnt do it due to lack of time
<br>
Please feel free to fix the bug :3
</li>
<li>
<b>Question: </>
</li>

<br>
<b>Thank you ...</b>
</ol>
