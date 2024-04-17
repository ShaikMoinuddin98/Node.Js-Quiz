
# Node.Js Quiz





## Installation

* install Node.js from the official website or a trusted source. Follow the instructions for your specific operating system.
* Clone the repository to your local machine using the command:
```bash
    git clone [repository-url]
```
* Ensure that all necessary files are included in the repository, such as index.js, quiz.json, index.html, results.html, and any other relevant files.
* When you navigate to the project directory using the cd foldername command, make sure the "foldername" is the correct name of the directory where you placed your project files.
```bash
  cd foldername
```
* then install the necessary packages using npm
```bash
  npm install express body-parser
```
* Now you can run the index.js file using node
```bash
  node index.js
```
* after this the website will be live on your computer localhost server .you can access it by typing 'localhost:3000/' in your browser

    
## API Reference

#### Get The home Page

```http
  GET /
```

| Description                |
| :------------------------- |
| Displays the index page which will have 10 Questions|

#### Results

```http
  GET /results
```

| Description                |
| :------------------------- |
| After Submitting the questions the results will be displayed|







## Description

The Questions and answers will be present in JSON format in a JSON file.That JSON file will be used to Display and verify the questions in backend.
So if You want to add or update the questions Then can make the changes in quiz.json file



