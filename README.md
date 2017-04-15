# Udacity's Front-End Web Developer Feedreader Project
The purpose of this project was to gain experience with writing tests using Jasmine as a part of my Udacity Frontend Nanodegree. We were given a web-based application that reads RSS feeds and told to complete writing the test suite for the application. The result is fully-tested RSS Feedreader application.

## Table of Contents
1. [Setting up the project](#setting-up-the-project)
1. [Testing the project](#testing-the-project)
1. [Helpful Links](#helpful-links)

## Setting up the project
Clone the git repository into a directory using a bash terminal

```bash
git clone https://github.com/mggwxyz/frontend-nanodegree-feedreader.git
````
Navigate into the `frontend-nanodegree-feedreader` directory

```bash
cd frontend-nanodegree-feedreader
```
Start the application at `http://127.0.0.1:3000`
    
```bash
npm start
```

## Testing the project

Jasmine was used to test the functionality of the RSS Feedreader.

### What is being tested?

1. RSS Feeds are defined
1. RSS Feeds have non-empty URLs
1. RSS Feeds have non-empty names
1. The menu is hidden by default
1. The menu is visible when the menu icon is clicked
1. Initial Entries have at least one entry
1. New Feed Selection causes new feed to be loaded

## Helpful Links
* [Source Code](https://github.com/mggwxyz/frontend-nanodegree-feedreader)
* [Online Demo](https://mggwxyz.github.io/frontend-nanodegree-feedreader)
