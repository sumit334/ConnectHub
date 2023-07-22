# ConnectHub
* A simple Video Chat App using React js with socket io  
* You can simply clone this repo and run npm i to install all the dependencies   
* Then again go inside the client folder and run npm i to create the react app  
* Now simply start the server by npm start and then react by npm start inside the client folder and you are ready to work on the locolhost.  
* Link : https://sumitsconnecthub.netlify.app/


# ConnectHub - Real-time Video Calling App
Welcome to ConnectHub! ConnectHub is a real-time video calling application that allows users to make video calls and communicate with each other in real-time. It is built using React for the frontend and Socket.IO for real-time communication between clients. The application uses WebRTC technology for peer-to-peer video streaming.

## Features
📹 Real-time video calling between users.  
📞 Simple and intuitive user interface.  
🔔 Instant notifications for incoming calls.  
🎤 Support for both video and audio during the call.  
📱 Responsive design for seamless usage across devices.  
## Demo
https://sumitsconnecthub.netlify.app/

## Table of Contents
### Installation
### Usage
### How It Works
### Contributing
## Installation
To run ConnectHub locally, follow these steps:  

Clone the repository to your local machine using the following command:  
git clone https://github.com/sumit334/ConnectHub.git  
Change directory to the project folder:  
cd ConnectHub  
Install the project dependencies using npm:  
npm install  
Start the development server:  
npm start  
Open your web browser and go to http://localhost:3000 to access the application.  
## Usage
Once the application is running, you will be prompted to allow access to your camera and microphone. Grant the permission to start using the video calling feature.

* To initiate a call:

       Click on the "Call" button and enter the ID of the person you want to call (their unique Socket.IO ID).
       Click on the "Call" button again to start the call.
* To answer an incoming call:

       When you receive an incoming call, a notification will appear on the screen.
       Click on the "Answer" button to accept the call.
* To end a call:

       During a call, click on the "Hang Up" button to end the call.
## How It Works
The application uses React to build the user interface. Socket.IO is employed to enable real-time communication between clients. When a user initiates or receives a call, the application sets up a peer-to-peer connection using WebRTC, allowing for direct video streaming between the clients.

## Contributing
Contributions to ConnectHub are always welcome! If you find any issues or want to add new features, please feel free to create a pull request. For major changes, please open an issue first to discuss the proposed changes.
