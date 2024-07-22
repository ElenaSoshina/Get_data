# Fetch and Display Comments App

## Overview
The Fetch and Display Comments App is a simple TypeScript application designed to fetch JSON data from a specified URL and display it in a structured format on the console. This application uses the `axios` library for HTTP requests and demonstrates how to handle and process JSON data efficiently.

## Features
- **Fetch JSON Data**: Utilizes the `axios` library to make HTTP GET requests to a specified URL and retrieve JSON data.
- **TypeScript Interfaces**: Defines the structure of the data using TypeScript interfaces, ensuring type safety and clarity.
- **Asynchronous Processing**: Uses asynchronous functions and promises to handle data fetching, making the code clean and non-blocking.
- **Data Display**: Displays the retrieved data in a structured format, listing the ID and Email of each comment.

## How It Works
1. **Define the URL**: Set the URL from which the JSON data will be fetched.
2. **Fetch Data**: The `getData` function fetches the data from the provided URL using an asynchronous `axios` GET request.
3. **Process Data**: The data is processed and iterated over to display the required information in the console.
4. **Error Handling**: Includes error handling to manage any issues that occur during the data fetching process.

## Installation

1. **Clone the repository**:
    git clone git@github.com:ElenaSoshina/Get_data.git

2. **Install Dependencies**:
    npm install
   
3. **Run the Application**:
    npm start


