# Frontend-Nanodegree Feedreader Project Overviews
The purpose of this project was to gain experience with writing tests using Jasmine as a part of my Udacity Frontend Nanodegree. We were given a web-based application that reads RSS feeds and told to complete writing the test suite for the application. The result is fully-tested RSS Feedreader application.

## Quick Links
* [GitHub Repository](http://github.com/mgg9xv/frontend-nanodegree-feedreader)
* [GitHub Pages](http://mgg9xv.github.io/frontend-nanodegree-feedreader)
* [Original Udacity README.md](./ORIGINAL-README.md)

## Table of Contents
1. [Installing Feedreader](#installing)
1. [Running Feedreader](#running)
1. [Testing Feedreader](#tests)
1. [Link to origin readme](./ORIGINAL-README.md)

## Installing Feedreader <a id="installing"></a>
1. Clone the repo into a directory

    `
    git clone https://github.com/mgg9xv/frontend-nanodegree-feedreader.git
    `

## Running Feedreader <a id="running"></a>

### Option 1
1. Navigate into the frontend-nanodegree-feedreader folder that was created when installing the application

    ```
    cd {path-to-your-repo}/frontend-nanodegree-feedreader
    ```
1. Open `index.html` using your favorite web browser

### Option 2

+ View Feedreader at [http://mgg9xv.github.io/frontend-nanodegree-feedreader](http://mgg9xv.github.io/frontend-nanodegree-feedreader)

## Testing Feedreader

Jasmine was used to test the functionality of the RSS Feedreader.

### What is being tested?

1. RSS Feeds are defined
1. RSS Feeds have non-empty URLs
1. RSS Feeds have non-empty names
1. The menu is hidden by default
1. The menu is visible when the menu icon is clicked
1. Initial Entries have at least one entry
1. New Feed Selection causes new feed to be loaded
