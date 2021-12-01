# Sentiment Analysis Project

This is a simple project for build tools for web development
## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* run build-prod for running applcication on production environment

## Backend Server

The backend server is Express server which listens on port 8081
The server listens only for one route (/check) and sends an Axios get Request to MeaningCLoud API

## Important
The response body received from MeaningCloud API is much complicated and nested
Therefore, only few keys are destructured from the response body

# Usage
- The project can be used for NLP purposes to analyze articles

# Contributing
- Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

- If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

# Contact
- Arsany Joseph - arsanyjoseph@gmail.com -
- Project Link - https://github.com/arsanyjoseph/sentiment-analysis