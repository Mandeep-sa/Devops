# **Project Overview**
### **Project Name**: FileInfoApp
### **Project Link**: https://rapid-fort-assessment.vercel.app/
### Description:
This project involves the deployment of a REST API-based web server that allows users to upload files and obtain information about the uploaded files. It provides a user-friendly interface for file uploads and displays detailed information about the uploaded files.  
### Endpoints: rapid-fort-assessment.vercel.app

### Endpoint: /
HTTP Method: GET

Description: This endpoint serves the index.html file, the user interface for file uploading. When a user accesses the root URL of the server, they are presented with the file upload form.

Response: The response includes the HTML content of the index.html file.

### Endpoint: /upload
HTTP Method: POST

Description: This endpoint handles file uploads. When a user submits a file using the upload form, this endpoint processes the file and provides information about the uploaded file.
Request Body: This endpoint expects a file to be included in the request's multipart/form-data payload.

Response: If the file upload is successful, the response includes JSON data containing details about the uploaded file, such as filename, filetype, size, fieldname, number of characters, and number of words. If there is an error during the upload or processing, appropriate error responses are sent.

### Pre-requisites
Before setting up FileInfoApp, we need to ensure we have met the following prerequisites.

**Node.js**: The project is built using Node.js, so we need to install the node.js dependencies using- npm install. The backend is written using the Express library of Node.js. Thus, install express using- npm install express.

**Docker**: The project is deployed on Docker Containers, primarily because it offers two benefits: automated integration of the changes by simply pushing the changes to the GitHub repository, secondly it provides a consistent platform throughout the software development life cycle. In order to deploy the project on the docker container, we have created a Dockerfile according to our requirements and a .yaml file for GitHub Action workflow to automate the process. We have also created an account on Docker Hub as it provides the platform to create and store Docker Images.

**Kubernetes**: The Docker Container is deployed on local Kubernetes using Docker Desktop. In order to deploy on Kubernetes, we require deployment .yaml and service .yaml files. They contain information about our docker image and ports. On the Docker desktop, we enable the Kubernetes service and run our required files using kubectl commands.

### Key Features:
**File Upload**: Users can choose files of different types and click on the upload button to upload the file 
![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/de783e5c-c6ca-49e8-946e-ad202fc6e807)

**Information Retrieval**: The web server responds with information about these files such as Filename, Filetype, Size of the file, number of characters, and number of words.
![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/309c6b2e-88a6-4790-96e3-c841c1df63cf)

 **User Interface**: Developed a friendly User Interface that does the job for us.

**RESTful API**: The server follows REST principles, and offers clear API endpoints for file upload and information retrieval.

**Docker Containerization**: The web server is deployed on a docker container for easy deployment and isolation.
![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/95e3e030-f7a8-4271-8aee-047e5cd8bdfc)

![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/d509d0ad-2a5f-45f7-bf74-d5ec661e2f0f)

![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/839391b6-eb12-4a3d-9c02-b951715e93dd)

![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/7fa6bc8f-2abe-4a92-a627-4759ad848088)

**Bash script to run the container**: Bash script is written to run the container, reference to the docker image is given inside the bash script that allows it to create a container for that docker image.

![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/758717fd-7368-47b6-8110-b6dc745119ab)

 **Kubernetes Deployment**: Kubernetes manifest files are provided for hosting the web server within a Kubernetes cluster which was created on local machine using Docker Desktop. The following is the status of our web server:
 ![image](https://github.com/Mandeep-sa/Rapid_fort_assessment/assets/89070523/428d9946-b615-4b70-86ff-2c52294b50ed)


