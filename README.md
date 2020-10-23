# Landing Page

This project aims to give you real-world scenarios of manipulating the DOM. The functionality being used serves two purposes: to append dynamically added data to the DOM, and to show how javascript can improve the usability of an otherwise static site.



## Table of Contents
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Tools Required](#tools-required)
- [Instructions](#instructions)
- [Development](#development)
- [Features](#features)
- [References](#references)

### Instructions

* The starter code has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.  

* To get started, open `js/app.js` and start building out the app's functionality  

* For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Gettiing Started

The starter project can be downloaded from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page).

The project will be evaluated by a Udacity code reviewer according to the Landing Page project [rubric](https://review.udacity.com/#!/rubrics/2658/view)

Get the active Section:
* We can use GetBoundingClientRect or intersection observer API.
* Use forEach() method on the sections list inside it.
* Use the getBoundingClientRect on the element parameter.
* IT will return some properties related to viewport and the section.
* Use if statement to get the Active like (add your condition).
* Inside the if statement before add active class to the section,
* Make sure to remove the other active classes from all sections.
* Use classList.add method to add the active class to the active section.
* Get The Active Link:
* Each link should contains the data-nav attribute value for the section which linked to it as an link id or textContent.

* When we got the Active section we can Query The active section and get the data-nav value for this active section.

* Then we can use forEach on all the links and check using if condition which link has the textContent equal to active section data-nav

* Remove Active class from all links, give the active link class active.



### Tools Required

No additional tools are required apart from a text-editor of your choice. 

### Installation

No additional installation is required for this project


## Development

* First challenge is to build the navbar dynamically based on the sections of the page. This can be achieved by using the below mentioned methods of javascript
    > `for or forEach loop` </br>
      `document.getElementById` or  `document.querySelector` </br>
      `document.createElement` </br>
      `.setAttribute` </br>
      `.appendChild` </br>

* Next step would be to add functionality to distinguish the section in view. This can be achieved by using the `.getBoundingClientRect()` method of javascript. Active states have to be added to the sections as well as the corresponding nav-links.  

* Last part is to add the functionality to scroll to sections. This can be achieved by using the below mentioned methods of javascript
    >  scroll(), scrollBy(), and scrollIntoView()

## Features

* Active State change for sections and nav links as user scrolls the viewport
* Smooth scrolling using `scrollIntoView` when a nav link is clicked 


## References

* To check if an element is in Viewport or not from [vanillajstoolkit](https://vanillajstoolkit.com/helpers/isinviewport/) 
* To handle the scrolling part, I have used [scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
* To used the removeProperty, I have used [.removeProperty] (https://www.w3schools.com/jsref/met_cssstyle_removeproperty.asp)
