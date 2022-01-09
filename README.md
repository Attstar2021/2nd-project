# ***Rock Paper Scissors***

 
Rock Paper Scissor is to entertain its user without the boundaries of age and experience limit, it is very easy and a good time passing game that has a truly randon which makes the game more fairer.

This is responsive site and can be accessible on all size of devices for all type of user. View the live project below,





![148688269-487fec40-f796-4412-b64c-d480cff236b](https://user-images.githubusercontent.com/91749477/148688628-8f0a5767-86ab-4030-96e9-3a3dfa89cea3.png)



## Features



![mainImage](https://user-images.githubusercontent.com/91749477/148692175-7903593e-e618-4f0f-9f6d-d8cd15c56cc2.png)

### The Header


- Featured at the top the page, the header shows the game name is clear and colorful way which gives an idea of what game the user is going to play.



![header](https://user-images.githubusercontent.com/91749477/148692130-1b70c105-9b6d-4148-9f29-fb8043567c71.png)



### Game area

- Game area includes buttons for making choices, players scoresboards, players images of selection and a quick resut display for every move.
- This section provide interactive buttons that user can click to make a choice and play game.
- when user click on an option, the image relating to their choices appears on screen along with computer choice and then results shows that is a winner.
- The results and scores are clear to user to make it more easy to understand that who is winner on every move and also telly total scores for both players (i.e. user and computer).



![Gamearea](https://user-images.githubusercontent.com/91749477/148692167-cec715e2-70ed-413e-9fff-5365197c5d59.png)


- The following images show how this game works and looks while playing
- Also shows how truly random the computer selections are.
- Following are the glimps of the game, that how it works!

![playingGame1](https://user-images.githubusercontent.com/91749477/148692179-9bef6b9a-3561-4fcd-b23f-5e9b9ef81774.png)

![playingGame2](https://user-images.githubusercontent.com/91749477/148692212-b79844e5-0be2-4f17-96b1-76bd10837c98.png)

![playingGame3](https://user-images.githubusercontent.com/91749477/148692205-e397cf37-eb69-45d4-8eab-a7a2d508fd01.png)

![playingGame4](https://user-images.githubusercontent.com/91749477/148692184-124bb5cd-b8c3-49b5-89cc-12239244d01b.png)




### The Footer

- Footer Shows the game rules which makes game easy to understand and play. 

![FooterImage](https://user-images.githubusercontent.com/91749477/148692152-483ca613-5918-4deb-bdc3-863da13001f9.png)





## Testing

Firstly this site was tested manually again and again to remove any errors and then finally tested through lighthouse, detail report for its accessibility and performance is given below;

![Accessibility](https://user-images.githubusercontent.com/91749477/148696170-c9747c61-30df-477a-b506-b459b4532c87.png)



### Validator Testing

This site is created with help of following coding languages;
 1. HTML5
 2. CSS
 3. JavaScript
 
 Coding of all three languages has been tested through validators and reports are shown below.

#### HTML Testing

![HTML](https://user-images.githubusercontent.com/91749477/148696327-358aec8e-d3fc-4722-94a7-058ef985efaf.png)


#### CSS Testing

![CSS](https://user-images.githubusercontent.com/91749477/148696314-dc178c63-71c3-4559-a8ae-c59b27bb0b7c.png)

#### JS Testing

![JSHINT](https://user-images.githubusercontent.com/91749477/148696339-28594435-d88f-496a-ad48-fdb83aceb192.png)



### Bugs and unfixed bugs

Here is the list of bugs found during running codes.

1. 4. computer-image and player images stacking on each other in Laptop screen
- Change property to 'display: inline-block'.
2. button were not iterable
- To sort out this I open console and done quite many changes to get it right, some of them are given below
  - changed id name and deleted duplicate id.
  - In Eventlistner changed let buttons = document.getElementsByTagName("button"); to let choices = document.getElementsByClassName("choices"); 
  - computerImage.src =`assets/images/${choices[computerChoice]}.png to computerSelection.setAttribute("src",`./assets/images/${compImage}.png`);
  - Renaming image file taking off numerical number and convering to png etc.
3. Player scores and computer scores was adding up togther on every click.
- reason were
  - I added incrementPlayerScore() and incrementComputerScore() into button event listener (so delete it both)
  - In compareSelection() along with result I added incrementComputerScore() where computer win and incrementPlayerScore where player wins. 
4. No rules were created to count tie match. 
 - draw function created 
5. results was showing undefine
 - added value 0 to span of h2 
 - Changing incrementPlayerScore = playerScore; to incrementPlayerScore.innerHTML = playerScore
 
6. ';' was missing in some code
 - correction done with help of console and JShint


##### Unfix bugs

Message for selection choice added up in last minute while completing readme file so can't be seen in images shared in this file.

## Deployment



The site was deployed to GitHub pages. The steps to deploy are as follows:


1. In the GitHub repository, navigate to the Settings tab
2. From the source section drop-down menu, select the Master Branch
3. Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.



## Credits


Here is the list of credits which helpls me to complete this webiste;

#### content


HTML structure and some of CSS style has been taken from game 'Rock, Paper and Scissor' of Code institute.


#### Images

All images has been taken from https://www.iconspng.com/images/rockpaperscissors/rockpaperscissors.jpg



### Acknowledgements

- My mentor Rohit for continous helpful feedback.
- Tutor support at Code Institute for their support.
