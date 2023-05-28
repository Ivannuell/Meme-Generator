let title = document.getElementById('title-page');



function clearAll() {
  while(document.querySelector('.media-content').firstChild){
    document.querySelector('.media-content').removeChild(document.querySelector('.media-content').firstChild);
  }
  
  document.getElementById('reveal').classList.add('hide');
}

function showMeme() {
  clearAll();
  
  title.innerHTML = "MEMES";

  const newImg = document.createElement('img');

  function assignObj(data) {
    const random = Math.floor(Math.random() * data.length);
    newImg.setAttribute('src', data[random].path);
    newImg.setAttribute('class', 'center');
    container.appendChild(newImg);
  }

  let myJSON = JSON.stringify(jsonData);
  localStorage.setItem("testJSON", myJSON);
  let text = localStorage.getItem("testJSON");
  let data = JSON.parse(text);
  assignObj(data.memes);

}

function showJoke() {
  clearAll();

  title.innerHTML = "JOKE";
  const container = document.querySelector('.media-content');
  const newCon = document.createElement('p');

  function assignObj(data) {
    const random = Math.floor(Math.random() * data.length);

    const joke = ' - ' + data[random].setup + '<br><br> - ' + data[random].punchline;
    newCon.setAttribute('id', 'joke');
    container.appendChild(newCon);
    document.getElementById('joke').innerHTML = joke;  
  }


  let myJSON = JSON.stringify(jsonData);
  localStorage.setItem("testJSON", myJSON);
  let text = localStorage.getItem("testJSON");
  let data = JSON.parse(text);
  assignObj(data.jokes);
  
}

function showQuote() {
  clearAll();

  title.innerHTML = "QUOTES";

  let quote;
  let author;
  const container = document.querySelector('.media-content');
  const newCon = document.createElement('p');
  
  let assignObj = function(data){
    const random = Math.floor(Math.random() * data.length);
    quote = data[random].en;
    author = data[random].author;

    let ranQuote = quote + "<br><br>" + ' - ' + author;
    newCon.setAttribute('id', 'cot')
    container.appendChild(newCon);
    document.getElementById('cot').innerHTML = ranQuote;
  }
  
  let myJSON = JSON.stringify(jsonData);
  localStorage.setItem("testJSON", myJSON);
  let text = localStorage.getItem("testJSON");
  let data = JSON.parse(text);
  assignObj(data.quotes);
}


function showRiddle() {
  clearAll();
  
  title.innerHTML = "RIDDLES";

  document.getElementById('reveal').classList.remove('hide');
  const container = document.querySelector('.media-content');
  const riddle = document.createElement('div');
  const answer = document.createElement('div');

  function assignObj(data) {
    const random = Math.floor(Math.random() * data.length);
    riddle.setAttribute('id', 'riddle');
    answer.setAttribute('id', 'answer');
    answer.setAttribute('class', 'hide');
    container.appendChild(riddle);
    container.appendChild(answer);
    document.getElementById('riddle').innerHTML = data[random].question;
    document.getElementById('answer').innerHTML = '<br><br>' + data[random].answer;
  }

  let myJSON = JSON.stringify(jsonData);
  localStorage.setItem("testJSON", myJSON);
  let text = localStorage.getItem("testJSON");
  let data = JSON.parse(text);
  assignObj(data.riddles);

}

function revealAnswers() {
  if(document.getElementById('answer').classList.contains('hide')){
    document.getElementById('answer').classList.remove('hide');
  } else {
    alert('You have already revealed the answer!');
  }
}



// The only way i think how to do a local storage is to create a new object and push it to the array

