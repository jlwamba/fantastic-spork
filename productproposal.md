# Student-Professor Communication Mechanism
This product is made by Jerry, Sydney, and Trey. Review our team member Wiki here: https://github.com/sydkeet/fantastic-spork/wiki/Team-Members
## Table of contents

* [Main idea](#Main-idea)
* [Overview](#Overview)
* [Background](#Background)
* [Use case scenario](#Use-case-scenario) 
* [Objectives](#Objectives)
* [Scope](#Scope)
* [Connect to Express](#Express)
* [Solution](#Solution) 
* [Resources](#Resources)
---

## Main idea
This is a proposal of our prototype Student-Professor Communication Mechanism. Through this, we will improve the communication betweeen students and professors by adding a tool that will alert users when their email has been: received, opened, or responded to. This tool will help to answer the 5 W's: who, what, when, where, why.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Overview
We want to create an app that sends user's a notifcation when their email is received, viewed, and/or intended on being responded to. As students, we want to create this to to ensure it is received by the correct contact(s), depending on the nature of the email (ex. emergency situations), and to ensure there is not a server and/or client error. We will also illistrate the effectiveness of the BLUF Method.
<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/89217492/136075796-5f0d9fab-9c0e-4906-b790-e813c891e868.jpg">
</p>



<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Background

Have you ever been urgently needing a response from your professor but had absolutely no clue if they've even seen it? Canvas messages only allow the choice to select a course, recipient, and subject. While the subject bar gives you an opportunity to inform your instructor of the purpose behind your message, many people leave it blank.  Another problem is not knowing whether or not your instructor has seen your message. This can be stressful when you would like an immediate response or the message is urgent.  Our product is designed to give immediate feedback to students as soon as the professor has seen your message depending on keywords that are given in the subject line. It also includes buttons to select the type of message you plan on sending. Ex: Urgent, Homework Help, Attendance, etc. 


<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/89217492/136066754-215c0193-7b47-483e-8915-a7b66cee0966.png">
</p>



<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Use case scenario

As a student
I want to know if my professor has seen, read, plans to respond to my email
So That I am not left in the dark, its transparent, anxiety and frustration reduced.

As a professor
I want standard messaging
So That I can keep track, be helpful, turn into value for others, & not have to play detective

<img width="500" src="https://user-images.githubusercontent.com/89217492/136135381-68bd38d0-ce9b-4f30-9245-9ca9c02d889e.png">

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Objectives

1. Develope a tool that allows user to communicate clearly
2. BLUF Method
3. Integrate our prototype so that Canvas and our Student-Professor Communication Mechanism works in a harmonious and networked way.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Scope

This is going to be a prototype of the student-professor communiction mechanism. It will be a form that will be able to generate a notification to send back to the sender such as if the email was received, plans on responding, and received by the correct client using the BLUF method which stands for "bottom-line-up-front". This is a military communications acronym that helps to provide clairty in emails by lists the ones with keywords at the top such as "Important." It can be ran on a cross platform, like Windows, MacOS or Linux.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>


<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Connect to Express

```javascript
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```
### Solution
With our app, there will be additional options when sending your email including radio buttons to decide the purpose behind your email, and checkboxes to select whether your email is urgent or if it even needs a response. It will also notify you once your email has been read by your instructor in real-time.
<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/89217492/136075847-b7c77527-b8d7-4503-a4af-c7713a80895e.png">
</p>


<a href="#Table-of-contents"><p align="right">Return to the top</p></a>


## Multimedia

<!--<a href="https://youtu.be/ObXezlYKIEc" target="_blank"></a>

<a href="https://www.loom.com/embed/0845843780544510ae45a5c5cf03b2e5" target="_blank"><p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/88801826/133354529-4e734268-96af-4ed3-835e-f9c69167e7f5.png">
</p></a>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Resource center

<!--
<details>
    <summary>Click here to see the <b>Source Information.</b></summary>
    <a href="https://www.guru99.com/operating-system-tutorial.html"><br />
        Singh, A. (2021, January 18). <i>Types of Operating Systems</i>. GeeksForGeeks
    </a>
    <br />
    <a href="https://cryptoseq.medium.com/what-is-a-blockchain-operating-system-and-what-are-the-benefits-c561d8275de6">Seq.
        (2019, September 8). <i>What is a blockchain operating system and what are the benefits?</i> Medium
    </a>
    <br />
    <a href="https://www.investopedia.com/terms/b/blockchain-operating-system.asp">
        Frankenfield, J. (2021, April 1). <i>Blockchain Operating System.</i> Investopedia
    </a>
    <br />
    <a href="https://www.blockchain-council.org/blockchain/blockchain-operating-system-a-complete-overview/">
        Kumar, T. (n.d). <i>Blockchain Operating System: A Complete Overview.</i> Blockchain Council
    </a>
    <br />
    <a
        href="https://www.forbes.com/sites/adrianbridgwater/2018/07/03/what-is-a-blockchain-operating-system/?sh=633eb39a36a">
        Bridgwater, A. (2018, July 3). <i>What Is A Blockchain Operating System?</i> Forbes
    </a>
    <br />
    <a href="https://medium.com/jspoint/a-beginners-guide-to-creating-desktop-applications-using-electron-824da5665047">
        Hiwarale, U. (2020, December 24). <i>A beginner’s guide to creating desktop applications using Electron</i>
        Medium
    </a>
    <br />
    <a href="https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97">
        Patnaik, A. (2020, October 17). <i>The Ultimate Guide to Electron with React</i> Medium
    </a>
    <br />
    <a href="https://searchapparchitecture.techtarget.com/definition/RESTful-API">
        S. Gillis, A. (2020, September). <i>REST API (RESTful API) </i> TechTarget
    </a>
</details> -->

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>
