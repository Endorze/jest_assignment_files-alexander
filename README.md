Quiz-game of 5 questions about coffee.
Game starts with entering a valid player name.
When the game is started it repeats itself 5 times with a question with 4 alternatives to pick from.
When you click on a alternative button, it will show the correct answer in a different color and wrong ones in another.
When all questions is answered, it will show a result of your points, also a play again button.

![Quiz Screenshot 1](public/ss-1.png?raw=true)
![Quiz Screenshot 2](public/ss-2.png?raw=true)
![Quiz Screenshot 3](public/ss-3.png?raw=true)
![Quiz Screenshot 4](public/ss-4.png?raw=true)

_______________________________________________________

Test Feedback by Alexander Hallgren to Tobias

Nice job on the tests! It really doesn't feel like you've missed anything important.
That said, I did run into a bit of a challenge when building your app, mostly because of what I'd call a “flexibility issue”.

In a few spots, the tests are tied to very specific strings being in the DOM.
For example, in CreatePlayer.test.tsx the button has to say "Start game", otherwise the test fails.

I think a more flexible way would be to use mocked data, so you're just checking that a string is passed and rendered without caring about the exact wording.

Personally, I feel like components should be reusable in different places. By locking it to "Start game", you lose some of that reusability.
Like, what if you wanted to use the same button in a form, a call-to-action, or even something like "Move to my blog" the current test wouldn't allow that.

That being said, if your vision is that the button should always say "Start game" and never change, then it totally makes sense it's your product after all.

Other than that, I don't really have any negatives. 
The tests are solid, relatively easy to follow.