const jsonData =
{
   "jokes":[
  {
    "type": "general",
    "setup": "What did the fish say when it hit the wall?",
    "punchline": "Dam."
  },
  {
    "type": "general",
    "setup": "How do you make a tissue dance?",
    "punchline": "You put a little boogie on it."
  },
  {
    "type": "general",
    "setup": "What's Forrest Gump's password?",
    "punchline": "1Forrest1"
  },
  {
    "type": "general",
    "setup": "What do you call a belt made out of watches?",
    "punchline": "A waist of time."
  },
  {
    "type": "general",
    "setup": "Why can't bicycles stand on their own?",
    "punchline": "They are two tired"
  },
  {
    "type": "general",
    "setup": "How does a train eat?",
    "punchline": "It goes chew, chew"
  },
  {
    "type": "general",
    "setup": "What do you call a singing Laptop?",
    "punchline": "A Dell"
  },
  {
    "type": "general",
    "setup": "How many lips does a flower have?",
    "punchline": "Tulips"
  },
  {
    "type": "general",
    "setup": "How do you organize an outer space party?",
    "punchline": "You planet"
  },
  {
    "type": "general",
    "setup": "What kind of shoes does a thief wear?",
    "punchline": "Sneakers"
  },
  {
    "type": "general",
    "setup": "What's the best time to go to the dentist?",
    "punchline": "Tooth hurty."
  },
  {
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
    "punchline": "Never mind. It's pointless."
  },
  {
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
    "punchline": "No, cows go moo."
  },
  {
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
    "punchline": "I didn't know you could yodel!"
  },
  {
    "type": "programming",
    "setup": "What's the best thing about a Boolean?",
    "punchline": "Even if you're wrong, you're only off by a bit."
  },
  {
    "type": "programming",
    "setup": "What's the object-oriented way to become wealthy?",
    "punchline": "Inheritance"
  },
  {
    "type": "programming",
    "setup": "Where do programmers like to hangout?",
    "punchline": "The Foo Bar."
  },
  {
    "type": "programming",
    "setup": "Why did the programmer quit his job?",
    "punchline": "Because he didn't get arrays."
  },
  {
    "type": "general",
    "setup": "Did you hear about the two silk worms in a race?",
    "punchline": "It ended in a tie."
  },
  {
    "type": "general",
    "setup": "What do you call a laughing motorcycle?",
    "punchline": "A Yamahahahaha."
  },
  {
    "type": "general",
    "setup": "A termite walks into a bar and says...",
    "punchline": "'Where is the bar tended?'"
  },
  {
    "type": "general",
    "setup": "What does C.S. Lewis keep at the back of his wardrobe?",
    "punchline": "Narnia business!"
  },
  {
    "type": "programming",
    "setup": "Why do programmers always mix up Halloween and Christmas?",
    "punchline": "Because Oct 31 == Dec 25"
  },
  {
    "type": "programming",
    "setup": "A SQL query walks into a bar, walks up to two tables and asks...",
    "punchline": "'Can I join you?'"
  },
  {
    "type": "programming",
    "setup": "How many programmers does it take to change a lightbulb?",
    "punchline": "None that's a hardware problem"
  },
  {
    "type": "programming",
    "setup": "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
    "punchline": "the rest of them will write Perl"
  },
  {
    "type": "programming",
    "setup": "['hip', 'hip']",
    "punchline": "(hip hip array)"
  },
  {
    "type": "programming",
    "setup": "To understand what recursion is...",
    "punchline": "You must first understand what recursion is"
  },
  {
    "type": "programming",
    "setup": "There are 10 types of people in this world...",
    "punchline": "Those who understand binary and those who don't"
  },
  {
    "type": "general",
    "setup": "What did the duck say when he bought lipstick?",
    "punchline": "Put it on my bill"
  },
  {
    "type": "general",
    "setup": "What happens to a frog's car when it breaks down?",
    "punchline": "It gets toad away"
  },
  {
    "type": "general",
    "setup": "did you know the first French fries weren't cooked in France?",
    "punchline": "they were cooked in Greece"
  },
  {
    "type": "programming",
    "setup": "Which song would an exception sing?",
    "punchline": "Can't catch me - Avicii"
  },
  {
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n Opportunity.",
    "punchline": "That is impossible. Opportunity doesn’t come knocking twice!"
  },
  {
    "type": "programming",
    "setup": "Why do Java programmers wear glasses?",
    "punchline": "Because they don't C#."
  },
  {
    "type": "general",
    "setup": "Why did the mushroom get invited to the party?",
    "punchline": "Because he was a fungi."
  },
  {
    "type": "general",
    "setup": "Do you know what the word 'was' was initially?",
    "punchline": "Before was was was was was is."
  },
  {
    "type": "general",
    "setup": "I'm reading a book about anti-gravity...",
    "punchline": "It's impossible to put down"
  },
  {
    "type": "general",
    "setup": "If you're American when you go into the bathroom, and American when you come out, what are you when you're in there?",
    "punchline": "European"
  },
  {
    "type": "general",
    "setup": "Want to hear a joke about a piece of paper?",
    "punchline": "Never mind...it's tearable"
  },
  {
    "type": "general",
    "setup": "I just watched a documentary about beavers.",
    "punchline": "It was the best dam show I ever saw"
  },
  {
    "type": "general",
    "setup": "If you see a robbery at an Apple Store...",
    "punchline": "Does that make you an iWitness?"
  },
  {
    "type": "general",
    "setup": "A ham sandwhich walks into a bar and orders a beer. The bartender says...",
    "punchline": "I'm sorry, we don't serve food here"
  },
  {
    "type": "general",
    "setup": "Why did the Clydesdale give the pony a glass of water?",
    "punchline": "Because he was a little horse"
  },
  {
    "type": "general",
    "setup": "If you boil a clown...",
    "punchline": "Do you get a laughing stock?"
  },
  {
    "type": "general",
    "setup": "Finally realized why my plant sits around doing nothing all day...",
    "punchline": "He loves his pot."
  },
  {
    "type": "general",
    "setup": "Don't look at the eclipse through a colander.",
    "punchline": "You'll strain your eyes."
  },
  {
    "type": "general",
    "setup": "I bought some shoes from a drug dealer.",
    "punchline": "I don't know what he laced them with, but I was tripping all day!"
  },
  {
    "type": "general",
    "setup": "Why do chicken coops only have two doors?",
    "punchline": "Because if they had four, they would be chicken sedans"
  },
  {
    "type": "general",
    "setup": "What do you call a factory that sells passable products?",
    "punchline": "A satisfactory"
  },
  {
    "type": "general",
    "setup": "When a dad drives past a graveyard: Did you know that's a popular cemetery?",
    "punchline": "Yep, people are just dying to get in there"
  },
  {
    "type": "general",
    "setup": "Why did the invisible man turn down the job offer?",
    "punchline": "He couldn't see himself doing it"
  },
  {
    "type": "general",
    "setup": "How do you make holy water?",
    "punchline": "You boil the hell out of it"
  },
  {
    "type": "general",
    "setup": "I had a dream that I was a muffler last night.",
    "punchline": "I woke up exhausted!"
  },
  {
    "type": "general",
    "setup": "Why is peter pan always flying?",
    "punchline": "Because he neverlands"
  },
  {
    "type": "programming",
    "setup": "How do you check if a webpage is HTML5?",
    "punchline": "Try it out on Internet Explorer"
  },
  {
    "type": "general",
    "setup": "What do you call a cow with no legs?",
    "punchline": "Ground beef!"
  },
  {
    "type": "general",
    "setup": "I dropped a pear in my car this morning.",
    "punchline": "You should drop another one, then you would have a pair."
  },
  {
    "type": "programming",
    "setup": "Lady: How do I spread love in this cruel world?",
    "punchline": "Random Dude: [...💘]"
  },
  {
    "type": "programming",
    "setup": "A user interface is like a joke.",
    "punchline": "If you have to explain it then it is not that good."
  },
  {
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n Hatch. \n Hatch who?",
    "punchline": "Bless you!"
  },
  {
    "type": "general",
    "setup": "What do you call sad coffee?",
    "punchline": "Despresso."
  },
  {
    "type": "general",
    "setup": "Why did the butcher work extra hours at the shop?",
    "punchline": "To make ends meat."
  },
  {
    "type": "general",
    "setup": "Did you hear about the hungry clock?",
    "punchline": "It went back four seconds."
  },
  {
    "type": "general",
    "setup": "Well...",
    "punchline": "That’s a deep subject."
  },
  {
    "type": "general",
    "setup": "Did you hear the story about the cheese that saved the world?",
    "punchline": "It was legend dairy."
  },
  {
    "type": "general",
    "setup": "Did you watch the new comic book movie?",
    "punchline": "It was very graphic!"
  },
  {
    "type": "general",
    "setup": "I started a new business making yachts in my attic this year...",
    "punchline": "The sails are going through the roof."
  },
  {
    "type": "general",
    "setup": "I got hit in the head by a soda can, but it didn't hurt that much...",
    "punchline": "It was a soft drink."
  },
  {
    "type": "general",
    "setup": "I can't tell if i like this blender...",
    "punchline": "It keeps giving me mixed results."
  },
  {
    "type": "general",
    "setup": "I couldn't get a reservation at the library...",
    "punchline": "They were fully booked."
  },
  {
    "type": "programming",
    "setup": "I was gonna tell you a joke about UDP...",
    "punchline": "...but you might not get it."
  },
  {
    "type": "programming",
    "setup": "The punchline often arrives before the set-up.",
    "punchline": "Do you know the problem with UDP jokes?"
  },
  {
    "type": "programming",
    "setup": "Why do C# and Java developers keep breaking their keyboards?",
    "punchline": "Because they use a strongly typed language."
  },
  {
    "type": "general",
    "setup": "What do you give to a lemon in need?",
    "punchline": "Lemonaid."
  },
  {
    "type": "general",
    "setup": "Never take advice from electrons.",
    "punchline": "They are always negative."
  },
  {
    "type": "general",
    "setup": "Hey, dad, did you get a haircut?",
    "punchline": "No, I got them all cut."
  },
  {
    "type": "general",
    "setup": "What time is it?",
    "punchline": "I don't know... it keeps changing."
  },
  {
    "type": "general",
    "setup": "A weasel walks into a bar. The bartender says, \"Wow, I've never served a weasel before. What can I get for you?\"",
    "punchline": "Pop,goes the weasel."
  },
  {
    "type": "general",
    "setup": "Bad at golf?",
    "punchline": "Join the club."
  },
  {
    "type": "general",
    "setup": "Can a kangaroo jump higher than the Empire State Building?",
    "punchline": "Of course. The Empire State Building can't jump."
  },
  {
    "type": "general",
    "setup": "Can February march?",
    "punchline": "No, but April may."
  },
  {
    "type": "general",
    "setup": "Can I watch the TV?",
    "punchline": "Yes, but don’t turn it on."
  },
  {
    "type": "general",
    "setup": "Dad, can you put my shoes on?",
    "punchline": "I don't think they'll fit me."
  },
  {
    "type": "general",
    "setup": "Did you hear about the bread factory burning down?",
    "punchline": "They say the business is toast."
  },
  {
    "type": "general",
    "setup": "Did you hear about the chameleon who couldn't change color?",
    "punchline": "They had a reptile dysfunction."
  },
  {
    "type": "general",
    "setup": "Did you hear about the cheese factory that exploded in France?",
    "punchline": "There was nothing left but de Brie."
  },
  {
    "type": "general",
    "setup": "Did you hear about the cow who jumped over the barbed wire fence?",
    "punchline": "It was udder destruction."
  },
  {
    "type": "general",
    "setup": "Did you hear about the guy who invented Lifesavers?",
    "punchline": "They say he made a mint."
  },
  {
    "type": "general",
    "setup": "Did you hear about the guy whose whole left side was cut off?",
    "punchline": "He's all right now."
  },
  {
    "type": "general",
    "setup": "Did you hear about the kidnapping at school?",
    "punchline": "It's ok, he woke up."
  },
  {
    "type": "general",
    "setup": "Did you hear about the Mexican train killer?",
    "punchline": "He had loco motives"
  },
  {
    "type": "general",
    "setup": "Did you hear about the new restaurant on the moon?",
    "punchline": "The food is great, but there’s just no atmosphere."
  },
  {
    "type": "general",
    "setup": "Did you hear about the runner who was criticized?",
    "punchline": "He just took it in stride"
  },
  {
    "type": "general",
    "setup": "Did you hear about the scientist who was lab partners with a pot of boiling water?",
    "punchline": "He had a very esteemed colleague."
  },
  {
    "type": "general",
    "setup": "Did you hear about the submarine industry?",
    "punchline": "It really took a dive..."
  },
  {
    "type": "general",
    "setup": "Did you hear that David lost his ID in prague?",
    "punchline": "Now we just have to call him Dav."
  },
  {
    "type": "general",
    "setup": "Did you hear that the police have a warrant out on a midget psychic ripping people off?",
    "punchline": "It reads \"Small medium at large.\""
  },
  {
    "type": "general",
    "setup": "Did you hear the joke about the wandering nun?",
    "punchline": "She was a roman catholic."
  },
  {
    "type": "general",
    "setup": "Did you hear the news?",
    "punchline": "FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on."
  },
  {
    "type": "general",
    "setup": "Did you hear the one about the guy with the broken hearing aid?",
    "punchline": "Neither did he."
  },
  {
    "type": "general",
    "setup": "Did you know crocodiles could grow up to 15 feet?",
    "punchline": "But most just have 4."
  },
  {
    "type": "general",
    "setup": "What do ghosts call their true love?",
    "punchline": "Their ghoul-friend"
  },
  {
    "type": "general",
    "setup": "Did you know that protons have mass?",
    "punchline": "I didn't even know they were catholic."
  },
  {
    "type": "general",
    "setup": "Did you know you should always take an extra pair of pants golfing?",
    "punchline": "Just in case you get a hole in one."
  },
  {
    "type": "general",
    "setup": "Do I enjoy making courthouse puns?",
    "punchline": "Guilty"
  },
  {
    "type": "general",
    "setup": "Do you know where you can get chicken broth in bulk?",
    "punchline": "The stock market."
  },
  {
    "type": "general",
    "setup": "Do you want a brief explanation of what an acorn is?",
    "punchline": "In a nutshell, it's an oak tree."
  },
  {
    "type": "general",
    "setup": "Ever wondered why bees hum?",
    "punchline": "It's because they don't know the words."
  },
  {
    "type": "general",
    "setup": "Have you ever heard of a music group called Cellophane?",
    "punchline": "They mostly wrap."
  },
  {
    "type": "general",
    "setup": "Have you heard of the band 1023MB?",
    "punchline": "They haven't got a gig yet."
  },
  {
    "type": "general",
    "setup": "Have you heard the rumor going around about butter?",
    "punchline": "Never mind, I shouldn't spread it."
  },
  {
    "type": "general",
    "setup": "How are false teeth like stars?",
    "punchline": "They come out at night!"
  },
  {
    "type": "general",
    "setup": "How can you tell a vampire has a cold?",
    "punchline": "They start coffin."
  },
  {
    "type": "general",
    "setup": "How come a man driving a train got struck by lightning?",
    "punchline": "He was a good conductor."
  },
  {
    "type": "general",
    "setup": "How come the stadium got hot after the game?",
    "punchline": "Because all of the fans left."
  },
  {
    "type": "general",
    "setup": "How did Darth Vader know what Luke was getting for Christmas?",
    "punchline": "He felt his presents."
  },
  {
    "type": "general",
    "setup": "How did the hipster burn the roof of his mouth?",
    "punchline": "He ate the pizza before it was cool."
  },
  {
    "type": "general",
    "setup": "How do hens stay fit?",
    "punchline": "They always egg-cercise!"
  },
  {
    "type": "general",
    "setup": "How do locomotives know where they're going?",
    "punchline": "Lots of training"
  },
  {
    "type": "general",
    "setup": "How do the trees get on the internet?",
    "punchline": "They log on."
  },
  {
    "type": "general",
    "setup": "How do you find Will Smith in the snow?",
    "punchline": " Look for fresh prints."
  },
  {
    "type": "general",
    "setup": "How do you fix a broken pizza?",
    "punchline": "With tomato paste."
  },
  {
    "type": "general",
    "setup": "How do you fix a damaged jack-o-lantern?",
    "punchline": "You use a pumpkin patch."
  },
  {
    "type": "general",
    "setup": "How do you get a baby alien to sleep?",
    "punchline": " You rocket."
  },
  {
    "type": "general",
    "setup": "How do you get two whales in a car?",
    "punchline": "Start in England and drive West."
  },
  {
    "type": "general",
    "setup": "How do you know if there’s an elephant under your bed?",
    "punchline": "Your head hits the ceiling!"
  },
  {
    "type": "general",
    "setup": "How do you make a hankie dance?",
    "punchline": "Put a little boogie in it."
  },
  {
    "type": "general",
    "setup": "How good are you at Power Point?",
    "punchline": "I Excel at it."
  },
  {
    "type": "general",
    "setup": "How do you organize a space party?",
    "punchline": "You planet."
  },
  {
    "type": "general",
    "setup": "How do you steal a coat?",
    "punchline": "You jacket."
  },
  {
    "type": "general",
    "setup": "How do you tell the difference between a crocodile and an alligator?",
    "punchline": "You will see one later and one in a while."
  },
  {
    "type": "general",
    "setup": "How does a dyslexic poet write?",
    "punchline": "Inverse."
  },
  {
    "type": "general",
    "setup": "How does a French skeleton say hello?",
    "punchline": "Bone-jour."
  },
  {
    "type": "general",
    "setup": "How does a penguin build it’s house?",
    "punchline": "Igloos it together."
  },
  {
    "type": "general",
    "setup": "How does a scientist freshen their breath?",
    "punchline": "With experi-mints!"
  },
  {
    "type": "general",
    "setup": "How does the moon cut his hair?",
    "punchline": "Eclipse it."
  },
  {
    "type": "general",
    "setup": "How many apples grow on a tree?",
    "punchline": "All of them!"
  },
  {
    "type": "general",
    "setup": "How many bones are in the human hand?",
    "punchline": "A handful of them."
  },
  {
    "type": "general",
    "setup": "How many hipsters does it take to change a lightbulb?",
    "punchline": "Oh, it's a really obscure number. You've probably never heard of it."
  },
  {
    "type": "general",
    "setup": "How many kids with ADD does it take to change a lightbulb?",
    "punchline": "Let's go ride bikes!"
  },
  {
    "type": "general",
    "setup": "How many optometrists does it take to change a light bulb?",
    "punchline": "1 or 2? 1... or 2?"
  },
  {
    "type": "general",
    "setup": "How many seconds are in a year?",
    "punchline": "12. January 2nd, February 2nd, March 2nd, April 2nd.... etc"
  },
  {
    "type": "general",
    "setup": "How many South Americans does it take to change a lightbulb?",
    "punchline": "A Brazilian"
  },
  {
    "type": "general",
    "setup": "How many tickles does it take to tickle an octopus?",
    "punchline": "Ten-tickles!"
  },
  {
    "type": "general",
    "setup": "How much does a hipster weigh?",
    "punchline": "An instagram."
  },
  {
    "type": "general",
    "setup": "How was the snow globe feeling after the storm?",
    "punchline": "A little shaken."
  },
  {
    "type": "general",
    "setup": "Is the pool safe for diving?",
    "punchline": "It deep ends."
  },
  {
    "type": "general",
    "setup": "Is there a hole in your shoe?",
    "punchline": "No… Then how’d you get your foot in it?"
  },
  {
    "type": "general",
    "setup": "What did the spaghetti say to the other spaghetti?",
    "punchline": "Pasta la vista, baby!"
  },
  {
    "type": "general",
    "setup": "What’s 50 Cent’s name in Zimbabwe?",
    "punchline": "200 Dollars."
  },
  {
    "type": "general",
    "setup": "Want to hear a chimney joke?",
    "punchline": "Got stacks of em! First one's on the house"
  },
  {
    "type": "general",
    "setup": "Want to hear a joke about construction?",
    "punchline": "Nah, I'm still working on it."
  },
  {
    "type": "general",
    "setup": "Want to hear my pizza joke?",
    "punchline": "Never mind, it's too cheesy."
  },
  {
    "type": "general",
    "setup": "What animal is always at a game of cricket?",
    "punchline": "A bat."
  },
  {
    "type": "general",
    "setup": "What are the strongest days of the week?",
    "punchline": "Saturday and Sunday...the rest are weekdays."
  },
  {
    "type": "general",
    "setup": "What biscuit does a short person like?",
    "punchline": "Shortbread. "
  },
  {
    "type": "general",
    "setup": "What cheese can never be yours?",
    "punchline": "Nacho cheese."
  },
  {
    "type": "general",
    "setup": "What creature is smarter than a talking parrot?",
    "punchline": "A spelling bee."
  },
  {
    "type": "general",
    "setup": "What did celery say when he broke up with his girlfriend?",
    "punchline": "She wasn't right for me, so I really don't carrot all."
  },
  {
    "type": "general",
    "setup": "What did Michael Jackson name his denim store?",
    "punchline": "   Billy Jeans!"
  },
  {
    "type": "general",
    "setup": "What did one nut say as he chased another nut?",
    "punchline": " I'm a cashew!"
  },
  {
    "type": "general",
    "setup": "What did one plate say to the other plate?",
    "punchline": "Dinner is on me!"
  },
  {
    "type": "general",
    "setup": "What did one snowman say to the other snow man?",
    "punchline": "Do you smell carrot?"
  },
  {
    "type": "general",
    "setup": "What did one wall say to the other wall?",
    "punchline": "I'll meet you at the corner!"
  },
  {
    "type": "general",
    "setup": "What did Romans use to cut pizza before the rolling cutter was invented?",
    "punchline": "Lil Caesars"
  },
  {
    "type": "general",
    "setup": "What did the 0 say to the 8?",
    "punchline": "Nice belt."
  },
  {
    "type": "general",
    "setup": "What did the beaver say to the tree?",
    "punchline": "It's been nice gnawing you."
  },
  {
    "type": "general",
    "setup": "What did the big flower say to the littler flower?",
    "punchline": "Hi, bud!"
  },
  {
    "type": "general",
    "setup": "What did the Buffalo say to his little boy when he dropped him off at school?",
    "punchline": "Bison."
  },
  {
    "type": "general",
    "setup": "What did the digital clock say to the grandfather clock?",
    "punchline": "Look, no hands!"
  },
  {
    "type": "general",
    "setup": "What did the dog say to the two trees?",
    "punchline": "Bark bark."
  },
  {
    "type": "general",
    "setup": "What did the Dorito farmer say to the other Dorito farmer?",
    "punchline": "Cool Ranch!"
  },
  {
    "type": "general",
    "setup": "What did the fish say when it swam into a wall?",
    "punchline": "Damn!"
  },
  {
    "type": "general",
    "setup": "What did the grape do when he got stepped on?",
    "punchline": "He let out a little wine."
  },
  {
    "type": "general",
    "setup": "What did the judge say to the dentist?",
    "punchline": "Do you swear to pull the tooth, the whole tooth and nothing but the tooth?"
  },
  {
    "type": "general",
    "setup": "What did the late tomato say to the early tomato?",
    "punchline": "I’ll ketch up"
  },
  {
    "type": "general",
    "setup": "What did the left eye say to the right eye?",
    "punchline": "Between us, something smells!"
  },
  {
    "type": "general",
    "setup": "What did the mountain climber name his son?",
    "punchline": "Cliff."
  },
  {
    "type": "general",
    "setup": "What did the ocean say to the beach?",
    "punchline": "Thanks for all the sediment."
  },
  {
    "type": "general",
    "setup": "What did the ocean say to the shore?",
    "punchline": "Nothing, it just waved."
  },
  {
    "type": "general",
    "setup": "Why don't you find hippopotamuses hiding in trees?",
    "punchline": "They're really good at it."
  },
  {
    "type": "general",
    "setup": "What did the pirate say on his 80th birthday?",
    "punchline": "Aye Matey!"
  },
  {
    "type": "general",
    "setup": "What did the Red light say to the Green light?",
    "punchline": "Don't look at me I'm changing!"
  },
  {
    "type": "general",
    "setup": "What did the scarf say to the hat?",
    "punchline": "You go on ahead, I am going to hang around a bit longer."
  },
  {
    "type": "general",
    "setup": "What did the shy pebble wish for?",
    "punchline": "That she was a little boulder."
  },
  {
    "type": "general",
    "setup": "What did the traffic light say to the car as it passed?",
    "punchline": "Don't look I'm changing!"
  },
  {
    "type": "general",
    "setup": "What did the Zen Buddist say to the hotdog vendor?",
    "punchline": "Make me one with everything."
  },
  {
    "type": "general",
    "setup": "What do birds give out on Halloween?",
    "punchline": "Tweets."
  },
  {
    "type": "general",
    "setup": "What do I look like?",
    "punchline": "A JOKE MACHINE!?"
  },
  {
    "type": "general",
    "setup": "What do prisoners use to call each other?",
    "punchline": "Cell phones."
  },
  {
    "type": "general",
    "setup": "What do vegetarian zombies eat?",
    "punchline": "Grrrrrainnnnnssss."
  },
  {
    "type": "general",
    "setup": "What do you call a bear with no teeth?",
    "punchline": "A gummy bear!"
  },
  {
    "type": "general",
    "setup": "What do you call a bee that lives in America?",
    "punchline": "A USB."
  },
  {
    "type": "general",
    "setup": "What do you call a boomerang that won't come back?",
    "punchline": "A stick."
  },
  {
    "type": "general",
    "setup": "What do you call a careful wolf?",
    "punchline": "Aware wolf."
  },
  {
    "type": "general",
    "setup": "What do you call a cow on a trampoline?",
    "punchline": "A milk shake!"
  },
  {
    "type": "general",
    "setup": "What do you call a cow with two legs?",
    "punchline": "Lean beef."
  },
  {
    "type": "general",
    "setup": "What do you call a crowd of chess players bragging about their wins in a hotel lobby?",
    "punchline": "Chess nuts boasting in an open foyer."
  },
  {
    "type": "general",
    "setup": "What do you call a dad that has fallen through the ice?",
    "punchline": "A Popsicle."
  },
  {
    "type": "general",
    "setup": "What do you call a dictionary on drugs?",
    "punchline": "High definition."
  },
  {
    "type": "general",
    "setup": "what do you call a dog that can do magic tricks?",
    "punchline": "a labracadabrador"
  },
  {
    "type": "general",
    "setup": "What do you call a droid that takes the long way around?",
    "punchline": "R2 detour."
  },
  {
    "type": "general",
    "setup": "What do you call a duck that gets all A's?",
    "punchline": "A wise quacker."
  },
  {
    "type": "general",
    "setup": "What do you call a fake noodle?",
    "punchline": "An impasta."
  },
  {
    "type": "general",
    "setup": "What do you call a fashionable lawn statue with an excellent sense of rhythmn?",
    "punchline": "A metro-gnome"
  },
  {
    "type": "general",
    "setup": "What do you call a fat psychic?",
    "punchline": "A four-chin teller."
  },
  {
    "type": "general",
    "setup": "What do you call a fly without wings?",
    "punchline": "A walk."
  },
  {
    "type": "general",
    "setup": "What do you call a girl between two posts?",
    "punchline": "Annette."
  },
  {
    "type": "general",
    "setup": "What do you call a group of disorganized cats?",
    "punchline": "A cat-tastrophe."
  },
  {
    "type": "general",
    "setup": "What do you call a group of killer whales playing instruments?",
    "punchline": "An Orca-stra."
  },
  {
    "type": "general",
    "setup": "What do you call a monkey in a mine field?",
    "punchline": "A babooooom!"
  },
  {
    "type": "general",
    "setup": "What do you call a nervous javelin thrower?",
    "punchline": "Shakespeare."
  },
  {
    "type": "general",
    "setup": "What do you call a pig that knows karate?",
    "punchline": "A pork chop!"
  },
  {
    "type": "general",
    "setup": "What do you call a pig with three eyes?",
    "punchline": "Piiig"
  },
  {
    "type": "general",
    "setup": "What do you call a pile of cats?",
    "punchline": " A Meowtain."
  },
  {
    "type": "general",
    "setup": "What do you call a sheep with no legs?",
    "punchline": "A cloud."
  },
  {
    "type": "general",
    "setup": "What do you call a troublesome Canadian high schooler?",
    "punchline": "A poutine."
  },
  {
    "type": "general",
    "setup": "What do you call an alligator in a vest?",
    "punchline": "An in-vest-igator!"
  },
  {
    "type": "general",
    "setup": "What do you call an Argentinian with a rubber toe?",
    "punchline": "Roberto"
  },
  {
    "type": "general",
    "setup": "What do you call an eagle who can play the piano?",
    "punchline": "Talonted!"
  },
  {
    "type": "general",
    "setup": "What do you call an elephant that doesn’t matter?",
    "punchline": "An irrelephant."
  },
  {
    "type": "general",
    "setup": "What do you call an old snowman?",
    "punchline": "Water."
  },
  {
    "type": "general",
    "setup": "What do you call cheese by itself?",
    "punchline": "Provolone."
  },
  {
    "type": "general",
    "setup": "What do you call corn that joins the army?",
    "punchline": "Kernel."
  },
  {
    "type": "general",
    "setup": "What do you call someone with no nose?",
    "punchline": "Nobody knows."
  },
  {
    "type": "general",
    "setup": "What do you call two barracuda fish?",
    "punchline": " A Pairacuda!"
  },
  {
    "type": "general",
    "setup": "What do you do on a remote island?",
    "punchline": "Try and find the TV island it belongs to."
  },
  {
    "type": "general",
    "setup": "What do you do when you see a space man?",
    "punchline": "Park your car, man."
  },
  {
    "type": "general",
    "setup": "What do you get hanging from Apple trees?",
    "punchline": "Sore arms."
  },
  {
    "type": "general",
    "setup": "What do you get when you cross a bee and a sheep?",
    "punchline": "A bah-humbug."
  },
  {
    "type": "general",
    "setup": "What do you get when you cross a chicken with a skunk?",
    "punchline": "A fowl smell!"
  },
  {
    "type": "general",
    "setup": "What do you get when you cross a rabbit with a water hose?",
    "punchline": "Hare spray."
  },
  {
    "type": "general",
    "setup": "What do you get when you cross a snowman with a vampire?",
    "punchline": "Frostbite."
  },
  {
    "type": "general",
    "setup": "What do you give a sick lemon?",
    "punchline": "Lemonaid."
  },
  {
    "type": "general",
    "setup": "What does a clock do when it's hungry?",
    "punchline": "It goes back four seconds!"
  },
  {
    "type": "general",
    "setup": "What does a female snake use for support?",
    "punchline": "A co-Bra!"
  },
  {
    "type": "general",
    "setup": "What does a pirate pay for his corn?",
    "punchline": "A buccaneer!"
  },
  {
    "type": "general",
    "setup": "What does an angry pepper do?",
    "punchline": "It gets jalapeño face."
  },
  {
    "type": "general",
    "setup": "What happens when you anger a brain surgeon?",
    "punchline": "They will give you a piece of your mind."
  },
  {
    "type": "general",
    "setup": "What has ears but cannot hear?",
    "punchline": "A field of corn."
  },
  {
    "type": "general",
    "setup": "What is a centipedes's favorite Beatle song?",
    "punchline": " I want to hold your hand, hand, hand, hand..."
  },
  {
    "type": "general",
    "setup": "What is a tornado's favorite game to play?",
    "punchline": "Twister!"
  },
  {
    "type": "general",
    "setup": "What is a vampire's favorite fruit?",
    "punchline": "A blood orange."
  },
  {
    "type": "general",
    "setup": "What is a witch's favorite subject in school?",
    "punchline": "Spelling!"
  },
  {
    "type": "general",
    "setup": "What is red and smells like blue paint?",
    "punchline": "Red paint!"
  },
  {
    "type": "general",
    "setup": "What is the difference between ignorance and apathy?",
    "punchline": "I don't know and I don't care."
  },
  {
    "type": "general",
    "setup": "What is the hardest part about sky diving?",
    "punchline": "The ground."
  },
  {
    "type": "general",
    "setup": "What is the leading cause of dry skin?",
    "punchline": "Towels"
  },
  {
    "type": "general",
    "setup": "What is the least spoken language in the world?",
    "punchline": "Sign Language"
  },
  {
    "type": "general",
    "setup": "What is the tallest building in the world?",
    "punchline": "The library, it’s got the most stories!"
  },
  {
    "type": "general",
    "setup": "What is this movie about?",
    "punchline": "It is about 2 hours long."
  },
  {
    "type": "general",
    "setup": "What kind of award did the dentist receive?",
    "punchline": "A little plaque."
  },
  {
    "type": "general",
    "setup": "What kind of bagel can fly?",
    "punchline": "A plain bagel."
  },
  {
    "type": "general",
    "setup": "What kind of dinosaur loves to sleep?",
    "punchline": "A stega-snore-us."
  },
  {
    "type": "general",
    "setup": "What kind of dog lives in a particle accelerator?",
    "punchline": "A Fermilabrador Retriever."
  },
  {
    "type": "general",
    "setup": "What kind of magic do cows believe in?",
    "punchline": "MOODOO."
  },
  {
    "type": "general",
    "setup": "What kind of music do planets listen to?",
    "punchline": "Nep-tunes."
  },
  {
    "type": "general",
    "setup": "What kind of pants do ghosts wear?",
    "punchline": "Boo jeans."
  },
  {
    "type": "general",
    "setup": "What kind of tree fits in your hand?",
    "punchline": "A palm tree!"
  },
  {
    "type": "general",
    "setup": "What lies at the bottom of the ocean and twitches?",
    "punchline": "A nervous wreck."
  },
  {
    "type": "general",
    "setup": "What musical instrument is found in the bathroom?",
    "punchline": "A tuba toothpaste."
  },
  {
    "type": "general",
    "setup": "What time did the man go to the dentist?",
    "punchline": "Tooth hurt-y."
  },
  {
    "type": "general",
    "setup": "What type of music do balloons hate?",
    "punchline": "Pop music!"
  },
  {
    "type": "general",
    "setup": "What was a more important invention than the first telephone?",
    "punchline": "The second one."
  },
  {
    "type": "general",
    "setup": "What was the pumpkin’s favorite sport?",
    "punchline": "Squash."
  },
  {
    "type": "general",
    "setup": "What's black and white and read all over?",
    "punchline": "The newspaper."
  },
  {
    "type": "general",
    "setup": "What's blue and not very heavy?",
    "punchline": " Light blue."
  },
  {
    "type": "general",
    "setup": "What's brown and sticky?",
    "punchline": "A stick."
  },
  {
    "type": "general",
    "setup": "What's orange and sounds like a parrot?",
    "punchline": "A Carrot."
  },
  {
    "type": "general",
    "setup": "What's red and bad for your teeth?",
    "punchline": "A Brick."
  },
  {
    "type": "general",
    "setup": "What's the best thing about elevator jokes?",
    "punchline": "They work on so many levels."
  },
  {
    "type": "general",
    "setup": "What's the difference between a guitar and a fish?",
    "punchline": "You can tune a guitar but you can't \"tuna\"fish!"
  },
  {
    "type": "general",
    "setup": "What's the difference between a hippo and a zippo?",
    "punchline": "One is really heavy, the other is a little lighter."
  },
  {
    "type": "general",
    "setup": "What's the difference between a seal and a sea lion?",
    "punchline": "An ion! "
  },
  {
    "type": "general",
    "setup": "What's the worst part about being a cross-eyed teacher?",
    "punchline": "They can't control their pupils."
  },
  {
    "type": "general",
    "setup": "What's the worst thing about ancient history class?",
    "punchline": "The teachers tend to Babylon."
  },
  {
    "type": "general",
    "setup": "What’s brown and sounds like a bell?",
    "punchline": "Dung!"
  },
  {
    "type": "general",
    "setup": "What’s E.T. short for?",
    "punchline": "He’s only got little legs."
  },
  {
    "type": "general",
    "setup": "What’s Forest Gump’s Facebook password?",
    "punchline": "1forest1"
  },
  {
    "type": "general",
    "setup": "What’s the advantage of living in Switzerland?",
    "punchline": "Well, the flag is a big plus."
  },
  {
    "type": "general",
    "setup": "What’s the difference between an African elephant and an Indian elephant?",
    "punchline": "About 5000 miles."
  },
  {
    "type": "general",
    "setup": "When do doctors get angry?",
    "punchline": "When they run out of patients."
  },
  {
    "type": "general",
    "setup": "When does a joke become a dad joke?",
    "punchline": "When it becomes apparent."
  },
  {
    "type": "general",
    "setup": "When is a door not a door?",
    "punchline": "When it's ajar."
  },
  {
    "type": "general",
    "setup": "Where did you learn to make ice cream?",
    "punchline": "Sunday school."
  },
  {
    "type": "general",
    "setup": "Where do bees go to the bathroom?",
    "punchline": " The BP station."
  },
  {
    "type": "general",
    "setup": "Where do hamburgers go to dance?",
    "punchline": "The meat-ball."
  },
  {
    "type": "general",
    "setup": "Where do rabbits go after they get married?",
    "punchline": "On a bunny-moon."
  },
  {
    "type": "general",
    "setup": "Where do sheep go to get their hair cut?",
    "punchline": "The baa-baa shop."
  },
  {
    "type": "general",
    "setup": "Where do you learn to make banana splits?",
    "punchline": "At sundae school."
  },
  {
    "type": "general",
    "setup": "Where do young cows eat lunch?",
    "punchline": "In the calf-ateria."
  },
  {
    "type": "general",
    "setup": "Where does batman go to the bathroom?",
    "punchline": "The batroom."
  },
  {
    "type": "general",
    "setup": "Where does Fonzie like to go for lunch?",
    "punchline": "Chick-Fil-Eyyyyyyyy."
  },
  {
    "type": "general",
    "setup": "Where does Napoleon keep his armies?",
    "punchline": "In his sleevies."
  },
  {
    "type": "general",
    "setup": "Where was the Declaration of Independence signed?",
    "punchline": "At the bottom! "
  },
  {
    "type": "general",
    "setup": "Where’s the bin?",
    "punchline": "I haven’t been anywhere!"
  },
  {
    "type": "general",
    "setup": "Which side of the chicken has more feathers?",
    "punchline": "The outside."
  },
  {
    "type": "general",
    "setup": "Who did the wizard marry?",
    "punchline": "His ghoul-friend"
  },
  {
    "type": "general",
    "setup": "Who is the coolest Doctor in the hospital?",
    "punchline": "The hip Doctor!"
  },
  {
    "type": "general",
    "setup": "Why are fish easy to weigh?",
    "punchline": "Because they have their own scales."
  },
  {
    "type": "general",
    "setup": "Why are fish so smart?",
    "punchline": "Because they live in schools!"
  },
  {
    "type": "general",
    "setup": "Why are ghosts bad liars?",
    "punchline": "Because you can see right through them!"
  },
  {
    "type": "general",
    "setup": "Why are graveyards so noisy?",
    "punchline": "Because of all the coffin."
  },
  {
    "type": "general",
    "setup": "Why are mummys scared of vacation?",
    "punchline": "They're afraid to unwind."
  },
  {
    "type": "general",
    "setup": "Why are oranges the smartest fruit?",
    "punchline": "Because they are made to concentrate. "
  },
  {
    "type": "general",
    "setup": "Why are pirates called pirates?",
    "punchline": "Because they arrr!"
  },
  {
    "type": "general",
    "setup": "Why are skeletons so calm?",
    "punchline": "Because nothing gets under their skin."
  },
  {
    "type": "general",
    "setup": "Why can't a bicycle stand on its own?",
    "punchline": "It's two-tired."
  },
  {
    "type": "general",
    "setup": "Why can't you use \"Beef stew\"as a password?",
    "punchline": "Because it's not stroganoff."
  },
  {
    "type": "general",
    "setup": "Why can't your nose be 12 inches long?",
    "punchline": "Because then it'd be a foot!"
  },
  {
    "type": "general",
    "setup": "Why can’t you hear a pterodactyl go to the bathroom?",
    "punchline": "The p is silent."
  },
  {
    "type": "general",
    "setup": "Why couldn't the kid see the pirate movie?",
    "punchline": "Because it was rated arrr!"
  },
  {
    "type": "general",
    "setup": "Why couldn't the lifeguard save the hippie?",
    "punchline": "He was too far out, man."
  },
  {
    "type": "general",
    "setup": "Why did Dracula lie in the wrong coffin?",
    "punchline": "He made a grave mistake."
  },
  {
    "type": "general",
    "setup": "Why did Sweden start painting barcodes on the sides of their battleships?",
    "punchline": "So they could Scandinavian."
  },
  {
    "type": "general",
    "setup": "Why did the A go to the bathroom and come out as an E?",
    "punchline": "Because he had a vowel movement."
  },
  {
    "type": "general",
    "setup": "Why did the barber win the race?",
    "punchline": "He took a short cut."
  },
  {
    "type": "general",
    "setup": "Why did the belt go to prison?",
    "punchline": "He held up a pair of pants!"
  },
  {
    "type": "general",
    "setup": "Why did the burglar hang his mugshot on the wall?",
    "punchline": "To prove that he was framed!"
  },
  {
    "type": "general",
    "setup": "Why did the chicken get a penalty?",
    "punchline": "For fowl play."
  },
  {
    "type": "general",
    "setup": "Why did the coffee file a police report?",
    "punchline": "It got mugged."
  },
  {
    "type": "general",
    "setup": "Why did the cookie cry?",
    "punchline": "Because his mother was a wafer so long"
  },
  {
    "type": "general",
    "setup": "Why did the cookie cry?",
    "punchline": "It was feeling crumby."
  },
  {
    "type": "general",
    "setup": "Why did the cowboy have a weiner dog?",
    "punchline": "Somebody told him to get a long little doggy."
  },
  {
    "type": "general",
    "setup": "Why did the fireman wear red, white, and blue suspenders?",
    "punchline": "To hold his pants up."
  },
  {
    "type": "general",
    "setup": "Why did the girl smear peanut butter on the road?",
    "punchline": "To go with the traffic jam."
  },
  {
    "type": "general",
    "setup": "Why did the half blind man fall in the well?",
    "punchline": "Because he couldn't see that well!"
  },
  {
    "type": "general",
    "setup": "Why did the house go to the doctor?",
    "punchline": "It was having window panes."
  },
  {
    "type": "general",
    "setup": "Why did the kid cross the playground?",
    "punchline": "To get to the other slide."
  },
  {
    "type": "general",
    "setup": "Why did the man put his money in the freezer?",
    "punchline": "He wanted cold hard cash!"
  },
  {
    "type": "general",
    "setup": "Why did the man run around his bed?",
    "punchline": "Because he was trying to catch up on his sleep!"
  },
  {
    "type": "general",
    "setup": "Why did the melons plan a big wedding?",
    "punchline": "Because they cantaloupe!"
  },
  {
    "type": "general",
    "setup": "Why did the octopus beat the shark in a fight?",
    "punchline": "Because it was well armed."
  },
  {
    "type": "general",
    "setup": "Why did the opera singer go sailing?",
    "punchline": "They wanted to hit the high Cs."
  },
  {
    "type": "general",
    "setup": "Why did the scarecrow win an award?",
    "punchline": "Because he was outstanding in his field."
  },
  {
    "type": "general",
    "setup": "Why did the tomato blush?",
    "punchline": "Because it saw the salad dressing."
  },
  {
    "type": "general",
    "setup": "Why did the tree go to the dentist?",
    "punchline": "It needed a root canal."
  },
  {
    "type": "general",
    "setup": "Why did the worker get fired from the orange juice factory?",
    "punchline": "Lack of concentration."
  },
  {
    "type": "general",
    "setup": "Why didn't the number 4 get into the nightclub?",
    "punchline": "Because he is 2 square."
  },
  {
    "type": "general",
    "setup": "Why didn’t the orange win the race?",
    "punchline": "It ran out of juice."
  },
  {
    "type": "general",
    "setup": "Why didn’t the skeleton cross the road?",
    "punchline": "Because he had no guts."
  },
  {
    "type": "general",
    "setup": "Why do bananas have to put on sunscreen before they go to the beach?",
    "punchline": "Because they might peel!"
  },
  {
    "type": "general",
    "setup": "Why do bears have hairy coats?",
    "punchline": "Fur protection."
  },
  {
    "type": "general",
    "setup": "Why do bees have sticky hair?",
    "punchline": "Because they use honey combs!"
  },
  {
    "type": "general",
    "setup": "Why do bees hum?",
    "punchline": "Because they don't know the words."
  },
  {
    "type": "general",
    "setup": "Why do birds fly south for the winter?",
    "punchline": "Because it's too far to walk."
  },
  {
    "type": "general",
    "setup": "Why do choirs keep buckets handy?",
    "punchline": "So they can carry their tune"
  },
  {
    "type": "general",
    "setup": "Why do crabs never give to charity?",
    "punchline": "Because they’re shellfish."
  },
  {
    "type": "general",
    "setup": "Why do ducks make great detectives?",
    "punchline": "They always quack the case."
  },
  {
    "type": "general",
    "setup": "Why do mathematicians hate the U.S.?",
    "punchline": "Because it's indivisible."
  },
  {
    "type": "general",
    "setup": "Why do pirates not know the alphabet?",
    "punchline": "They always get stuck at \"C\"."
  },
  {
    "type": "general",
    "setup": "Why do pumpkins sit on people’s porches?",
    "punchline": "They have no hands to knock on the door."
  },
  {
    "type": "general",
    "setup": "Why do scuba divers fall backwards into the water?",
    "punchline": "Because if they fell forwards they’d still be in the boat."
  },
  {
    "type": "general",
    "setup": "Why do trees seem suspicious on sunny days?",
    "punchline": "Dunno, they're just a bit shady."
  },
  {
    "type": "general",
    "setup": "Why do valley girls hang out in odd numbered groups?",
    "punchline": "Because they can't even."
  },
  {
    "type": "general",
    "setup": "Why do wizards clean their teeth three times a day?",
    "punchline": "To prevent bat breath!"
  },
  {
    "type": "general",
    "setup": "Why do you never see elephants hiding in trees?",
    "punchline": "Because they're so good at it."
  },
  {
    "type": "general",
    "setup": "Why does a chicken coop only have two doors?",
    "punchline": "Because if it had four doors it would be a chicken sedan."
  },
  {
    "type": "general",
    "setup": "Why does a Moon-rock taste better than an Earth-rock?",
    "punchline": "Because it's a little meteor."
  },
  {
    "type": "general",
    "setup": "Why does it take longer to get from 1st to 2nd base, than it does to get from 2nd to 3rd base?",
    "punchline": "Because there’s a Shortstop in between!"
  },
  {
    "type": "general",
    "setup": "Why does Norway have barcodes on their battleships?",
    "punchline": "So when they get back to port, they can Scandinavian."
  },
  {
    "type": "general",
    "setup": "Why does Superman get invited to dinners?",
    "punchline": "Because he is a Supperhero."
  },
  {
    "type": "general",
    "setup": "Why does Waldo only wear stripes?",
    "punchline": "Because he doesn't want to be spotted."
  },
  {
    "type": "programming",
    "setup": "Knock-knock.",
    "punchline": "A race condition. Who is there?"
  },
  {
    "type": "programming",
    "setup": "What's the best part about TCP jokes?",
    "punchline": "I get to keep telling them until you get them."
  },
  {
    "type": "programming",
    "setup": "A programmer puts two glasses on his bedside table before going to sleep.",
    "punchline": "A full one, in case he gets thirsty, and an empty one, in case he doesn’t."
  },
  {
    "type": "programming",
    "setup": "There are 10 kinds of people in this world.",
    "punchline": "Those who understand binary, those who don't, and those who weren't expecting a base 3 joke."
  },
  {
    "type": "general",
    "setup": "Two guys walk into a bar . . .",
    "punchline": "The first guy says \"Ouch!\" and the second says \"Yeah, I didn't see it either.\""
  },
  {
    "type": "programming",
    "setup": "What did the router say to the doctor?",
    "punchline": "It hurts when IP."
  },
  {
    "type": "programming",
    "setup": "An IPv6 packet is walking out of the house.",
    "punchline": "He goes nowhere."
  },
  {
    "type": "programming",
    "setup": "A DHCP packet walks into a bar and asks for a beer.",
    "punchline": "Bartender says, \"here, but I’ll need that back in an hour!\""
  },
  {
    "type": "programming",
    "setup": "3 SQL statements walk into a NoSQL bar. Soon, they walk out",
    "punchline": "They couldn't find a table."
  },
  {
    "type": "general",
    "setup": "I saw a nice stereo on Craigslist for $1. Seller says the volume is stuck on ‘high’",
    "punchline": "I couldn’t turn it down."
  },
  {
    "type": "programming",
    "setup": "What’s the object-oriented way to become wealthy?",
    "punchline": "Inheritance."
  },
  {
    "type": "general",
    "setup": "What do you call a bee that can't make up its mind?",
    "punchline": "A maybe."
   },
   {
    "type": "general",
    "setup": "Why was Cinderalla thrown out of the football team?",
    "punchline": "Because she ran away from the ball."
  },
  {
    "type": "general",
    "setup": "What kind of music do welders like?",
    "punchline": "Heavy metal."
  },
  {
    "type": "general",
    "setup": "Why are “Dad Jokes” so good?",
    "punchline": "Because the punchline is apparent."
  },
  {
    "type": "programming",
    "setup": "Why dot net developers don't wear glasses?",
    "punchline": "Because they see sharp."
  },
  {
    "type": "general",
    "setup": "Why is seven bigger than nine?",
    "punchline": "Because seven ate nine."
  },
  {
    "type": "dad",
    "setup": "Why do fathers take an extra pair of socks when they go golfing?",
    "punchline": "In case they get a hole in one!"
  },
  {
    "type": "general",
    "setup": "What do you call a suspicious looking laptop?",
    "punchline": "Asus"
  },
  {
    "type": "programming",
    "setup": "What did the Java code say to the C code?",
    "punchline": "You've got no class."
  },
  {
    "type": "programming",
    "setup": "What is the most used language in programming?",
    "punchline": "Profanity."
  },
  {
    "type": "programming",
    "setup": "Why do programmers always get Christmas and Halloween mixed up?",
    "punchline": "Because DEC 25 = OCT 31"
  },
  {
    "type": "programming",
    "setup": "What goes after USA?",
    "punchline": "USB."
  },
  {
    "type": "dad",
    "setup": "Why don't eggs tell jokes?",
    "punchline": "Because they would crack each other up."
  },
  {
    "type": "general",
    "setup": "How do you make the number one disappear?",
    "punchline": "Add the letter G and it’s “gone”!"
  },
  {
    "type": "general",
    "setup": "My older brother always tore the last pages of my comic books, and never told me why.",
    "punchline": "I had to draw my own conclusions."
  },
  {
    "type": "general",
    "setup": "The Sergeant-Major growled at the young soldier: I didn’t see you at camouflage training this morning.",
    "punchline": "Thank you very much, sir."
  },
  {
    "type": "general",
    "setup": "Why does Waldo only wear stripes?",
    "punchline": "Because he doesn't want to be spotted."
  },
  {
    "type": "programming",
    "setup": "A male developer often gets called as a Dev, then what would you call a female developer?",
    "punchline": "Devi."
  },
  {
    "type": "general",
    "setup": "Why did the kid throw the watch out the window?",
    "punchline": "So time would fly."
  },
  {
    "type": "programming",
    "setup": "Where did the API go to eat?",
    "punchline": "To the RESTaurant."
  },
  {
    "type": "general",
    "setup": "Why did the rooster cross the road?",
    "punchline": "He heard that the chickens at KFC were pretty hot."
  },
  {
    "type": "general",
    "setup": "Did you hear about the Viking who was reincarnated?",
    "punchline": "He was Bjorn again"
  },
  {
    "type": "general",
    "setup": "What does the mermaid wear to math class?",
    "punchline": "Algae-bra."
  },
  {
    "type": "general",
    "setup": "Did you hear about the crime in the parking garage?",
    "punchline": "It was wrong on so many levels."
  },
  {
    "type": "programming",
    "setup": "Hey, wanna hear a joke?",
    "punchline": "Parsing HTML with regex."
  },
  {
    "type": "general",
    "setup": "Why didn't the skeleton go for prom?",
    "punchline": "Because it had nobody."
  },
  {
    "type": "general",
    "setup": "A grocery store cashier asked if I would like my milk in a bag.",
    "punchline": "I told her 'No, thanks. The carton works fine.'"
  },
  {
    "type": "general",
    "setup": "99.9% of the people are dumb!",
    "punchline": "Fortunately I belong to the remaining 1%"
  },
  {
    "type": "programming",
    "setup": "I just got fired from my job at the keyboard factory.",
    "punchline": "They told me I wasn't putting in enough shifts."
  },
  {
    "type": "general",
    "setup": "You see, mountains aren't just funny.",
    "punchline": "They are hill areas."
  },
  {
    "type": "general",
    "setup": "What do elves post on Social Media?",
    "punchline": "Elf-ies."
  }
],

"memes": [
  {
      "id": "1669",
      "path": "memes/1/1669.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1751",
      "path": "memes/1/1751.png",
      "width": 712,
      "height": 752
  },
  {
      "id": "1657",
      "path": "memes/1/1657.png",
      "width": 904,
      "height": 1280
  },
  {
      "id": "1379",
      "path": "memes/1/1379.png",
      "width": 1065,
      "height": 1279
  },
  {
      "id": "1946",
      "path": "memes/1/1946.png",
      "width": 750,
      "height": 696
  },
  {
      "id": "1711",
      "path": "memes/1/1711.png",
      "width": 710,
      "height": 840
  },
  {
      "id": "1322",
      "path": "memes/1/1322.png",
      "width": 892,
      "height": 993
  },
  {
      "id": "1279",
      "path": "memes/1/1279.png",
      "width": 630,
      "height": 960
  },
  {
      "id": "1433",
      "path": "memes/1/1433.png",
      "width": 460,
      "height": 276
  },
  {
      "id": "1367",
      "path": "memes/1/1367.png",
      "width": 911,
      "height": 1000
  },
  {
      "id": "1192",
      "path": "memes/1/1192.png",
      "width": 1918,
      "height": 2560
  },
  {
      "id": "1891",
      "path": "memes/1/1891.png",
      "width": 1279,
      "height": 1280
  },
  {
      "id": "1850",
      "path": "memes/1/1850.png",
      "width": 1080,
      "height": 641
  },
  {
      "id": "1211",
      "path": "memes/1/1211.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1280",
      "path": "memes/1/1280.png",
      "width": 640,
      "height": 761
  },
  {
      "id": "1547",
      "path": "memes/1/1547.png",
      "width": 650,
      "height": 611
  },
  {
      "id": "1694",
      "path": "memes/1/1694.png",
      "width": 540,
      "height": 675
  },
  {
      "id": "1504",
      "path": "memes/1/1504.png",
      "width": 970,
      "height": 1280
  },
  {
      "id": "1865",
      "path": "memes/1/1865.png",
      "width": 1212,
      "height": 1280
  },
  {
      "id": "1437",
      "path": "memes/1/1437.png",
      "width": 750,
      "height": 521
  },
  {
      "id": "1262",
      "path": "memes/1/1262.png",
      "width": 900,
      "height": 1000
  },
  {
      "id": "1484",
      "path": "memes/1/1484.png",
      "width": 460,
      "height": 643
  },
  {
      "id": "1242",
      "path": "memes/1/1242.png",
      "width": 300,
      "height": 182
  },
  {
      "id": "1376",
      "path": "memes/1/1376.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1703",
      "path": "memes/1/1703.png",
      "width": 770,
      "height": 540
  },
  {
      "id": "1529",
      "path": "memes/1/1529.png",
      "width": 1280,
      "height": 872
  },
  {
      "id": "1569",
      "path": "memes/1/1569.png",
      "width": 1280,
      "height": 720
  },
  {
      "id": "1611",
      "path": "memes/1/1611.png",
      "width": 1080,
      "height": 480
  },
  {
      "id": "1403",
      "path": "memes/1/1403.png",
      "width": 640,
      "height": 1136
  },
  {
      "id": "1606",
      "path": "memes/1/1606.png",
      "width": 750,
      "height": 750
  },
  {
      "id": "1795",
      "path": "memes/1/1795.png",
      "width": 369,
      "height": 635
  },
  {
      "id": "1707",
      "path": "memes/1/1707.png",
      "width": 700,
      "height": 726
  },
  {
      "id": "1929",
      "path": "memes/1/1929.png",
      "width": 905,
      "height": 1280
  },
  {
      "id": "1523",
      "path": "memes/1/1523.png",
      "width": 700,
      "height": 508
  },
  {
      "id": "1374",
      "path": "memes/1/1374.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1650",
      "path": "memes/1/1650.png",
      "width": 354,
      "height": 564
  },
  {
      "id": "1672",
      "path": "memes/1/1672.png",
      "width": 1200,
      "height": 864
  },
  {
      "id": "1323",
      "path": "memes/1/1323.png",
      "width": 700,
      "height": 460
  },
  {
      "id": "1942",
      "path": "memes/1/1942.png",
      "width": 800,
      "height": 1048
  },
  {
      "id": "1353",
      "path": "memes/1/1353.png",
      "width": 650,
      "height": 595
  },
  {
      "id": "1844",
      "path": "memes/1/1844.png",
      "width": 1066,
      "height": 720
  },
  {
      "id": "1868",
      "path": "memes/1/1868.png",
      "width": 591,
      "height": 1280
  },
  {
      "id": "1902",
      "path": "memes/1/1902.png",
      "width": 518,
      "height": 529
  },
  {
      "id": "1295",
      "path": "memes/1/1295.png",
      "width": 575,
      "height": 287
  },
  {
      "id": "1665",
      "path": "memes/1/1665.png",
      "width": 800,
      "height": 800
  },
  {
      "id": "1255",
      "path": "memes/1/1255.png",
      "width": 600,
      "height": 798
  },
  {
      "id": "1743",
      "path": "memes/1/1743.png",
      "width": 563,
      "height": 548
  },
  {
      "id": "1306",
      "path": "memes/1/1306.png",
      "width": 654,
      "height": 825
  },
  {
      "id": "1869",
      "path": "memes/1/1869.png",
      "width": 591,
      "height": 1280
  },
  {
      "id": "1346",
      "path": "memes/1/1346.png",
      "width": 749,
      "height": 701
  },
  {
      "id": "1639",
      "path": "memes/1/1639.png",
      "width": 1085,
      "height": 1280
  },
  {
      "id": "1196",
      "path": "memes/1/1196.png",
      "width": 1280,
      "height": 1257
  },
  {
      "id": "1690",
      "path": "memes/1/1690.png",
      "width": 1072,
      "height": 858
  },
  {
      "id": "1784",
      "path": "memes/1/1784.png",
      "width": 1080,
      "height": 1021
  },
  {
      "id": "1778",
      "path": "memes/1/1778.png",
      "width": 1280,
      "height": 1015
  },
  {
      "id": "1496",
      "path": "memes/1/1496.png",
      "width": 654,
      "height": 494
  },
  {
      "id": "1764",
      "path": "memes/1/1764.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1679",
      "path": "memes/1/1679.png",
      "width": 800,
      "height": 841
  },
  {
      "id": "1934",
      "path": "memes/1/1934.png",
      "width": 640,
      "height": 1280
  },
  {
      "id": "1917",
      "path": "memes/1/1917.png",
      "width": 540,
      "height": 554
  },
  {
      "id": "1889",
      "path": "memes/1/1889.png",
      "width": 591,
      "height": 1280
  },
  {
      "id": "1702",
      "path": "memes/1/1702.png",
      "width": 720,
      "height": 684
  },
  {
      "id": "1238",
      "path": "memes/1/1238.png",
      "width": 700,
      "height": 626
  },
  {
      "id": "1463",
      "path": "memes/1/1463.png",
      "width": 1280,
      "height": 425
  },
  {
      "id": "1294",
      "path": "memes/1/1294.png",
      "width": 500,
      "height": 628
  },
  {
      "id": "1757",
      "path": "memes/1/1757.png",
      "width": 1064,
      "height": 851
  },
  {
      "id": "1748",
      "path": "memes/1/1748.png",
      "width": 900,
      "height": 708
  },
  {
      "id": "1659",
      "path": "memes/1/1659.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1183",
      "path": "memes/1/1183.png",
      "width": 1280,
      "height": 1273
  },
  {
      "id": "1456",
      "path": "memes/1/1456.png",
      "width": 1280,
      "height": 1217
  },
  {
      "id": "1722",
      "path": "memes/1/1722.png",
      "width": 874,
      "height": 883
  },
  {
      "id": "1535",
      "path": "memes/1/1535.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1728",
      "path": "memes/1/1728.png",
      "width": 700,
      "height": 692
  },
  {
      "id": "1373",
      "path": "memes/1/1373.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1761",
      "path": "memes/1/1761.png",
      "width": 800,
      "height": 559
  },
  {
      "id": "1273",
      "path": "memes/1/1273.png",
      "width": 960,
      "height": 1280
  },
  {
      "id": "1166",
      "path": "memes/1/1166.png",
      "width": 530,
      "height": 529
  },
  {
      "id": "1298",
      "path": "memes/1/1298.png",
      "width": 712,
      "height": 634
  },
  {
      "id": "1259",
      "path": "memes/1/1259.png",
      "width": 894,
      "height": 134
  },
  {
      "id": "1874",
      "path": "memes/1/1874.png",
      "width": 385,
      "height": 489
  },
  {
      "id": "1542",
      "path": "memes/1/1542.png",
      "width": 640,
      "height": 853
  },
  {
      "id": "1591",
      "path": "memes/1/1591.png",
      "width": 767,
      "height": 1024
  },
  {
      "id": "1517",
      "path": "memes/1/1517.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1813",
      "path": "memes/1/1813.png",
      "width": 763,
      "height": 261
  },
  {
      "id": "1177",
      "path": "memes/1/1177.png",
      "width": 320,
      "height": 240
  },
  {
      "id": "1797",
      "path": "memes/1/1797.png",
      "width": 1106,
      "height": 1280
  },
  {
      "id": "1652",
      "path": "memes/1/1652.png",
      "width": 655,
      "height": 1280
  },
  {
      "id": "1614",
      "path": "memes/1/1614.png",
      "width": 1078,
      "height": 1280
  },
  {
      "id": "1285",
      "path": "memes/1/1285.png",
      "width": 843,
      "height": 474
  },
  {
      "id": "1890",
      "path": "memes/1/1890.png",
      "width": 700,
      "height": 350
  },
  {
      "id": "1940",
      "path": "memes/1/1940.png",
      "width": 600,
      "height": 450
  },
  {
      "id": "1593",
      "path": "memes/1/1593.png",
      "width": 450,
      "height": 1091
  },
  {
      "id": "1948",
      "path": "memes/1/1948.png",
      "width": 1125,
      "height": 1066
  },
  {
      "id": "1662",
      "path": "memes/1/1662.png",
      "width": 1024,
      "height": 512
  },
  {
      "id": "1560",
      "path": "memes/1/1560.png",
      "width": 684,
      "height": 960
  },
  {
      "id": "1881",
      "path": "memes/1/1881.png",
      "width": 490,
      "height": 295
  },
  {
      "id": "1372",
      "path": "memes/1/1372.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1583",
      "path": "memes/1/1583.png",
      "width": 580,
      "height": 628
  },
  {
      "id": "1525",
      "path": "memes/1/1525.png",
      "width": 681,
      "height": 451
  },
  {
      "id": "1863",
      "path": "memes/1/1863.png",
      "width": 1280,
      "height": 482
  },
  {
      "id": "1518",
      "path": "memes/1/1518.png",
      "width": 854,
      "height": 1280
  },
  {
      "id": "1391",
      "path": "memes/1/1391.png",
      "width": 1280,
      "height": 577
  },
  {
      "id": "1203",
      "path": "memes/1/1203.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1252",
      "path": "memes/1/1252.png",
      "width": 700,
      "height": 770
  },
  {
      "id": "1230",
      "path": "memes/1/1230.png",
      "width": 1003,
      "height": 1280
  },
  {
      "id": "1257",
      "path": "memes/1/1257.png",
      "width": 460,
      "height": 649
  },
  {
      "id": "1178",
      "path": "memes/1/1178.png",
      "width": 261,
      "height": 312
  },
  {
      "id": "1706",
      "path": "memes/1/1706.png",
      "width": 588,
      "height": 800
  },
  {
      "id": "1689",
      "path": "memes/1/1689.png",
      "width": 750,
      "height": 500
  },
  {
      "id": "1793",
      "path": "memes/1/1793.png",
      "width": 720,
      "height": 626
  },
  {
      "id": "1409",
      "path": "memes/1/1409.png",
      "width": 1047,
      "height": 1279
  },
  {
      "id": "1577",
      "path": "memes/1/1577.png",
      "width": 878,
      "height": 501
  },
  {
      "id": "1620",
      "path": "memes/1/1620.png",
      "width": 1086,
      "height": 1280
  },
  {
      "id": "1248",
      "path": "memes/1/1248.png",
      "width": 480,
      "height": 307
  },
  {
      "id": "1816",
      "path": "memes/1/1816.png",
      "width": 640,
      "height": 824
  },
  {
      "id": "1296",
      "path": "memes/1/1296.png",
      "width": 800,
      "height": 726
  },
  {
      "id": "1548",
      "path": "memes/1/1548.png",
      "width": 1071,
      "height": 1063
  },
  {
      "id": "1921",
      "path": "memes/1/1921.png",
      "width": 720,
      "height": 715
  },
  {
      "id": "1782",
      "path": "memes/1/1782.png",
      "width": 620,
      "height": 960
  },
  {
      "id": "1407",
      "path": "memes/1/1407.png",
      "width": 720,
      "height": 722
  },
  {
      "id": "1406",
      "path": "memes/1/1406.png",
      "width": 1252,
      "height": 1280
  },
  {
      "id": "1427",
      "path": "memes/1/1427.png",
      "width": 499,
      "height": 592
  },
  {
      "id": "1443",
      "path": "memes/1/1443.png",
      "width": 540,
      "height": 720
  },
  {
      "id": "1328",
      "path": "memes/1/1328.png",
      "width": 750,
      "height": 1168
  },
  {
      "id": "1537",
      "path": "memes/1/1537.png",
      "width": 674,
      "height": 699
  },
  {
      "id": "1412",
      "path": "memes/1/1412.png",
      "width": 1280,
      "height": 1006
  },
  {
      "id": "1429",
      "path": "memes/1/1429.png",
      "width": 1164,
      "height": 1280
  },
  {
      "id": "1901",
      "path": "memes/1/1901.png",
      "width": 768,
      "height": 1280
  },
  {
      "id": "1898",
      "path": "memes/1/1898.png",
      "width": 1080,
      "height": 1083
  },
  {
      "id": "1340",
      "path": "memes/1/1340.png",
      "width": 1023,
      "height": 492
  },
  {
      "id": "1726",
      "path": "memes/1/1726.png",
      "width": 640,
      "height": 642
  },
  {
      "id": "1436",
      "path": "memes/1/1436.png",
      "width": 720,
      "height": 887
  },
  {
      "id": "1733",
      "path": "memes/1/1733.png",
      "width": 1080,
      "height": 1231
  },
  {
      "id": "1565",
      "path": "memes/1/1565.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1194",
      "path": "memes/1/1194.png",
      "width": 419,
      "height": 550
  },
  {
      "id": "1586",
      "path": "memes/1/1586.png",
      "width": 1280,
      "height": 905
  },
  {
      "id": "1208",
      "path": "memes/1/1208.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "1234",
      "path": "memes/1/1234.png",
      "width": 604,
      "height": 535
  },
  {
      "id": "1597",
      "path": "memes/1/1597.png",
      "width": 1080,
      "height": 1148
  },
  {
      "id": "1716",
      "path": "memes/1/1716.png",
      "width": 700,
      "height": 710
  },
  {
      "id": "1265",
      "path": "memes/1/1265.png",
      "width": 466,
      "height": 960
  },
  {
      "id": "1507",
      "path": "memes/1/1507.png",
      "width": 586,
      "height": 291
  },
  {
      "id": "1349",
      "path": "memes/1/1349.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1697",
      "path": "memes/1/1697.png",
      "width": 1080,
      "height": 797
  },
  {
      "id": "1354",
      "path": "memes/1/1354.png",
      "width": 712,
      "height": 707
  },
  {
      "id": "1677",
      "path": "memes/1/1677.png",
      "width": 479,
      "height": 535
  },
  {
      "id": "1643",
      "path": "memes/1/1643.png",
      "width": 602,
      "height": 1070
  },
  {
      "id": "1521",
      "path": "memes/1/1521.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1470",
      "path": "memes/1/1470.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1477",
      "path": "memes/1/1477.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "1282",
      "path": "memes/1/1282.png",
      "width": 499,
      "height": 440
  },
  {
      "id": "1292",
      "path": "memes/1/1292.png",
      "width": 480,
      "height": 212
  },
  {
      "id": "1199",
      "path": "memes/1/1199.png",
      "width": 600,
      "height": 600
  },
  {
      "id": "1818",
      "path": "memes/1/1818.png",
      "width": 1052,
      "height": 1052
  },
  {
      "id": "1809",
      "path": "memes/1/1809.png",
      "width": 956,
      "height": 535
  },
  {
      "id": "1186",
      "path": "memes/1/1186.png",
      "width": 500,
      "height": 700
  },
  {
      "id": "1559",
      "path": "memes/1/1559.png",
      "width": 1280,
      "height": 784
  },
  {
      "id": "1316",
      "path": "memes/1/1316.png",
      "width": 834,
      "height": 960
  },
  {
      "id": "1416",
      "path": "memes/1/1416.png",
      "width": 582,
      "height": 480
  },
  {
      "id": "1457",
      "path": "memes/1/1457.png",
      "width": 950,
      "height": 1018
  },
  {
      "id": "1682",
      "path": "memes/1/1682.png",
      "width": 594,
      "height": 242
  },
  {
      "id": "1352",
      "path": "memes/1/1352.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1546",
      "path": "memes/1/1546.png",
      "width": 700,
      "height": 670
  },
  {
      "id": "1723",
      "path": "memes/1/1723.png",
      "width": 490,
      "height": 445
  },
  {
      "id": "1570",
      "path": "memes/1/1570.png",
      "width": 1260,
      "height": 1280
  },
  {
      "id": "1919",
      "path": "memes/1/1919.png",
      "width": 640,
      "height": 434
  },
  {
      "id": "1762",
      "path": "memes/1/1762.png",
      "width": 1080,
      "height": 881
  },
  {
      "id": "1179",
      "path": "memes/1/1179.png",
      "width": 261,
      "height": 300
  },
  {
      "id": "1520",
      "path": "memes/1/1520.png",
      "width": 659,
      "height": 1280
  },
  {
      "id": "1350",
      "path": "memes/1/1350.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1185",
      "path": "memes/1/1185.png",
      "width": 766,
      "height": 772
  },
  {
      "id": "1420",
      "path": "memes/1/1420.png",
      "width": 699,
      "height": 684
  },
  {
      "id": "1647",
      "path": "memes/1/1647.png",
      "width": 310,
      "height": 236
  },
  {
      "id": "1920",
      "path": "memes/1/1920.png",
      "width": 637,
      "height": 479
  },
  {
      "id": "1475",
      "path": "memes/1/1475.png",
      "width": 680,
      "height": 680
  },
  {
      "id": "1304",
      "path": "memes/1/1304.png",
      "width": 888,
      "height": 499
  },
  {
      "id": "1220",
      "path": "memes/1/1220.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1411",
      "path": "memes/1/1411.png",
      "width": 699,
      "height": 770
  },
  {
      "id": "1348",
      "path": "memes/1/1348.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1344",
      "path": "memes/1/1344.png",
      "width": 599,
      "height": 382
  },
  {
      "id": "1805",
      "path": "memes/1/1805.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1345",
      "path": "memes/1/1345.png",
      "width": 805,
      "height": 1200
  },
  {
      "id": "1426",
      "path": "memes/1/1426.png",
      "width": 304,
      "height": 1280
  },
  {
      "id": "1710",
      "path": "memes/1/1710.png",
      "width": 500,
      "height": 652
  },
  {
      "id": "1635",
      "path": "memes/1/1635.png",
      "width": 1199,
      "height": 1280
  },
  {
      "id": "1182",
      "path": "memes/1/1182.png",
      "width": 228,
      "height": 304
  },
  {
      "id": "1465",
      "path": "memes/1/1465.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "1922",
      "path": "memes/1/1922.png",
      "width": 449,
      "height": 474
  },
  {
      "id": "1187",
      "path": "memes/1/1187.png",
      "width": 600,
      "height": 599
  },
  {
      "id": "1276",
      "path": "memes/1/1276.png",
      "width": 1061,
      "height": 1280
  },
  {
      "id": "1193",
      "path": "memes/1/1193.png",
      "width": 960,
      "height": 1280
  },
  {
      "id": "1914",
      "path": "memes/1/1914.png",
      "width": 640,
      "height": 762
  },
  {
      "id": "1641",
      "path": "memes/1/1641.png",
      "width": 500,
      "height": 657
  },
  {
      "id": "1377",
      "path": "memes/1/1377.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1862",
      "path": "memes/1/1862.png",
      "width": 1280,
      "height": 604
  },
  {
      "id": "1873",
      "path": "memes/1/1873.png",
      "width": 407,
      "height": 407
  },
  {
      "id": "1615",
      "path": "memes/1/1615.png",
      "width": 640,
      "height": 510
  },
  {
      "id": "1228",
      "path": "memes/1/1228.png",
      "width": 531,
      "height": 960
  },
  {
      "id": "1729",
      "path": "memes/1/1729.png",
      "width": 606,
      "height": 134
  },
  {
      "id": "1907",
      "path": "memes/1/1907.png",
      "width": 699,
      "height": 811
  },
  {
      "id": "1501",
      "path": "memes/1/1501.png",
      "width": 770,
      "height": 770
  },
  {
      "id": "1646",
      "path": "memes/1/1646.png",
      "width": 750,
      "height": 500
  },
  {
      "id": "1709",
      "path": "memes/1/1709.png",
      "width": 499,
      "height": 429
  },
  {
      "id": "1165",
      "path": "memes/1/1165.png",
      "width": 1079,
      "height": 1085
  },
  {
      "id": "1674",
      "path": "memes/1/1674.png",
      "width": 640,
      "height": 888
  },
  {
      "id": "1634",
      "path": "memes/1/1634.png",
      "width": 610,
      "height": 726
  },
  {
      "id": "1284",
      "path": "memes/1/1284.png",
      "width": 1280,
      "height": 992
  },
  {
      "id": "1493",
      "path": "memes/1/1493.png",
      "width": 527,
      "height": 810
  },
  {
      "id": "1469",
      "path": "memes/1/1469.png",
      "width": 564,
      "height": 904
  },
  {
      "id": "1495",
      "path": "memes/1/1495.png",
      "width": 738,
      "height": 563
  },
  {
      "id": "1883",
      "path": "memes/1/1883.png",
      "width": 600,
      "height": 640
  },
  {
      "id": "1200",
      "path": "memes/1/1200.png",
      "width": 640,
      "height": 859
  },
  {
      "id": "1714",
      "path": "memes/1/1714.png",
      "width": 1280,
      "height": 1244
  },
  {
      "id": "1319",
      "path": "memes/1/1319.png",
      "width": 556,
      "height": 739
  },
  {
      "id": "1812",
      "path": "memes/1/1812.png",
      "width": 615,
      "height": 733
  },
  {
      "id": "1870",
      "path": "memes/1/1870.png",
      "width": 465,
      "height": 226
  },
  {
      "id": "1935",
      "path": "memes/1/1935.png",
      "width": 640,
      "height": 1280
  },
  {
      "id": "1479",
      "path": "memes/1/1479.png",
      "width": 560,
      "height": 996
  },
  {
      "id": "1382",
      "path": "memes/1/1382.png",
      "width": 1050,
      "height": 1280
  },
  {
      "id": "1326",
      "path": "memes/1/1326.png",
      "width": 600,
      "height": 338
  },
  {
      "id": "1776",
      "path": "memes/1/1776.png",
      "width": 1280,
      "height": 951
  },
  {
      "id": "1224",
      "path": "memes/1/1224.png",
      "width": 631,
      "height": 1280
  },
  {
      "id": "1505",
      "path": "memes/1/1505.png",
      "width": 1080,
      "height": 1246
  },
  {
      "id": "1341",
      "path": "memes/1/1341.png",
      "width": 680,
      "height": 605
  },
  {
      "id": "1269",
      "path": "memes/1/1269.png",
      "width": 597,
      "height": 767
  },
  {
      "id": "1163",
      "path": "memes/1/1163.png",
      "width": 1200,
      "height": 337
  },
  {
      "id": "1522",
      "path": "memes/1/1522.png",
      "width": 741,
      "height": 1280
  },
  {
      "id": "1499",
      "path": "memes/1/1499.png",
      "width": 655,
      "height": 1280
  },
  {
      "id": "1430",
      "path": "memes/1/1430.png",
      "width": 500,
      "height": 683
  },
  {
      "id": "1218",
      "path": "memes/1/1218.png",
      "width": 1280,
      "height": 1155
  },
  {
      "id": "1351",
      "path": "memes/1/1351.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1860",
      "path": "memes/1/1860.png",
      "width": 625,
      "height": 477
  },
  {
      "id": "1281",
      "path": "memes/1/1281.png",
      "width": 1264,
      "height": 1280
  },
  {
      "id": "1401",
      "path": "memes/1/1401.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "1555",
      "path": "memes/1/1555.png",
      "width": 1080,
      "height": 1057
  },
  {
      "id": "1755",
      "path": "memes/1/1755.png",
      "width": 600,
      "height": 1277
  },
  {
      "id": "1675",
      "path": "memes/1/1675.png",
      "width": 1280,
      "height": 900
  },
  {
      "id": "1395",
      "path": "memes/1/1395.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1744",
      "path": "memes/1/1744.png",
      "width": 700,
      "height": 708
  },
  {
      "id": "1580",
      "path": "memes/1/1580.png",
      "width": 640,
      "height": 566
  },
  {
      "id": "1888",
      "path": "memes/1/1888.png",
      "width": 500,
      "height": 700
  },
  {
      "id": "1831",
      "path": "memes/1/1831.png",
      "width": 750,
      "height": 593
  },
  {
      "id": "1713",
      "path": "memes/1/1713.png",
      "width": 1278,
      "height": 615
  },
  {
      "id": "1798",
      "path": "memes/1/1798.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1739",
      "path": "memes/1/1739.png",
      "width": 480,
      "height": 509
  },
  {
      "id": "1162",
      "path": "memes/1/1162.png",
      "width": 1015,
      "height": 1280
  },
  {
      "id": "1666",
      "path": "memes/1/1666.png",
      "width": 820,
      "height": 312
  },
  {
      "id": "1169",
      "path": "memes/1/1169.png",
      "width": 610,
      "height": 609
  },
  {
      "id": "1245",
      "path": "memes/1/1245.png",
      "width": 422,
      "height": 707
  },
  {
      "id": "1608",
      "path": "memes/1/1608.png",
      "width": 639,
      "height": 716
  },
  {
      "id": "1645",
      "path": "memes/1/1645.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1904",
      "path": "memes/1/1904.png",
      "width": 800,
      "height": 522
  },
  {
      "id": "1435",
      "path": "memes/1/1435.png",
      "width": 711,
      "height": 1069
  },
  {
      "id": "1171",
      "path": "memes/1/1171.png",
      "width": 604,
      "height": 430
  },
  {
      "id": "1843",
      "path": "memes/1/1843.png",
      "width": 720,
      "height": 880
  },
  {
      "id": "1846",
      "path": "memes/1/1846.png",
      "width": 554,
      "height": 638
  },
  {
      "id": "1387",
      "path": "memes/1/1387.png",
      "width": 1280,
      "height": 1276
  },
  {
      "id": "1884",
      "path": "memes/1/1884.png",
      "width": 750,
      "height": 503
  },
  {
      "id": "1613",
      "path": "memes/1/1613.png",
      "width": 640,
      "height": 567
  },
  {
      "id": "1333",
      "path": "memes/1/1333.png",
      "width": 700,
      "height": 420
  },
  {
      "id": "1938",
      "path": "memes/1/1938.png",
      "width": 524,
      "height": 680
  },
  {
      "id": "1594",
      "path": "memes/1/1594.png",
      "width": 1280,
      "height": 909
  },
  {
      "id": "1318",
      "path": "memes/1/1318.png",
      "width": 960,
      "height": 717
  },
  {
      "id": "1476",
      "path": "memes/1/1476.png",
      "width": 923,
      "height": 1280
  },
  {
      "id": "1506",
      "path": "memes/1/1506.png",
      "width": 1256,
      "height": 1280
  },
  {
      "id": "1653",
      "path": "memes/1/1653.png",
      "width": 480,
      "height": 639
  },
  {
      "id": "1704",
      "path": "memes/1/1704.png",
      "width": 960,
      "height": 461
  },
  {
      "id": "1781",
      "path": "memes/1/1781.png",
      "width": 1125,
      "height": 1103
  },
  {
      "id": "1466",
      "path": "memes/1/1466.png",
      "width": 795,
      "height": 596
  },
  {
      "id": "1428",
      "path": "memes/1/1428.png",
      "width": 500,
      "height": 429
  },
  {
      "id": "1840",
      "path": "memes/1/1840.png",
      "width": 540,
      "height": 960
  },
  {
      "id": "1871",
      "path": "memes/1/1871.png",
      "width": 492,
      "height": 328
  },
  {
      "id": "1861",
      "path": "memes/1/1861.png",
      "width": 640,
      "height": 628
  },
  {
      "id": "1841",
      "path": "memes/1/1841.png",
      "width": 596,
      "height": 893
  },
  {
      "id": "1817",
      "path": "memes/1/1817.png",
      "width": 393,
      "height": 465
  },
  {
      "id": "1811",
      "path": "memes/1/1811.png",
      "width": 1080,
      "height": 809
  },
  {
      "id": "1807",
      "path": "memes/1/1807.png",
      "width": 491,
      "height": 1024
  },
  {
      "id": "1462",
      "path": "memes/1/1462.png",
      "width": 959,
      "height": 827
  },
  {
      "id": "1188",
      "path": "memes/1/1188.png",
      "width": 1216,
      "height": 1280
  },
  {
      "id": "1439",
      "path": "memes/1/1439.png",
      "width": 756,
      "height": 1008
  },
  {
      "id": "1867",
      "path": "memes/1/1867.png",
      "width": 591,
      "height": 1280
  },
  {
      "id": "1225",
      "path": "memes/1/1225.png",
      "width": 480,
      "height": 607
  },
  {
      "id": "1147",
      "path": "memes/1/1147.png",
      "width": 299,
      "height": 169
  },
  {
      "id": "1312",
      "path": "memes/1/1312.png",
      "width": 819,
      "height": 1280
  },
  {
      "id": "1885",
      "path": "memes/1/1885.png",
      "width": 800,
      "height": 891
  },
  {
      "id": "1943",
      "path": "memes/1/1943.png",
      "width": 700,
      "height": 861
  },
  {
      "id": "1625",
      "path": "memes/1/1625.png",
      "width": 1280,
      "height": 622
  },
  {
      "id": "1563",
      "path": "memes/1/1563.png",
      "width": 960,
      "height": 1280
  },
  {
      "id": "1397",
      "path": "memes/1/1397.png",
      "width": 712,
      "height": 949
  },
  {
      "id": "1157",
      "path": "memes/1/1157.png",
      "width": 650,
      "height": 485
  },
  {
      "id": "1791",
      "path": "memes/1/1791.png",
      "width": 473,
      "height": 322
  },
  {
      "id": "1235",
      "path": "memes/1/1235.png",
      "width": 589,
      "height": 527
  },
  {
      "id": "1154",
      "path": "memes/1/1154.png",
      "width": 320,
      "height": 237
  },
  {
      "id": "1223",
      "path": "memes/1/1223.png",
      "width": 414,
      "height": 298
  },
  {
      "id": "1735",
      "path": "memes/1/1735.png",
      "width": 720,
      "height": 720
  },
  {
      "id": "1357",
      "path": "memes/1/1357.png",
      "width": 578,
      "height": 403
  },
  {
      "id": "1626",
      "path": "memes/1/1626.png",
      "width": 803,
      "height": 824
  },
  {
      "id": "1286",
      "path": "memes/1/1286.png",
      "width": 1080,
      "height": 1083
  },
  {
      "id": "1663",
      "path": "memes/1/1663.png",
      "width": 904,
      "height": 1280
  },
  {
      "id": "1217",
      "path": "memes/1/1217.png",
      "width": 1280,
      "height": 1073
  },
  {
      "id": "1207",
      "path": "memes/1/1207.png",
      "width": 1080,
      "height": 1079
  },
  {
      "id": "1331",
      "path": "memes/1/1331.png",
      "width": 480,
      "height": 558
  },
  {
      "id": "1540",
      "path": "memes/1/1540.png",
      "width": 460,
      "height": 462
  },
  {
      "id": "1949",
      "path": "memes/1/1949.png",
      "width": 1121,
      "height": 544
  },
  {
      "id": "1616",
      "path": "memes/1/1616.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1483",
      "path": "memes/1/1483.png",
      "width": 700,
      "height": 649
  },
  {
      "id": "1541",
      "path": "memes/1/1541.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "1916",
      "path": "memes/1/1916.png",
      "width": 422,
      "height": 535
  },
  {
      "id": "1866",
      "path": "memes/1/1866.png",
      "width": 1242,
      "height": 743
  },
  {
      "id": "1783",
      "path": "memes/1/1783.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1796",
      "path": "memes/1/1796.png",
      "width": 225,
      "height": 225
  },
  {
      "id": "1900",
      "path": "memes/1/1900.png",
      "width": 1200,
      "height": 1002
  },
  {
      "id": "1758",
      "path": "memes/1/1758.png",
      "width": 690,
      "height": 480
  },
  {
      "id": "1402",
      "path": "memes/1/1402.png",
      "width": 960,
      "height": 1280
  },
  {
      "id": "1148",
      "path": "memes/1/1148.png",
      "width": 700,
      "height": 562
  },
  {
      "id": "1293",
      "path": "memes/1/1293.png",
      "width": 749,
      "height": 926
  },
  {
      "id": "1421",
      "path": "memes/1/1421.png",
      "width": 719,
      "height": 581
  },
  {
      "id": "1803",
      "path": "memes/1/1803.png",
      "width": 640,
      "height": 580
  },
  {
      "id": "1567",
      "path": "memes/1/1567.png",
      "width": 700,
      "height": 441
  },
  {
      "id": "1695",
      "path": "memes/1/1695.png",
      "width": 708,
      "height": 320
  },
  {
      "id": "1342",
      "path": "memes/1/1342.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1487",
      "path": "memes/1/1487.png",
      "width": 500,
      "height": 623
  },
  {
      "id": "1759",
      "path": "memes/1/1759.png",
      "width": 500,
      "height": 774
  },
  {
      "id": "1631",
      "path": "memes/1/1631.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "1794",
      "path": "memes/1/1794.png",
      "width": 500,
      "height": 535
  },
  {
      "id": "1578",
      "path": "memes/1/1578.png",
      "width": 552,
      "height": 532
  },
  {
      "id": "1512",
      "path": "memes/1/1512.png",
      "width": 1260,
      "height": 697
  },
  {
      "id": "1752",
      "path": "memes/1/1752.png",
      "width": 461,
      "height": 762
  },
  {
      "id": "1826",
      "path": "memes/1/1826.png",
      "width": 1280,
      "height": 1108
  },
  {
      "id": "1431",
      "path": "memes/1/1431.png",
      "width": 900,
      "height": 854
  },
  {
      "id": "1554",
      "path": "memes/1/1554.png",
      "width": 355,
      "height": 465
  },
  {
      "id": "1852",
      "path": "memes/1/1852.png",
      "width": 640,
      "height": 517
  },
  {
      "id": "1804",
      "path": "memes/1/1804.png",
      "width": 640,
      "height": 470
  },
  {
      "id": "1191",
      "path": "memes/1/1191.png",
      "width": 712,
      "height": 656
  },
  {
      "id": "1721",
      "path": "memes/1/1721.png",
      "width": 626,
      "height": 237
  },
  {
      "id": "1156",
      "path": "memes/1/1156.png",
      "width": 1080,
      "height": 954
  },
  {
      "id": "1206",
      "path": "memes/1/1206.png",
      "width": 470,
      "height": 960
  },
  {
      "id": "1637",
      "path": "memes/1/1637.png",
      "width": 839,
      "height": 1280
  },
  {
      "id": "1553",
      "path": "memes/1/1553.png",
      "width": 875,
      "height": 1000
  },
  {
      "id": "1610",
      "path": "memes/1/1610.png",
      "width": 1080,
      "height": 1055
  },
  {
      "id": "1750",
      "path": "memes/1/1750.png",
      "width": 720,
      "height": 581
  },
  {
      "id": "1769",
      "path": "memes/1/1769.png",
      "width": 700,
      "height": 854
  },
  {
      "id": "1164",
      "path": "memes/1/1164.png",
      "width": 1280,
      "height": 725
  },
  {
      "id": "1630",
      "path": "memes/1/1630.png",
      "width": 920,
      "height": 1280
  },
  {
      "id": "1275",
      "path": "memes/1/1275.png",
      "width": 640,
      "height": 629
  },
  {
      "id": "1905",
      "path": "memes/1/1905.png",
      "width": 484,
      "height": 639
  },
  {
      "id": "1327",
      "path": "memes/1/1327.png",
      "width": 749,
      "height": 889
  },
  {
      "id": "1819",
      "path": "memes/1/1819.png",
      "width": 464,
      "height": 467
  },
  {
      "id": "1941",
      "path": "memes/1/1941.png",
      "width": 838,
      "height": 1280
  },
  {
      "id": "1642",
      "path": "memes/1/1642.png",
      "width": 480,
      "height": 480
  },
  {
      "id": "1832",
      "path": "memes/1/1832.png",
      "width": 648,
      "height": 440
  },
  {
      "id": "1378",
      "path": "memes/1/1378.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1184",
      "path": "memes/1/1184.png",
      "width": 600,
      "height": 851
  },
  {
      "id": "1287",
      "path": "memes/1/1287.png",
      "width": 640,
      "height": 948
  },
  {
      "id": "1926",
      "path": "memes/1/1926.png",
      "width": 700,
      "height": 625
  },
  {
      "id": "1658",
      "path": "memes/1/1658.png",
      "width": 940,
      "height": 788
  },
  {
      "id": "1300",
      "path": "memes/1/1300.png",
      "width": 1200,
      "height": 467
  },
  {
      "id": "1887",
      "path": "memes/1/1887.png",
      "width": 540,
      "height": 540
  },
  {
      "id": "1886",
      "path": "memes/1/1886.png",
      "width": 525,
      "height": 475
  },
  {
      "id": "1699",
      "path": "memes/1/1699.png",
      "width": 800,
      "height": 600
  },
  {
      "id": "1802",
      "path": "memes/1/1802.png",
      "width": 1024,
      "height": 656
  },
  {
      "id": "1364",
      "path": "memes/1/1364.png",
      "width": 990,
      "height": 712
  },
  {
      "id": "1847",
      "path": "memes/1/1847.png",
      "width": 720,
      "height": 717
  },
  {
      "id": "1243",
      "path": "memes/1/1243.png",
      "width": 1040,
      "height": 883
  },
  {
      "id": "1266",
      "path": "memes/1/1266.png",
      "width": 503,
      "height": 500
  },
  {
      "id": "1933",
      "path": "memes/1/1933.png",
      "width": 720,
      "height": 871
  },
  {
      "id": "1172",
      "path": "memes/1/1172.png",
      "width": 800,
      "height": 800
  },
  {
      "id": "1655",
      "path": "memes/1/1655.png",
      "width": 904,
      "height": 1280
  },
  {
      "id": "1552",
      "path": "memes/1/1552.png",
      "width": 390,
      "height": 604
  },
  {
      "id": "1895",
      "path": "memes/1/1895.png",
      "width": 1080,
      "height": 1148
  },
  {
      "id": "1383",
      "path": "memes/1/1383.png",
      "width": 1107,
      "height": 1280
  },
  {
      "id": "1878",
      "path": "memes/1/1878.png",
      "width": 1280,
      "height": 720
  },
  {
      "id": "1419",
      "path": "memes/1/1419.png",
      "width": 1080,
      "height": 1019
  },
  {
      "id": "1612",
      "path": "memes/1/1612.png",
      "width": 704,
      "height": 550
  },
  {
      "id": "1737",
      "path": "memes/1/1737.png",
      "width": 1137,
      "height": 1280
  },
  {
      "id": "1241",
      "path": "memes/1/1241.png",
      "width": 600,
      "height": 515
  },
  {
      "id": "1161",
      "path": "memes/1/1161.png",
      "width": 800,
      "height": 508
  },
  {
      "id": "1828",
      "path": "memes/1/1828.png",
      "width": 1188,
      "height": 1111
  },
  {
      "id": "1380",
      "path": "memes/1/1380.png",
      "width": 1063,
      "height": 1279
  },
  {
      "id": "1754",
      "path": "memes/1/1754.png",
      "width": 502,
      "height": 497
  },
  {
      "id": "1335",
      "path": "memes/1/1335.png",
      "width": 540,
      "height": 960
  },
  {
      "id": "1332",
      "path": "memes/1/1332.png",
      "width": 499,
      "height": 964
  },
  {
      "id": "1604",
      "path": "memes/1/1604.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1585",
      "path": "memes/1/1585.png",
      "width": 541,
      "height": 500
  },
  {
      "id": "1908",
      "path": "memes/1/1908.png",
      "width": 720,
      "height": 780
  },
  {
      "id": "1909",
      "path": "memes/1/1909.png",
      "width": 657,
      "height": 1280
  },
  {
      "id": "1855",
      "path": "memes/1/1855.png",
      "width": 960,
      "height": 568
  },
  {
      "id": "1829",
      "path": "memes/1/1829.png",
      "width": 1280,
      "height": 1280
  },
  {
      "id": "1760",
      "path": "memes/1/1760.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "1717",
      "path": "memes/1/1717.png",
      "width": 700,
      "height": 529
  },
  {
      "id": "1882",
      "path": "memes/1/1882.png",
      "width": 750,
      "height": 575
  },
  {
      "id": "1214",
      "path": "memes/1/1214.png",
      "width": 925,
      "height": 960
  },
  {
      "id": "1628",
      "path": "memes/1/1628.png",
      "width": 720,
      "height": 442
  },
  {
      "id": "1202",
      "path": "memes/1/1202.png",
      "width": 400,
      "height": 387
  },
  {
      "id": "1251",
      "path": "memes/1/1251.png",
      "width": 589,
      "height": 527
  },
  {
      "id": "1801",
      "path": "memes/1/1801.png",
      "width": 720,
      "height": 641
  },
  {
      "id": "1875",
      "path": "memes/1/1875.png",
      "width": 676,
      "height": 960
  },
  {
      "id": "1845",
      "path": "memes/1/1845.png",
      "width": 500,
      "height": 521
  },
  {
      "id": "1491",
      "path": "memes/1/1491.png",
      "width": 1080,
      "height": 1206
  },
  {
      "id": "1825",
      "path": "memes/1/1825.png",
      "width": 597,
      "height": 181
  },
  {
      "id": "1609",
      "path": "memes/1/1609.png",
      "width": 1280,
      "height": 984
  },
  {
      "id": "1205",
      "path": "memes/1/1205.png",
      "width": 800,
      "height": 437
  },
  {
      "id": "1668",
      "path": "memes/1/1668.png",
      "width": 904,
      "height": 1280
  },
  {
      "id": "1153",
      "path": "memes/1/1153.png",
      "width": 640,
      "height": 639
  },
  {
      "id": "1708",
      "path": "memes/1/1708.png",
      "width": 660,
      "height": 598
  },
  {
      "id": "1720",
      "path": "memes/1/1720.png",
      "width": 842,
      "height": 1280
  },
  {
      "id": "1623",
      "path": "memes/1/1623.png",
      "width": 1280,
      "height": 676
  },
  {
      "id": "1458",
      "path": "memes/1/1458.png",
      "width": 1280,
      "height": 554
  },
  {
      "id": "1622",
      "path": "memes/1/1622.png",
      "width": 1200,
      "height": 641
  },
  {
      "id": "1603",
      "path": "memes/1/1603.png",
      "width": 1073,
      "height": 728
  },
  {
      "id": "1676",
      "path": "memes/1/1676.png",
      "width": 1029,
      "height": 1280
  },
  {
      "id": "1698",
      "path": "memes/1/1698.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "1557",
      "path": "memes/1/1557.png",
      "width": 1200,
      "height": 999
  },
  {
      "id": "1664",
      "path": "memes/1/1664.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1229",
      "path": "memes/1/1229.png",
      "width": 552,
      "height": 401
  },
  {
      "id": "1568",
      "path": "memes/1/1568.png",
      "width": 1280,
      "height": 795
  },
  {
      "id": "1814",
      "path": "memes/1/1814.png",
      "width": 263,
      "height": 192
  },
  {
      "id": "1464",
      "path": "memes/1/1464.png",
      "width": 1176,
      "height": 1280
  },
  {
      "id": "1424",
      "path": "memes/1/1424.png",
      "width": 843,
      "height": 1234
  },
  {
      "id": "1338",
      "path": "memes/1/1338.png",
      "width": 900,
      "height": 900
  },
  {
      "id": "1216",
      "path": "memes/1/1216.png",
      "width": 748,
      "height": 1200
  },
  {
      "id": "1913",
      "path": "memes/1/1913.png",
      "width": 640,
      "height": 650
  },
  {
      "id": "1414",
      "path": "memes/1/1414.png",
      "width": 744,
      "height": 265
  },
  {
      "id": "1356",
      "path": "memes/1/1356.png",
      "width": 603,
      "height": 716
  },
  {
      "id": "1468",
      "path": "memes/1/1468.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "1742",
      "path": "memes/1/1742.png",
      "width": 360,
      "height": 350
  },
  {
      "id": "1503",
      "path": "memes/1/1503.png",
      "width": 539,
      "height": 960
  },
  {
      "id": "1815",
      "path": "memes/1/1815.png",
      "width": 460,
      "height": 468
  },
  {
      "id": "1858",
      "path": "memes/1/1858.png",
      "width": 1024,
      "height": 635
  },
  {
      "id": "1453",
      "path": "memes/1/1453.png",
      "width": 640,
      "height": 726
  },
  {
      "id": "1369",
      "path": "memes/1/1369.png",
      "width": 400,
      "height": 500
  },
  {
      "id": "1393",
      "path": "memes/1/1393.png",
      "width": 373,
      "height": 1280
  },
  {
      "id": "1321",
      "path": "memes/1/1321.png",
      "width": 720,
      "height": 720
  },
  {
      "id": "1780",
      "path": "memes/1/1780.png",
      "width": 700,
      "height": 761
  },
  {
      "id": "1911",
      "path": "memes/1/1911.png",
      "width": 1080,
      "height": 1175
  },
  {
      "id": "1365",
      "path": "memes/1/1365.png",
      "width": 1080,
      "height": 1165
  },
  {
      "id": "1325",
      "path": "memes/1/1325.png",
      "width": 500,
      "height": 500
  },
  {
      "id": "1774",
      "path": "memes/1/1774.png",
      "width": 960,
      "height": 798
  },
  {
      "id": "1857",
      "path": "memes/1/1857.png",
      "width": 1080,
      "height": 1141
  },
  {
      "id": "1399",
      "path": "memes/1/1399.png",
      "width": 593,
      "height": 651
  },
  {
      "id": "1779",
      "path": "memes/1/1779.png",
      "width": 899,
      "height": 1280
  },
  {
      "id": "1903",
      "path": "memes/1/1903.png",
      "width": 960,
      "height": 918
  },
  {
      "id": "1629",
      "path": "memes/1/1629.png",
      "width": 700,
      "height": 420
  },
  {
      "id": "1408",
      "path": "memes/1/1408.png",
      "width": 680,
      "height": 494
  },
  {
      "id": "1785",
      "path": "memes/1/1785.png",
      "width": 480,
      "height": 504
  },
  {
      "id": "1459",
      "path": "memes/1/1459.png",
      "width": 480,
      "height": 761
  },
  {
      "id": "1482",
      "path": "memes/1/1482.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "1160",
      "path": "memes/1/1160.png",
      "width": 2400,
      "height": 1350
  },
  {
      "id": "1313",
      "path": "memes/1/1313.png",
      "width": 811,
      "height": 1280
  },
  {
      "id": "1272",
      "path": "memes/1/1272.png",
      "width": 1280,
      "height": 1272
  },
  {
      "id": "1584",
      "path": "memes/1/1584.png",
      "width": 576,
      "height": 1024
  },
  {
      "id": "1388",
      "path": "memes/1/1388.png",
      "width": 1280,
      "height": 1275
  },
  {
      "id": "1531",
      "path": "memes/1/1531.png",
      "width": 900,
      "height": 1200
  },
  {
      "id": "1254",
      "path": "memes/1/1254.png",
      "width": 363,
      "height": 720
  },
  {
      "id": "1599",
      "path": "memes/1/1599.png",
      "width": 695,
      "height": 309
  },
  {
      "id": "1687",
      "path": "memes/1/1687.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1480",
      "path": "memes/1/1480.png",
      "width": 602,
      "height": 750
  },
  {
      "id": "1894",
      "path": "memes/1/1894.png",
      "width": 500,
      "height": 627
  },
  {
      "id": "1253",
      "path": "memes/1/1253.png",
      "width": 999,
      "height": 799
  },
  {
      "id": "1544",
      "path": "memes/1/1544.png",
      "width": 564,
      "height": 799
  },
  {
      "id": "1648",
      "path": "memes/1/1648.png",
      "width": 720,
      "height": 960
  },
  {
      "id": "1837",
      "path": "memes/1/1837.png",
      "width": 640,
      "height": 603
  },
  {
      "id": "1310",
      "path": "memes/1/1310.png",
      "width": 600,
      "height": 477
  },
  {
      "id": "1425",
      "path": "memes/1/1425.png",
      "width": 460,
      "height": 437
  },
  {
      "id": "1745",
      "path": "memes/1/1745.png",
      "width": 868,
      "height": 960
  },
  {
      "id": "1334",
      "path": "memes/1/1334.png",
      "width": 1024,
      "height": 663
  },
  {
      "id": "1571",
      "path": "memes/1/1571.png",
      "width": 1024,
      "height": 768
  },
  {
      "id": "1315",
      "path": "memes/1/1315.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1311",
      "path": "memes/1/1311.png",
      "width": 700,
      "height": 733
  },
  {
      "id": "1772",
      "path": "memes/1/1772.png",
      "width": 660,
      "height": 680
  },
  {
      "id": "1589",
      "path": "memes/1/1589.png",
      "width": 579,
      "height": 391
  },
  {
      "id": "1605",
      "path": "memes/1/1605.png",
      "width": 1200,
      "height": 675
  },
  {
      "id": "1543",
      "path": "memes/1/1543.png",
      "width": 261,
      "height": 196
  },
  {
      "id": "1749",
      "path": "memes/1/1749.png",
      "width": 1047,
      "height": 451
  },
  {
      "id": "1511",
      "path": "memes/1/1511.png",
      "width": 1280,
      "height": 987
  },
  {
      "id": "1849",
      "path": "memes/1/1849.png",
      "width": 600,
      "height": 545
  },
  {
      "id": "1564",
      "path": "memes/1/1564.png",
      "width": 778,
      "height": 720
  },
  {
      "id": "1536",
      "path": "memes/1/1536.png",
      "width": 1080,
      "height": 227
  },
  {
      "id": "1448",
      "path": "memes/1/1448.png",
      "width": 540,
      "height": 960
  },
  {
      "id": "1363",
      "path": "memes/1/1363.png",
      "width": 1280,
      "height": 1238
  },
  {
      "id": "1244",
      "path": "memes/1/1244.png",
      "width": 440,
      "height": 1280
  },
  {
      "id": "1661",
      "path": "memes/1/1661.png",
      "width": 940,
      "height": 788
  },
  {
      "id": "1856",
      "path": "memes/1/1856.png",
      "width": 746,
      "height": 480
  },
  {
      "id": "1317",
      "path": "memes/1/1317.png",
      "width": 1079,
      "height": 1115
  },
  {
      "id": "1799",
      "path": "memes/1/1799.png",
      "width": 534,
      "height": 548
  },
  {
      "id": "1732",
      "path": "memes/1/1732.png",
      "width": 500,
      "height": 500
  },
  {
      "id": "1247",
      "path": "memes/1/1247.png",
      "width": 561,
      "height": 564
  },
  {
      "id": "1624",
      "path": "memes/1/1624.png",
      "width": 1020,
      "height": 880
  },
  {
      "id": "1485",
      "path": "memes/1/1485.png",
      "width": 769,
      "height": 430
  },
  {
      "id": "1899",
      "path": "memes/1/1899.png",
      "width": 640,
      "height": 795
  },
  {
      "id": "1478",
      "path": "memes/1/1478.png",
      "width": 1280,
      "height": 1033
  },
  {
      "id": "1600",
      "path": "memes/1/1600.png",
      "width": 960,
      "height": 1280
  },
  {
      "id": "1149",
      "path": "memes/1/1149.png",
      "width": 1061,
      "height": 914
  },
  {
      "id": "1264",
      "path": "memes/1/1264.png",
      "width": 460,
      "height": 694
  },
  {
      "id": "1573",
      "path": "memes/1/1573.png",
      "width": 1280,
      "height": 1106
  },
  {
      "id": "1561",
      "path": "memes/1/1561.png",
      "width": 1124,
      "height": 1280
  },
  {
      "id": "1575",
      "path": "memes/1/1575.png",
      "width": 986,
      "height": 754
  },
  {
      "id": "1366",
      "path": "memes/1/1366.png",
      "width": 500,
      "height": 715
  },
  {
      "id": "1168",
      "path": "memes/1/1168.png",
      "width": 750,
      "height": 511
  },
  {
      "id": "1937",
      "path": "memes/1/1937.png",
      "width": 720,
      "height": 494
  },
  {
      "id": "1445",
      "path": "memes/1/1445.png",
      "width": 650,
      "height": 605
  },
  {
      "id": "1724",
      "path": "memes/1/1724.png",
      "width": 1080,
      "height": 1134
  },
  {
      "id": "1500",
      "path": "memes/1/1500.png",
      "width": 460,
      "height": 703
  },
  {
      "id": "1545",
      "path": "memes/1/1545.png",
      "width": 640,
      "height": 766
  },
  {
      "id": "1324",
      "path": "memes/1/1324.png",
      "width": 819,
      "height": 1280
  },
  {
      "id": "1768",
      "path": "memes/1/1768.png",
      "width": 601,
      "height": 960
  },
  {
      "id": "1258",
      "path": "memes/1/1258.png",
      "width": 750,
      "height": 265
  },
  {
      "id": "1336",
      "path": "memes/1/1336.png",
      "width": 1280,
      "height": 720
  },
  {
      "id": "1370",
      "path": "memes/1/1370.png",
      "width": 843,
      "height": 872
  },
  {
      "id": "1278",
      "path": "memes/1/1278.png",
      "width": 635,
      "height": 611
  },
  {
      "id": "1820",
      "path": "memes/1/1820.png",
      "width": 640,
      "height": 711
  },
  {
      "id": "1158",
      "path": "memes/1/1158.png",
      "width": 770,
      "height": 866
  },
  {
      "id": "1263",
      "path": "memes/1/1263.png",
      "width": 460,
      "height": 319
  },
  {
      "id": "1927",
      "path": "memes/1/1927.png",
      "width": 540,
      "height": 851
  },
  {
      "id": "1684",
      "path": "memes/1/1684.png",
      "width": 1081,
      "height": 1076
  },
  {
      "id": "1854",
      "path": "memes/1/1854.png",
      "width": 540,
      "height": 685
  },
  {
      "id": "1227",
      "path": "memes/1/1227.png",
      "width": 512,
      "height": 561
  },
  {
      "id": "1302",
      "path": "memes/1/1302.png",
      "width": 1019,
      "height": 1280
  },
  {
      "id": "1467",
      "path": "memes/1/1467.png",
      "width": 600,
      "height": 384
  },
  {
      "id": "1566",
      "path": "memes/1/1566.png",
      "width": 700,
      "height": 467
  },
  {
      "id": "1736",
      "path": "memes/1/1736.png",
      "width": 1274,
      "height": 1280
  },
  {
      "id": "1415",
      "path": "memes/1/1415.png",
      "width": 640,
      "height": 666
  },
  {
      "id": "1237",
      "path": "memes/1/1237.png",
      "width": 1069,
      "height": 1279
  },
  {
      "id": "1492",
      "path": "memes/1/1492.png",
      "width": 960,
      "height": 734
  },
  {
      "id": "1362",
      "path": "memes/1/1362.png",
      "width": 1280,
      "height": 1280
  },
  {
      "id": "1538",
      "path": "memes/1/1538.png",
      "width": 640,
      "height": 687
  },
  {
      "id": "1775",
      "path": "memes/1/1775.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1289",
      "path": "memes/1/1289.png",
      "width": 550,
      "height": 423
  },
  {
      "id": "1210",
      "path": "memes/1/1210.png",
      "width": 1080,
      "height": 1275
  },
  {
      "id": "1488",
      "path": "memes/1/1488.png",
      "width": 650,
      "height": 606
  },
  {
      "id": "1212",
      "path": "memes/1/1212.png",
      "width": 1280,
      "height": 1205
  },
  {
      "id": "1939",
      "path": "memes/1/1939.png",
      "width": 640,
      "height": 665
  },
  {
      "id": "1447",
      "path": "memes/1/1447.png",
      "width": 1280,
      "height": 852
  },
  {
      "id": "1691",
      "path": "memes/1/1691.png",
      "width": 1280,
      "height": 1280
  },
  {
      "id": "1195",
      "path": "memes/1/1195.png",
      "width": 1080,
      "height": 596
  },
  {
      "id": "1892",
      "path": "memes/1/1892.png",
      "width": 602,
      "height": 486
  },
  {
      "id": "1562",
      "path": "memes/1/1562.png",
      "width": 500,
      "height": 812
  },
  {
      "id": "1627",
      "path": "memes/1/1627.png",
      "width": 569,
      "height": 721
  },
  {
      "id": "1649",
      "path": "memes/1/1649.png",
      "width": 398,
      "height": 207
  },
  {
      "id": "1271",
      "path": "memes/1/1271.png",
      "width": 1125,
      "height": 1125
  },
  {
      "id": "1893",
      "path": "memes/1/1893.png",
      "width": 1280,
      "height": 828
  },
  {
      "id": "1789",
      "path": "memes/1/1789.png",
      "width": 640,
      "height": 639
  },
  {
      "id": "1204",
      "path": "memes/1/1204.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "1719",
      "path": "memes/1/1719.png",
      "width": 603,
      "height": 387
  },
  {
      "id": "1232",
      "path": "memes/1/1232.png",
      "width": 636,
      "height": 231
  },
  {
      "id": "1451",
      "path": "memes/1/1451.png",
      "width": 1280,
      "height": 1231
  },
  {
      "id": "1876",
      "path": "memes/1/1876.png",
      "width": 1125,
      "height": 996
  },
  {
      "id": "1678",
      "path": "memes/1/1678.png",
      "width": 1184,
      "height": 880
  },
  {
      "id": "1151",
      "path": "memes/1/1151.png",
      "width": 1190,
      "height": 233
  },
  {
      "id": "1839",
      "path": "memes/1/1839.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1339",
      "path": "memes/1/1339.png",
      "width": 1280,
      "height": 1107
  },
  {
      "id": "1551",
      "path": "memes/1/1551.png",
      "width": 680,
      "height": 534
  },
  {
      "id": "1644",
      "path": "memes/1/1644.png",
      "width": 500,
      "height": 672
  },
  {
      "id": "1173",
      "path": "memes/1/1173.png",
      "width": 223,
      "height": 315
  },
  {
      "id": "1152",
      "path": "memes/1/1152.png",
      "width": 336,
      "height": 265
  },
  {
      "id": "1918",
      "path": "memes/1/1918.png",
      "width": 569,
      "height": 1200
  },
  {
      "id": "1299",
      "path": "memes/1/1299.png",
      "width": 1279,
      "height": 1268
  },
  {
      "id": "1872",
      "path": "memes/1/1872.png",
      "width": 694,
      "height": 877
  },
  {
      "id": "1473",
      "path": "memes/1/1473.png",
      "width": 502,
      "height": 537
  },
  {
      "id": "1267",
      "path": "memes/1/1267.png",
      "width": 631,
      "height": 631
  },
  {
      "id": "1155",
      "path": "memes/1/1155.png",
      "width": 800,
      "height": 800
  },
  {
      "id": "1494",
      "path": "memes/1/1494.png",
      "width": 438,
      "height": 1280
  },
  {
      "id": "1175",
      "path": "memes/1/1175.png",
      "width": 546,
      "height": 800
  },
  {
      "id": "1680",
      "path": "memes/1/1680.png",
      "width": 894,
      "height": 1280
  },
  {
      "id": "1197",
      "path": "memes/1/1197.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "1587",
      "path": "memes/1/1587.png",
      "width": 960,
      "height": 946
  },
  {
      "id": "1848",
      "path": "memes/1/1848.png",
      "width": 760,
      "height": 317
  },
  {
      "id": "1673",
      "path": "memes/1/1673.png",
      "width": 500,
      "height": 564
  },
  {
      "id": "1400",
      "path": "memes/1/1400.png",
      "width": 700,
      "height": 456
  },
  {
      "id": "1432",
      "path": "memes/1/1432.png",
      "width": 640,
      "height": 1095
  },
  {
      "id": "1730",
      "path": "memes/1/1730.png",
      "width": 355,
      "height": 465
  },
  {
      "id": "1246",
      "path": "memes/1/1246.png",
      "width": 625,
      "height": 351
  },
  {
      "id": "1595",
      "path": "memes/1/1595.png",
      "width": 716,
      "height": 130
  },
  {
      "id": "1498",
      "path": "memes/1/1498.png",
      "width": 640,
      "height": 628
  },
  {
      "id": "1574",
      "path": "memes/1/1574.png",
      "width": 600,
      "height": 359
  },
  {
      "id": "1534",
      "path": "memes/1/1534.png",
      "width": 827,
      "height": 1024
  },
  {
      "id": "1790",
      "path": "memes/1/1790.png",
      "width": 700,
      "height": 676
  },
  {
      "id": "1539",
      "path": "memes/1/1539.png",
      "width": 1094,
      "height": 1280
  },
  {
      "id": "1515",
      "path": "memes/1/1515.png",
      "width": 817,
      "height": 1279
  },
  {
      "id": "1526",
      "path": "memes/1/1526.png",
      "width": 627,
      "height": 398
  },
  {
      "id": "1667",
      "path": "memes/1/1667.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1619",
      "path": "memes/1/1619.png",
      "width": 606,
      "height": 1280
  },
  {
      "id": "1741",
      "path": "memes/1/1741.png",
      "width": 480,
      "height": 577
  },
  {
      "id": "1283",
      "path": "memes/1/1283.png",
      "width": 1082,
      "height": 1280
  },
  {
      "id": "1189",
      "path": "memes/1/1189.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1601",
      "path": "memes/1/1601.png",
      "width": 700,
      "height": 562
  },
  {
      "id": "1654",
      "path": "memes/1/1654.png",
      "width": 904,
      "height": 1280
  },
  {
      "id": "1524",
      "path": "memes/1/1524.png",
      "width": 630,
      "height": 420
  },
  {
      "id": "1359",
      "path": "memes/1/1359.png",
      "width": 911,
      "height": 913
  },
  {
      "id": "1472",
      "path": "memes/1/1472.png",
      "width": 1097,
      "height": 1280
  },
  {
      "id": "1788",
      "path": "memes/1/1788.png",
      "width": 640,
      "height": 383
  },
  {
      "id": "1822",
      "path": "memes/1/1822.png",
      "width": 540,
      "height": 534
  },
  {
      "id": "1249",
      "path": "memes/1/1249.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1767",
      "path": "memes/1/1767.png",
      "width": 700,
      "height": 832
  },
  {
      "id": "1787",
      "path": "memes/1/1787.png",
      "width": 720,
      "height": 720
  },
  {
      "id": "1394",
      "path": "memes/1/1394.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1912",
      "path": "memes/1/1912.png",
      "width": 428,
      "height": 536
  },
  {
      "id": "1261",
      "path": "memes/1/1261.png",
      "width": 1280,
      "height": 1153
  },
  {
      "id": "1877",
      "path": "memes/1/1877.png",
      "width": 644,
      "height": 315
  },
  {
      "id": "1944",
      "path": "memes/1/1944.png",
      "width": 1280,
      "height": 634
  },
  {
      "id": "1343",
      "path": "memes/1/1343.png",
      "width": 1280,
      "height": 499
  },
  {
      "id": "1489",
      "path": "memes/1/1489.png",
      "width": 1280,
      "height": 1280
  },
  {
      "id": "1771",
      "path": "memes/1/1771.png",
      "width": 513,
      "height": 500
  },
  {
      "id": "1290",
      "path": "memes/1/1290.png",
      "width": 776,
      "height": 296
  },
  {
      "id": "1389",
      "path": "memes/1/1389.png",
      "width": 1062,
      "height": 1280
  },
  {
      "id": "1404",
      "path": "memes/1/1404.png",
      "width": 582,
      "height": 436
  },
  {
      "id": "1532",
      "path": "memes/1/1532.png",
      "width": 700,
      "height": 733
  },
  {
      "id": "1231",
      "path": "memes/1/1231.png",
      "width": 810,
      "height": 1280
  },
  {
      "id": "1731",
      "path": "memes/1/1731.png",
      "width": 592,
      "height": 152
  },
  {
      "id": "1947",
      "path": "memes/1/1947.png",
      "width": 612,
      "height": 1024
  },
  {
      "id": "1932",
      "path": "memes/1/1932.png",
      "width": 1280,
      "height": 1218
  },
  {
      "id": "1533",
      "path": "memes/1/1533.png",
      "width": 474,
      "height": 374
  },
  {
      "id": "1360",
      "path": "memes/1/1360.png",
      "width": 640,
      "height": 715
  },
  {
      "id": "1550",
      "path": "memes/1/1550.png",
      "width": 720,
      "height": 960
  },
  {
      "id": "1924",
      "path": "memes/1/1924.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1740",
      "path": "memes/1/1740.png",
      "width": 1080,
      "height": 790
  },
  {
      "id": "1450",
      "path": "memes/1/1450.png",
      "width": 703,
      "height": 960
  },
  {
      "id": "1915",
      "path": "memes/1/1915.png",
      "width": 534,
      "height": 529
  },
  {
      "id": "1516",
      "path": "memes/1/1516.png",
      "width": 1047,
      "height": 1279
  },
  {
      "id": "1588",
      "path": "memes/1/1588.png",
      "width": 900,
      "height": 1200
  },
  {
      "id": "1590",
      "path": "memes/1/1590.png",
      "width": 193,
      "height": 260
  },
  {
      "id": "1222",
      "path": "memes/1/1222.png",
      "width": 618,
      "height": 770
  },
  {
      "id": "1827",
      "path": "memes/1/1827.png",
      "width": 600,
      "height": 564
  },
  {
      "id": "1440",
      "path": "memes/1/1440.png",
      "width": 632,
      "height": 394
  },
  {
      "id": "1756",
      "path": "memes/1/1756.png",
      "width": 666,
      "height": 1280
  },
  {
      "id": "1830",
      "path": "memes/1/1830.png",
      "width": 749,
      "height": 840
  },
  {
      "id": "1701",
      "path": "memes/1/1701.png",
      "width": 700,
      "height": 812
  },
  {
      "id": "1897",
      "path": "memes/1/1897.png",
      "width": 640,
      "height": 546
  },
  {
      "id": "1685",
      "path": "memes/1/1685.png",
      "width": 1080,
      "height": 342
  },
  {
      "id": "1864",
      "path": "memes/1/1864.png",
      "width": 1280,
      "height": 470
  },
  {
      "id": "1209",
      "path": "memes/1/1209.png",
      "width": 1280,
      "height": 1213
  },
  {
      "id": "1576",
      "path": "memes/1/1576.png",
      "width": 972,
      "height": 1024
  },
  {
      "id": "1688",
      "path": "memes/1/1688.png",
      "width": 500,
      "height": 701
  },
  {
      "id": "1923",
      "path": "memes/1/1923.png",
      "width": 598,
      "height": 396
  },
  {
      "id": "1792",
      "path": "memes/1/1792.png",
      "width": 1280,
      "height": 902
  },
  {
      "id": "1633",
      "path": "memes/1/1633.png",
      "width": 1080,
      "height": 1094
  },
  {
      "id": "1765",
      "path": "memes/1/1765.png",
      "width": 500,
      "height": 500
  },
  {
      "id": "1215",
      "path": "memes/1/1215.png",
      "width": 455,
      "height": 1280
  },
  {
      "id": "1446",
      "path": "memes/1/1446.png",
      "width": 500,
      "height": 1043
  },
  {
      "id": "1602",
      "path": "memes/1/1602.png",
      "width": 1084,
      "height": 1280
  },
  {
      "id": "1617",
      "path": "memes/1/1617.png",
      "width": 1070,
      "height": 1280
  },
  {
      "id": "1297",
      "path": "memes/1/1297.png",
      "width": 1200,
      "height": 893
  },
  {
      "id": "1381",
      "path": "memes/1/1381.png",
      "width": 1081,
      "height": 1280
  },
  {
      "id": "1361",
      "path": "memes/1/1361.png",
      "width": 786,
      "height": 978
  },
  {
      "id": "1618",
      "path": "memes/1/1618.png",
      "width": 553,
      "height": 604
  },
  {
      "id": "1821",
      "path": "memes/1/1821.png",
      "width": 640,
      "height": 635
  },
  {
      "id": "1910",
      "path": "memes/1/1910.png",
      "width": 700,
      "height": 864
  },
  {
      "id": "1170",
      "path": "memes/1/1170.png",
      "width": 750,
      "height": 1000
  },
  {
      "id": "1834",
      "path": "memes/1/1834.png",
      "width": 1280,
      "height": 998
  },
  {
      "id": "1454",
      "path": "memes/1/1454.png",
      "width": 718,
      "height": 960
  },
  {
      "id": "1461",
      "path": "memes/1/1461.png",
      "width": 700,
      "height": 875
  },
  {
      "id": "1558",
      "path": "memes/1/1558.png",
      "width": 1192,
      "height": 1280
  },
  {
      "id": "1474",
      "path": "memes/1/1474.png",
      "width": 373,
      "height": 276
  },
  {
      "id": "1766",
      "path": "memes/1/1766.png",
      "width": 1080,
      "height": 968
  },
  {
      "id": "1508",
      "path": "memes/1/1508.png",
      "width": 628,
      "height": 101
  },
  {
      "id": "1651",
      "path": "memes/1/1651.png",
      "width": 454,
      "height": 603
  },
  {
      "id": "1423",
      "path": "memes/1/1423.png",
      "width": 640,
      "height": 572
  },
  {
      "id": "1581",
      "path": "memes/1/1581.png",
      "width": 233,
      "height": 1280
  },
  {
      "id": "1384",
      "path": "memes/1/1384.png",
      "width": 1249,
      "height": 1280
  },
  {
      "id": "1773",
      "path": "memes/1/1773.png",
      "width": 1056,
      "height": 979
  },
  {
      "id": "1309",
      "path": "memes/1/1309.png",
      "width": 708,
      "height": 708
  },
  {
      "id": "1422",
      "path": "memes/1/1422.png",
      "width": 480,
      "height": 476
  },
  {
      "id": "1405",
      "path": "memes/1/1405.png",
      "width": 720,
      "height": 722
  },
  {
      "id": "1693",
      "path": "memes/1/1693.png",
      "width": 750,
      "height": 682
  },
  {
      "id": "1596",
      "path": "memes/1/1596.png",
      "width": 540,
      "height": 671
  },
  {
      "id": "1452",
      "path": "memes/1/1452.png",
      "width": 460,
      "height": 515
  },
  {
      "id": "1308",
      "path": "memes/1/1308.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1670",
      "path": "memes/1/1670.png",
      "width": 500,
      "height": 522
  },
  {
      "id": "1683",
      "path": "memes/1/1683.png",
      "width": 720,
      "height": 814
  },
  {
      "id": "1288",
      "path": "memes/1/1288.png",
      "width": 1024,
      "height": 1024
  },
  {
      "id": "1176",
      "path": "memes/1/1176.png",
      "width": 700,
      "height": 461
  },
  {
      "id": "1396",
      "path": "memes/1/1396.png",
      "width": 700,
      "height": 643
  },
  {
      "id": "1301",
      "path": "memes/1/1301.png",
      "width": 720,
      "height": 714
  },
  {
      "id": "1656",
      "path": "memes/1/1656.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1410",
      "path": "memes/1/1410.png",
      "width": 1280,
      "height": 300
  },
  {
      "id": "1519",
      "path": "memes/1/1519.png",
      "width": 525,
      "height": 375
  },
  {
      "id": "1270",
      "path": "memes/1/1270.png",
      "width": 700,
      "height": 448
  },
  {
      "id": "1715",
      "path": "memes/1/1715.png",
      "width": 1080,
      "height": 1119
  },
  {
      "id": "1291",
      "path": "memes/1/1291.png",
      "width": 700,
      "height": 345
  },
  {
      "id": "1444",
      "path": "memes/1/1444.png",
      "width": 1280,
      "height": 720
  },
  {
      "id": "1823",
      "path": "memes/1/1823.png",
      "width": 460,
      "height": 237
  },
  {
      "id": "1329",
      "path": "memes/1/1329.png",
      "width": 720,
      "height": 570
  },
  {
      "id": "1851",
      "path": "memes/1/1851.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "1530",
      "path": "memes/1/1530.png",
      "width": 1280,
      "height": 1006
  },
  {
      "id": "1510",
      "path": "memes/1/1510.png",
      "width": 710,
      "height": 711
  },
  {
      "id": "1417",
      "path": "memes/1/1417.png",
      "width": 500,
      "height": 362
  },
  {
      "id": "1770",
      "path": "memes/1/1770.png",
      "width": 720,
      "height": 867
  },
  {
      "id": "1355",
      "path": "memes/1/1355.png",
      "width": 1280,
      "height": 688
  },
  {
      "id": "1159",
      "path": "memes/1/1159.png",
      "width": 999,
      "height": 1280
  },
  {
      "id": "1824",
      "path": "memes/1/1824.png",
      "width": 960,
      "height": 746
  },
  {
      "id": "1277",
      "path": "memes/1/1277.png",
      "width": 642,
      "height": 960
  },
  {
      "id": "1314",
      "path": "memes/1/1314.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "1190",
      "path": "memes/1/1190.png",
      "width": 749,
      "height": 695
  },
  {
      "id": "1930",
      "path": "memes/1/1930.png",
      "width": 622,
      "height": 1280
  },
  {
      "id": "1582",
      "path": "memes/1/1582.png",
      "width": 640,
      "height": 774
  },
  {
      "id": "1718",
      "path": "memes/1/1718.png",
      "width": 1080,
      "height": 1216
  },
  {
      "id": "1167",
      "path": "memes/1/1167.png",
      "width": 715,
      "height": 755
  },
  {
      "id": "1250",
      "path": "memes/1/1250.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "1686",
      "path": "memes/1/1686.png",
      "width": 918,
      "height": 1280
  },
  {
      "id": "1219",
      "path": "memes/1/1219.png",
      "width": 819,
      "height": 708
  },
  {
      "id": "1786",
      "path": "memes/1/1786.png",
      "width": 720,
      "height": 891
  },
  {
      "id": "1806",
      "path": "memes/1/1806.png",
      "width": 320,
      "height": 412
  },
  {
      "id": "1180",
      "path": "memes/1/1180.png",
      "width": 200,
      "height": 312
  },
  {
      "id": "1692",
      "path": "memes/1/1692.png",
      "width": 1280,
      "height": 713
  },
  {
      "id": "1201",
      "path": "memes/1/1201.png",
      "width": 567,
      "height": 574
  },
  {
      "id": "1239",
      "path": "memes/1/1239.png",
      "width": 500,
      "height": 323
  },
  {
      "id": "1442",
      "path": "memes/1/1442.png",
      "width": 1024,
      "height": 1280
  },
  {
      "id": "1392",
      "path": "memes/1/1392.png",
      "width": 1260,
      "height": 1280
  },
  {
      "id": "1700",
      "path": "memes/1/1700.png",
      "width": 809,
      "height": 960
  },
  {
      "id": "1274",
      "path": "memes/1/1274.png",
      "width": 500,
      "height": 395
  },
  {
      "id": "1213",
      "path": "memes/1/1213.png",
      "width": 450,
      "height": 270
  },
  {
      "id": "1572",
      "path": "memes/1/1572.png",
      "width": 684,
      "height": 1076
  },
  {
      "id": "1330",
      "path": "memes/1/1330.png",
      "width": 540,
      "height": 499
  },
  {
      "id": "1835",
      "path": "memes/1/1835.png",
      "width": 866,
      "height": 810
  },
  {
      "id": "1268",
      "path": "memes/1/1268.png",
      "width": 1280,
      "height": 1067
  },
  {
      "id": "1514",
      "path": "memes/1/1514.png",
      "width": 735,
      "height": 627
  },
  {
      "id": "1928",
      "path": "memes/1/1928.png",
      "width": 1280,
      "height": 1012
  },
  {
      "id": "1226",
      "path": "memes/1/1226.png",
      "width": 786,
      "height": 191
  },
  {
      "id": "1879",
      "path": "memes/1/1879.png",
      "width": 750,
      "height": 731
  },
  {
      "id": "1808",
      "path": "memes/1/1808.png",
      "width": 640,
      "height": 743
  },
  {
      "id": "1842",
      "path": "memes/1/1842.png",
      "width": 358,
      "height": 218
  },
  {
      "id": "1579",
      "path": "memes/1/1579.png",
      "width": 640,
      "height": 626
  },
  {
      "id": "1358",
      "path": "memes/1/1358.png",
      "width": 225,
      "height": 225
  },
  {
      "id": "1233",
      "path": "memes/1/1233.png",
      "width": 802,
      "height": 928
  },
  {
      "id": "1260",
      "path": "memes/1/1260.png",
      "width": 960,
      "height": 717
  },
  {
      "id": "1621",
      "path": "memes/1/1621.png",
      "width": 1280,
      "height": 725
  },
  {
      "id": "1513",
      "path": "memes/1/1513.png",
      "width": 563,
      "height": 655
  },
  {
      "id": "1509",
      "path": "memes/1/1509.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1438",
      "path": "memes/1/1438.png",
      "width": 700,
      "height": 933
  },
  {
      "id": "1413",
      "path": "memes/1/1413.png",
      "width": 1280,
      "height": 1253
  },
  {
      "id": "1636",
      "path": "memes/1/1636.png",
      "width": 1200,
      "height": 1200
  },
  {
      "id": "1747",
      "path": "memes/1/1747.png",
      "width": 639,
      "height": 580
  },
  {
      "id": "1906",
      "path": "memes/1/1906.png",
      "width": 640,
      "height": 713
  },
  {
      "id": "1833",
      "path": "memes/1/1833.png",
      "width": 1125,
      "height": 1044
  },
  {
      "id": "1931",
      "path": "memes/1/1931.png",
      "width": 500,
      "height": 496
  },
  {
      "id": "1307",
      "path": "memes/1/1307.png",
      "width": 605,
      "height": 420
  },
  {
      "id": "1347",
      "path": "memes/1/1347.png",
      "width": 715,
      "height": 960
  },
  {
      "id": "1859",
      "path": "memes/1/1859.png",
      "width": 928,
      "height": 1280
  },
  {
      "id": "1777",
      "path": "memes/1/1777.png",
      "width": 374,
      "height": 463
  },
  {
      "id": "1727",
      "path": "memes/1/1727.png",
      "width": 754,
      "height": 758
  },
  {
      "id": "1240",
      "path": "memes/1/1240.png",
      "width": 1280,
      "height": 925
  },
  {
      "id": "1712",
      "path": "memes/1/1712.png",
      "width": 1080,
      "height": 1151
  },
  {
      "id": "1337",
      "path": "memes/1/1337.png",
      "width": 855,
      "height": 1280
  },
  {
      "id": "1734",
      "path": "memes/1/1734.png",
      "width": 1080,
      "height": 990
  },
  {
      "id": "1386",
      "path": "memes/1/1386.png",
      "width": 1030,
      "height": 1279
  },
  {
      "id": "1753",
      "path": "memes/1/1753.png",
      "width": 401,
      "height": 459
  },
  {
      "id": "1681",
      "path": "memes/1/1681.png",
      "width": 700,
      "height": 671
  },
  {
      "id": "1434",
      "path": "memes/1/1434.png",
      "width": 640,
      "height": 352
  },
  {
      "id": "1945",
      "path": "memes/1/1945.png",
      "width": 1079,
      "height": 1023
  },
  {
      "id": "1925",
      "path": "memes/1/1925.png",
      "width": 754,
      "height": 621
  },
  {
      "id": "1150",
      "path": "memes/1/1150.png",
      "width": 640,
      "height": 480
  },
  {
      "id": "1936",
      "path": "memes/1/1936.png",
      "width": 720,
      "height": 674
  },
  {
      "id": "1441",
      "path": "memes/1/1441.png",
      "width": 1125,
      "height": 875
  },
  {
      "id": "1738",
      "path": "memes/1/1738.png",
      "width": 480,
      "height": 720
  },
  {
      "id": "1880",
      "path": "memes/1/1880.png",
      "width": 958,
      "height": 1280
  },
  {
      "id": "1486",
      "path": "memes/1/1486.png",
      "width": 640,
      "height": 1028
  },
  {
      "id": "1460",
      "path": "memes/1/1460.png",
      "width": 1061,
      "height": 1280
  },
  {
      "id": "1385",
      "path": "memes/1/1385.png",
      "width": 1276,
      "height": 1280
  },
  {
      "id": "1490",
      "path": "memes/1/1490.png",
      "width": 700,
      "height": 682
  },
  {
      "id": "1527",
      "path": "memes/1/1527.png",
      "width": 750,
      "height": 443
  },
  {
      "id": "1696",
      "path": "memes/1/1696.png",
      "width": 460,
      "height": 582
  },
  {
      "id": "1896",
      "path": "memes/1/1896.png",
      "width": 1125,
      "height": 1091
  },
  {
      "id": "1638",
      "path": "memes/1/1638.png",
      "width": 960,
      "height": 480
  },
  {
      "id": "1371",
      "path": "memes/1/1371.png",
      "width": 1280,
      "height": 1279
  },
  {
      "id": "1607",
      "path": "memes/1/1607.png",
      "width": 640,
      "height": 948
  },
  {
      "id": "1390",
      "path": "memes/1/1390.png",
      "width": 700,
      "height": 1081
  },
  {
      "id": "1198",
      "path": "memes/1/1198.png",
      "width": 800,
      "height": 1047
  },
  {
      "id": "1746",
      "path": "memes/1/1746.png",
      "width": 720,
      "height": 691
  },
  {
      "id": "1256",
      "path": "memes/1/1256.png",
      "width": 455,
      "height": 1280
  },
  {
      "id": "1660",
      "path": "memes/1/1660.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "1449",
      "path": "memes/1/1449.png",
      "width": 750,
      "height": 738
  },
  {
      "id": "1236",
      "path": "memes/1/1236.png",
      "width": 817,
      "height": 1280
  },
  {
      "id": "1763",
      "path": "memes/1/1763.png",
      "width": 700,
      "height": 682
  },
  {
      "id": "1471",
      "path": "memes/1/1471.png",
      "width": 568,
      "height": 1280
  },
  {
      "id": "1592",
      "path": "memes/1/1592.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "1375",
      "path": "memes/1/1375.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "1853",
      "path": "memes/1/1853.png",
      "width": 500,
      "height": 554
  },
  {
      "id": "1556",
      "path": "memes/1/1556.png",
      "width": 640,
      "height": 540
  },
  {
      "id": "1368",
      "path": "memes/1/1368.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "1671",
      "path": "memes/1/1671.png",
      "width": 720,
      "height": 834
  },
  {
      "id": "1810",
      "path": "memes/1/1810.png",
      "width": 720,
      "height": 707
  },
  {
      "id": "1640",
      "path": "memes/1/1640.png",
      "width": 1280,
      "height": 699
  },
  {
      "id": "1320",
      "path": "memes/1/1320.png",
      "width": 272,
      "height": 320
  },
  {
      "id": "1528",
      "path": "memes/1/1528.png",
      "width": 615,
      "height": 800
  },
  {
      "id": "1181",
      "path": "memes/1/1181.png",
      "width": 240,
      "height": 301
  },
  {
      "id": "1838",
      "path": "memes/1/1838.png",
      "width": 960,
      "height": 689
  },
  {
      "id": "1455",
      "path": "memes/1/1455.png",
      "width": 469,
      "height": 487
  },
  {
      "id": "1836",
      "path": "memes/1/1836.png",
      "width": 800,
      "height": 716
  },
  {
      "id": "1632",
      "path": "memes/1/1632.png",
      "width": 1199,
      "height": 596
  },
  {
      "id": "1418",
      "path": "memes/1/1418.png",
      "width": 890,
      "height": 1112
  },
  {
      "id": "557",
      "path": "memes/2/557.png",
      "width": 903,
      "height": 1280
  },
  {
      "id": "673",
      "path": "memes/2/673.png",
      "width": 600,
      "height": 600
  },
  {
      "id": "576",
      "path": "memes/2/576.png",
      "width": 500,
      "height": 316
  },
  {
      "id": "989",
      "path": "memes/2/989.png",
      "width": 750,
      "height": 750
  },
  {
      "id": "544",
      "path": "memes/2/544.png",
      "width": 413,
      "height": 360
  },
  {
      "id": "761",
      "path": "memes/2/761.png",
      "width": 749,
      "height": 939
  },
  {
      "id": "1055",
      "path": "memes/2/1055.png",
      "width": 479,
      "height": 577
  },
  {
      "id": "656",
      "path": "memes/2/656.png",
      "width": 631,
      "height": 960
  },
  {
      "id": "911",
      "path": "memes/2/911.png",
      "width": 474,
      "height": 306
  },
  {
      "id": "788",
      "path": "memes/2/788.png",
      "width": 960,
      "height": 897
  },
  {
      "id": "533",
      "path": "memes/2/533.png",
      "width": 483,
      "height": 443
  },
  {
      "id": "418",
      "path": "memes/2/418.png",
      "width": 1200,
      "height": 1000
  },
  {
      "id": "764",
      "path": "memes/2/764.png",
      "width": 309,
      "height": 800
  },
  {
      "id": "980",
      "path": "memes/2/980.png",
      "width": 634,
      "height": 1280
  },
  {
      "id": "1045",
      "path": "memes/2/1045.png",
      "width": 500,
      "height": 520
  },
  {
      "id": "382",
      "path": "memes/2/382.png",
      "width": 500,
      "height": 295
  },
  {
      "id": "701",
      "path": "memes/2/701.png",
      "width": 500,
      "height": 375
  },
  {
      "id": "882",
      "path": "memes/2/882.png",
      "width": 430,
      "height": 1280
  },
  {
      "id": "986",
      "path": "memes/2/986.png",
      "width": 587,
      "height": 317
  },
  {
      "id": "414",
      "path": "memes/2/414.png",
      "width": 480,
      "height": 480
  },
  {
      "id": "380",
      "path": "memes/2/380.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "997",
      "path": "memes/2/997.png",
      "width": 585,
      "height": 800
  },
  {
      "id": "1068",
      "path": "memes/2/1068.png",
      "width": 1069,
      "height": 799
  },
  {
      "id": "1137",
      "path": "memes/2/1137.png",
      "width": 650,
      "height": 450
  },
  {
      "id": "515",
      "path": "memes/2/515.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "412",
      "path": "memes/2/412.png",
      "width": 485,
      "height": 388
  },
  {
      "id": "978",
      "path": "memes/2/978.png",
      "width": 750,
      "height": 750
  },
  {
      "id": "367",
      "path": "memes/2/367.png",
      "width": 649,
      "height": 1280
  },
  {
      "id": "572",
      "path": "memes/2/572.png",
      "width": 381,
      "height": 513
  },
  {
      "id": "917",
      "path": "memes/2/917.png",
      "width": 320,
      "height": 315
  },
  {
      "id": "902",
      "path": "memes/2/902.png",
      "width": 867,
      "height": 960
  },
  {
      "id": "1114",
      "path": "memes/2/1114.png",
      "width": 1125,
      "height": 879
  },
  {
      "id": "964",
      "path": "memes/2/964.png",
      "width": 750,
      "height": 742
  },
  {
      "id": "799",
      "path": "memes/2/799.png",
      "width": 493,
      "height": 369
  },
  {
      "id": "825",
      "path": "memes/2/825.png",
      "width": 346,
      "height": 256
  },
  {
      "id": "979",
      "path": "memes/2/979.png",
      "width": 1024,
      "height": 655
  },
  {
      "id": "1002",
      "path": "memes/2/1002.png",
      "width": 1080,
      "height": 1222
  },
  {
      "id": "719",
      "path": "memes/2/719.png",
      "width": 479,
      "height": 429
  },
  {
      "id": "370",
      "path": "memes/2/370.png",
      "width": 492,
      "height": 776
  },
  {
      "id": "1052",
      "path": "memes/2/1052.png",
      "width": 1202,
      "height": 1063
  },
  {
      "id": "1026",
      "path": "memes/2/1026.png",
      "width": 491,
      "height": 800
  },
  {
      "id": "871",
      "path": "memes/2/871.png",
      "width": 897,
      "height": 448
  },
  {
      "id": "1144",
      "path": "memes/2/1144.png",
      "width": 720,
      "height": 315
  },
  {
      "id": "547",
      "path": "memes/2/547.png",
      "width": 749,
      "height": 994
  },
  {
      "id": "798",
      "path": "memes/2/798.png",
      "width": 346,
      "height": 346
  },
  {
      "id": "1033",
      "path": "memes/2/1033.png",
      "width": 629,
      "height": 402
  },
  {
      "id": "368",
      "path": "memes/2/368.png",
      "width": 500,
      "height": 800
  },
  {
      "id": "1043",
      "path": "memes/2/1043.png",
      "width": 600,
      "height": 800
  },
  {
      "id": "820",
      "path": "memes/2/820.png",
      "width": 600,
      "height": 300
  },
  {
      "id": "402",
      "path": "memes/2/402.png",
      "width": 700,
      "height": 588
  },
  {
      "id": "366",
      "path": "memes/2/366.png",
      "width": 500,
      "height": 693
  },
  {
      "id": "383",
      "path": "memes/2/383.png",
      "width": 480,
      "height": 360
  },
  {
      "id": "591",
      "path": "memes/2/591.png",
      "width": 480,
      "height": 368
  },
  {
      "id": "675",
      "path": "memes/2/675.png",
      "width": 750,
      "height": 397
  },
  {
      "id": "984",
      "path": "memes/2/984.png",
      "width": 480,
      "height": 479
  },
  {
      "id": "834",
      "path": "memes/2/834.png",
      "width": 720,
      "height": 888
  },
  {
      "id": "790",
      "path": "memes/2/790.png",
      "width": 346,
      "height": 666
  },
  {
      "id": "648",
      "path": "memes/2/648.png",
      "width": 588,
      "height": 351
  },
  {
      "id": "1127",
      "path": "memes/2/1127.png",
      "width": 400,
      "height": 800
  },
  {
      "id": "786",
      "path": "memes/2/786.png",
      "width": 960,
      "height": 1280
  },
  {
      "id": "639",
      "path": "memes/2/639.png",
      "width": 484,
      "height": 604
  },
  {
      "id": "793",
      "path": "memes/2/793.png",
      "width": 714,
      "height": 644
  },
  {
      "id": "600",
      "path": "memes/2/600.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "745",
      "path": "memes/2/745.png",
      "width": 450,
      "height": 605
  },
  {
      "id": "1027",
      "path": "memes/2/1027.png",
      "width": 588,
      "height": 472
  },
  {
      "id": "851",
      "path": "memes/2/851.png",
      "width": 960,
      "height": 614
  },
  {
      "id": "941",
      "path": "memes/2/941.png",
      "width": 576,
      "height": 744
  },
  {
      "id": "1014",
      "path": "memes/2/1014.png",
      "width": 320,
      "height": 255
  },
  {
      "id": "476",
      "path": "memes/2/476.png",
      "width": 600,
      "height": 394
  },
  {
      "id": "354",
      "path": "memes/2/354.png",
      "width": 638,
      "height": 259
  },
  {
      "id": "1044",
      "path": "memes/2/1044.png",
      "width": 1242,
      "height": 525
  },
  {
      "id": "1072",
      "path": "memes/2/1072.png",
      "width": 1198,
      "height": 801
  },
  {
      "id": "697",
      "path": "memes/2/697.png",
      "width": 800,
      "height": 550
  },
  {
      "id": "1060",
      "path": "memes/2/1060.png",
      "width": 700,
      "height": 633
  },
  {
      "id": "1112",
      "path": "memes/2/1112.png",
      "width": 407,
      "height": 187
  },
  {
      "id": "663",
      "path": "memes/2/663.png",
      "width": 498,
      "height": 720
  },
  {
      "id": "1108",
      "path": "memes/2/1108.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "1092",
      "path": "memes/2/1092.png",
      "width": 618,
      "height": 770
  },
  {
      "id": "854",
      "path": "memes/2/854.png",
      "width": 560,
      "height": 720
  },
  {
      "id": "573",
      "path": "memes/2/573.png",
      "width": 625,
      "height": 477
  },
  {
      "id": "924",
      "path": "memes/2/924.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "926",
      "path": "memes/2/926.png",
      "width": 700,
      "height": 681
  },
  {
      "id": "652",
      "path": "memes/2/652.png",
      "width": 1280,
      "height": 941
  },
  {
      "id": "519",
      "path": "memes/2/519.png",
      "width": 500,
      "height": 500
  },
  {
      "id": "1123",
      "path": "memes/2/1123.png",
      "width": 722,
      "height": 1024
  },
  {
      "id": "1095",
      "path": "memes/2/1095.png",
      "width": 680,
      "height": 717
  },
  {
      "id": "923",
      "path": "memes/2/923.png",
      "width": 530,
      "height": 368
  },
  {
      "id": "995",
      "path": "memes/2/995.png",
      "width": 624,
      "height": 603
  },
  {
      "id": "633",
      "path": "memes/2/633.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "628",
      "path": "memes/2/628.png",
      "width": 590,
      "height": 470
  },
  {
      "id": "740",
      "path": "memes/2/740.png",
      "width": 688,
      "height": 602
  },
  {
      "id": "369",
      "path": "memes/2/369.png",
      "width": 962,
      "height": 870
  },
  {
      "id": "1116",
      "path": "memes/2/1116.png",
      "width": 1280,
      "height": 1280
  },
  {
      "id": "624",
      "path": "memes/2/624.png",
      "width": 522,
      "height": 396
  },
  {
      "id": "975",
      "path": "memes/2/975.png",
      "width": 1280,
      "height": 941
  },
  {
      "id": "570",
      "path": "memes/2/570.png",
      "width": 606,
      "height": 800
  },
  {
      "id": "929",
      "path": "memes/2/929.png",
      "width": 527,
      "height": 505
  },
  {
      "id": "394",
      "path": "memes/2/394.png",
      "width": 450,
      "height": 540
  },
  {
      "id": "935",
      "path": "memes/2/935.png",
      "width": 960,
      "height": 1170
  },
  {
      "id": "712",
      "path": "memes/2/712.png",
      "width": 867,
      "height": 1024
  },
  {
      "id": "644",
      "path": "memes/2/644.png",
      "width": 960,
      "height": 480
  },
  {
      "id": "658",
      "path": "memes/2/658.png",
      "width": 1280,
      "height": 580
  },
  {
      "id": "594",
      "path": "memes/2/594.png",
      "width": 720,
      "height": 719
  },
  {
      "id": "678",
      "path": "memes/2/678.png",
      "width": 453,
      "height": 325
  },
  {
      "id": "623",
      "path": "memes/2/623.png",
      "width": 1241,
      "height": 1006
  },
  {
      "id": "1125",
      "path": "memes/2/1125.png",
      "width": 540,
      "height": 543
  },
  {
      "id": "829",
      "path": "memes/2/829.png",
      "width": 749,
      "height": 586
  },
  {
      "id": "396",
      "path": "memes/2/396.png",
      "width": 756,
      "height": 900
  },
  {
      "id": "595",
      "path": "memes/2/595.png",
      "width": 700,
      "height": 933
  },
  {
      "id": "948",
      "path": "memes/2/948.png",
      "width": 640,
      "height": 1280
  },
  {
      "id": "876",
      "path": "memes/2/876.png",
      "width": 500,
      "height": 505
  },
  {
      "id": "768",
      "path": "memes/2/768.png",
      "width": 346,
      "height": 288
  },
  {
      "id": "356",
      "path": "memes/2/356.png",
      "width": 593,
      "height": 651
  },
  {
      "id": "388",
      "path": "memes/2/388.png",
      "width": 720,
      "height": 266
  },
  {
      "id": "811",
      "path": "memes/2/811.png",
      "width": 460,
      "height": 207
  },
  {
      "id": "878",
      "path": "memes/2/878.png",
      "width": 590,
      "height": 469
  },
  {
      "id": "381",
      "path": "memes/2/381.png",
      "width": 443,
      "height": 332
  },
  {
      "id": "728",
      "path": "memes/2/728.png",
      "width": 410,
      "height": 766
  },
  {
      "id": "819",
      "path": "memes/2/819.png",
      "width": 1280,
      "height": 1030
  },
  {
      "id": "1029",
      "path": "memes/2/1029.png",
      "width": 528,
      "height": 341
  },
  {
      "id": "915",
      "path": "memes/2/915.png",
      "width": 600,
      "height": 448
  },
  {
      "id": "887",
      "path": "memes/2/887.png",
      "width": 800,
      "height": 655
  },
  {
      "id": "632",
      "path": "memes/2/632.png",
      "width": 720,
      "height": 960
  },
  {
      "id": "936",
      "path": "memes/2/936.png",
      "width": 702,
      "height": 395
  },
  {
      "id": "1009",
      "path": "memes/2/1009.png",
      "width": 1176,
      "height": 1280
  },
  {
      "id": "657",
      "path": "memes/2/657.png",
      "width": 675,
      "height": 675
  },
  {
      "id": "406",
      "path": "memes/2/406.png",
      "width": 700,
      "height": 380
  },
  {
      "id": "482",
      "path": "memes/2/482.png",
      "width": 641,
      "height": 288
  },
  {
      "id": "1003",
      "path": "memes/2/1003.png",
      "width": 571,
      "height": 768
  },
  {
      "id": "875",
      "path": "memes/2/875.png",
      "width": 596,
      "height": 478
  },
  {
      "id": "1039",
      "path": "memes/2/1039.png",
      "width": 478,
      "height": 720
  },
  {
      "id": "830",
      "path": "memes/2/830.png",
      "width": 628,
      "height": 868
  },
  {
      "id": "759",
      "path": "memes/2/759.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "891",
      "path": "memes/2/891.png",
      "width": 718,
      "height": 695
  },
  {
      "id": "593",
      "path": "memes/2/593.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "501",
      "path": "memes/2/501.png",
      "width": 587,
      "height": 510
  },
  {
      "id": "650",
      "path": "memes/2/650.png",
      "width": 472,
      "height": 395
  },
  {
      "id": "1038",
      "path": "memes/2/1038.png",
      "width": 750,
      "height": 1043
  },
  {
      "id": "943",
      "path": "memes/2/943.png",
      "width": 404,
      "height": 962
  },
  {
      "id": "880",
      "path": "memes/2/880.png",
      "width": 449,
      "height": 800
  },
  {
      "id": "983",
      "path": "memes/2/983.png",
      "width": 499,
      "height": 1124
  },
  {
      "id": "918",
      "path": "memes/2/918.png",
      "width": 471,
      "height": 312
  },
  {
      "id": "1077",
      "path": "memes/2/1077.png",
      "width": 650,
      "height": 627
  },
  {
      "id": "858",
      "path": "memes/2/858.png",
      "width": 628,
      "height": 954
  },
  {
      "id": "360",
      "path": "memes/2/360.png",
      "width": 1024,
      "height": 1024
  },
  {
      "id": "977",
      "path": "memes/2/977.png",
      "width": 460,
      "height": 650
  },
  {
      "id": "361",
      "path": "memes/2/361.png",
      "width": 1024,
      "height": 624
  },
  {
      "id": "889",
      "path": "memes/2/889.png",
      "width": 700,
      "height": 628
  },
  {
      "id": "689",
      "path": "memes/2/689.png",
      "width": 671,
      "height": 254
  },
  {
      "id": "1078",
      "path": "memes/2/1078.png",
      "width": 1280,
      "height": 1054
  },
  {
      "id": "358",
      "path": "memes/2/358.png",
      "width": 600,
      "height": 575
  },
  {
      "id": "353",
      "path": "memes/2/353.png",
      "width": 460,
      "height": 1031
  },
  {
      "id": "548",
      "path": "memes/2/548.png",
      "width": 681,
      "height": 451
  },
  {
      "id": "748",
      "path": "memes/2/748.png",
      "width": 1024,
      "height": 748
  },
  {
      "id": "1042",
      "path": "memes/2/1042.png",
      "width": 640,
      "height": 701
  },
  {
      "id": "385",
      "path": "memes/2/385.png",
      "width": 651,
      "height": 721
  },
  {
      "id": "694",
      "path": "memes/2/694.png",
      "width": 748,
      "height": 748
  },
  {
      "id": "874",
      "path": "memes/2/874.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "421",
      "path": "memes/2/421.png",
      "width": 700,
      "height": 622
  },
  {
      "id": "894",
      "path": "memes/2/894.png",
      "width": 500,
      "height": 701
  },
  {
      "id": "708",
      "path": "memes/2/708.png",
      "width": 769,
      "height": 767
  },
  {
      "id": "744",
      "path": "memes/2/744.png",
      "width": 641,
      "height": 370
  },
  {
      "id": "331",
      "path": "memes/2/331.png",
      "width": 450,
      "height": 327
  },
  {
      "id": "956",
      "path": "memes/2/956.png",
      "width": 1001,
      "height": 1280
  },
  {
      "id": "1121",
      "path": "memes/2/1121.png",
      "width": 1242,
      "height": 523
  },
  {
      "id": "884",
      "path": "memes/2/884.png",
      "width": 585,
      "height": 699
  },
  {
      "id": "716",
      "path": "memes/2/716.png",
      "width": 1280,
      "height": 720
  },
  {
      "id": "551",
      "path": "memes/2/551.png",
      "width": 480,
      "height": 600
  },
  {
      "id": "892",
      "path": "memes/2/892.png",
      "width": 1080,
      "height": 1058
  },
  {
      "id": "1083",
      "path": "memes/2/1083.png",
      "width": 987,
      "height": 832
  },
  {
      "id": "990",
      "path": "memes/2/990.png",
      "width": 960,
      "height": 716
  },
  {
      "id": "496",
      "path": "memes/2/496.png",
      "width": 770,
      "height": 770
  },
  {
      "id": "599",
      "path": "memes/2/599.png",
      "width": 600,
      "height": 600
  },
  {
      "id": "407",
      "path": "memes/2/407.png",
      "width": 799,
      "height": 400
  },
  {
      "id": "966",
      "path": "memes/2/966.png",
      "width": 595,
      "height": 604
  },
  {
      "id": "614",
      "path": "memes/2/614.png",
      "width": 960,
      "height": 794
  },
  {
      "id": "359",
      "path": "memes/2/359.png",
      "width": 502,
      "height": 512
  },
  {
      "id": "861",
      "path": "memes/2/861.png",
      "width": 700,
      "height": 430
  },
  {
      "id": "838",
      "path": "memes/2/838.png",
      "width": 460,
      "height": 460
  },
  {
      "id": "1022",
      "path": "memes/2/1022.png",
      "width": 735,
      "height": 960
  },
  {
      "id": "659",
      "path": "memes/2/659.png",
      "width": 600,
      "height": 878
  },
  {
      "id": "667",
      "path": "memes/2/667.png",
      "width": 640,
      "height": 560
  },
  {
      "id": "1109",
      "path": "memes/2/1109.png",
      "width": 540,
      "height": 546
  },
  {
      "id": "1118",
      "path": "memes/2/1118.png",
      "width": 700,
      "height": 541
  },
  {
      "id": "703",
      "path": "memes/2/703.png",
      "width": 480,
      "height": 544
  },
  {
      "id": "350",
      "path": "memes/2/350.png",
      "width": 437,
      "height": 1253
  },
  {
      "id": "1049",
      "path": "memes/2/1049.png",
      "width": 1280,
      "height": 1280
  },
  {
      "id": "1142",
      "path": "memes/2/1142.png",
      "width": 650,
      "height": 603
  },
  {
      "id": "1067",
      "path": "memes/2/1067.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "907",
      "path": "memes/2/907.png",
      "width": 521,
      "height": 960
  },
  {
      "id": "896",
      "path": "memes/2/896.png",
      "width": 500,
      "height": 694
  },
  {
      "id": "523",
      "path": "memes/2/523.png",
      "width": 540,
      "height": 405
  },
  {
      "id": "962",
      "path": "memes/2/962.png",
      "width": 713,
      "height": 344
  },
  {
      "id": "1012",
      "path": "memes/2/1012.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "627",
      "path": "memes/2/627.png",
      "width": 706,
      "height": 542
  },
  {
      "id": "754",
      "path": "memes/2/754.png",
      "width": 485,
      "height": 352
  },
  {
      "id": "947",
      "path": "memes/2/947.png",
      "width": 741,
      "height": 475
  },
  {
      "id": "774",
      "path": "memes/2/774.png",
      "width": 506,
      "height": 370
  },
  {
      "id": "912",
      "path": "memes/2/912.png",
      "width": 720,
      "height": 720
  },
  {
      "id": "485",
      "path": "memes/2/485.png",
      "width": 640,
      "height": 1136
  },
  {
      "id": "1023",
      "path": "memes/2/1023.png",
      "width": 1028,
      "height": 360
  },
  {
      "id": "843",
      "path": "memes/2/843.png",
      "width": 487,
      "height": 1280
  },
  {
      "id": "574",
      "path": "memes/2/574.png",
      "width": 600,
      "height": 720
  },
  {
      "id": "785",
      "path": "memes/2/785.png",
      "width": 1188,
      "height": 1280
  },
  {
      "id": "674",
      "path": "memes/2/674.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "567",
      "path": "memes/2/567.png",
      "width": 794,
      "height": 549
  },
  {
      "id": "646",
      "path": "memes/2/646.png",
      "width": 960,
      "height": 720
  },
  {
      "id": "1001",
      "path": "memes/2/1001.png",
      "width": 512,
      "height": 512
  },
  {
      "id": "375",
      "path": "memes/2/375.png",
      "width": 456,
      "height": 323
  },
  {
      "id": "784",
      "path": "memes/2/784.png",
      "width": 335,
      "height": 680
  },
  {
      "id": "660",
      "path": "memes/2/660.png",
      "width": 480,
      "height": 591
  },
  {
      "id": "341",
      "path": "memes/2/341.png",
      "width": 600,
      "height": 379
  },
  {
      "id": "1058",
      "path": "memes/2/1058.png",
      "width": 510,
      "height": 389
  },
  {
      "id": "927",
      "path": "memes/2/927.png",
      "width": 280,
      "height": 280
  },
  {
      "id": "1113",
      "path": "memes/2/1113.png",
      "width": 500,
      "height": 600
  },
  {
      "id": "1104",
      "path": "memes/2/1104.png",
      "width": 750,
      "height": 506
  },
  {
      "id": "998",
      "path": "memes/2/998.png",
      "width": 749,
      "height": 757
  },
  {
      "id": "881",
      "path": "memes/2/881.png",
      "width": 726,
      "height": 800
  },
  {
      "id": "776",
      "path": "memes/2/776.png",
      "width": 346,
      "height": 421
  },
  {
      "id": "770",
      "path": "memes/2/770.png",
      "width": 448,
      "height": 662
  },
  {
      "id": "520",
      "path": "memes/2/520.png",
      "width": 547,
      "height": 364
  },
  {
      "id": "1008",
      "path": "memes/2/1008.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "952",
      "path": "memes/2/952.png",
      "width": 858,
      "height": 960
  },
  {
      "id": "802",
      "path": "memes/2/802.png",
      "width": 300,
      "height": 450
  },
  {
      "id": "933",
      "path": "memes/2/933.png",
      "width": 568,
      "height": 1280
  },
  {
      "id": "494",
      "path": "memes/2/494.png",
      "width": 461,
      "height": 712
  },
  {
      "id": "810",
      "path": "memes/2/810.png",
      "width": 1078,
      "height": 1078
  },
  {
      "id": "376",
      "path": "memes/2/376.png",
      "width": 462,
      "height": 318
  },
  {
      "id": "422",
      "path": "memes/2/422.png",
      "width": 900,
      "height": 424
  },
  {
      "id": "490",
      "path": "memes/2/490.png",
      "width": 607,
      "height": 451
  },
  {
      "id": "750",
      "path": "memes/2/750.png",
      "width": 620,
      "height": 508
  },
  {
      "id": "1140",
      "path": "memes/2/1140.png",
      "width": 1080,
      "height": 864
  },
  {
      "id": "1020",
      "path": "memes/2/1020.png",
      "width": 304,
      "height": 1280
  },
  {
      "id": "693",
      "path": "memes/2/693.png",
      "width": 650,
      "height": 634
  },
  {
      "id": "686",
      "path": "memes/2/686.png",
      "width": 1119,
      "height": 848
  },
  {
      "id": "741",
      "path": "memes/2/741.png",
      "width": 1280,
      "height": 1250
  },
  {
      "id": "868",
      "path": "memes/2/868.png",
      "width": 747,
      "height": 1021
  },
  {
      "id": "543",
      "path": "memes/2/543.png",
      "width": 960,
      "height": 863
  },
  {
      "id": "521",
      "path": "memes/2/521.png",
      "width": 420,
      "height": 280
  },
  {
      "id": "1034",
      "path": "memes/2/1034.png",
      "width": 598,
      "height": 273
  },
  {
      "id": "920",
      "path": "memes/2/920.png",
      "width": 800,
      "height": 547
  },
  {
      "id": "944",
      "path": "memes/2/944.png",
      "width": 671,
      "height": 800
  },
  {
      "id": "522",
      "path": "memes/2/522.png",
      "width": 520,
      "height": 487
  },
  {
      "id": "404",
      "path": "memes/2/404.png",
      "width": 599,
      "height": 474
  },
  {
      "id": "473",
      "path": "memes/2/473.png",
      "width": 1480,
      "height": 517
  },
  {
      "id": "1096",
      "path": "memes/2/1096.png",
      "width": 600,
      "height": 489
  },
  {
      "id": "973",
      "path": "memes/2/973.png",
      "width": 268,
      "height": 320
  },
  {
      "id": "1130",
      "path": "memes/2/1130.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "372",
      "path": "memes/2/372.png",
      "width": 500,
      "height": 359
  },
  {
      "id": "405",
      "path": "memes/2/405.png",
      "width": 971,
      "height": 698
  },
  {
      "id": "953",
      "path": "memes/2/953.png",
      "width": 1280,
      "height": 1117
  },
  {
      "id": "337",
      "path": "memes/2/337.png",
      "width": 651,
      "height": 1201
  },
  {
      "id": "540",
      "path": "memes/2/540.png",
      "width": 507,
      "height": 211
  },
  {
      "id": "562",
      "path": "memes/2/562.png",
      "width": 1200,
      "height": 686
  },
  {
      "id": "859",
      "path": "memes/2/859.png",
      "width": 680,
      "height": 717
  },
  {
      "id": "800",
      "path": "memes/2/800.png",
      "width": 346,
      "height": 315
  },
  {
      "id": "867",
      "path": "memes/2/867.png",
      "width": 750,
      "height": 806
  },
  {
      "id": "1019",
      "path": "memes/2/1019.png",
      "width": 700,
      "height": 787
  },
  {
      "id": "680",
      "path": "memes/2/680.png",
      "width": 397,
      "height": 290
  },
  {
      "id": "1122",
      "path": "memes/2/1122.png",
      "width": 1056,
      "height": 564
  },
  {
      "id": "864",
      "path": "memes/2/864.png",
      "width": 450,
      "height": 605
  },
  {
      "id": "509",
      "path": "memes/2/509.png",
      "width": 504,
      "height": 694
  },
  {
      "id": "497",
      "path": "memes/2/497.png",
      "width": 475,
      "height": 386
  },
  {
      "id": "552",
      "path": "memes/2/552.png",
      "width": 754,
      "height": 562
  },
  {
      "id": "683",
      "path": "memes/2/683.png",
      "width": 293,
      "height": 577
  },
  {
      "id": "1037",
      "path": "memes/2/1037.png",
      "width": 600,
      "height": 457
  },
  {
      "id": "709",
      "path": "memes/2/709.png",
      "width": 728,
      "height": 380
  },
  {
      "id": "762",
      "path": "memes/2/762.png",
      "width": 693,
      "height": 502
  },
  {
      "id": "662",
      "path": "memes/2/662.png",
      "width": 506,
      "height": 662
  },
  {
      "id": "1016",
      "path": "memes/2/1016.png",
      "width": 604,
      "height": 568
  },
  {
      "id": "893",
      "path": "memes/2/893.png",
      "width": 465,
      "height": 214
  },
  {
      "id": "486",
      "path": "memes/2/486.png",
      "width": 792,
      "height": 1280
  },
  {
      "id": "937",
      "path": "memes/2/937.png",
      "width": 2560,
      "height": 2560
  },
  {
      "id": "1101",
      "path": "memes/2/1101.png",
      "width": 625,
      "height": 477
  },
  {
      "id": "903",
      "path": "memes/2/903.png",
      "width": 480,
      "height": 480
  },
  {
      "id": "908",
      "path": "memes/2/908.png",
      "width": 562,
      "height": 704
  },
  {
      "id": "779",
      "path": "memes/2/779.png",
      "width": 257,
      "height": 373
  },
  {
      "id": "869",
      "path": "memes/2/869.png",
      "width": 870,
      "height": 870
  },
  {
      "id": "890",
      "path": "memes/2/890.png",
      "width": 640,
      "height": 624
  },
  {
      "id": "994",
      "path": "memes/2/994.png",
      "width": 280,
      "height": 373
  },
  {
      "id": "969",
      "path": "memes/2/969.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "362",
      "path": "memes/2/362.png",
      "width": 1215,
      "height": 910
  },
  {
      "id": "613",
      "path": "memes/2/613.png",
      "width": 743,
      "height": 745
  },
  {
      "id": "963",
      "path": "memes/2/963.png",
      "width": 696,
      "height": 624
  },
  {
      "id": "604",
      "path": "memes/2/604.png",
      "width": 480,
      "height": 366
  },
  {
      "id": "626",
      "path": "memes/2/626.png",
      "width": 684,
      "height": 574
  },
  {
      "id": "365",
      "path": "memes/2/365.png",
      "width": 705,
      "height": 510
  },
  {
      "id": "822",
      "path": "memes/2/822.png",
      "width": 692,
      "height": 729
  },
  {
      "id": "930",
      "path": "memes/2/930.png",
      "width": 485,
      "height": 272
  },
  {
      "id": "384",
      "path": "memes/2/384.png",
      "width": 1255,
      "height": 1100
  },
  {
      "id": "809",
      "path": "memes/2/809.png",
      "width": 1000,
      "height": 624
  },
  {
      "id": "734",
      "path": "memes/2/734.png",
      "width": 496,
      "height": 518
  },
  {
      "id": "489",
      "path": "memes/2/489.png",
      "width": 564,
      "height": 401
  },
  {
      "id": "823",
      "path": "memes/2/823.png",
      "width": 600,
      "height": 614
  },
  {
      "id": "575",
      "path": "memes/2/575.png",
      "width": 497,
      "height": 667
  },
  {
      "id": "707",
      "path": "memes/2/707.png",
      "width": 700,
      "height": 862
  },
  {
      "id": "960",
      "path": "memes/2/960.png",
      "width": 600,
      "height": 600
  },
  {
      "id": "783",
      "path": "memes/2/783.png",
      "width": 1242,
      "height": 641
  },
  {
      "id": "534",
      "path": "memes/2/534.png",
      "width": 960,
      "height": 1280
  },
  {
      "id": "586",
      "path": "memes/2/586.png",
      "width": 900,
      "height": 1200
  },
  {
      "id": "1081",
      "path": "memes/2/1081.png",
      "width": 400,
      "height": 491
  },
  {
      "id": "408",
      "path": "memes/2/408.png",
      "width": 650,
      "height": 892
  },
  {
      "id": "1106",
      "path": "memes/2/1106.png",
      "width": 477,
      "height": 458
  },
  {
      "id": "895",
      "path": "memes/2/895.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "817",
      "path": "memes/2/817.png",
      "width": 680,
      "height": 107
  },
  {
      "id": "767",
      "path": "memes/2/767.png",
      "width": 800,
      "height": 545
  },
  {
      "id": "1098",
      "path": "memes/2/1098.png",
      "width": 600,
      "height": 800
  },
  {
      "id": "338",
      "path": "memes/2/338.png",
      "width": 640,
      "height": 1136
  },
  {
      "id": "839",
      "path": "memes/2/839.png",
      "width": 259,
      "height": 194
  },
  {
      "id": "857",
      "path": "memes/2/857.png",
      "width": 750,
      "height": 671
  },
  {
      "id": "545",
      "path": "memes/2/545.png",
      "width": 597,
      "height": 807
  },
  {
      "id": "919",
      "path": "memes/2/919.png",
      "width": 1242,
      "height": 893
  },
  {
      "id": "610",
      "path": "memes/2/610.png",
      "width": 564,
      "height": 564
  },
  {
      "id": "722",
      "path": "memes/2/722.png",
      "width": 1280,
      "height": 742
  },
  {
      "id": "374",
      "path": "memes/2/374.png",
      "width": 521,
      "height": 282
  },
  {
      "id": "971",
      "path": "memes/2/971.png",
      "width": 942,
      "height": 960
  },
  {
      "id": "641",
      "path": "memes/2/641.png",
      "width": 613,
      "height": 1280
  },
  {
      "id": "348",
      "path": "memes/2/348.png",
      "width": 236,
      "height": 278
  },
  {
      "id": "1054",
      "path": "memes/2/1054.png",
      "width": 279,
      "height": 200
  },
  {
      "id": "860",
      "path": "memes/2/860.png",
      "width": 700,
      "height": 430
  },
  {
      "id": "723",
      "path": "memes/2/723.png",
      "width": 960,
      "height": 953
  },
  {
      "id": "985",
      "path": "memes/2/985.png",
      "width": 1280,
      "height": 804
  },
  {
      "id": "332",
      "path": "memes/2/332.png",
      "width": 323,
      "height": 242
  },
  {
      "id": "718",
      "path": "memes/2/718.png",
      "width": 371,
      "height": 439
  },
  {
      "id": "807",
      "path": "memes/2/807.png",
      "width": 346,
      "height": 260
  },
  {
      "id": "569",
      "path": "memes/2/569.png",
      "width": 640,
      "height": 815
  },
  {
      "id": "1085",
      "path": "memes/2/1085.png",
      "width": 1242,
      "height": 1055
  },
  {
      "id": "568",
      "path": "memes/2/568.png",
      "width": 1252,
      "height": 1252
  },
  {
      "id": "398",
      "path": "memes/2/398.png",
      "width": 524,
      "height": 435
  },
  {
      "id": "1024",
      "path": "memes/2/1024.png",
      "width": 996,
      "height": 1280
  },
  {
      "id": "1061",
      "path": "memes/2/1061.png",
      "width": 720,
      "height": 760
  },
  {
      "id": "1107",
      "path": "memes/2/1107.png",
      "width": 579,
      "height": 780
  },
  {
      "id": "510",
      "path": "memes/2/510.png",
      "width": 500,
      "height": 555
  },
  {
      "id": "775",
      "path": "memes/2/775.png",
      "width": 639,
      "height": 1103
  },
  {
      "id": "1025",
      "path": "memes/2/1025.png",
      "width": 800,
      "height": 692
  },
  {
      "id": "757",
      "path": "memes/2/757.png",
      "width": 640,
      "height": 427
  },
  {
      "id": "588",
      "path": "memes/2/588.png",
      "width": 640,
      "height": 598
  },
  {
      "id": "763",
      "path": "memes/2/763.png",
      "width": 1024,
      "height": 1280
  },
  {
      "id": "478",
      "path": "memes/2/478.png",
      "width": 480,
      "height": 413
  },
  {
      "id": "395",
      "path": "memes/2/395.png",
      "width": 1190,
      "height": 912
  },
  {
      "id": "863",
      "path": "memes/2/863.png",
      "width": 743,
      "height": 752
  },
  {
      "id": "1086",
      "path": "memes/2/1086.png",
      "width": 530,
      "height": 238
  },
  {
      "id": "787",
      "path": "memes/2/787.png",
      "width": 346,
      "height": 253
  },
  {
      "id": "621",
      "path": "memes/2/621.png",
      "width": 904,
      "height": 1280
  },
  {
      "id": "601",
      "path": "memes/2/601.png",
      "width": 1024,
      "height": 465
  },
  {
      "id": "399",
      "path": "memes/2/399.png",
      "width": 480,
      "height": 476
  },
  {
      "id": "679",
      "path": "memes/2/679.png",
      "width": 479,
      "height": 404
  },
  {
      "id": "988",
      "path": "memes/2/988.png",
      "width": 980,
      "height": 785
  },
  {
      "id": "386",
      "path": "memes/2/386.png",
      "width": 460,
      "height": 340
  },
  {
      "id": "391",
      "path": "memes/2/391.png",
      "width": 443,
      "height": 332
  },
  {
      "id": "1103",
      "path": "memes/2/1103.png",
      "width": 480,
      "height": 522
  },
  {
      "id": "789",
      "path": "memes/2/789.png",
      "width": 333,
      "height": 930
  },
  {
      "id": "589",
      "path": "memes/2/589.png",
      "width": 480,
      "height": 480
  },
  {
      "id": "888",
      "path": "memes/2/888.png",
      "width": 320,
      "height": 314
  },
  {
      "id": "1093",
      "path": "memes/2/1093.png",
      "width": 659,
      "height": 1280
  },
  {
      "id": "397",
      "path": "memes/2/397.png",
      "width": 700,
      "height": 351
  },
  {
      "id": "410",
      "path": "memes/2/410.png",
      "width": 280,
      "height": 210
  },
  {
      "id": "560",
      "path": "memes/2/560.png",
      "width": 267,
      "height": 448
  },
  {
      "id": "1073",
      "path": "memes/2/1073.png",
      "width": 720,
      "height": 690
  },
  {
      "id": "530",
      "path": "memes/2/530.png",
      "width": 710,
      "height": 192
  },
  {
      "id": "906",
      "path": "memes/2/906.png",
      "width": 428,
      "height": 480
  },
  {
      "id": "413",
      "path": "memes/2/413.png",
      "width": 749,
      "height": 733
  },
  {
      "id": "529",
      "path": "memes/2/529.png",
      "width": 741,
      "height": 756
  },
  {
      "id": "495",
      "path": "memes/2/495.png",
      "width": 460,
      "height": 662
  },
  {
      "id": "688",
      "path": "memes/2/688.png",
      "width": 720,
      "height": 681
  },
  {
      "id": "1090",
      "path": "memes/2/1090.png",
      "width": 640,
      "height": 696
  },
  {
      "id": "1031",
      "path": "memes/2/1031.png",
      "width": 550,
      "height": 733
  },
  {
      "id": "590",
      "path": "memes/2/590.png",
      "width": 960,
      "height": 720
  },
  {
      "id": "696",
      "path": "memes/2/696.png",
      "width": 497,
      "height": 1280
  },
  {
      "id": "974",
      "path": "memes/2/974.png",
      "width": 882,
      "height": 960
  },
  {
      "id": "769",
      "path": "memes/2/769.png",
      "width": 346,
      "height": 228
  },
  {
      "id": "507",
      "path": "memes/2/507.png",
      "width": 580,
      "height": 810
  },
  {
      "id": "731",
      "path": "memes/2/731.png",
      "width": 720,
      "height": 831
  },
  {
      "id": "645",
      "path": "memes/2/645.png",
      "width": 500,
      "height": 500
  },
  {
      "id": "339",
      "path": "memes/2/339.png",
      "width": 1194,
      "height": 208
  },
  {
      "id": "602",
      "path": "memes/2/602.png",
      "width": 500,
      "height": 500
  },
  {
      "id": "695",
      "path": "memes/2/695.png",
      "width": 700,
      "height": 692
  },
  {
      "id": "655",
      "path": "memes/2/655.png",
      "width": 575,
      "height": 1280
  },
  {
      "id": "611",
      "path": "memes/2/611.png",
      "width": 650,
      "height": 1195
  },
  {
      "id": "1141",
      "path": "memes/2/1141.png",
      "width": 1280,
      "height": 561
  },
  {
      "id": "498",
      "path": "memes/2/498.png",
      "width": 386,
      "height": 1280
  },
  {
      "id": "797",
      "path": "memes/2/797.png",
      "width": 346,
      "height": 391
  },
  {
      "id": "928",
      "path": "memes/2/928.png",
      "width": 460,
      "height": 336
  },
  {
      "id": "1094",
      "path": "memes/2/1094.png",
      "width": 750,
      "height": 572
  },
  {
      "id": "883",
      "path": "memes/2/883.png",
      "width": 900,
      "height": 280
  },
  {
      "id": "649",
      "path": "memes/2/649.png",
      "width": 749,
      "height": 586
  },
  {
      "id": "849",
      "path": "memes/2/849.png",
      "width": 1280,
      "height": 405
  },
  {
      "id": "804",
      "path": "memes/2/804.png",
      "width": 346,
      "height": 260
  },
  {
      "id": "747",
      "path": "memes/2/747.png",
      "width": 423,
      "height": 600
  },
  {
      "id": "771",
      "path": "memes/2/771.png",
      "width": 728,
      "height": 546
  },
  {
      "id": "856",
      "path": "memes/2/856.png",
      "width": 969,
      "height": 630
  },
  {
      "id": "1057",
      "path": "memes/2/1057.png",
      "width": 1280,
      "height": 852
  },
  {
      "id": "1080",
      "path": "memes/2/1080.png",
      "width": 639,
      "height": 724
  },
  {
      "id": "899",
      "path": "memes/2/899.png",
      "width": 540,
      "height": 960
  },
  {
      "id": "475",
      "path": "memes/2/475.png",
      "width": 498,
      "height": 666
  },
  {
      "id": "583",
      "path": "memes/2/583.png",
      "width": 512,
      "height": 533
  },
  {
      "id": "480",
      "path": "memes/2/480.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "631",
      "path": "memes/2/631.png",
      "width": 480,
      "height": 469
  },
  {
      "id": "1013",
      "path": "memes/2/1013.png",
      "width": 573,
      "height": 604
  },
  {
      "id": "1041",
      "path": "memes/2/1041.png",
      "width": 1280,
      "height": 1155
  },
  {
      "id": "846",
      "path": "memes/2/846.png",
      "width": 915,
      "height": 960
  },
  {
      "id": "949",
      "path": "memes/2/949.png",
      "width": 640,
      "height": 730
  },
  {
      "id": "1071",
      "path": "memes/2/1071.png",
      "width": 500,
      "height": 353
  },
  {
      "id": "751",
      "path": "memes/2/751.png",
      "width": 750,
      "height": 1334
  },
  {
      "id": "821",
      "path": "memes/2/821.png",
      "width": 738,
      "height": 480
  },
  {
      "id": "603",
      "path": "memes/2/603.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "996",
      "path": "memes/2/996.png",
      "width": 329,
      "height": 1280
  },
  {
      "id": "782",
      "path": "memes/2/782.png",
      "width": 346,
      "height": 391
  },
  {
      "id": "1062",
      "path": "memes/2/1062.png",
      "width": 365,
      "height": 354
  },
  {
      "id": "844",
      "path": "memes/2/844.png",
      "width": 700,
      "height": 420
  },
  {
      "id": "531",
      "path": "memes/2/531.png",
      "width": 604,
      "height": 453
  },
  {
      "id": "766",
      "path": "memes/2/766.png",
      "width": 720,
      "height": 720
  },
  {
      "id": "393",
      "path": "memes/2/393.png",
      "width": 479,
      "height": 545
  },
  {
      "id": "886",
      "path": "memes/2/886.png",
      "width": 599,
      "height": 540
  },
  {
      "id": "826",
      "path": "memes/2/826.png",
      "width": 485,
      "height": 693
  },
  {
      "id": "347",
      "path": "memes/2/347.png",
      "width": 477,
      "height": 308
  },
  {
      "id": "1007",
      "path": "memes/2/1007.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "724",
      "path": "memes/2/724.png",
      "width": 490,
      "height": 596
  },
  {
      "id": "666",
      "path": "memes/2/666.png",
      "width": 589,
      "height": 542
  },
  {
      "id": "1088",
      "path": "memes/2/1088.png",
      "width": 864,
      "height": 1280
  },
  {
      "id": "511",
      "path": "memes/2/511.png",
      "width": 748,
      "height": 778
  },
  {
      "id": "1099",
      "path": "memes/2/1099.png",
      "width": 720,
      "height": 403
  },
  {
      "id": "502",
      "path": "memes/2/502.png",
      "width": 430,
      "height": 537
  },
  {
      "id": "816",
      "path": "memes/2/816.png",
      "width": 511,
      "height": 682
  },
  {
      "id": "968",
      "path": "memes/2/968.png",
      "width": 589,
      "height": 553
  },
  {
      "id": "518",
      "path": "memes/2/518.png",
      "width": 476,
      "height": 395
  },
  {
      "id": "913",
      "path": "memes/2/913.png",
      "width": 530,
      "height": 529
  },
  {
      "id": "870",
      "path": "memes/2/870.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "342",
      "path": "memes/2/342.png",
      "width": 384,
      "height": 384
  },
  {
      "id": "379",
      "path": "memes/2/379.png",
      "width": 472,
      "height": 417
  },
  {
      "id": "526",
      "path": "memes/2/526.png",
      "width": 739,
      "height": 1280
  },
  {
      "id": "638",
      "path": "memes/2/638.png",
      "width": 700,
      "height": 633
  },
  {
      "id": "717",
      "path": "memes/2/717.png",
      "width": 800,
      "height": 547
  },
  {
      "id": "619",
      "path": "memes/2/619.png",
      "width": 526,
      "height": 935
  },
  {
      "id": "355",
      "path": "memes/2/355.png",
      "width": 691,
      "height": 761
  },
  {
      "id": "1017",
      "path": "memes/2/1017.png",
      "width": 1080,
      "height": 1070
  },
  {
      "id": "1059",
      "path": "memes/2/1059.png",
      "width": 1052,
      "height": 796
  },
  {
      "id": "1128",
      "path": "memes/2/1128.png",
      "width": 1128,
      "height": 1200
  },
  {
      "id": "550",
      "path": "memes/2/550.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "690",
      "path": "memes/2/690.png",
      "width": 748,
      "height": 746
  },
  {
      "id": "669",
      "path": "memes/2/669.png",
      "width": 497,
      "height": 354
  },
  {
      "id": "727",
      "path": "memes/2/727.png",
      "width": 460,
      "height": 439
  },
  {
      "id": "504",
      "path": "memes/2/504.png",
      "width": 724,
      "height": 705
  },
  {
      "id": "625",
      "path": "memes/2/625.png",
      "width": 550,
      "height": 733
  },
  {
      "id": "959",
      "path": "memes/2/959.png",
      "width": 728,
      "height": 729
  },
  {
      "id": "558",
      "path": "memes/2/558.png",
      "width": 553,
      "height": 1000
  },
  {
      "id": "1129",
      "path": "memes/2/1129.png",
      "width": 430,
      "height": 556
  },
  {
      "id": "1117",
      "path": "memes/2/1117.png",
      "width": 587,
      "height": 800
  },
  {
      "id": "620",
      "path": "memes/2/620.png",
      "width": 480,
      "height": 386
  },
  {
      "id": "780",
      "path": "memes/2/780.png",
      "width": 346,
      "height": 359
  },
  {
      "id": "1100",
      "path": "memes/2/1100.png",
      "width": 500,
      "height": 566
  },
  {
      "id": "345",
      "path": "memes/2/345.png",
      "width": 600,
      "height": 700
  },
  {
      "id": "525",
      "path": "memes/2/525.png",
      "width": 490,
      "height": 544
  },
  {
      "id": "873",
      "path": "memes/2/873.png",
      "width": 1080,
      "height": 1009
  },
  {
      "id": "585",
      "path": "memes/2/585.png",
      "width": 480,
      "height": 259
  },
  {
      "id": "777",
      "path": "memes/2/777.png",
      "width": 346,
      "height": 460
  },
  {
      "id": "932",
      "path": "memes/2/932.png",
      "width": 700,
      "height": 664
  },
  {
      "id": "571",
      "path": "memes/2/571.png",
      "width": 603,
      "height": 572
  },
  {
      "id": "1138",
      "path": "memes/2/1138.png",
      "width": 1231,
      "height": 1280
  },
  {
      "id": "753",
      "path": "memes/2/753.png",
      "width": 1280,
      "height": 1260
  },
  {
      "id": "642",
      "path": "memes/2/642.png",
      "width": 768,
      "height": 960
  },
  {
      "id": "743",
      "path": "memes/2/743.png",
      "width": 290,
      "height": 405
  },
  {
      "id": "951",
      "path": "memes/2/951.png",
      "width": 1024,
      "height": 1280
  },
  {
      "id": "346",
      "path": "memes/2/346.png",
      "width": 416,
      "height": 338
  },
  {
      "id": "832",
      "path": "memes/2/832.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "835",
      "path": "memes/2/835.png",
      "width": 588,
      "height": 167
  },
  {
      "id": "1087",
      "path": "memes/2/1087.png",
      "width": 1280,
      "height": 778
  },
  {
      "id": "921",
      "path": "memes/2/921.png",
      "width": 1280,
      "height": 1214
  },
  {
      "id": "905",
      "path": "memes/2/905.png",
      "width": 955,
      "height": 960
  },
  {
      "id": "972",
      "path": "memes/2/972.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "970",
      "path": "memes/2/970.png",
      "width": 676,
      "height": 960
  },
  {
      "id": "654",
      "path": "memes/2/654.png",
      "width": 750,
      "height": 736
  },
  {
      "id": "555",
      "path": "memes/2/555.png",
      "width": 830,
      "height": 652
  },
  {
      "id": "670",
      "path": "memes/2/670.png",
      "width": 606,
      "height": 933
  },
  {
      "id": "491",
      "path": "memes/2/491.png",
      "width": 1024,
      "height": 1127
  },
  {
      "id": "411",
      "path": "memes/2/411.png",
      "width": 519,
      "height": 641
  },
  {
      "id": "616",
      "path": "memes/2/616.png",
      "width": 680,
      "height": 960
  },
  {
      "id": "940",
      "path": "memes/2/940.png",
      "width": 614,
      "height": 482
  },
  {
      "id": "958",
      "path": "memes/2/958.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "587",
      "path": "memes/2/587.png",
      "width": 500,
      "height": 453
  },
  {
      "id": "1134",
      "path": "memes/2/1134.png",
      "width": 1280,
      "height": 892
  },
  {
      "id": "725",
      "path": "memes/2/725.png",
      "width": 320,
      "height": 570
  },
  {
      "id": "872",
      "path": "memes/2/872.png",
      "width": 743,
      "height": 752
  },
  {
      "id": "605",
      "path": "memes/2/605.png",
      "width": 640,
      "height": 627
  },
  {
      "id": "389",
      "path": "memes/2/389.png",
      "width": 481,
      "height": 326
  },
  {
      "id": "1089",
      "path": "memes/2/1089.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "508",
      "path": "memes/2/508.png",
      "width": 590,
      "height": 444
  },
  {
      "id": "618",
      "path": "memes/2/618.png",
      "width": 1000,
      "height": 1279
  },
  {
      "id": "897",
      "path": "memes/2/897.png",
      "width": 768,
      "height": 479
  },
  {
      "id": "1075",
      "path": "memes/2/1075.png",
      "width": 720,
      "height": 479
  },
  {
      "id": "841",
      "path": "memes/2/841.png",
      "width": 460,
      "height": 507
  },
  {
      "id": "403",
      "path": "memes/2/403.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "539",
      "path": "memes/2/539.png",
      "width": 360,
      "height": 299
  },
  {
      "id": "681",
      "path": "memes/2/681.png",
      "width": 460,
      "height": 522
  },
  {
      "id": "1132",
      "path": "memes/2/1132.png",
      "width": 707,
      "height": 800
  },
  {
      "id": "713",
      "path": "memes/2/713.png",
      "width": 500,
      "height": 500
  },
  {
      "id": "836",
      "path": "memes/2/836.png",
      "width": 431,
      "height": 767
  },
  {
      "id": "901",
      "path": "memes/2/901.png",
      "width": 720,
      "height": 1280
  },
  {
      "id": "538",
      "path": "memes/2/538.png",
      "width": 494,
      "height": 582
  },
  {
      "id": "831",
      "path": "memes/2/831.png",
      "width": 1080,
      "height": 1080
  },
  {
      "id": "791",
      "path": "memes/2/791.png",
      "width": 500,
      "height": 473
  },
  {
      "id": "1069",
      "path": "memes/2/1069.png",
      "width": 464,
      "height": 483
  },
  {
      "id": "729",
      "path": "memes/2/729.png",
      "width": 960,
      "height": 893
  },
  {
      "id": "778",
      "path": "memes/2/778.png",
      "width": 346,
      "height": 291
  },
  {
      "id": "1119",
      "path": "memes/2/1119.png",
      "width": 1058,
      "height": 775
  },
  {
      "id": "794",
      "path": "memes/2/794.png",
      "width": 346,
      "height": 232
  },
  {
      "id": "991",
      "path": "memes/2/991.png",
      "width": 1024,
      "height": 789
  },
  {
      "id": "1011",
      "path": "memes/2/1011.png",
      "width": 426,
      "height": 358
  },
  {
      "id": "390",
      "path": "memes/2/390.png",
      "width": 439,
      "height": 335
  },
  {
      "id": "351",
      "path": "memes/2/351.png",
      "width": 900,
      "height": 280
  },
  {
      "id": "535",
      "path": "memes/2/535.png",
      "width": 236,
      "height": 346
  },
  {
      "id": "344",
      "path": "memes/2/344.png",
      "width": 500,
      "height": 400
  },
  {
      "id": "512",
      "path": "memes/2/512.png",
      "width": 526,
      "height": 602
  },
  {
      "id": "415",
      "path": "memes/2/415.png",
      "width": 450,
      "height": 605
  },
  {
      "id": "378",
      "path": "memes/2/378.png",
      "width": 584,
      "height": 815
  },
  {
      "id": "976",
      "path": "memes/2/976.png",
      "width": 588,
      "height": 601
  },
  {
      "id": "752",
      "path": "memes/2/752.png",
      "width": 1080,
      "height": 574
  },
  {
      "id": "477",
      "path": "memes/2/477.png",
      "width": 536,
      "height": 395
  },
  {
      "id": "792",
      "path": "memes/2/792.png",
      "width": 346,
      "height": 432
  },
  {
      "id": "1036",
      "path": "memes/2/1036.png",
      "width": 552,
      "height": 767
  },
  {
      "id": "1048",
      "path": "memes/2/1048.png",
      "width": 808,
      "height": 960
  },
  {
      "id": "516",
      "path": "memes/2/516.png",
      "width": 469,
      "height": 236
  },
  {
      "id": "1115",
      "path": "memes/2/1115.png",
      "width": 611,
      "height": 515
  },
  {
      "id": "420",
      "path": "memes/2/420.png",
      "width": 552,
      "height": 585
  },
  {
      "id": "852",
      "path": "memes/2/852.png",
      "width": 800,
      "height": 849
  },
  {
      "id": "946",
      "path": "memes/2/946.png",
      "width": 1280,
      "height": 1280
  },
  {
      "id": "954",
      "path": "memes/2/954.png",
      "width": 579,
      "height": 960
  },
  {
      "id": "967",
      "path": "memes/2/967.png",
      "width": 700,
      "height": 554
  },
  {
      "id": "514",
      "path": "memes/2/514.png",
      "width": 350,
      "height": 355
  },
  {
      "id": "801",
      "path": "memes/2/801.png",
      "width": 294,
      "height": 403
  },
  {
      "id": "1028",
      "path": "memes/2/1028.png",
      "width": 784,
      "height": 800
  },
  {
      "id": "1018",
      "path": "memes/2/1018.png",
      "width": 236,
      "height": 594
  },
  {
      "id": "806",
      "path": "memes/2/806.png",
      "width": 750,
      "height": 915
  },
  {
      "id": "955",
      "path": "memes/2/955.png",
      "width": 1029,
      "height": 772
  },
  {
      "id": "904",
      "path": "memes/2/904.png",
      "width": 479,
      "height": 475
  },
  {
      "id": "900",
      "path": "memes/2/900.png",
      "width": 541,
      "height": 541
  },
  {
      "id": "1145",
      "path": "memes/2/1145.png",
      "width": 773,
      "height": 800
  },
  {
      "id": "772",
      "path": "memes/2/772.png",
      "width": 506,
      "height": 675
  },
  {
      "id": "916",
      "path": "memes/2/916.png",
      "width": 700,
      "height": 741
  },
  {
      "id": "481",
      "path": "memes/2/481.png",
      "width": 580,
      "height": 501
  },
  {
      "id": "1030",
      "path": "memes/2/1030.png",
      "width": 467,
      "height": 312
  },
  {
      "id": "827",
      "path": "memes/2/827.png",
      "width": 1080,
      "height": 761
  },
  {
      "id": "1143",
      "path": "memes/2/1143.png",
      "width": 480,
      "height": 307
  },
  {
      "id": "726",
      "path": "memes/2/726.png",
      "width": 1280,
      "height": 580
  },
  {
      "id": "738",
      "path": "memes/2/738.png",
      "width": 500,
      "height": 369
  },
  {
      "id": "756",
      "path": "memes/2/756.png",
      "width": 592,
      "height": 1280
  },
  {
      "id": "803",
      "path": "memes/2/803.png",
      "width": 366,
      "height": 1280
  },
  {
      "id": "914",
      "path": "memes/2/914.png",
      "width": 650,
      "height": 618
  },
  {
      "id": "736",
      "path": "memes/2/736.png",
      "width": 749,
      "height": 763
  },
  {
      "id": "417",
      "path": "memes/2/417.png",
      "width": 792,
      "height": 1280
  },
  {
      "id": "1070",
      "path": "memes/2/1070.png",
      "width": 800,
      "height": 778
  },
  {
      "id": "698",
      "path": "memes/2/698.png",
      "width": 612,
      "height": 476
  },
  {
      "id": "401",
      "path": "memes/2/401.png",
      "width": 385,
      "height": 360
  },
  {
      "id": "711",
      "path": "memes/2/711.png",
      "width": 476,
      "height": 395
  },
  {
      "id": "1064",
      "path": "memes/2/1064.png",
      "width": 585,
      "height": 479
  },
  {
      "id": "945",
      "path": "memes/2/945.png",
      "width": 1280,
      "height": 660
  },
  {
      "id": "950",
      "path": "memes/2/950.png",
      "width": 720,
      "height": 391
  },
  {
      "id": "796",
      "path": "memes/2/796.png",
      "width": 346,
      "height": 504
  },
  {
      "id": "781",
      "path": "memes/2/781.png",
      "width": 346,
      "height": 150
  },
  {
      "id": "1040",
      "path": "memes/2/1040.png",
      "width": 408,
      "height": 720
  },
  {
      "id": "503",
      "path": "memes/2/503.png",
      "width": 540,
      "height": 602
  },
  {
      "id": "409",
      "path": "memes/2/409.png",
      "width": 640,
      "height": 796
  },
  {
      "id": "1006",
      "path": "memes/2/1006.png",
      "width": 1080,
      "height": 1065
  },
  {
      "id": "812",
      "path": "memes/2/812.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "536",
      "path": "memes/2/536.png",
      "width": 1241,
      "height": 1280
  },
  {
      "id": "687",
      "path": "memes/2/687.png",
      "width": 600,
      "height": 800
  },
  {
      "id": "735",
      "path": "memes/2/735.png",
      "width": 1000,
      "height": 1000
  },
  {
      "id": "416",
      "path": "memes/2/416.png",
      "width": 781,
      "height": 1101
  },
  {
      "id": "720",
      "path": "memes/2/720.png",
      "width": 750,
      "height": 502
  },
  {
      "id": "833",
      "path": "memes/2/833.png",
      "width": 749,
      "height": 573
  },
  {
      "id": "484",
      "path": "memes/2/484.png",
      "width": 300,
      "height": 225
  },
  {
      "id": "845",
      "path": "memes/2/845.png",
      "width": 960,
      "height": 565
  },
  {
      "id": "387",
      "path": "memes/2/387.png",
      "width": 1280,
      "height": 720
  },
  {
      "id": "993",
      "path": "memes/2/993.png",
      "width": 485,
      "height": 272
  },
  {
      "id": "622",
      "path": "memes/2/622.png",
      "width": 1280,
      "height": 742
  },
  {
      "id": "676",
      "path": "memes/2/676.png",
      "width": 1241,
      "height": 1232
  },
  {
      "id": "336",
      "path": "memes/2/336.png",
      "width": 1280,
      "height": 911
  },
  {
      "id": "1005",
      "path": "memes/2/1005.png",
      "width": 1080,
      "height": 1070
  },
  {
      "id": "1074",
      "path": "memes/2/1074.png",
      "width": 600,
      "height": 800
  },
  {
      "id": "492",
      "path": "memes/2/492.png",
      "width": 500,
      "height": 281
  },
  {
      "id": "637",
      "path": "memes/2/637.png",
      "width": 443,
      "height": 332
  },
  {
      "id": "773",
      "path": "memes/2/773.png",
      "width": 749,
      "height": 820
  },
  {
      "id": "898",
      "path": "memes/2/898.png",
      "width": 842,
      "height": 1280
  },
  {
      "id": "352",
      "path": "memes/2/352.png",
      "width": 576,
      "height": 720
  },
  {
      "id": "961",
      "path": "memes/2/961.png",
      "width": 960,
      "height": 960
  },
  {
      "id": "862",
      "path": "memes/2/862.png",
      "width": 612,
      "height": 612
  },
  {
      "id": "671",
      "path": "memes/2/671.png",
      "width": 1280,
      "height": 1261
  },
  {
      "id": "564",
      "path": "memes/2/564.png",
      "width": 685,
      "height": 430
  },
  {
      "id": "364",
      "path": "memes/2/364.png",
      "width": 460,
      "height": 460
  },
  {
      "id": "1082",
      "path": "memes/2/1082.png",
      "width": 600,
      "height": 315
  },
  {
      "id": "343",
      "path": "memes/2/343.png",
      "width": 600,
      "height": 600
  },
  {
      "id": "668",
      "path": "memes/2/668.png",
      "width": 750,
      "height": 815
  },
  {
      "id": "1035",
      "path": "memes/2/1035.png",
      "width": 650,
      "height": 612
  },
  {
      "id": "1084",
      "path": "memes/2/1084.png",
      "width": 1082,
      "height": 1280
  },
  {
      "id": "661",
      "path": "memes/2/661.png",
      "width": 1280,
      "height": 1208
  },
  {
      "id": "1105",
      "path": "memes/2/1105.png",
      "width": 700,
      "height": 700
  },
  {
      "id": "982",
      "path": "memes/2/982.png",
      "width": 960,
      "height": 698
  },
  {
      "id": "824",
      "path": "memes/2/824.png",
      "width": 400,
      "height": 566
  },
  {
      "id": "840",
      "path": "memes/2/840.png",
      "width": 705,
      "height": 299
  },
  {
      "id": "1111",
      "path": "memes/2/1111.png",
      "width": 601,
      "height": 464
  },
  {
      "id": "1046",
      "path": "memes/2/1046.png",
      "width": 700,
      "height": 831
  },
  {
      "id": "702",
      "path": "memes/2/702.png",
      "width": 320,
      "height": 324
  },
  {
      "id": "373",
      "path": "memes/2/373.png",
      "width": 600,
      "height": 414
  },
  {
      "id": "795",
      "path": "memes/2/795.png",
      "width": 346,
      "height": 460
  },
  {
      "id": "1053",
      "path": "memes/2/1053.png",
      "width": 599,
      "height": 710
  },
  {
      "id": "942",
      "path": "memes/2/942.png",
      "width": 580,
      "height": 767
  },
  {
      "id": "542",
      "path": "memes/2/542.png",
      "width": 467,
      "height": 312
  },
  {
      "id": "814",
      "path": "memes/2/814.png",
      "width": 960,
      "height": 957
  },
  {
      "id": "1102",
      "path": "memes/2/1102.png",
      "width": 480,
      "height": 446
  },
  {
      "id": "842",
      "path": "memes/2/842.png",
      "width": 640,
      "height": 427
  },
  {
      "id": "931",
      "path": "memes/2/931.png",
      "width": 544,
      "height": 740
  },
  {
      "id": "850",
      "path": "memes/2/850.png",
      "width": 771,
      "height": 480
  },
  {
      "id": "1097",
      "path": "memes/2/1097.png",
      "width": 640,
      "height": 599
  },
  {
      "id": "815",
      "path": "memes/2/815.png",
      "width": 989,
      "height": 1280
  },
  {
      "id": "684",
      "path": "memes/2/684.png",
      "width": 1280,
      "height": 640
  },
  {
      "id": "1021",
      "path": "memes/2/1021.png",
      "width": 800,
      "height": 665
  },
  {
      "id": "692",
      "path": "memes/2/692.png",
      "width": 748,
      "height": 748
  },
  {
      "id": "483",
      "path": "memes/2/483.png",
      "width": 500,
      "height": 368
  },
  {
      "id": "855",
      "path": "memes/2/855.png",
      "width": 750,
      "height": 775
  },
  {
      "id": "1066",
      "path": "memes/2/1066.png",
      "width": 497,
      "height": 737
  },
  {
      "id": "607",
      "path": "memes/2/607.png",
      "width": 620,
      "height": 649
  },
  {
      "id": "598",
      "path": "memes/2/598.png",
      "width": 550,
      "height": 458
  },
  {
      "id": "1124",
      "path": "memes/2/1124.png",
      "width": 640,
      "height": 461
  },
  {
      "id": "335",
      "path": "memes/2/335.png",
      "width": 957,
      "height": 789
  },
  {
      "id": "1110",
      "path": "memes/2/1110.png",
      "width": 360,
      "height": 480
  },
  {
      "id": "730",
      "path": "memes/2/730.png",
      "width": 700,
      "height": 576
  },
  {
      "id": "865",
      "path": "memes/2/865.png",
      "width": 720,
      "height": 641
  },
  {
      "id": "677",
      "path": "memes/2/677.png",
      "width": 754,
      "height": 948
  },
  {
      "id": "879",
      "path": "memes/2/879.png",
      "width": 650,
      "height": 995
  },
  {
      "id": "493",
      "path": "memes/2/493.png",
      "width": 460,
      "height": 343
  },
  {
      "id": "488",
      "path": "memes/2/488.png",
      "width": 562,
      "height": 805
  },
  {
      "id": "517",
      "path": "memes/2/517.png",
      "width": 640,
      "height": 274
  },
  {
      "id": "1091",
      "path": "memes/2/1091.png",
      "width": 888,
      "height": 499
  },
  {
      "id": "1056",
      "path": "memes/2/1056.png",
      "width": 750,
      "height": 500
  },
  {
      "id": "1120",
      "path": "memes/2/1120.png",
      "width": 540,
      "height": 546
  },
  {
      "id": "541",
      "path": "memes/2/541.png",
      "width": 485,
      "height": 679
  },
  {
      "id": "746",
      "path": "memes/2/746.png",
      "width": 614,
      "height": 482
  },
  {
      "id": "392",
      "path": "memes/2/392.png",
      "width": 1280,
      "height": 960
  },
  {
      "id": "609",
      "path": "memes/2/609.png",
      "width": 1280,
      "height": 887
  },
  {
      "id": "532",
      "path": "memes/2/532.png",
      "width": 500,
      "height": 450
  },
  {
      "id": "808",
      "path": "memes/2/808.png",
      "width": 570,
      "height": 1280
  },
  {
      "id": "813",
      "path": "memes/2/813.png",
      "width": 600,
      "height": 1000
  },
  {
      "id": "563",
      "path": "memes/2/563.png",
      "width": 500,
      "height": 375
  },
  {
      "id": "957",
      "path": "memes/2/957.png",
      "width": 640,
      "height": 480
  },
  {
      "id": "999",
      "path": "memes/2/999.png",
      "width": 720,
      "height": 714
  },
  {
      "id": "1047",
      "path": "memes/2/1047.png",
      "width": 1071,
      "height": 1280
  },
  {
      "id": "1032",
      "path": "memes/2/1032.png",
      "width": 500,
      "height": 493
  },
  {
      "id": "691",
      "path": "memes/2/691.png",
      "width": 748,
      "height": 748
  },
  {
      "id": "938",
      "path": "memes/2/938.png",
      "width": 681,
      "height": 800
  },
  {
      "id": "818",
      "path": "memes/2/818.png",
      "width": 449,
      "height": 561
  },
  {
      "id": "1065",
      "path": "memes/2/1065.png",
      "width": 479,
      "height": 339
  },
  {
      "id": "553",
      "path": "memes/2/553.png",
      "width": 379,
      "height": 280
  },
  {
      "id": "363",
      "path": "memes/2/363.png",
      "width": 497,
      "height": 460
  },
  {
      "id": "596",
      "path": "memes/2/596.png",
      "width": 650,
      "height": 619
  },
  {
      "id": "506",
      "path": "memes/2/506.png",
      "width": 714,
      "height": 500
  },
  {
      "id": "765",
      "path": "memes/2/765.png",
      "width": 480,
      "height": 668
  },
  {
      "id": "546",
      "path": "memes/2/546.png",
      "width": 639,
      "height": 396
  },
  {
      "id": "629",
      "path": "memes/2/629.png",
      "width": 540,
      "height": 720
  },
  {
      "id": "377",
      "path": "memes/2/377.png",
      "width": 759,
      "height": 962
  },
  {
      "id": "1133",
      "path": "memes/2/1133.png",
      "width": 712,
      "height": 664
  },
  {
      "id": "537",
      "path": "memes/2/537.png",
      "width": 560,
      "height": 461
  },
  {
      "id": "528",
      "path": "memes/2/528.png",
      "width": 240,
      "height": 292
  },
  {
      "id": "1135",
      "path": "memes/2/1135.png",
      "width": 750,
      "height": 711
  },
  {
      "id": "742",
      "path": "memes/2/742.png",
      "width": 605,
      "height": 957
  },
  {
      "id": "608",
      "path": "memes/2/608.png",
      "width": 1200,
      "height": 900
  },
  {
      "id": "499",
      "path": "memes/2/499.png",
      "width": 591,
      "height": 384
  },
  {
      "id": "848",
      "path": "memes/2/848.png",
      "width": 640,
      "height": 1136
  },
  {
      "id": "349",
      "path": "memes/2/349.png",
      "width": 404,
      "height": 962
  },
  {
      "id": "1136",
      "path": "memes/2/1136.png",
      "width": 1038,
      "height": 1280
  },
  {
      "id": "706",
      "path": "memes/2/706.png",
      "width": 1080,
      "height": 879
  },
  {
      "id": "987",
      "path": "memes/2/987.png",
      "width": 530,
      "height": 530
  },
  {
      "id": "1079",
      "path": "memes/2/1079.png",
      "width": 700,
      "height": 599
  },
  {
      "id": "965",
      "path": "memes/2/965.png",
      "width": 816,
      "height": 1280
  },
  {
      "id": "505",
      "path": "memes/2/505.png",
      "width": 603,
      "height": 593
  },
  {
      "id": "1139",
      "path": "memes/2/1139.png",
      "width": 625,
      "height": 800
  },
  {
      "id": "837",
      "path": "memes/2/837.png",
      "width": 700,
      "height": 420
  },
  {
      "id": "672",
      "path": "memes/2/672.png",
      "width": 510,
      "height": 277
  },
  {
      "id": "853",
      "path": "memes/2/853.png",
      "width": 677,
      "height": 513
  },
  {
      "id": "925",
      "path": "memes/2/925.png",
      "width": 749,
      "height": 1023
  },
  {
      "id": "554",
      "path": "memes/2/554.png",
      "width": 320,
      "height": 320
  },
  {
      "id": "524",
      "path": "memes/2/524.png",
      "width": 1280,
      "height": 796
  },
  {
      "id": "939",
      "path": "memes/2/939.png",
      "width": 506,
      "height": 392
  },
  {
      "id": "1004",
      "path": "memes/2/1004.png",
      "width": 1080,
      "height": 1221
  },
  {
      "id": "1015",
      "path": "memes/2/1015.png",
      "width": 569,
      "height": 768
  },
  {
      "id": "1010",
      "path": "memes/2/1010.png",
      "width": 640,
      "height": 640
  },
  {
      "id": "584",
      "path": "memes/2/584.png",
      "width": 493,
      "height": 1280
  },
  {
      "id": "334",
      "path": "memes/2/334.png",
      "width": 500,
      "height": 452
  },
  {
      "id": "805",
      "path": "memes/2/805.png",
      "width": 346,
      "height": 350
  }
],

"quotes": [
  {
    "id": "5a6ce86e2af929789500e7e4",
    "author": "Edsger W. Dijkstra",
    "en": "Computer Science is no more about computers than astronomy is about telescopes."
  },
  {
    "id": "5a6ce86e2af929789500e7d7",
    "author": "Edsger W. Dijkstra",
    "en": "Simplicity is prerequisite for reliability."
  },
  {
    "id": "5a6ce86d2af929789500e7ca",
    "author": "Edsger W. Dijkstra",
    "en": "The computing scientist’s main challenge is not to get confused by the complexities of his own making."
  },
  {
    "id": "5a6ce86f2af929789500e7f3",
    "author": "Edsger W. Dijkstra",
    "en": "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
  },
  {
    "id": "5a6ce86e2af929789500e7d9",
    "author": "Edsger W. Dijkstra",
    "en": "A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“."
  },
  {
    "id": "5a6ce86f2af929789500e7f8",
    "author": "Tony Hoare",
    "en": "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."
  },
  {
    "id": "5a6ce86f2af929789500e807",
    "author": "Jeff Hammerbacher",
    "en": "The best minds of my generation are thinking about how to make people click ads."
  },
  {
    "id": "5a6ce86f2af929789500e7f9",
    "author": "Edsger W. Dijkstra",
    "en": "The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities."
  },
  {
    "id": "5a6ce86f2af929789500e7f5",
    "author": "Edsger W. Dijkstra",
    "en": "How do we convince people that in programming simplicity and clarity — in short: what mathematicians call \"elegance\" — are not a dispensable luxury, but a crucial matter that decides between success and failure?"
  },
  {
    "id": "5a6ce86f2af929789500e80b",
    "author": "Fred Brooks",
    "en": "Adding manpower to a late software project makes it later."
  },
  {
    "id": "5a6ce86f2af929789500e809",
    "author": "Michael Stal",
    "en": "Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person."
  },
  {
    "id": "5a6ce86f2af929789500e815",
    "author": "Fred Brooks",
    "en": "Nine women can't make a baby in one month."
  },
  {
    "id": "5a6ce86f2af929789500e81a",
    "author": "Jeff Sickel",
    "en": "Deleted code is debugged code."
  },
  {
    "id": "5a6ce86f2af929789500e826",
    "author": "Ken Thompson",
    "en": "When in doubt, use brute force."
  },
  {
    "id": "5a6ce86f2af929789500e814",
    "author": "Fred Brooks",
    "en": "When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned."
  },
  {
    "id": "5a6ce86f2af929789500e816",
    "author": "Fred Brooks",
    "en": "If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two."
  },
  {
    "id": "5a6ce86f2af929789500e818",
    "author": "Fred Brooks",
    "en": "Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect."
  },
  {
    "id": "5a6ce86f2af929789500e80f",
    "author": "Fred Brooks",
    "en": "The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures."
  },
  {
    "id": "5a6ce86f2af929789500e821",
    "author": "Fred Brooks",
    "en": "The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it \"ought\" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small."
  },
  {
    "id": "5a6ce86f2af929789500e81e",
    "author": "Donald Knuth",
    "en": "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%."
  },
  {
    "id": "5a6ce86f2af929789500e824",
    "author": "Ken Thompson",
    "en": "One of my most productive days was throwing away 1,000 lines of code."
  },
  {
    "id": "5a6ce86f2af929789500e825",
    "author": "Grace Hopper",
    "en": "One accurate measurement is worth more than a thousand expert opinions."
  },
  {
    "id": "5a6ce86f2af929789500e80d",
    "author": "Fred Brooks",
    "en": "What one programmer can do in one month, two programmers can do in two months."
  },
  {
    "id": "5a6ce86f2af929789500e82e",
    "author": "Rick Osborne",
    "en": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
  },
  {
    "id": "5a6ce86f2af929789500e830",
    "author": "John Ousterhout",
    "en": "A program that produces incorrect results twice as fast is infinitely slower."
  },
  {
    "id": "5a6ce86f2af929789500e828",
    "author": "Poul Anderson",
    "en": "I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated."
  },
  {
    "id": "5a6ce86f2af929789500e82a",
    "author": "Robert C. Martin",
    "en": "Cleaning code does NOT take time. NOT cleaning code does take time."
  },
  {
    "id": "5a6ce86f2af929789500e837",
    "author": "David Gelernter",
    "en": "Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity."
  },
  {
    "id": "5a6ce86f2af929789500e833",
    "author": "Edward V. Berard",
    "en": "Walking on water and developing software from a specification are easy if both are frozen."
  },
  {
    "id": "5a6ce86f2af929789500e836",
    "author": "Brian Kernighan",
    "en": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
  },
  {
    "id": "5a6ce86f2af929789500e838",
    "author": "Brian Kernighan",
    "en": "Controlling complexity is the essence of computer programming."
  },
  {
    "id": "5a6ce86f2af929789500e83f",
    "author": "Chris Wenham",
    "en": "Debugging time increases as a square of the program’s size."
  },
  {
    "id": "5a6ce86f2af929789500e82c",
    "author": "Seymour Cray",
    "en": "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."
  },
  {
    "id": "5a6ce86f2af929789500e843",
    "author": "Ron Jeffries",
    "en": "Code never lies, comments sometimes do."
  },
  {
    "id": "5a6ce86f2af929789500e845",
    "author": "Laurence J. Peter",
    "en": "Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them."
  },
  {
    "id": "5a6ce86f2af929789500e841",
    "author": "Poul-Henning Kamp",
    "en": "Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by \"only\" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks."
  },
  {
    "id": "5a6ce86f2af929789500e847",
    "author": "Albert Einstein",
    "en": "I have no special talent. I am only passionately curious."
  },
  {
    "id": "5a6ce86f2af929789500e849",
    "author": "Robert C. Martin",
    "en": "The proper use of comments is to compensate for our failure to express ourself in code."
  },
  {
    "id": "5a6ce86f2af929789500e852",
    "author": "Rob Pike",
    "en": "When there is no type hierarchy you don’t have to manage the type hierarchy."
  },
  {
    "id": "5a6ce86f2af929789500e856",
    "author": "Steve Jobs",
    "en": "Everybody should learn to program a computer, because it teaches you how to think."
  },
  {
    "id": "5a6ce86f2af929789500e84f",
    "author": "Chris Sacca",
    "en": "Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for."
  },
  {
    "id": "5a6ce8702af929789500e85a",
    "author": "Bill Gates",
    "en": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."
  },
  {
    "id": "5a6ce8702af929789500e85e",
    "author": "William Wulf",
    "en": "More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity."
  },
  {
    "id": "5a6ce8702af929789500e860",
    "author": "Edsger W. Dijkstra",
    "en": "Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence."
  },
  {
    "id": "5a6ce8702af929789500e864",
    "author": "Albert Einstein",
    "en": "Imagination is more important than knowledge."
  },
  {
    "id": "5a6ce8702af929789500e862",
    "author": "Buckminster Fuller",
    "en": "When I am working on a problem I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong."
  },
  {
    "id": "5a6ce86f2af929789500e84b",
    "author": "Sean Parent",
    "en": "Good code is short, simple, and symmetrical - the challenge is figuring out how to get there."
  },
  {
    "id": "5a6ce8702af929789500e868",
    "author": "Linus Torvalds",
    "en": "If you think your users are idiots, only idiots will use it."
  },
  {
    "id": "5a6ce8702af929789500e872",
    "author": "Albert Einstein",
    "en": "Once you stop learning you start dying."
  },
  {
    "id": "5a6ce8702af929789500e884",
    "author": "Kevlin Henney",
    "en": "No code is faster than no code."
  },
  {
    "id": "5a6ce8702af929789500e86c",
    "author": "Richard P. Gabriel",
    "en": "Over half of the time you spend working on a project is spent thinking, and no tool, no matter how advanced, can think for you."
  },
  {
    "id": "5a6ce8702af929789500e86e",
    "author": "Edsger W. Dijkstra",
    "en": "We could, for instance, begin with cleaning up our language by no longer calling a bug a bug but by calling it an error. It is much more honest because it squarely puts the blame where it belongs, viz. with the programmer who made the error. The animistic metaphor of the bug that maliciously sneaked in while the programmer was not looking is intellectually dishonest as it disguises that the error is the programmer's own creation. The nice thing of this simple change of vocabulary is that it has such a profound effect: while, before, a program with only one bug used to be \"almost correct\", afterwards a program with an error is just \"wrong\"."
  },
  {
    "id": "5a6ce8702af929789500e88b",
    "author": "Stewart Brand",
    "en": "Once a new technology starts rolling, if you’re not part of the steamroller, you’re part of the road."
  },
  {
    "id": "5a6ce8702af929789500e887",
    "author": "John Gall (author)",
    "en": "A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work."
  },
  {
    "id": "5a6ce8702af929789500e889",
    "author": "Henry Petroski",
    "en": "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry."
  },
  {
    "id": "5a6ce8702af929789500e88e",
    "author": "Carl Friedrich Gauss",
    "en": "I am never satisfied until I have said as much as possible in a few words, and writing briefly takes far more time than writing at length."
  },
  {
    "id": "5a6ce8702af929789500e890",
    "author": "Bjarne Stroustrup",
    "en": "There are only two kinds of languages: the ones people complain about and the ones nobody uses."
  },
  {
    "id": "5a6ce8702af929789500e892",
    "author": "Pamela Zave",
    "en": "The purpose of software engineering is to control complexity, not to create it."
  },
  {
    "id": "5a6ce8702af929789500e89a",
    "author": "Dennis Ritchie",
    "en": "Unix is simple. It just takes a genius to understand its simplicity."
  },
  {
    "id": "5a6ce8702af929789500e89c",
    "author": "Dennis Ritchie",
    "en": "A language that doesn’t have everything is actually easier to program in than some that do."
  },
  {
    "id": "5a6ce8702af929789500e8a2",
    "author": "Richard Feynman",
    "en": "What I cannot build, I do not understand."
  },
  {
    "id": "5a6ce8702af929789500e8a6",
    "author": "Albert Einstein",
    "en": "Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius – and a lot of courage – to move in the opposite direction."
  },
  {
    "id": "5a6ce8702af929789500e898",
    "author": "Lawrence Flon",
    "en": "There is no programming language, no matter how structured, that will prevent programmers from making bad programs."
  },
  {
    "id": "5a6ce8702af929789500e8a8",
    "author": "Martin Fowler",
    "en": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
  },
  {
    "id": "5a6ce8702af929789500e894",
    "author": "Joe Armstrong (programmer)",
    "en": "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle."
  },
  {
    "id": "5a6ce8702af929789500e86a",
    "author": "Ken Thompson",
    "en": "You can’t trust code that you did not totally create yourself."
  },
  {
    "id": "5a6ce8702af929789500e8a4",
    "author": "Albert Einstein",
    "en": "A clever person solves a problem. A wise person avoids it."
  },
  {
    "id": "5a6ce8702af929789500e8ac",
    "author": "Bjarne Stroustrup",
    "en": "The most important single aspect of software development is to be clear about what you are trying to build."
  },
  {
    "id": "5a6ce8702af929789500e8aa",
    "author": "Jonathan Shewchuk",
    "en": "The only sin is to make a choice without knowing you are making one."
  },
  {
    "id": "5a6ce8702af929789500e8b0",
    "author": "Ryan Singer",
    "en": "So much complexity in software comes from trying to make one thing do two things."
  },
  {
    "id": "5a6ce8702af929789500e8b2",
    "author": "P. J. Plauger",
    "en": "Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law."
  },
  {
    "id": "5a6ce8702af929789500e8b6",
    "author": "John Johnson",
    "en": "First, solve the problem. Then, write the code."
  },
  {
    "id": "5a6ce8702af929789500e8b4",
    "author": "Doug Linder",
    "en": "A good programmer is someone who looks both ways before crossing a one-way street."
  },
  {
    "id": "5a6ce8702af929789500e8b8",
    "author": "David Wheeler (computer scientist)",
    "en": "Compatibility means deliberately repeating other people’s mistakes."
  },
  {
    "id": "5a6ce8702af929789500e8ba",
    "author": "Jeremy S. Anderson",
    "en": "There are two major products that come out of Berkeley: LSD and UNIX. We don't believe this to be a coincidence."
  },
  {
    "id": "5a6ce8702af929789500e8bc",
    "author": "Edsger W. Dijkstra",
    "en": "The competent programmer is fully aware of the strictly limited size of his own skull; therefore he approaches the programming task in full humility, and among other things he avoids clever tricks like the plague"
  },
  {
    "id": "5a6ce8702af929789500e8ae",
    "author": "Joshua Bloch",
    "en": "When in doubt, leave it out."
  },
  {
    "id": "5a6ce8702af929789500e8be",
    "author": "Linus Torvalds",
    "en": "I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships."
  },
  {
    "id": "5a6ce8702af929789500e8ce",
    "author": "Albert Einstein",
    "en": "Never memorize something that you can look up."
  },
  {
    "id": "5a6ce8702af929789500e8cc",
    "author": "Richard Hamming",
    "en": "Mathematicians stand on each others' shoulders and computer scientists stand on each others' toes."
  },
  {
    "id": "5a72399510263e0c45cb6cfa",
    "author": "Edsger W. Dijkstra",
    "en": "LISP has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts."
  },
  {
    "id": "5a6ce8702af929789500e8c6",
    "author": "Bjarne Stroustrup",
    "en": "An organisation that treats its programmers as morons will soon have programmers that are willing and able to act like morons only."
  },
  {
    "id": "5a82224c89919d0004b357ce",
    "author": "Anonymous",
    "en": "The button is working, only, it cannot be seen."
  },
  {
    "id": "5a8225ee89919d0004b357d0",
    "author": "Douglas Crockford",
    "en": "Don't worry about anything. Just do what you can and be the best you can be."
  },
  {
    "id": "5a82b607fc716e0004373f53",
    "author": "Tom DeMarco",
    "en": "The business of software building isn't really high-tech at all. It's most of all a business of talking to each other and writing things down."
  },
  {
    "id": "5a6ce8702af929789500e8ca",
    "author": "Paul Graham (programmer)",
    "en": "In programming the hard part isn’t solving problems, but deciding what problems to solve."
  },
  {
    "id": "5a82cd0efc716e0004373f56",
    "author": "Tom DeMarco",
    "en": "The manager's function is not to make people work, but to make it possible for people to work."
  },
  {
    "id": "5a82c90cfc716e0004373f55",
    "author": "Tom DeMarco",
    "en": "People under pressure don’t work better; they just work faster."
  },
  {
    "id": "5a8946eda578110004299a3b",
    "author": "Donald Knuth",
    "en": "My main conclusion after spending ten years of my life working on the TEX project is that software is hard. It’s harder than anything else I’ve ever had to do."
  },
  {
    "id": "5a82cd5ffc716e0004373f57",
    "author": "Donald Knuth",
    "en": "Science is what we understand well enough to explain to a computer. Art is everything else we do."
  },
  {
    "id": "5a896544a12a0e0004c76124",
    "author": "Donald Knuth",
    "en": "We have seen that computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty."
  },
  {
    "id": "5a82cd91fc716e0004373f58",
    "author": "Donald Knuth",
    "en": "Email is a wonderful thing for people whose role in life is to be on top of things. But not for me; my role is to be on the bottom of things. What I do takes long hours of studying and uninterruptible concentration."
  },
  {
    "id": "5a8e9b5884a8f2000482568b",
    "author": "Kevlin Henney",
    "en": "Less code equals less bugs."
  },
  {
    "id": "5a91370b2141d30004b42e58",
    "author": "Charles Babbage",
    "en": "As soon as an Analytical Engine exists, it will necessarily guide the future course of science."
  },
  {
    "id": "5a9137d72141d30004b42e59",
    "author": "Charles Babbage",
    "en": "The errors which arise from the absence of facts are far more numerous and more durable than those which result from unsound reasoning respecting true data."
  },
  {
    "id": "5a9138442141d30004b42e5a",
    "author": "Charles Babbage",
    "en": "We have already mentioned what may, perhaps, appear paradoxical to some of our readers, — that the division of labour can be applied with equal success to mental as to mechanical operations, and that it ensures in both the same economy of time."
  },
  {
    "id": "5a9139472141d30004b42e5b",
    "author": "Charles Babbage",
    "en": "On two occasions I have been asked [by members of Parliament]: \"Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?\" I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question."
  },
  {
    "id": "5a91be60346ab3000418a760",
    "author": "Edsger W. Dijkstra",
    "en": "As long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem."
  },
  {
    "id": "5a91e12fc4240c0004265950",
    "author": "Edsger W. Dijkstra",
    "en": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense."
  },
  {
    "id": "5a91d1c1c4240c000426594f",
    "author": "Edsger W. Dijkstra",
    "en": "If you want more effective programmers, you will discover that they should not waste their time debugging, they should not introduce the bugs to start with."
  },
  {
    "id": "5a91e150c4240c0004265951",
    "author": "Edsger W. Dijkstra",
    "en": "It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration."
  },
  {
    "id": "5a91e27ec4240c0004265953",
    "author": "Edsger W. Dijkstra",
    "en": "A picture may be worth a thousand words, a formula is worth a thousand pictures."
  },
  {
    "id": "5a91e224c4240c0004265952",
    "author": "Edsger W. Dijkstra",
    "en": "I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself \"Dijkstra would not have liked this\", well, that would be enough immortality for me."
  },
  {
    "id": "5a91bc8f346ab3000418a75f",
    "author": "Edsger W. Dijkstra",
    "en": "Don't blame me for the fact that competent programming will be too difficult for \"the average programmer\" — you must not fall into the trap of rejecting a surgical technique because it is beyond the capabilities of the barber in his shop around the corner."
  },
  {
    "id": "5a91e37bc4240c0004265955",
    "author": "John von Neumann",
    "en": "Young man, in mathematics you don't understand things. You just get used to them."
  },
  {
    "id": "5a91e40ec4240c0004265957",
    "author": "Dennis Ritchie",
    "en": "C is quirky, flawed, and an enormous success."
  },
  {
    "id": "5a91e2d0c4240c0004265954",
    "author": "Edsger W. Dijkstra",
    "en": "It is not the task of the University to offer what society asks for, but to give what society needs."
  },
  {
    "id": "5a895d1ba5f8bf3df4485d1d",
    "author": "Donald Knuth",
    "en": "By understanding a machine-oriented language, the programmer will tend to use a much more efficient method; it is much closer to reality."
  },
  {
    "id": "5a91e459c4240c0004265958",
    "author": "Dennis Ritchie",
    "en": "Another danger is that commercial pressures of one sort or another will divert the attention of the best thinkers from real innovation to exploitation of the current fad, from prospecting to mining a known lode."
  },
  {
    "id": "5a91e51dc4240c0004265959",
    "author": "Bjarne Stroustrup",
    "en": "Within C++, there is a much smaller and cleaner language struggling to get out."
  },
  {
    "id": "5a91e560c4240c000426595a",
    "author": "Bjarne Stroustrup",
    "en": "Anybody who comes to you and says he has a perfect language is either naïve or a salesman."
  },
  {
    "id": "5a91e60dc4240c000426595b",
    "author": "Alan Turing",
    "en": "A man provided with paper, pencil, and rubber, and subject to strict discipline, is in effect a universal machine."
  },
  {
    "id": "5a91e6a3c4240c000426595c",
    "author": "Alan Turing",
    "en": "The idea behind digital computers may be explained by saying that these machines are intended to carry out any operations which could be done by a human computer."
  },
  {
    "id": "5a91e779c4240c000426595d",
    "author": "Alan Turing",
    "en": "Machines take me by surprise with great frequency."
  },
  {
    "id": "5a933b4c8e7b510004cba4be",
    "author": "Bjarne Stroustrup",
    "en": "Maybe \"just one little global variable\" isn't too unmanageable, but that style leads to code that is useless except to its original programmer."
  },
  {
    "id": "5a933c3d8e7b510004cba4bf",
    "author": "Linus Torvalds",
    "en": "I'm doing a free operating system (just a hobby, won't be big and professional like GNU)."
  },
  {
    "id": "5a933cac8e7b510004cba4c0",
    "author": "Linus Torvalds",
    "en": "If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program."
  },
  {
    "id": "5a933f078e7b510004cba4c1",
    "author": "Linus Torvalds",
    "en": "An infinite number of monkeys typing into GNU Emacs would never make a good program."
  },
  {
    "id": "5a9340258e7b510004cba4c3",
    "author": "Linus Torvalds",
    "en": "If Microsoft ever does applications for Linux it means I've won."
  },
  {
    "id": "5a933f6f8e7b510004cba4c2",
    "author": "Linus Torvalds",
    "en": "See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too ;-)"
  },
  {
    "id": "5a9342048e7b510004cba4c6",
    "author": "Linus Torvalds",
    "en": "Really, I'm not out to destroy Microsoft. That will just be a completely unintentional side effect."
  },
  {
    "id": "5a9341788e7b510004cba4c5",
    "author": "Linus Torvalds",
    "en": "Talk is cheap. Show me the code."
  },
  {
    "id": "5a9340e08e7b510004cba4c4",
    "author": "Tom Cargill",
    "en": "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time."
  },
  {
    "id": "5a93467e8e7b510004cba4c8",
    "author": "Kent Beck",
    "en": "I'm not a great programmer; I'm just a good programmer with great habits."
  },
  {
    "id": "5a9348828e7b510004cba4c9",
    "author": "Bill Gates",
    "en": "There's only one trick in software, and that is using a piece of software that's already been written."
  },
  {
    "id": "5a93d5a36a584e0004a4a612",
    "author": "Steve Jobs",
    "en": "You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new."
  },
  {
    "id": "5a93d6b26a584e0004a4a614",
    "author": "Steve Jobs",
    "en": "What a computer is to me is it's the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds."
  },
  {
    "id": "5a93eb796a584e0004a4a617",
    "author": "Marijn Haverbeke",
    "en": "Programming, it turns out, is hard. The fundamental rules are typically simple and clear. But programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you might just get lost in it."
  },
  {
    "id": "5a93d8036a584e0004a4a615",
    "author": "Steve Jobs",
    "en": "I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. It is so hard."
  },
  {
    "id": "5a93da0d6a584e0004a4a616",
    "author": "Steve Jobs",
    "en": "A lot of companies hire people to tell them what to do. We hire people to tell us what to do."
  },
  {
    "id": "5a93ebdc6a584e0004a4a618",
    "author": "Marijn Haverbeke",
    "en": "Computers themselves can do only stupidly straightforward things. The reason they are so useful is that they do these things at an incredibly high speed."
  },
  {
    "id": "5a93ed3d6a584e0004a4a619",
    "author": "Marijn Haverbeke",
    "en": "A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands. But without care, a program’s size and complexity will grow out of control, confusing even the person who created it."
  },
  {
    "id": "5a93edc56a584e0004a4a61a",
    "author": "Marijn Haverbeke",
    "en": "There are many terrible mistakes to make in program design, so go ahead and make them so that you understand them better."
  },
  {
    "id": "5a93fd14e49ad10004edb860",
    "author": "Donald Knuth",
    "en": "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones."
  },
  {
    "id": "5a94040fe49ad10004edb862",
    "author": "Jamie Zawinski",
    "en": "Professionalism has no place in art, and hacking is art. Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer."
  },
  {
    "id": "5a940c14e49ad10004edb864",
    "author": "Quarry worker's creed",
    "en": "We who cut mere stones must always be envisioning cathedrals."
  },
  {
    "id": "5a9405d7e49ad10004edb863",
    "author": "Roy Fielding",
    "en": "Communication must be stateless in nature, such that each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server."
  },
  {
    "id": "5a942ea0ee7ed5000496b16f",
    "author": "Kent Beck",
    "en": "When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous."
  },
  {
    "id": "5a942dc4ee7ed5000496b16e",
    "author": "Kent Beck",
    "en": "When you find you have to add a feature to a program, and the program's code is not structured in a convenient way to add the feature, first refactor the program to make it easy to add the feature, then add the feature."
  },
  {
    "id": "5a942fc3ee7ed5000496b171",
    "author": "Martin Fowler",
    "en": "There are few things more frustrating or time wasting than debugging. Wouldn't it be a hell of a lot quicker if we just didn't create the bugs in the first place?"
  },
  {
    "id": "5a942fa3ee7ed5000496b170",
    "author": "Martin Fowler",
    "en": "With testing, I know straight away when I added a bug. That lets me fix the bug immediately, before it can crawl off and hide."
  },
  {
    "id": "5a942fd8ee7ed5000496b172",
    "author": "Martin Fowler",
    "en": "I think one of the most valuable rules is avoid duplication."
  },
  {
    "id": "5a942ffbee7ed5000496b173",
    "author": "Martin Fowler",
    "en": "Often designers do complicated things that improve the capacity on a particular hardware platform when it might actually be cheaper to buy more hardware."
  },
  {
    "id": "5a9430a4ee7ed5000496b175",
    "author": "John Carmack",
    "en": "The situation is so much better for programmers today - a cheap used PC, a linux CD, and an internet account, and you have all the tools necessary to work your way to any level of programming skill you want to shoot for."
  },
  {
    "id": "5a94303bee7ed5000496b174",
    "author": "John Carmack",
    "en": "If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it."
  },
  {
    "id": "5a9430ceee7ed5000496b176",
    "author": "John Carmack",
    "en": "Story in a game is like a story in a porn movie. It's expected to be there, but it's not that important."
  },
  {
    "id": "5a9430fbee7ed5000496b177",
    "author": "Paul Graham (programmer)",
    "en": "The best thing software can be is easy, but the way to do this is to get the defaults right, not to limit users' choices."
  },
  {
    "id": "5a943207ee7ed5000496b178",
    "author": "Paul Graham (programmer)",
    "en": "The most important thing is to be able to think what you want, not to say what you want."
  },
  {
    "id": "5a943233ee7ed5000496b17a",
    "author": "Paul Graham (programmer)",
    "en": "It's not so important what you work on, so long as you're not wasting your time."
  },
  {
    "id": "5a943216ee7ed5000496b179",
    "author": "Paul Graham (programmer)",
    "en": "The top 5% of programmers probably write 99% of the good software."
  },
  {
    "id": "5a943244ee7ed5000496b17b",
    "author": "Paul Graham (programmer)",
    "en": "There are few sources of energy so powerful as a procrastinating grad student."
  },
  {
    "id": "5a943267ee7ed5000496b17d",
    "author": "Bill Gates",
    "en": "Your most unhappy customers are your greatest source of learning."
  },
  {
    "id": "5a9432a9ee7ed5000496b17e",
    "author": "Bill Gates",
    "en": "We're no longer in the days where everything is super well crafted. But at the heart of the programs that make it to the top, you'll find that the key internal code was done by a few people who really know what they were doing."
  },
  {
    "id": "5a943301ee7ed5000496b181",
    "author": "Ward Cunningham",
    "en": "What is simplicity? Simplicity is the shortest path to a solution."
  },
  {
    "id": "5a943316ee7ed5000496b182",
    "author": "Ward Cunningham",
    "en": "Putting a new feature into a program is important, but refactoring so new features can be added in the future is equally important."
  },
  {
    "id": "5a94333dee7ed5000496b183",
    "author": "Albert Einstein",
    "en": "A new idea comes suddenly and in a rather intuitive way. But intuition is nothing but the outcome of earlier intellectual experience."
  },
  {
    "id": "5a9433d2ee7ed5000496b184",
    "author": "Ludwig Wittgenstein",
    "en": "The limits of my language mean the limits of my world."
  },
  {
    "id": "5a9434dcee7ed5000496b187",
    "author": "Alan Perlis",
    "en": "If you have a procedure with 10 parameters, you probably missed some."
  },
  {
    "id": "5a943438ee7ed5000496b185",
    "author": "George Boole",
    "en": "That language is an instrument of human reason, and not merely a medium for the expression of thought, is a truth generally admitted."
  },
  {
    "id": "5a9434edee7ed5000496b188",
    "author": "Alan Perlis",
    "en": "A language that doesn't affect the way you think about programming, is not worth knowing."
  },
  {
    "id": "5a943501ee7ed5000496b189",
    "author": "Alan Perlis",
    "en": "Simplicity does not precede complexity, but follows it."
  },
  {
    "id": "5a943514ee7ed5000496b18a",
    "author": "Alan Perlis",
    "en": "A year spent in artificial intelligence is enough to make one believe in God."
  },
  {
    "id": "5a943538ee7ed5000496b18c",
    "author": "Alan Perlis",
    "en": "The best book on programming for the layman is Alice in Wonderland, but that's because it's the best book on anything for the layman."
  },
  {
    "id": "5a94351fee7ed5000496b18b",
    "author": "Alan Perlis",
    "en": "Dealing with failure is easy: Work hard to improve."
  },
  {
    "id": "5a943485ee7ed5000496b186",
    "author": "Alan Perlis",
    "en": "A programming language is low level when its programs require attention to the irrelevant."
  },
  {
    "id": "5a9435d7ee7ed5000496b190",
    "author": "James Gleick",
    "en": "Computer programs are the most intricate, delicately balanced and finely interwoven of all the products of human industry to date."
  },
  {
    "id": "5a9435fbee7ed5000496b191",
    "author": "Edsger W. Dijkstra",
    "en": "The effective exploitation of his powers of abstraction must be regarded as one of the most vital activities of a competent programmer."
  },
  {
    "id": "5a943579ee7ed5000496b18e",
    "author": "Alan Perlis",
    "en": "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it."
  },
  {
    "id": "5a943675ee7ed5000496b193",
    "author": "Hal Abelson",
    "en": "Programs must be written for people to read, and only incidentally for machines to execute."
  },
  {
    "id": "5a943612ee7ed5000496b192",
    "author": "Mark Gibbs",
    "en": "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved."
  },
  {
    "id": "5a956c50e648470004c69e0d",
    "author": "Nathaniel Borenstein",
    "en": "It should be noted that no ethically-trained software engineer would ever consent to write a DestroyBaghdad procedure. Basic professional ethics would instead require him to write a DestroyCity procedure, to which Baghdad could be given as a parameter."
  },
  {
    "id": "5a956e55e648470004c69e10",
    "author": "Jef Raskin",
    "en": "When we don’t understand a process, we fall into magical thinking about results."
  },
  {
    "id": "5a956de5e648470004c69e0f",
    "author": "John Carmack",
    "en": "Low-level programming is good for the programmer’s soul."
  },
  {
    "id": "5a956edfe648470004c69e11",
    "author": "Edsger W. Dijkstra",
    "en": "Simplicity and elegance are unpopular because they require hard work and discipline to achieve and education to be appreciated."
  },
  {
    "id": "5a956f87e648470004c69e12",
    "author": "Ted Nelson",
    "en": "A user interface should be so simple that a beginner in an emergency can understand it within 10 seconds."
  },
  {
    "id": "5a956dcce648470004c69e0e",
    "author": "Ted Nelson",
    "en": "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry."
  },
  {
    "id": "5a95a672cb1a4d0004b2987f",
    "author": "Alan Perlis",
    "en": "Every program has (at least) two purposes: the one for which it was written and another for which it wasn't."
  },
  {
    "id": "5a95a6a3cb1a4d0004b29881",
    "author": "Alan Perlis",
    "en": "In man-machine symbiosis, it is man who must adjust: The machines can't."
  },
  {
    "id": "5a95a686cb1a4d0004b29880",
    "author": "Alan Perlis",
    "en": "One man's constant is another man's variable."
  },
  {
    "id": "5a9432bcee7ed5000496b17f",
    "author": "Bill Gates",
    "en": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
  },
  {
    "id": "5a95a760cb1a4d0004b29883",
    "author": "Alan Perlis",
    "en": "It is easier to change the specification to fit the program than vice versa."
  },
  {
    "id": "5a95a6f3cb1a4d0004b29882",
    "author": "Alan Perlis",
    "en": "I think it is inevitable that people program poorly. Training will not substantially help matters. We have to learn to live with it."
  },
  {
    "id": "5a95d22e7700780004d51dbb",
    "author": "Henry Ford",
    "en": "If we’d asked the customers what they wanted, they would have said “faster horses”."
  },
  {
    "id": "5a95d2487700780004d51dbc",
    "author": "David Parnas",
    "en": "I have found that the reason a lot of people are interested in artificial intelligence is the same reason a lot of people are interested in artificial limbs: they are missing one."
  },
  {
    "id": "5a95d2a57700780004d51dbd",
    "author": "Leslie Lamport",
    "en": "A distributed system is one in which the failure of a computer you didn’t even know existed can render your own computer unusable."
  },
  {
    "id": "5a95d3a37700780004d51dbe",
    "author": "Ward Cunningham",
    "en": "It’s all talk until the code runs."
  },
  {
    "id": "5a95d4127700780004d51dbf",
    "author": "Jan L. A. van de Snepscheut",
    "en": "In theory, there is no difference between theory and practice. But, in practice, there is."
  },
  {
    "id": "5a95d4977700780004d51dc2",
    "author": "Ellen Ullman",
    "en": "We build our computer systems the way we build our cities: over time, without a plan, on top of ruins."
  },
  {
    "id": "5a95d55e7700780004d51dc3",
    "author": "Eric S. Raymond",
    "en": "The next best thing to having good ideas is recognizing good ideas from your users."
  },
  {
    "id": "5a95d43e7700780004d51dc0",
    "author": "Joel Spolsky",
    "en": "Good software, like good wine, takes time."
  },
  {
    "id": "5a95d5bf7700780004d51dc4",
    "author": "Eric S. Raymond",
    "en": "Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot."
  },
  {
    "id": "5a95d4577700780004d51dc1",
    "author": "Filipe Fortes",
    "en": "Debugging is like being the detective in a crime movie where you are also the murderer."
  },
  {
    "id": "5a95d8a87700780004d51dc7",
    "author": "Dennis Ritchie",
    "en": "What we wanted to preserve was not just a good environment in which to do programming, but a system around which fellowship could form."
  },
  {
    "id": "5a95d7b47700780004d51dc6",
    "author": "Marvin Minsky",
    "en": "Once the computers got control, we might never get it back."
  },
  {
    "id": "5a95e89f7700780004d51dc9",
    "author": "Jef Raskin",
    "en": "A computer shall not waste your time or require you to do more work than is strictly necessary."
  },
  {
    "id": "5a95fcd17700780004d51dcb",
    "author": "George Boole",
    "en": "Of the many forms of false culture, a premature converse with abstractions is perhaps the most likely to prove fatal to the growth of a masculine vigour of intellect."
  },
  {
    "id": "5a95dae97700780004d51dc8",
    "author": "Ken Thompson",
    "en": "C++ certainly has its good points. But by and large I think it's a bad language. It does a lot of things half well and it’s just a garbage heap of ideas that are mutually exclusive. It’s way too big, way too complex. And it’s obviously built by a committee."
  },
  {
    "id": "5a95fce07700780004d51dcc",
    "author": "George Boole",
    "en": "No matter how correct a mathematical theorem may appear to be, one ought never to be satisfied that there was not something imperfect about it until it also gives the impression of being beautiful."
  },
  {
    "id": "5a96009b7700780004d51dcf",
    "author": "Ada Lovelace",
    "en": "The Analytical Engine does not occupy common ground with mere 'calculating machines.' It holds a position wholly its own, and the considerations it suggests are more interesting in their nature."
  },
  {
    "id": "5a96001a7700780004d51dce",
    "author": "Ada Lovelace",
    "en": "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."
  },
  {
    "id": "5a9601017700780004d51dd1",
    "author": "Ada Lovelace",
    "en": "In the case of the Analytical Engine, we have undoubtedly to lay out a certain capital of analytical labour in one particular line, but this is in order that the engine may bring us in a much larger return in another line."
  },
  {
    "id": "5a9600ae7700780004d51dd0",
    "author": "Ada Lovelace",
    "en": "We may say most aptly that the Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves."
  },
  {
    "id": "5a9602227700780004d51dd2",
    "author": "George Boole",
    "en": "The design of the following treatise is to investigate the fundamental laws of those operations of the mind by which reasoning is performed; to give expression to them in the symbolical language of a Calculus, and upon this foundation to establish the science of Logic and construct its method."
  },
  {
    "id": "5a967d572ba98a0004b6294f",
    "author": "John von Neumann",
    "en": "Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin. For, as has been pointed out several times, there is no such thing as a random number."
  },
  {
    "id": "5a9602757700780004d51dd3",
    "author": "George Boole",
    "en": "There is not only a close analogy between the operations of the mind in general reasoning and its operations in the particular science of Algebra, but there is to a considerable extent an exact agreement in the laws by which the two classes of operations are conducted."
  },
  {
    "id": "5a967e9c2ba98a0004b62950",
    "author": "John von Neumann",
    "en": "A large part of mathematics which becomes useful developed with absolutely no desire to be useful, and in a situation where nobody could possibly know in what area it would become useful."
  },
  {
    "id": "5a96b8e2d6959500047aecae",
    "author": "Friedrich Bauer",
    "en": "Software engineering is the part of computer science which is too difficult for the computer scientist."
  },
  {
    "id": "5a96b909d6959500047aecaf",
    "author": "Grady Booch",
    "en": "The amateur software engineer is always in search of magic, some sensational method or tool whose application promises to render software development trivial. It is the mark of the professional software engineer to know that no such panacea exist."
  },
  {
    "id": "5a96b980d6959500047aecb0",
    "author": "Grady Booch",
    "en": "Good people with a good process will outperform good people with no process every time."
  },
  {
    "id": "5a96b998d6959500047aecb1",
    "author": "Grady Booch",
    "en": "The entire history of software engineering is that of the rise in levels of abstraction."
  },
  {
    "id": "5a96b9ead6959500047aecb2",
    "author": "Hal Abelson",
    "en": "The reason that we think computer science is about computers is pretty much the same reason that the Egyptians thought geometry was about surveying instruments: when some field is just getting started and you don't really understand it very well, it's very easy to confuse the essence of what you're doing with the tools that you use."
  },
  {
    "id": "5a96b7abd6959500047aecad",
    "author": "Alan Kay",
    "en": "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves."
  },
  {
    "id": "5a96ba01d6959500047aecb3",
    "author": "Bill Gates",
    "en": "Is studying computer science the best way to prepare to be a programmer? No. the best way to prepare is to write programs, and to study great programs that other people have written."
  },
  {
    "id": "5a96ba30d6959500047aecb4",
    "author": "Richard Feynman",
    "en": "Computer science differs from physics in that it is not actually a science. It does not study natural objects. Rather, computer science is like engineering; it is all about getting something to do something."
  },
  {
    "id": "5a96ba45d6959500047aecb5",
    "author": "Richard Hamming",
    "en": "The purpose of computing is insight, not numbers."
  },
  {
    "id": "5a96bb2dd6959500047aecb7",
    "author": "Albert Einstein",
    "en": "All of our exalted technological progress, civilization for that matter, is comparable to an axe in the hand of a pathological criminal."
  },
  {
    "id": "5a96bbaed6959500047aecb8",
    "author": "Arthur C. Clarke",
    "en": "When a distinguished but elderly scientist states that something is possible, they are almost certainly right. When they state that something is impossible, they are very probably wrong."
  },
  {
    "id": "5a96ba93d6959500047aecb6",
    "author": "Dennis Ritchie",
    "en": "Computer science research is different from these more traditional disciplines. Philosophically it differs from the physical sciences because it seeks not to discover, explain, or exploit the natural world, but instead to study the properties of machines of human creation."
  },
  {
    "id": "5a96bbc3d6959500047aecb9",
    "author": "Arthur C. Clarke",
    "en": "Any sufficiently advanced technology is indistinguishable from magic."
  },
  {
    "id": "5a96bd31d6959500047aecba",
    "author": "Joseph Yoder (computer scientist)",
    "en": "While much attention has been focused on high-level software architectural patterns, what is, in effect, the de-facto standard software architecture is seldom discussed: the Big Ball of Mud."
  },
  {
    "id": "5a96bd7ed6959500047aecbb",
    "author": "Joseph Yoder (computer scientist)",
    "en": "All too many of our software systems are, architecturally, little more than shantytowns."
  },
  {
    "id": "5a96be8ed6959500047aecbe",
    "author": "Joseph Yoder (computer scientist)",
    "en": "Managing a large project is a qualitatively different problem from managing a small one, just as leading a division of infantry into battle is different from commanding a small special forces team."
  },
  {
    "id": "5a96bf70d6959500047aecc2",
    "author": "Joseph Yoder (computer scientist)",
    "en": "When you build a prototype, there is always the risk that someone will say \"that's good enough, ship it\". One way to minimize the risk of a prototype being put into production is to write the prototype in using a language or tool that you couldn't possibly use for a production version."
  },
  {
    "id": "5a96bec9d6959500047aecbf",
    "author": "Joseph Yoder (computer scientist)",
    "en": "Sadly, architecture has been undervalued for so long that many engineers regard life with a Big Ball of Mud as normal."
  },
  {
    "id": "5a96bf99d6959500047aecc3",
    "author": "Joseph Yoder (computer scientist)",
    "en": "The real problem with throwaway code comes when it isn't thrown away."
  },
  {
    "id": "5a96c01dd6959500047aecc4",
    "author": "Joseph Yoder (computer scientist)",
    "en": "Sometimes it’s just easier to throw a system away, and start over."
  },
  {
    "id": "5a96c299d6959500047aecc5",
    "author": "Eric S. Raymond",
    "en": "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter."
  },
  {
    "id": "5a96c3b6d6959500047aecc7",
    "author": "Randall E. Stross",
    "en": "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability."
  },
  {
    "id": "5a96c380d6959500047aecc6",
    "author": "Alan Kay",
    "en": "I invented the term 'Object-Oriented', and I can tell you I did not have C++ in mind."
  },
  {
    "id": "5a96c44cd6959500047aecc9",
    "author": "Linus Torvalds",
    "en": "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."
  },
  {
    "id": "5a97def55f624c00046e2103",
    "author": "Alan Perlis",
    "en": "Educators, generals, dieticians, psychologists, and parents program. Armies, students, and some societies are programmed."
  },
  {
    "id": "5a96c431d6959500047aecc8",
    "author": "L. Peter Deutsch",
    "en": "To iterate is human, to recurse divine."
  },
  {
    "id": "5a97dee55f624c00046e2102",
    "author": "Alan Perlis",
    "en": "For all its power, the computer is a harsh taskmaster. Its programs must be correct, and what we wish to say must be said accurately in every detail."
  },
  {
    "id": "5a97e0755f624c00046e2104",
    "author": "John Locke",
    "en": "The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made."
  },
  {
    "id": "5a97efdaccdfe50004febf35",
    "author": "Gerald Weinberg",
    "en": "When program developers are not territorial about their code and encourage others to look for bugs and potential improvements, progress speeds up dramatically."
  },
  {
    "id": "5a97f196ccdfe50004febf37",
    "author": "Anonymous",
    "en": "The best thing about a boolean is even if you are wrong, you are only off by a bit."
  },
  {
    "id": "5a97f307ccdfe50004febf39",
    "author": "Richard E. Pattis",
    "en": "When debugging, novices insert corrective code; experts remove defective code."
  },
  {
    "id": "5a97f324ccdfe50004febf3a",
    "author": "Douglas Crockford",
    "en": "It turns out that style matters in programming for the same reason that it matters in writing. It makes for better reading."
  },
  {
    "id": "5a97f363ccdfe50004febf3b",
    "author": "Douglas Crockford",
    "en": "Computer programs are the most complex things that humans make."
  },
  {
    "id": "5a97f4e1ccdfe50004febf3d",
    "author": "Douglas Crockford",
    "en": "Most programming languages contain good parts and bad parts. I discovered that I could be better programmer by using only the good parts and avoiding the bad parts."
  },
  {
    "id": "5a97f510ccdfe50004febf3e",
    "author": "Douglas Crockford",
    "en": "Good architecture is necessary to give programs enough structure to be able to grow large without collapsing into a puddle of confusion."
  },
  {
    "id": "5a97f539ccdfe50004febf3f",
    "author": "Douglas Crockford",
    "en": "JavaScript is the world's most misunderstood programming language."
  },
  {
    "id": "5a97f5f2ccdfe50004febf41",
    "author": "Douglas Crockford",
    "en": "In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders."
  },
  {
    "id": "5a97f552ccdfe50004febf40",
    "author": "Douglas Crockford",
    "en": "Software is usually expected to be modified over the course of its productive life. The process of converting one correct program into a different correct program is extremely challenging."
  },
  {
    "id": "5a97f8c1ccdfe50004febf42",
    "author": "Eric S. Raymond",
    "en": "Every good work of software starts by scratching a developer’s personal itch."
  },
  {
    "id": "5a9801011878b40004879f55",
    "author": "Anonymous",
    "en": "You can have the project: Done On Time. Done On Budget. Done Properly - Pick two."
  },
  {
    "id": "5a9801871878b40004879f56",
    "author": "Andy Hunt (author)",
    "en": "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first."
  },
  {
    "id": "5a9801f61878b40004879f57",
    "author": "Steve Wozniak",
    "en": "Never trust a computer you can’t throw out a window."
  },
  {
    "id": "5a9800cd1878b40004879f54",
    "author": "Alan Kay",
    "en": "The best way to predict the future is to invent it."
  },
  {
    "id": "5a9802611878b40004879f58",
    "author": "Martin Fowler",
    "en": "If you can get today’s work done today, but you do it in such a way that you can’t possibly get tomorrow’s work done tomorrow, then you lose."
  },
  {
    "id": "5a9803171878b40004879f5a",
    "author": "Alan Turing",
    "en": "Codes are a puzzle. A game, just like any other game."
  },
  {
    "id": "5a9802cb1878b40004879f59",
    "author": "Damian Conway",
    "en": "Documentation is a love letter that you write to your future self."
  },
  {
    "id": "5a95d17b7700780004d51dba",
    "author": "Bdale Garbee",
    "en": "Life is too short to run proprietary software."
  },
  {
    "id": "5a98075b1878b40004879f5d",
    "author": "Martin Fowler",
    "en": "W​henever I have to think to understand what the code is doing, I ask myself if I can refactor the code to make that understanding more immediately apparent."
  },
  {
    "id": "5a9803931878b40004879f5b",
    "author": "David Leinweber",
    "en": "If you give someone a program, you will frustrate them for a day; if you teach them how to program, you will frustrate them for a lifetime."
  },
  {
    "id": "5a9803be1878b40004879f5c",
    "author": "Mario Fusco",
    "en": "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one."
  },
  {
    "id": "5a98080e1878b40004879f5f",
    "author": "Addy Osmani",
    "en": "First do it, then do it right, then do it better."
  },
  {
    "id": "5a9808401878b40004879f60",
    "author": "John Carmack",
    "en": "The cost of adding a feature isn’t just the time it takes to code it. The cost also includes the addition of an obstacle to future expansion. The trick is to pick the features that don’t fight each other."
  },
  {
    "id": "5a9808b71878b40004879f62",
    "author": "George Carrette",
    "en": "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack."
  },
  {
    "id": "5a98090a1878b40004879f64",
    "author": "Anders Hejlsberg",
    "en": "Just because people tell you it can't be done, that doesn't necessarily mean that it can't be done. It just means that they can't do it."
  },
  {
    "id": "5a98096c1878b40004879f65",
    "author": "Dennis Ritchie",
    "en": "The only way to learn a new programming language is by writing programs in it."
  },
  {
    "id": "5a980ec71878b40004879f66",
    "author": "Manny Lehman (computer scientist)",
    "en": "An evolving system increases its complexity unless work is done to reduce it."
  },
  {
    "id": "5a985b7ae93441000489b948",
    "author": "Robert C. Martin",
    "en": "No matter how slow you are writing clean code, you will always be slower if you make a mess."
  },
  {
    "id": "5a985bc7e93441000489b949",
    "author": "Rob Pike",
    "en": "Fancy algorithms are slow when n is small, and n is usually small."
  },
  {
    "id": "5a985c91e93441000489b94a",
    "author": "Manuel Blum",
    "en": "The only difference between a FA [finite automata] and a TM [Turing machine] is that the TM, unlike the FA, has paper and pencil. Think about it. It tells you something about the power of writing."
  },
  {
    "id": "5a985e7ae93441000489b94c",
    "author": "Alan Perlis",
    "en": "Within a computer, natural language is unnatural."
  },
  {
    "id": "5a985db5e93441000489b94b",
    "author": "Brian Cantwell Smith",
    "en": "Just because you've implemented something doesn't mean you understand it."
  },
  {
    "id": "5a9807b41878b40004879f5e",
    "author": "Douglas Crockford",
    "en": "That hardly ever happens is another way of saying 'it happens'."
  },
  {
    "id": "5a9860abe93441000489b94f",
    "author": "Donald Knuth",
    "en": "Beware of bugs in the above code; I have only proved it correct, not tried it."
  },
  {
    "id": "5a986366e93441000489b951",
    "author": "Ivan Sutherland",
    "en": "A display connected to a digital computer gives us a chance to gain familiarity with concepts not realizable in the physical world. It is a looking glass into a mathematical wonderland."
  },
  {
    "id": "5a9911bb8cdbad0004955d02",
    "author": "Ralph Johnson (computer scientist)",
    "en": "Before software can be reusable it first has to be usable."
  },
  {
    "id": "5a9912938cdbad0004955d04",
    "author": "Gordon Bell",
    "en": "The cheapest, fastest, and most reliable components are those that aren’t there."
  },
  {
    "id": "5a9912248cdbad0004955d03",
    "author": "Anonymous",
    "en": "In order to understand recursion, one must first understand recursion."
  },
  {
    "id": "5a9995789128a800040c7dfa",
    "author": "Don Norman",
    "en": "The hardest part of design is keeping features out."
  },
  {
    "id": "5a986021e93441000489b94e",
    "author": "Luciano Ramalho",
    "en": "Premature abstraction is as bad as premature optimization."
  },
  {
    "id": "5a9995d29128a800040c7dfc",
    "author": "Fred Brooks",
    "en": "Much of the essence of building a program is in fact the debugging of the specification."
  },
  {
    "id": "5a9997389128a800040c7dfd",
    "author": "Elon Musk",
    "en": "Any product that needs a manual to work is broken."
  },
  {
    "id": "5a9995b89128a800040c7dfb",
    "author": "Kevlin Henney",
    "en": "The act of describing a program in unambiguous detail and the act of programming are one and the same."
  },
  {
    "id": "5a9997929128a800040c7dfe",
    "author": "Elon Musk",
    "en": "I think you should always bear in mind that entropy is not on your side."
  },
  {
    "id": "5a9997d79128a800040c7dff",
    "author": "Elon Musk",
    "en": "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design."
  },
  {
    "id": "5a9999f39128a800040c7e00",
    "author": "Elon Musk",
    "en": "People are mistaken when they think that technology just automatically improves. It does not automatically improve. It only improves if a lot of people work very hard to make it better, and actually it will, I think, by itself degrade, actually."
  },
  {
    "id": "5a9a9c372bad9600044b6fb4",
    "author": "Elon Musk",
    "en": "With artificial intelligence we are summoning the demon."
  },
  {
    "id": "5a9a9f7e2bad9600044b6fb6",
    "author": "Elon Musk",
    "en": "AI is a fundamental risk to the existence of human civilization."
  },
  {
    "id": "5a9aa21b2bad9600044b6fba",
    "author": "Terry Winograd",
    "en": "The main activity of programming is not the origination of new independent programs, but in the integration, modification, and explanation of existing ones."
  },
  {
    "id": "5a9aaff32bad9600044b6fbd",
    "author": "Tim Berners-Lee",
    "en": "Cool URIs don't change."
  },
  {
    "id": "5a9aaf8e2bad9600044b6fbc",
    "author": "Tim Berners-Lee",
    "en": "I don't believe in the sort of eureka moment idea. I think it's a myth. I'm very suspicious that actually Archimedes had been thinking about that problem for a long time."
  },
  {
    "id": "5a9ab0372bad9600044b6fbf",
    "author": "Tim Berners-Lee",
    "en": "When I invented the web, I didn't have to ask anyone's permission."
  },
  {
    "id": "5a9aa01d2bad9600044b6fb7",
    "author": "Elon Musk",
    "en": "We need to be super careful with AI. Potentially more dangerous than nukes."
  },
  {
    "id": "5a9ab1802bad9600044b6fc1",
    "author": "Tim Berners-Lee",
    "en": "I invented the Web just because I needed it, really, because it was so frustrating that it didn't exit."
  },
  {
    "id": "5a9ab1ac2bad9600044b6fc2",
    "author": "Tim Berners-Lee",
    "en": "To be a hacker - when I use the term - is somebody who is creative and does wonderful things."
  },
  {
    "id": "5a9ab1fa2bad9600044b6fc3",
    "author": "Tim Berners-Lee",
    "en": "The Domain Name Server (DNS) is the Achilles heel of the Web."
  },
  {
    "id": "5a9ab3f52bad9600044b6fc4",
    "author": "Vannevar Bush",
    "en": "Two centuries ago Leibnitz invented a calculating machine which embodied most of the essential features of recent keyboard devices, but it could not then come into use. The economics of the situation were against it."
  },
  {
    "id": "5a9ab4a82bad9600044b6fc5",
    "author": "Vannevar Bush",
    "en": "Whenever logical processes of thought are employed, there is an opportunity for the machine."
  },
  {
    "id": "5a9ab8f42bad9600044b6fc6",
    "author": "Vannevar Bush",
    "en": "If scientific reasoning were limited to the logical processes of arithmetic, we should not get very far in our understanding of the physical world. One might as well attempt to grasp the game of poker entirely by the use of the mathematics of probability."
  },
  {
    "id": "5a9ac42b2bad9600044b6fc7",
    "author": "Ward Cunningham",
    "en": "Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite. The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organizations can be brought to a stand-still under the technical debt load."
  },
  {
    "id": "5a9ac4852bad9600044b6fc8",
    "author": "Martin Fowler",
    "en": "Like a financial debt, the technical debt incurs interest payments, which come in the form of the extra effort that we have to do in future development because of the quick and dirty design choice."
  },
  {
    "id": "5a9ac5942bad9600044b6fc9",
    "author": "Steve McConnell",
    "en": "One of the important implications of technical debt is that it must be serviced. If the debt grows large enough, eventually the company will spend more on servicing its debt than it invests in increasing the value of its other assets."
  },
  {
    "id": "5a9ab0622bad9600044b6fc0",
    "author": "Tim Berners-Lee",
    "en": "What's very important from my point of view is that there is one web. Anyone that tries to chop it into two will find that their piece looks very boring."
  },
  {
    "id": "5a9b0b112bad9600044b6fca",
    "author": "René Descartes",
    "en": "Thus it is observable that the buildings which a single architect has planned and executed, are generally more elegant and commodious than those which several have attempted to improve."
  },
  {
    "id": "5a9b0b752bad9600044b6fcb",
    "author": "Danny Hillis",
    "en": "Computers are the most complex objects we human beings have ever created, but in a fundamental sense they are remarkably simple."
  },
  {
    "id": "5a9b0bb22bad9600044b6fcd",
    "author": "Danny Hillis",
    "en": "The magic of a computer lies in its ability to become almost anything you can imagine, as long as you can explain exactly what that is."
  },
  {
    "id": "5a9b0b9a2bad9600044b6fcc",
    "author": "Danny Hillis",
    "en": "The computer is not just an advanced calculator or camera or paintbrush; rather, it is a device that accelerates and extends our processes of thought."
  },
  {
    "id": "5a9b0bce2bad9600044b6fce",
    "author": "Danny Hillis",
    "en": "With the right programming, a computer can become a theater, a musical instrument, a reference book, a chess opponent. No other entity in the world except a human being has such an adaptable, universal nature."
  },
  {
    "id": "5a9b0c2f2bad9600044b6fcf",
    "author": "Danny Hillis",
    "en": "Anyone who has ever written a program knows that telling a computer what you want it to do is not as easy as it sounds. Every detail of the computer’s desired operation must be precisely described. For instance, if you tell an accounting program to bill your clients for the amount that each owes, then the computer will send out a weekly bill for $0.00 to clients who owe nothing."
  },
  {
    "id": "5a9b0c4b2bad9600044b6fd0",
    "author": "Danny Hillis",
    "en": "A skilled programmer is like a poet who can put into words those ideas that others find inexpressible."
  },
  {
    "id": "5a9b0c6b2bad9600044b6fd1",
    "author": "Danny Hillis",
    "en": "Every computer language has its Shakespeares, and it is a joy to read their code. A well-written computer program possesses style, finesse, even humor—and a clarity that rivals the best prose."
  },
  {
    "id": "5a9b0c932bad9600044b6fd2",
    "author": "Danny Hillis",
    "en": "It turns out that there is no algorithm for examining a program and determining whether or not it is fatally infected with an endless loop. Moreover, it’s not that no one has yet discovered such an algorithm; rather, no such algorithm is possible."
  },
  {
    "id": "5a9b0cc62bad9600044b6fd3",
    "author": "Danny Hillis",
    "en": "The class of problems that are computable by a digital computer apparently includes every problem that is computable by any kind of device."
  },
  {
    "id": "5a9b0d662bad9600044b6fd5",
    "author": "Hal Abelson",
    "en": "The programs we use to conjure processes are like a sorcerer's spells. They are carefully composed from symbolic expressions in arcane and esoteric programming languages that prescribe the tasks we want our processes to perform."
  },
  {
    "id": "5a9b10db2bad9600044b6fd7",
    "author": "Fred Brooks",
    "en": "Human beings are not accustomed to being perfect, and few areas of human activity demand it. Adjusting to the requirement for perfection is, I think, the most difficult part of learning to program."
  },
  {
    "id": "5a9b131f2bad9600044b6fd9",
    "author": "Fred Brooks",
    "en": "Because of optimism, we usually expect the number of bugs to be smaller than it turns out to be. Therefore testing is usually the most mis-scheduled part of programming."
  },
  {
    "id": "5a9b0d9c2bad9600044b6fd6",
    "author": "Danny Hillis",
    "en": "One of the greatest joys in computer programming is discovering a new, faster, more efficient algorithm for doing something — particularly if a lot of well-respected people have come up with worse solutions."
  },
  {
    "id": "5a9b13442bad9600044b6fda",
    "author": "Fred Brooks",
    "en": "False scheduling to match the patron's desired date is much more common in our discipline than elsewhere in engineering."
  },
  {
    "id": "5a9b14c12bad9600044b6fdb",
    "author": "Robert L. Glass",
    "en": "The best programmers are up to 28 times better than the worst programmers, according to “individual differences” research. Given that their pay is never commensurate, they are the biggest bargains in the software field."
  },
  {
    "id": "5a9b154e2bad9600044b6fdc",
    "author": "Fred Brooks",
    "en": "Sackman, Erickson, and Grant were measuring performance of a group of experienced programmers. Within just this group the ratios between the best and worst performances averaged about 10:1 on productivity measurements and an amazing 5:1 on program speed and space measurements!"
  },
  {
    "id": "5a9b15cb2bad9600044b6fdd",
    "author": "Fred Brooks",
    "en": "Conceptual integrity is the most important consideration in system design. It is better to have a system omit certain anomalous features and improvements, but to reflect one set of design ideas, than to have one that contains many good but independent and uncoordinated ideas."
  },
  {
    "id": "5a9b15e52bad9600044b6fde",
    "author": "Fred Brooks",
    "en": "The separation of architectural effort from implementation is a very powerful way of getting conceptual integrity on very large projects."
  },
  {
    "id": "5a9b16122bad9600044b6fdf",
    "author": "Fred Brooks",
    "en": "The general tendency is to over-design the second system, using all the ideas and frills that were cautiously sidetracked on the first one."
  },
  {
    "id": "5a9b16922bad9600044b6fe2",
    "author": "Fred Brooks",
    "en": "The management question, therefore, is not whether to build a pilot system and throw it away. You will do that. The only question is whether to plan in advance to build a throwaway, or to promise to deliver the throwaway to customers."
  },
  {
    "id": "5a9b17542bad9600044b6fe4",
    "author": "Fred Brooks",
    "en": "Program building is an entropy-decreasing process, hence inherently metastable. Program maintenance is an entropy-increasing process, and even its most skillful execution only delays the subsidence of the system into unfixable obsolescence."
  },
  {
    "id": "5a9b16792bad9600044b6fe1",
    "author": "Fred Brooks",
    "en": "Chemical engineers learned long ago that a process that works in the laboratory cannot be implemented in a factory in only one step."
  },
  {
    "id": "5a9b17f92bad9600044b6fe7",
    "author": "Fred Brooks",
    "en": "First, we must observe that the anomaly is not that software progress is so slow but that computer hardware progress is so fast. No other technology since civilization began has seen six orders of magnitude price-performance gain in 30 years."
  },
  {
    "id": "5a9b17a22bad9600044b6fe6",
    "author": "Fred Brooks",
    "en": "Coding is \"90 percent finished\" for half of the total coding time. Debugging is \"99 percent complete\" most of the time."
  },
  {
    "id": "5a9b18102bad9600044b6fe8",
    "author": "Fred Brooks",
    "en": "The complexity of software is an essential property, not an accidental one. Hence descriptions of a software entity that abstract away its complexity often abstract away its essence."
  },
  {
    "id": "5a9b189c2bad9600044b6fea",
    "author": "Fred Brooks",
    "en": "Study after study shows that the very best designers produce structures that are faster, smaller, simpler, cleaner, and produced with less effort. The differences between the great and the average approach an order of magnitude."
  },
  {
    "id": "5a9b18d52bad9600044b6fec",
    "author": "Fred Brooks",
    "en": "A programming systems product takes about nine times as much effort as the component programs written separately for private use."
  },
  {
    "id": "5a9b190a2bad9600044b6fed",
    "author": "Fred Brooks",
    "en": "My rule of thumb is 1/3 of the schedule for design, 1/6 for coding, 1/4 for component testing, and 1/4 for system testing."
  },
  {
    "id": "5a9b18bf2bad9600044b6feb",
    "author": "Fred Brooks",
    "en": "First, my wife, my colleagues, and my editors find me to err far more often in optimism than in pessimism. I am, after all, a programmer by background, and optimism is an occupational disease of our craft."
  },
  {
    "id": "5a9b19232bad9600044b6fee",
    "author": "Fred Brooks",
    "en": "Because we are uncertain about our scheduling estimates, we often lack the courage to defend them stubbornly against management and customer pressure."
  },
  {
    "id": "5a9b19422bad9600044b6fef",
    "author": "Fred Brooks",
    "en": "Adding people to a software project increases the total effort necessary in three ways: the work and disruption of repartitioning itself, training the new people, and added intercommunication."
  },
  {
    "id": "5a9b195a2bad9600044b6ff0",
    "author": "Fred Brooks",
    "en": "Very good professional programmers are ten times as productive as poor ones, at same training and two-year experience level."
  },
  {
    "id": "5a9b198a2bad9600044b6ff2",
    "author": "Fred Brooks",
    "en": "Programming increases goes as a power of program size."
  },
  {
    "id": "5a9b1abf2bad9600044b6ff7",
    "author": "Daniel T. Barry",
    "en": "Various studies indicate that the optimal team size is between 2 and 5, with 3 being the mode. With more than 5 team members, team management begins to dominate the work."
  },
  {
    "id": "5a9b1ce02bad9600044b6ff8",
    "author": "Daniel T. Barry",
    "en": "A stupid error is an algorithmically avoidable error. Mainly, you are stupid if you let an error that a program can detect go undetected."
  },
  {
    "id": "5a9b19dd2bad9600044b6ff4",
    "author": "Fred Brooks",
    "en": "All repairs tend to destroy structure, to increase the entropy and disorder of a system."
  },
  {
    "id": "5a9b1d7d2bad9600044b6ffa",
    "author": "Thomas J. Watson",
    "en": "I think there is a world market for maybe five\ncomputers."
  },
  {
    "id": "5a9b1e082bad9600044b6ffb",
    "author": "Ken Olsen",
    "en": "There is no reason anyone would want a computer in their home."
  },
  {
    "id": "5a9b1eb02bad9600044b6ffc",
    "author": "Michael A. Jackson",
    "en": "The beginning of wisdom for a programmer is to recognize the difference between getting his program to work and getting it right."
  },
  {
    "id": "5a9b1ece2bad9600044b6ffd",
    "author": "Michael A. Jackson",
    "en": "Two things are known about requirements:\n1. They will change!\n2. They will be misunderstood!"
  },
  {
    "id": "5a9b1f362bad9600044b6fff",
    "author": "Daniel T. Barry",
    "en": "Every time you improve process, work becomes harder."
  },
  {
    "id": "5a9b1f592bad9600044b7000",
    "author": "Daniel T. Barry",
    "en": "There is never enough time to do it right, but there is always enough time to fix it or to do it over."
  },
  {
    "id": "5a8e9be284a8f2000482568c",
    "author": "Rich Skrenta",
    "en": "The more code you have, the more places there are for bugs to hide."
  },
  {
    "id": "5a97f062ccdfe50004febf36",
    "author": "Gerald Weinberg",
    "en": "If builders built houses the way programmers built programs, the first woodpecker to come along would destroy civilization."
  },
  {
    "id": "5a9aa1db2bad9600044b6fb9",
    "author": "Terry Winograd",
    "en": "The techniques of artificial intelligence are to the mind what bureaucracy is to human social interaction."
  },
  {
    "id": "5a9b1f692bad9600044b7001",
    "author": "Daniel T. Barry",
    "en": "Code is expensive to change, but design is cheaper to change, and requirements are even cheaper to change."
  },
  {
    "id": "5a9b1f822bad9600044b7002",
    "author": "Daniel T. Barry",
    "en": "The cost to repair an error goes up dramatically as project moves towards completion and beyond."
  },
  {
    "id": "5a9b1f252bad9600044b6ffe",
    "author": "Daniel T. Barry",
    "en": "A team of highly competent programmers who are also highly territorial, egotistical politicians will fail while a team of equally competent programmers, who are also egoless, cooperative, team players will succeed."
  },
  {
    "id": "5a9b203c2bad9600044b7004",
    "author": "Daniel T. Barry",
    "en": "For most software, efficiency just does not matter."
  },
  {
    "id": "5a9b214b2bad9600044b7005",
    "author": "Harlan Mills",
    "en": "The best way to know that you have found the last bug is never to find the first bug."
  },
  {
    "id": "5a9b21cb2bad9600044b7008",
    "author": "Harlan Mills",
    "en": "An interactive debugger is an outstanding example of what is not needed - it encourages trial-and-error hacking rather than systematic design, and also hides marginal people barely qualified for precision programming."
  },
  {
    "id": "5a9b22a02bad9600044b7009",
    "author": "Daniel T. Barry",
    "en": "Thoroughly testing a program is impossible (requires unbounded number of test cases); so try to choose test cases that will expose all errors. That’s very difficult, especially since we do not know what all the errors are, and if we did, we would not need the test cases!"
  },
  {
    "id": "5a9b21a12bad9600044b7007",
    "author": "Harlan Mills",
    "en": "The only way for errors to occur in a program is by being put there by the author. No other mechanisms are known."
  },
  {
    "id": "5a9b22c72bad9600044b700b",
    "author": "Daniel T. Barry",
    "en": "Reliable computations are obtainable from buggy programs, which after all, are the only kind of programs there are."
  },
  {
    "id": "5a9b22ed2bad9600044b700c",
    "author": "David Parnas",
    "en": "I can build a reliable system with thousands of bugs, if you let me choose my bugs carefully."
  },
  {
    "id": "5a9b231d2bad9600044b700d",
    "author": "Daniel T. Barry",
    "en": "Ed Adams of IBM found that 80% of the reliability problems are caused by only 2% of the defects."
  },
  {
    "id": "5a9b23502bad9600044b700e",
    "author": "Jim Horning",
    "en": "Hardware is the part you can replace. Software is the part you have to keep, because it’s so expensive and nobody understands it any more."
  },
  {
    "id": "5a9b23dc2bad9600044b7011",
    "author": "Daniel T. Barry",
    "en": "Any technological or managerial scheme to force documentation can be subverted by unwilling programmers."
  },
  {
    "id": "5a9b23b02bad9600044b700f",
    "author": "Jim Horning",
    "en": "Good judgement comes from experience. Experience comes from bad judgement."
  },
  {
    "id": "5a9c649eff6af300049e6b59",
    "author": "John McCarthy (computer scientist)",
    "en": "Machines as simple as thermostats can be said to have beliefs."
  },
  {
    "id": "5a9b253f2bad9600044b7016",
    "author": "Tony Parisi (software developer)",
    "en": "A framework can provide 90% of the features we need quickly — giving us a false sense of confidence early in the development cycle — and then be frustratingly hard when it comes to implementing the last 10%."
  },
  {
    "id": "5a9c6502ff6af300049e6b5a",
    "author": "John McCarthy (computer scientist)",
    "en": "Mental qualities peculiar to human-like motivational structures, such as love and hate, will not be required for intelligent behavior, but we could probably program computers to exhibit them if we wanted to."
  },
  {
    "id": "5a9d2f8c607c5100044dff77",
    "author": "Richard Stallman",
    "en": "I have met bright students in computer science who have never seen the source code of a large program. They may be good at writing small programs, but they can't begin to learn the different skills of writing large ones if they can't see how others have done it."
  },
  {
    "id": "5a9c65d6ff6af300049e6b5b",
    "author": "John McCarthy (computer scientist)",
    "en": "Program designers have a tendency to think of the users as idiots who need to be controlled. They should rather think of their program as a servant, whose master, the user, should be able to control it."
  },
  {
    "id": "5a9d3007607c5100044dff79",
    "author": "Richard Stallman",
    "en": "In fact, in the 1980s I often came across newly graduated computer science majors who had never seen a real program in their lives. They had only seen toy exercises, school exercises, because every real program was a trade secret."
  },
  {
    "id": "5a9d31fa607c5100044dff7c",
    "author": "Richard Stallman",
    "en": "I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code."
  },
  {
    "id": "5a9d2eb2607c5100044dff75",
    "author": "Richard Stallman",
    "en": "I consider that the golden rule requires that if I like a program I must share it with other people who like it. Software sellers want to divide the users and conquer them, making each user agree not to share with others. I refuse to break solidarity with other users in this way."
  },
  {
    "id": "5a9d33ae607c5100044dff7d",
    "author": "Richard Stallman",
    "en": "The free software community rejects the “priesthood of technology”, which keeps the general public in ignorance of how technology works; we encourage students of any age and situation to read the source code and learn as much as they want to know."
  },
  {
    "id": "5a9d3532607c5100044dff7e",
    "author": "Richard Stallman",
    "en": "The most powerful programming language is Lisp. If you don't know Lisp (or its variant, Scheme), you don't know what it means for a programming language to be powerful and elegant. Once you learn Lisp, you will understand what is lacking in most other languages."
  },
  {
    "id": "5a9d36a4607c5100044dff7f",
    "author": "Richard Stallman",
    "en": "Programming is programming. If you get good at programming, it doesn't matter which language you learned it in, because you'll be able to do programming in any language."
  },
  {
    "id": "5a9dc5de6744730004f6a1e6",
    "author": "Maurice Wilkes",
    "en": "It was on one of my journeys between the EDSAC room and the punching equipment the realization came over me with full force that a good part of the remainder of my life was going to be spent in finding errors in my own programs."
  },
  {
    "id": "5a9dc65d6744730004f6a1e8",
    "author": "Maurice Wilkes",
    "en": "Since 1954, the raw speed of computers, as measured by the time it takes to do an addition, increased by a factor of 10,000. That means an algorithm that once took 10 minutes to perform can now be done 15 times a second."
  },
  {
    "id": "5a9dc8e76744730004f6a1e9",
    "author": "Richard Hamming",
    "en": "Typing is no substitute for thinking."
  },
  {
    "id": "5a9d530a1a29250004e946df",
    "author": "Donald Knuth",
    "en": "A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better."
  },
  {
    "id": "5a9dc9c26744730004f6a1ea",
    "author": "Richard Hamming",
    "en": "Perhaps the central problem we face in all of computer science is how we are to get to the situation where we build on top of the work of others rather than redoing so much of it in a trivially different way."
  },
  {
    "id": "5a9dcace6744730004f6a1eb",
    "author": "Richard Hamming",
    "en": "Any unwillingness to learn mathematics today can greatly restrict your possibilities tomorrow."
  },
  {
    "id": "5aa28cf31dcf530004c4bf64",
    "author": "Charles Simonyi",
    "en": "Really good programs live forever."
  },
  {
    "id": "5a9dccdd6744730004f6a1ec",
    "author": "Richard Hamming",
    "en": "In science if you know what you are doing you should not be doing it. In engineering if you do not know what you are doing you should not be doing it."
  },
  {
    "id": "5aa28d721dcf530004c4bf65",
    "author": "Butler Lampson",
    "en": "In handling resources, strive to avoid disaster rather than to attain an optimum."
  },
  {
    "id": "5aa28ea11dcf530004c4bf67",
    "author": "John Warnock",
    "en": "As with most projects, the last two percent takes fifty percent of the time."
  },
  {
    "id": "5aa299fbe7e86700048f0279",
    "author": "Gary Kildall",
    "en": "It's fun to sit at a terminal and let the code flow. It sounds strange, but it just comes out my brain; once I'm started, I don't have to think about it."
  },
  {
    "id": "5aa29b16e7e86700048f027a",
    "author": "Gary Kildall",
    "en": "I think programming is very much a religious experience for a lot of people."
  },
  {
    "id": "5aa28c251dcf530004c4bf63",
    "author": "Charles Simonyi",
    "en": "What is programming? Some people call it a science, some people call it an art, some people call it a skill. I think it has aspects of all three."
  },
  {
    "id": "5aa29bfee7e86700048f027b",
    "author": "Bill Gates",
    "en": "If you ever talk to a great programmer, you'll find he knows his tools like an artist knows his paintbrushes."
  },
  {
    "id": "5aa29c76e7e86700048f027c",
    "author": "Bill Gates",
    "en": "Our goals are very simple. We're going to create the software that puts a computer on every desk and in every home."
  },
  {
    "id": "5aa2a019e7e86700048f027f",
    "author": "Dan Bricklin",
    "en": "The most important part of writing a program is designing the data structures."
  },
  {
    "id": "5aa2a0ace7e86700048f0280",
    "author": "Bob Frankston",
    "en": "Ideas don't disappear. They change form, they merge with other ideas."
  },
  {
    "id": "5aa2a355e7e86700048f0284",
    "author": "Peter Roizen",
    "en": "I care not only what the code says but how it looks."
  },
  {
    "id": "5aa2a2f1e7e86700048f0283",
    "author": "Ray Ozzie",
    "en": "Programming is the ultimate field for someone who likes to tinker."
  },
  {
    "id": "5aa2a3fde7e86700048f0286",
    "author": "Bob Carr",
    "en": "Programming can be addictive."
  },
  {
    "id": "5aa2a3b3e7e86700048f0285",
    "author": "Bob Carr",
    "en": "From an artistic standpoint, the best software comes from the realm of intuition."
  },
  {
    "id": "5aa2a602e7e86700048f0287",
    "author": "Andy Hertzfeld",
    "en": "Then Apple went public toward the end of 1980. All of a sudden, all these people I was working with were millionaires."
  },
  {
    "id": "5aa2a68ce7e86700048f0288",
    "author": "Toru Iwatani",
    "en": "I'm interested in creating images that communicate with people."
  },
  {
    "id": "5aa31172bb93c00004d9a6f6",
    "author": "Charles Simonyi",
    "en": "I think the best way to supervise is by personal example and by frequent code reviews."
  },
  {
    "id": "5aa3181fbb93c00004d9a6f8",
    "author": "Butler Lampson",
    "en": "There are some basic techniques to control complexity. Fundamentally, I divide and conquer, break things down, and try to write reasonably precise descriptions of what each piece is supposed to do."
  },
  {
    "id": "5aa311f9bb93c00004d9a6f7",
    "author": "Charles Simonyi",
    "en": "The efficiency of the code decreases with an increase in the number of people working on the program. The most efficient programs are written by a single person."
  },
  {
    "id": "5aa30d4abb93c00004d9a6f5",
    "author": "Charles Simonyi",
    "en": "I'll bet you that from ten feet away I can tell if a program is bad. I might not guarantee that it is good, but if it looks bad from ten feet, I can guarantee you that it wasn't written with care."
  },
  {
    "id": "5aa44e197832df00040ac9b7",
    "author": "Butler Lampson",
    "en": "Nobody knows how to build really complicated hardware systems, so designing hardware tends to be simpler. Software is much more complicated."
  },
  {
    "id": "5aa4511b7832df00040ac9b8",
    "author": "Butler Lampson",
    "en": "A beautiful program is like a beautiful theorem: It does the job elegantly."
  },
  {
    "id": "5aa456667832df00040ac9b9",
    "author": "John Warnock",
    "en": "To be successful, you want to surround yourself with very talented folks whose skills blend very well. That’s the secret of success."
  },
  {
    "id": "5aa459d77832df00040ac9bc",
    "author": "Gary Kildall",
    "en": "I start with drawing the data structures, and I spend a lot of time thinking about them. I also think about what the program has to go through before I start writing code."
  },
  {
    "id": "5aa456d87832df00040ac9ba",
    "author": "John Warnock",
    "en": "Don’t go into a two-year development with nothing coming out in the middle. Have something come out every two months, so you can evaluate, regroup, and restart."
  },
  {
    "id": "5aa459767832df00040ac9bb",
    "author": "Gary Kildall",
    "en": "If you learn how to solve problems, you can go through life and do pretty well."
  },
  {
    "id": "5aa45f317832df00040ac9c0",
    "author": "Bill Gates",
    "en": "A great programmer thinks about the program on a constant basis, whether driving or eating. That method takes an incredible amount of mental energy."
  },
  {
    "id": "5aa4601c7832df00040ac9c1",
    "author": "Bill Gates",
    "en": "The really great programs I've written have all been ones that I have thought about for a huge amount of time before I ever wrote them."
  },
  {
    "id": "5aa461667832df00040ac9c2",
    "author": "Bill Gates",
    "en": "There is an amazing commonality in the types of difficulties you run into. In design reviews, I really enjoy being able to provide advice, based on programs that I have done."
  },
  {
    "id": "5a9b16b92bad9600044b6fe3",
    "author": "Fred Brooks",
    "en": "The fundamental problem with program maintenance is that fixing a defect has a substantial (20-50 percent) chance of introducing another. So the whole process is two steps forward and one step back."
  },
  {
    "id": "5aa5c874d1481c4acc43aa71",
    "author": "Addy Osmani",
    "en": "Really care about the tools you use because they are what make you your best."
  },
  {
    "id": "5aa63f3a42fbc6000481ca0d",
    "author": "Michael Hawley",
    "en": "What I like about programming is that it really helps you think about how we communicate, how we think, how logic works, how creative arts work."
  },
  {
    "id": "5aa6de2101c2c400048eb9a8",
    "author": "Douglas Crockford",
    "en": "One of the things I’ve been pushing is code reading. I think that is the most useful thing that a community of programmers can do for each other—spend time on a regular basis reading each other’s code."
  },
  {
    "id": "5aa6dd2101c2c400048eb9a7",
    "author": "Douglas Crockford",
    "en": "I think the best way to make JavaScript better would be to\nmake it smaller. If we could just get it down to what it does really well and remove the features that add little or no value, it’s actually a better language."
  },
  {
    "id": "5aa6e0d101c2c400048eb9a9",
    "author": "Douglas Crockford",
    "en": "Readability of code is now my first priority. It’s more important than being fast, almost as important as being correct, but I think being readable is actually the most likely way of making it correct."
  },
  {
    "id": "5aa6e37801c2c400048eb9aa",
    "author": "Douglas Crockford",
    "en": "Part of what makes programming difficult is most of the time we’re doing stuff we’ve never done before."
  },
  {
    "id": "5aa6e8ac01c2c400048eb9ab",
    "author": "Douglas Crockford",
    "en": "I think of myself as a writer. Sometimes I write in English and sometimes I write in JavaScript."
  },
  {
    "id": "5aa63e0642fbc6000481ca0c",
    "author": "Jaron Lanier",
    "en": "People should be able to speak and breathe programs just like they talk now."
  },
  {
    "id": "5aa9a89904c8cd0004d472c4",
    "author": "Joe Armstrong (programmer)",
    "en": "If you start removing things, if you get to the point where if you were to remove anything more it would not work any more — at this point it is beautiful."
  },
  {
    "id": "5aa8307a94bd610da89b3340",
    "author": "Buckminster Fuller",
    "en": "Humanity is acquiring all the right technology for all the wrong reasons."
  },
  {
    "id": "5aa9aa9f04c8cd0004d472c5",
    "author": "Simon Peyton Jones",
    "en": "I characterize functional programming as a radical and elegant attack on the whole enterprise of writing programs."
  },
  {
    "id": "5aab9d9617c21b0004913edc",
    "author": "Marijn Haverbeke",
    "en": "Size almost always involves complexity, and complexity confuses programmers. Confused programmers, in turn, introduce mistakes (bugs) into programs."
  },
  {
    "id": "5aab9ade17c21b0004913edb",
    "author": "Marijn Haverbeke",
    "en": "Flaws in computer programs are usually called bugs. It makes programmers feel good to imagine them as little things that just happen to crawl into our work. In reality, of course, we put them there ourselves."
  },
  {
    "id": "5aac2850c2138a00046e9183",
    "author": "L. Peter Deutsch",
    "en": "When I was at what I would consider the peak of my abilities, I had extremely trustworthy intuition. I would do things and they would just turn out right."
  },
  {
    "id": "5aac2af1c2138a00046e9185",
    "author": "L. Peter Deutsch",
    "en": "Every now and then I feel a temptation to design a programming language but then I just lie down until it goes away."
  },
  {
    "id": "5aac2cf9c2138a00046e9186",
    "author": "L. Peter Deutsch",
    "en": "Language systems stand on a tripod. There’s the language, there’s the libraries, and there are the tools. And how successful a language is depends on a complex interaction between those three things."
  },
  {
    "id": "5aac29e1c2138a00046e9184",
    "author": "L. Peter Deutsch",
    "en": "I would make a strong case that programming languages have not improved qualitatively in the last 40 years. There is no programming language in use today that is qualitatively better than Simula-67."
  },
  {
    "id": "5aac303cc2138a00046e9188",
    "author": "Gottfried Wilhelm Leibniz",
    "en": "Instead of the progression of tens, I have for many years used the simplest progression of all, which proceeds by twos, having found that it is useful for the perfection of the science of numbers."
  },
  {
    "id": "5aac2e8fc2138a00046e9187",
    "author": "L. Peter Deutsch",
    "en": "I never in my wildest dreams would have predicted the evolution of the Internet. And I never would’ve predicted the degree to which corporate influence over the Internet has changed its character over time."
  },
  {
    "id": "5aac3a57610d7d0004066303",
    "author": "Ken Thompson",
    "en": "I’ve never been a lover of existing code. Code by itself almost rots and it’s gotta be rewritten. Even when nothing has changed, for some reason it rots."
  },
  {
    "id": "5aac39b1610d7d0004066302",
    "author": "Ken Thompson",
    "en": "Modern programming scares me in many respects. It confuses me to read a program which you must read top-down. It says “do something.” And you go find “something.” And you read it and it says, “do something else” and you go find something and it says, “do something else” and it goes back to the top maybe. And nothing gets done. It’s just relegating the problem to a deeper and deeper level."
  },
  {
    "id": "5aa9a7b304c8cd0004d472c3",
    "author": "Richard Hamming",
    "en": "I always spend a day a week learning new stuff. That means I spend 20% more of my time than my colleagues learning new stuff. Now 20% at compound interest means that after four and a half years I will know twice as much as them."
  },
  {
    "id": "5aad68d17632ba0004ec84ae",
    "author": "Donald Knuth",
    "en": "I’ll use dirty tricks for two reasons. One is, if it’s really going to give me a performance improvement. Or sometimes just for pure pleasure. In any case, I document it; I don’t just put it in there."
  },
  {
    "id": "5aac3aa3610d7d0004066304",
    "author": "Ken Thompson",
    "en": "I’ll throw away code as soon I want to add something to it and I get the feeling that what I have to do to add it is too hard."
  },
  {
    "id": "5aad69767632ba0004ec84af",
    "author": "Donald Knuth",
    "en": "The problem is that coding isn’t fun if all you can do is call things out of a library, if you can’t write the library yourself."
  },
  {
    "id": "5aad6d0d7632ba0004ec84b0",
    "author": "Donald Knuth",
    "en": "I make mistakes because I’m always operating at my limit. If I only stay in comfortable territory all the time, that’s not so much fun."
  },
  {
    "id": "5aad6dfa7632ba0004ec84b1",
    "author": "Donald Knuth",
    "en": "I’ve got this need to program. I wake up in the morning with sentences of a literate program. Before breakfast — I’m sure poets must feel this — I have to go to the computer and write this paragraph and then I can eat and I’m happy."
  },
  {
    "id": "5aad71337632ba0004ec84b2",
    "author": "Donald Knuth",
    "en": "The more varieties of different kinds of notations are still useful — don’t only read the people who code like you."
  },
  {
    "id": "5ab6e0d632a9950004a2efc2",
    "author": "Ted Nelson",
    "en": "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do."
  },
  {
    "id": "5aa6e99001c2c400048eb9ac",
    "author": "Douglas Crockford",
    "en": "Mathematics is important in programming, but it’s just one of a lot of things that are important. If you overemphasize the math then you underemphasize stuff which might be even more important, such as literacy."
  },
  {
    "id": "5aac3b37610d7d0004066305",
    "author": "Ken Thompson",
    "en": "Documenting is very, very hard; it’s time-consuming. To do it right, you’ve got to do it like programming. You’ve got to deconstruct it, put it together in nice ways, rewrite it when it’s wrong. People don’t do that."
  },
  {
    "id": "5ab6e20132a9950004a2efc6",
    "author": "Ted Nelson",
    "en": "Making things easy is hard."
  },
  {
    "id": "5ab6e9e132a9950004a2efc7",
    "author": "Richard Moore (engineer)",
    "en": "The difference between theory and practice is that in theory, there is no difference between theory and practice."
  },
  {
    "id": "5ab6ea2a32a9950004a2efc8",
    "author": "Jim Coplien",
    "en": "You should name a variable using the same care with which you name a first-born child."
  },
  {
    "id": "5acca81fe01bb40004668819",
    "author": "Robert C. Martin",
    "en": "The ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code."
  },
  {
    "id": "5b579bb420e9780004ba9ac3",
    "author": "Kyle Simpson",
    "en": "There's nothing more permanent than a temporary hack."
  },
  {
    "id": "5b6d73d6b3f09f0004d9275f",
    "author": "Gottfried Wilhelm Leibniz",
    "en": "As numbers are reduced to the simplest principles, like 0 and 1, a wonderful order is apparent throughout."
  },
  {
    "id": "5ab6e1ad32a9950004a2efc4",
    "author": "Ted Nelson",
    "en": "In my second year in graduate school, I took a computer course and that was like lightening striking."
  },
  {
    "id": "5ab6e13932a9950004a2efc3",
    "author": "Ted Nelson",
    "en": "They were saying computers deal with numbers. This was absolutely nonsense. Computers deal with arbitrary information of any kind."
  },
  {
    "id": "5ab6e1dd32a9950004a2efc5",
    "author": "Ted Nelson",
    "en": "Right now you are a prisoner of each application you use. You have only the options that were given you by the developer of that application."
  },
  {
    "id": "5a6ce86f2af929789500e83d",
    "author": "Ray Ozzie",
    "en": "Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges and it causes end-user and administrator frustration."
  },
  {
    "id": "5a6ce8702af929789500e882",
    "author": "Niklaus Wirth",
    "en": "Software gets slower faster than hardware gets faster."
  },
  {
    "id": "5a6ce8702af929789500e89e",
    "author": "David Parnas",
    "en": "A computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match."
  },
  {
    "id": "5a6ce8702af929789500e8c4",
    "author": "Anonymous",
    "en": "A few months writing code can save you a few hours in design."
  },
  {
    "id": "5a72f8251ac5f022282e4125",
    "author": "Edsger W. Dijkstra",
    "en": "Are you quite sure that all those bells and whistles, all those wonderful facilities of your so called powerful programming languages, belong to the solution set rather than the problem set?"
  },
  {
    "id": "5a91e3a1c4240c0004265956",
    "author": "John von Neumann",
    "en": "If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is."
  },
  {
    "id": "5a933a408e7b510004cba4bb",
    "author": "Bjarne Stroustrup",
    "en": "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off."
  },
  {
    "id": "5a933a668e7b510004cba4bc",
    "author": "Bjarne Stroustrup",
    "en": "If you think it's simple, then you have misunderstood the problem."
  },
  {
    "id": "5a9342458e7b510004cba4c7",
    "author": "Rob Pike",
    "en": "Object-oriented design is the roman numerals of computing."
  },
  {
    "id": "5a93d61c6a584e0004a4a613",
    "author": "Steve Jobs",
    "en": "It is hard to think that a $2 billion company with 4,300-plus people couldn't compete with six people in blue jeans."
  },
  {
    "id": "5a93ffbae49ad10004edb861",
    "author": "Jamie Zawinski",
    "en": "Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems."
  },
  {
    "id": "5a943255ee7ed5000496b17c",
    "author": "Bill Gates",
    "en": "Sometimes we do get taken by surprise. For example, when the Internet came along, we had it as a fifth or sixth priority."
  },
  {
    "id": "5a9432f0ee7ed5000496b180",
    "author": "Ward Cunningham",
    "en": "It was a turning point in my programming career when I realized that I didn't have to win every argument."
  },
  {
    "id": "5a9435b6ee7ed5000496b18f",
    "author": "Vint Cerf",
    "en": "And programming computers was so fascinating. You create your own little universe, and then it does what you tell it to do."
  },
  {
    "id": "5a943552ee7ed5000496b18d",
    "author": "Joshua Bloch",
    "en": "The cleaner and nicer the program, the faster it's going to run. And if it doesn't, it'll be easy to make it fast."
  },
  {
    "id": "5a9436dcee7ed5000496b194",
    "author": "Philip Greenspun",
    "en": "SQL, Lisp, and Haskell are the only programming languages that I've seen where one spends more time thinking than typing."
  },
  {
    "id": "5a95a610cb1a4d0004b2987e",
    "author": "Alan Perlis",
    "en": "It is better to have 100 functions operate on one data structure than to have 10 functions operate on 10 data structures."
  },
  {
    "id": "5a95d1077700780004d51db9",
    "author": "Brian Kernighan",
    "en": "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements."
  },
  {
    "id": "5a95d7637700780004d51dc5",
    "author": "Marvin Minsky",
    "en": "Computer languages of the future will be more concerned with goals and less with procedures specified by the programmer."
  },
  {
    "id": "5a95fe167700780004d51dcd",
    "author": "Alan Turing",
    "en": "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human."
  },
  {
    "id": "5a96be3ed6959500047aecbd",
    "author": "Joseph Yoder (computer scientist)",
    "en": "The way to arrest entropy in software is to refactor it."
  },
  {
    "id": "5a96bf21d6959500047aecc0",
    "author": "Joseph Yoder (computer scientist)",
    "en": "Reviews and pair programming provide programmers with something their work would not otherwise have: an audience. Sunlight, it is said is a powerful disinfectant. An immediate audience of one's peers provides immediate incentives to programmers to keep their code clear and comprehensible, as well as functional."
  },
  {
    "id": "5a97f2c0ccdfe50004febf38",
    "author": "John Romero",
    "en": "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity."
  },
  {
    "id": "5a97f4c5ccdfe50004febf3c",
    "author": "Douglas Crockford",
    "en": "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it."
  },
  {
    "id": "5a9808951878b40004879f61",
    "author": "Addy Osmani",
    "en": "Be humble, communicate clearly, and respect others. It costs nothing to be kind, but the impact is priceless."
  },
  {
    "id": "5a9808dc1878b40004879f63",
    "author": "Pete Cordell",
    "en": "Telling a programmer there's already a library to do X is like telling a songwriter there's already a song about love."
  },
  {
    "id": "5a980f551878b40004879f68",
    "author": "Stan Kelly-Bootle",
    "en": "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration."
  },
  {
    "id": "5a985fd2e93441000489b94d",
    "author": "Edsger W. Dijkstra",
    "en": "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise."
  },
  {
    "id": "5a9a9e792bad9600044b6fb5",
    "author": "Elon Musk",
    "en": "There certainly will be job disruption. Because what's going to happen is robots will be able to do everything better than us."
  },
  {
    "id": "5a9860dbe93441000489b950",
    "author": "John Carmack",
    "en": "Sometimes, the elegant implementation is a function. Not a method. Not a class. Not a framework. Just a function."
  },
  {
    "id": "5a9aa0f72bad9600044b6fb8",
    "author": "Marvin Minsky",
    "en": "Artificial intelligence is the science of making machines do things that would require intelligence if done by men."
  },
  {
    "id": "5a9aaf682bad9600044b6fbb",
    "author": "Tim Berners-Lee",
    "en": "I just had to take the hypertext idea and connect it to the TCP and DNS ideas and — ta-da!— the World Wide Web."
  },
  {
    "id": "5a9b0d552bad9600044b6fd4",
    "author": "Hal Abelson",
    "en": "A computational process is indeed much like a sorcerer's idea of a spirit. It cannot be seen or touched. It is not composed of matter at all. However, it is very real. It can perform intellectual work. It can answer questions. It can affect the world by disbursing money at a bank or by controlling a robot arm in a factory."
  },
  {
    "id": "5a9b17792bad9600044b6fe5",
    "author": "Fred Brooks",
    "en": "One must assume that there will be lots of bugs, and plan an orderly procedure for snaking them out."
  },
  {
    "id": "5a9b19662bad9600044b6ff1",
    "author": "Fred Brooks",
    "en": "To achieve conceptual integrity, a design must proceed from one mind or a small group of agreeing minds."
  },
  {
    "id": "5a9b1d152bad9600044b6ff9",
    "author": "Tom DeMarco",
    "en": "The very best technology never has as much impact as girlfriend or boyfriend trouble."
  },
  {
    "id": "5a9b19952bad9600044b6ff3",
    "author": "Fred Brooks",
    "en": "Maintenance cost is strongly affected by the number of users. More users find more bugs."
  },
  {
    "id": "5a9b1f8c2bad9600044b7003",
    "author": "Daniel T. Barry",
    "en": "Most errors are introduced during requirements specification!"
  },
  {
    "id": "5a9b21892bad9600044b7006",
    "author": "Harlan Mills",
    "en": "Programming is similar to a game of golf. The point is not getting the ball in the hole but how many strokes it takes."
  },
  {
    "id": "5a9b22b42bad9600044b700a",
    "author": "Daniel T. Barry",
    "en": "A number of studies have shown testing not very effective at finding bugs."
  },
  {
    "id": "5a9b23cd2bad9600044b7010",
    "author": "Daniel T. Barry",
    "en": "The key to keeping software costs down is to write code that is easily modified."
  },
  {
    "id": "5a9b24492bad9600044b7014",
    "author": "Daniel T. Barry",
    "en": "The notions of correctness in mathematics and programs are different. A mathematical model must be consistent; it need not match reality (be correct), and it need not be complete (in the formal sense). A program model must be consistent; it must match reality; and it must be complete (in the sense that it reacts gracefully to all inputs)."
  },
  {
    "id": "5a9b23ed2bad9600044b7012",
    "author": "Daniel T. Barry",
    "en": "Programming is at least as difficult as developing a mathematical theory."
  },
  {
    "id": "5a9d2fc8607c5100044dff78",
    "author": "Richard Stallman",
    "en": "In 1971 when I joined the staff of the MIT Artificial Intelligence lab, all of us who helped develop the operating system software, we called ourselves hackers. We were not breaking any laws, at least not in doing the hacking we were paid to do. We were developing software and we were having fun. Hacking refers to the spirit of fun in which we were developing software."
  },
  {
    "id": "5a9dc6316744730004f6a1e7",
    "author": "Maurice Wilkes",
    "en": "By June 1949 people had begun to realize that it was not so easy to get programs right as at one time appeared."
  },
  {
    "id": "5aa28dd71dcf530004c4bf66",
    "author": "Butler Lampson",
    "en": "Everything should be made as simple as possible. But to do that you have to master complexity."
  },
  {
    "id": "5aa29df5e7e86700048f027d",
    "author": "Wayne Ratliff",
    "en": "If I had followed my heart instead of advice, dBASE would be much closer to perfection today."
  },
  {
    "id": "5aa29e43e7e86700048f027e",
    "author": "Wayne Ratliff",
    "en": "Programming is a little bit like the army. Now that I'm out, it's neat to have had the experience."
  },
  {
    "id": "5aa2a20ce7e86700048f0282",
    "author": "Jonathan Sachs",
    "en": "I don't like using any tools or programs I didn't write myself or that I don't have some control over."
  },
  {
    "id": "5aa2a15fe7e86700048f0281",
    "author": "Bob Frankston",
    "en": "If you cannot explain a program to yourself, the chance of the\ncomputer getting it right is pretty small."
  },
  {
    "id": "5aa45ab57832df00040ac9bd",
    "author": "Gary Kildall",
    "en": "I don't comment on the code itself because I feel that properly written code is very much self-documented."
  },
  {
    "id": "5aa45bcf7832df00040ac9be",
    "author": "Gary Kildall",
    "en": "When a program is clean and neat, nicely structured, and consistent, it can be beautiful."
  },
  {
    "id": "5aa6db5d01c2c400048eb9a6",
    "author": "Douglas Crockford",
    "en": "JavaScript, purely by accident, has become the most popular programming language in the world."
  },
  {
    "id": "5aac2669c2138a00046e9182",
    "author": "L. Peter Deutsch",
    "en": "Software is a discipline of detail, and that is a deep, horrendous fundamental problem with software."
  },
  {
    "id": "5aac309cc2138a00046e9189",
    "author": "Gottfried Wilhelm Leibniz",
    "en": "Even in the games of children there are things to interest the greatest mathematician."
  }
],

"riddles": [
  { "question": "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", "answer": "An echo" },
  { "question": "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy." , "answer":" A Candle" },
  { "question": "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?" , "answer": "A Map" },
  { "question": "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?", "answer": "The letter 'R'" },
  { "question": "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?", "answer": "All the people were married "},
  { "question": "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?", "answer": "Heroine" }
  ]
}