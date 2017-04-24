# Feedreader | Front-End Nanodegree

A RSS feed reader for Udacity's Front-End Web Developer Nanodegree

## Try It Out
[https://mggwxyz.github.io/frontend-nanodegree-feedreader](https://mggwxyz.github.io/frontend-nanodegree-feedreader)

## Table of Contents
1. [Project Overview](#project-overview)
1. [Setting up the project](#setting-up-the-project)
1. [Running the project](#running-the-project)
1. [Testing the project](#testing-the-project)
1. [Resource Links](#resource-links)

## Project Overview
The purpose of this project was to gain experience with writing tests using Jasmine as a part of my Udacity Frontend Nanodegree. We were given a web-based application that reads RSS feeds and told to complete writing the test suite for the application. The result is fully-tested RSS Feedreader application.

## Setting up the project

Clone the git repository into a directory using a bash terminal
```bash
git clone https://github.com/mggwxyz/frontend-nanodegree-feedreader.git
````

Navigate into the new project directory
```bash
cd frontend-nanodegree-feedreader
```

Download the project's dependencies
```bash
npm install
```

## Running the project
Once the project is setup, it can be run at `http://127.0.0.1:3000`
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

## Resource Links
* [Online Demo](https://mggwxyz.github.io/frontend-nanodegree-feedreader)
* [Source Code](https://github.com/mggwxyz/frontend-nanodegree-feedreader)

