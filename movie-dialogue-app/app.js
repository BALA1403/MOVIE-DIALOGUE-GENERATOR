"use strict";

const diceBtn = document.querySelector(".button-section");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".quotes");
const movieText = document.querySelector(".quote-movie"); // Select movie element

// Array of quotes
const quotes = [{
    quote: "Frankly, my dear, I don’t give a damn.",
    movie: "Gone with the Wind"
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    movie: "The Godfather"
  },
  {
    quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    movie: "On the Waterfront"
  },
  {
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    movie: "The Wizard of Oz"
  },
  {
    quote: "Here's looking at you, kid.",
    movie: "Casablanca"
  },
  {
    quote: "Go ahead, make my day.",
    movie: "Sudden Impact"
  },
  {
    quote: "All right, Mr. DeMille, I'm ready for my closeup.",
    movie: "Sunset Blvd."
  },
  {
    quote: "May the Force be with you.",
    movie: "Star Wars"
  },
  {
    quote: "Fasten your seatbelts. It's going to be a bumpy night.",
    movie: "All About Eve"
  },
  {
    quote: "You talking to me?",
    movie: "Taxi Driver"
  },
  {
    quote: "What we've got here is failure to communicate.",
    movie: "Cool Hand Luke"
  },
  {
    quote: "I love the smell of napalm in the morning.",
    movie: "Apocalypse Now"
  },
  {
    quote: "Love means never having to say you're sorry.",
    movie: "Love Story"
  },
  {
    quote: "The stuff that dreams are made of.",
    movie: "The Maltese Falcon"
  },
  {
    quote: "E.T. phone home.",
    movie: "E.T. the Extra-Terrestrial"
  },
  {
    quote: "They call me Mister Tibbs!",
    movie: "In the Heat of the Night"
  },
  {
    quote: "Rosebud.",
    movie: "Citizen Kane"
  },
  {
    quote: "Made it, Ma! Top of the world!",
    movie: "White Heat"
  },
  {
    quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    movie: "Network"
  },
  {
    quote: "Louis, I think this is the beginning of a beautiful friendship.",
    movie: "Casablanca"
  },
  {
    quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    movie: "The Silence of the Lambs"
  },
  {
    quote: "Bond. James Bond.",
    movie: "Dr. No"
  },
  {
    quote: "There's no place like home.",
    movie: "The Wizard of Oz"
  },
  {
    quote: "I am big! It's the pictures that got small.",
    movie: "Sunset Blvd."
  },
  {
    quote: "Show me the money!",
    movie: "Jerry Maguire"
  },
  {
    quote: "Why don't you come up sometime and see me?",
    movie: "She Done Him Wrong"
  },
  {
    quote: "I'm walking here! I'm walking here!",
    movie: "Midnight Cowboy"
  },
  {
    quote: "Play it, Sam. Play 'As Time Goes By.'",
    movie: "Casablanca"
  },
  {
    quote: "You can't handle the truth!",
    movie: "A Few Good Men"
  },
  {
    quote: "I want to be alone.",
    movie: "Grand Hotel"
  },
  {
    quote: "After all, tomorrow is another day!",
    movie: "Gone with the Wind"
  },
  {
    quote: "Round up the usual suspects.",
    movie: "Casablanca"
  },
  {
    quote: "I'll have what she's having.",
    movie: "When Harry Met Sally"
  },
  {
    quote: "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    movie: "To Have and Have Not"
  },
  {
    quote: "You're gonna need a bigger boat.",
    movie: "Jaws"
  },
  {
    quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    movie: "The Treasure of the Sierra Madre"
  },
  {
    quote: "I'll be back.",
    movie: "The Terminator"
  },
  {
    quote: "Today, I consider myself the luckiest man on the face of the earth.",
    movie: "Pride of the Yankees"
  },
  {
    quote: "If you build it, he will come.",
    movie: "Field of Dreams"
  },
  {
    quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    movie: "Forrest Gump"
  },
  {
    quote: "We rob banks.",
    movie: "Bonnie and Clyde"
  },
  {
    quote: "Plastics.",
    movie: "The Graduate"
  },
  {
    quote: "We'll always have Paris.",
    movie: "Casablanca"
  },
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense"
  },
  {
    quote: "Stella! Hey, Stella!",
    movie: "A Streetcar Named Desire"
  },
  {
    quote: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    movie: "Now, Voyager"
  },
  {
    quote: "Shane. Shane. Come back!",
    movie: "Shane"
  },
  {
    quote: "Well, nobody's perfect.",
    movie: "Some Like It Hot"
  },
  {
    quote: "It's alive! It's alive!",
    movie: "Frankenstein"
  },
  {
    quote: "Houston, we have a problem.",
    movie: "Apollo 13"
  },
  {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry"
  },
  {
    quote: "You had me at 'hello'.",
    movie: "Jerry Maguire"
  },
  {
    quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    movie: "Animal Crackers"
  },
  {
    quote: "There's no crying in baseball!",
    movie: "A League of Their Own"
  },
  {
    quote: "La-dee-da, la-dee-da.",
    movie: "Annie Hall"
  },
  {
    quote: "A boy's best friend is his mother.",
    movie: "Psycho"
  },
  {
    quote: "Greed, for lack of a better word, is good.",
    movie: "Wall Street"
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    movie: "The Godfather II"
  },
  {
    quote: "As God is my witness, I'll never be hungry again.",
    movie: "Gone with the Wind"
  },
  {
    quote: "Well, here's another nice mess you've gotten me into!",
    movie: "Sons of the Desert"
  },
  {
    quote: "Say 'hello' to my little friend!",
    movie: "Scarface"
  },
  {
    quote: "What a dump.",
    movie: "Beyond the Forest"
  },
  {
    quote: "Mrs. Robinson, you're trying to seduce me. Aren't you?",
    movie: "The Graduate"
  },
  {
    quote: "Gentlemen, you can't fight in here! This is the War Room!",
    movie: "Dr. Strangelove"
  },
  {
    quote: "Elementary, my dear Watson.",
    movie: "The Adventures of Sherlock Holmes"
  },
  {
    quote: "Take your stinking paws off me, you damned dirty ape.",
    movie: "Planet of the Apes"
  },
  {
    quote: "Of all the gin joints in all the towns in all the world, she walks into mine.",
    movie: "Casablanca"
  },
  {
    quote: "Here's Johnny!",
    movie: "The Shining"
  },
  {
    quote: "They're here!",
    movie: "Poltergeist"
  },
  {
    quote: "Is it safe?",
    movie: "Marathon Man"
  },
  {
    quote: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    movie: "The Jazz Singer"
  },
  {
    quote: "No wire hangers, ever!",
    movie: "Mommie Dearest"
  },
  {
    quote: "Mother of mercy, is this the end of Rico?",
    movie: "Little Caesar"
  },
  {
    quote: "Forget it, Jake, it's Chinatown.",
    movie: "Chinatown"
  },
  {
    quote: "I have always depended on the kindness of strangers.",
    movie: "A Streetcar Named Desire"
  },
  {
    quote: "Hasta la vista, baby.",
    movie: "Terminator 2: Judgment Day"
  },
  {
    quote: "Soylent Green is people!",
    movie: "Soylent Green"
  },
  {
    quote: "Open the pod bay doors, HAL.",
    movie: "2001: A Space Odyssey"
  },
  {
    quote: "Striker: Surely you can't be serious. Rumack: I am serious…and don't call me Shirley.",
    movie: "Airplane!"
  },
  {
    quote: "Yo, Adrian!",
    movie: "Rocky"
  },
  {
    quote: "Hello, gorgeous.",
    movie: "Funny Girl"
  },
  {
    quote: "Toga! Toga!",
    movie: "National Lampoon's Animal House"
  },
  {
    quote: "Listen to them. Children of the night. What music they make.",
    movie: "Dracula"
  },
  {
    quote: "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    movie: "King Kong"
  },
  {
    quote: "My precious.",
    movie: "The Lord of the Rings: The Two Towers"
  },
  {
    quote: "Attica! Attica!",
    movie: "Dog Day Afternoon"
  },
  {
    quote: "Sawyer, you're going out a youngster, but you've got to come back a star!",
    movie: "42nd Street"
  },
  {
    quote: "The name's Bond. James Bond.",
    movie: "Dr. No"
  },
  {
    quote: "நான் ஒருவனை பிடிக்கலனா, அவன் என்னோட மூச்சையும் உடைச்சு குடுக்க மாட்டேன்.",
    movie: "Baasha"
  },
  {
    quote: "என்னை யாராலும் அடிக்க முடியாது.",
    movie: "Thevar Magan"
  },
  {
    quote: "நானே ராஜா... நானே மந்திரி...",
    movie: "Mannan"
  },
  {
    quote: "அரசனின் கிட்ட எப்பவும் இரக்கமே அதிகம்.",
    movie: "Thiruvilaiyaadal"
  },
  {
    quote: "நான் ஒருவனுக்காக தான் வந்தவன்!",
    movie: "Mudhalvan"
  },
  {
    quote: "எங்கேயோ எதுவோ நடக்குது... அது நம்ம வாழ்க்கையால இருக்கணும்!",
    movie: "Nayagan"
  },
  {
    quote: "நாளைக்கு நமக்கு பிளான் வச்சிருக்கிறதெல்லாம், இன்றைக்கு முடிக்க வேண்டியதுதான்.",
    movie: "Annamalai"
  },
  {
    quote: "காலம் மாற்றும்... மனிதர்களை மாற்றும்.",
    movie: "16 Vayathinile"
  },
  {
    quote: "ஒரு முறை தீர்மானித்து விட்டால், நானே எனக்கு கட்டுப்பட மாட்டேன்.",
    movie: "Thanga Pathakkam"
  },
  {
    quote: "என் கண்ணீரை சந்தோசமாகவே விடல.",
    movie: "Muthal Mariyathai"
  },
  {
    quote: "பசிக்காத நாய்குட்டிய கூட, ஒருமுறை பசிச்சா... சூரியனை புடிச்சு சாப்பிடும்!",
    movie: "Devar Magan"
  },
  {
    quote: "நான் உன்னை நல்லவனாக வைத்திருப்பேன். இல்லனா என் கையில் இருந்து நீயும் பிழைச்சு போக மாட்ட.",
    movie: "Thalapathi"
  },
  {
    quote: "கடவுள் இருந்தா, அவர் உன்னை காப்பாத்தட்டும்.",
    movie: "Guna"
  },
  {
    quote: "உண்மை இல்லாத இடத்தில் நானும் இருக்க மாட்டேன்.",
    movie: "Sindhu Bhairavi"
  },
  {
    quote: "உலகத்தில் நல்லவர்களே அதிகம்.",
    movie: "Nenjathai Killathe"
  },
  {
    quote: "உனக்கு ஒரு நிலை இருக்கலாம். ஆனா எனக்கு ஒரு நிலை தேவை.",
    movie: "Salangai Oli"
  },
  {
    quote: "அறியப்படாத உண்மையை பேசுவேன்.",
    movie: "Uthiri Pookal"
  },
  {
    quote: "அண்ணா... அதான் ஒரு கிழவி ஒழியடா!",
    movie: "Paasamalar"
  },
  {
    quote: "நான் முடிவு பண்ணிட்டா, நான் என்ன சொன்னாலும் அதை செய்தே தீருவேன்.",
    movie: "Padikkadavan"
  },
  {
    quote: "கடவுள் இருக்கிறார், ஆனால் அவர் மனிதனின் கையில் இல்லை.",
    movie: "Aarilirunthu Arubathu Varai"
  },
  {
    quote: "நான் போட்ட சாட்டைய தாங்குறவன் தான் ராஜா.",
    movie: "Rajadhi Raja"
  },
  {
    quote: "நான் கண்ட கனவு நிஜமாகும்னு எனக்கு நம்பிக்கை இருக்கு.",
    movie: "Ulagam Sutrum Valiban"
  },
  {
    quote: "நீ சாதாரண மனிதனா இருந்தா உன்ன காதலிக்கலாம். ஆனா நீ ஒரு கெட்ட மனிதனா இருந்தா உன்ன உயிரோட விடமாட்டேன்.",
    movie: "Moondram Pirai"
  },
  {
    quote: "அந்த மனசு மட்டும் தாங்குதா?",
    movie: "Aboorva Sagotharargal"
  },
  {
    quote: "நம்பிக்கையோட கெடுக்காதே... அது கஷ்டமானது.",
    movie: "Bharathi Kannamma"
  },
  {
    quote: "உங்கள் பாதை தவறா இருக்கலாம், ஆனா உங்களோட வழி சரியா இருக்கு.",
    movie: "Thalapathi"
  },
  {
    quote: "சின்ன பயசு கூட, அடிக்கணும்... இல்லைனா பெரிய விஷயங்களைக் கேட்க ஆரம்பிச்சிடும்!",
    movie: "Sathya"
  },
  {
    quote: "நான் மவுனம் ஆட்காரியமாகப் பேசுறதில்லை.",
    movie: "Mouna Ragam"
  },
  {
    quote: "படிச்சா உலகம் தெரியும், பயணமா போனாலும் அது தெரியும்.",
    movie: "Nenjil Or Aalayam"
  },
  {
    quote: "நம்பிக்கைக்கு நம்ம உடம்புல தான் இருக்கணும்.",
    movie: "Muthal Mariyathai"
  },
  {
    quote: "படிப்பே இல்லாத மனிதன் நல்லவனா இருந்தா போதுமா?",
    movie: "Server Sundaram"
  },
  {
    quote: "அழுவோம்... ஆனாலும் அழைக்கிற பிரச்சினைக்கு அழாத மனசு கிடைக்காது.",
    movie: "Sivagamiyin Selvan"
  },
  {
    quote: "நீ இப்போ கண்ணா, நான் அப்போ சொல்லமாட்டேன்னு நினைச்சியா?",
    movie: "Ulagam Sutrum Valiban"
  },
  {
    quote: "நல்லவனுக்கு சந்தோஷம் வந்தா, உலகம் கூட சந்தோஷம் ஆகும்.",
    movie: "Pudhiya Paravai"
  },
  {
    quote: "சந்தோஷத்துக்கு விலை இருக்குமா? அது சிரிச்சு காட்டுற முகத்தில்தான் தெரியும்.",
    movie: "Anbe Vaa"
  },
  {
    quote: "நான் ஓடி வாழ்றது இல்லை... ஓடுனா, எல்லாத்தையும் சேத்துக்கிட்டு ஓடுவேன்.",
    movie: "Mudhalvan"
  },
  {
    quote: "நாளைக்கு நாம் நினைக்கிறவனுக்கு எதிராக நான் போகலாம்... ஆனா இன்றைக்கு கூட நல்லதுதான் செய்யணும்.",
    movie: "Enga Veetu Pillai"
  },
  {
    quote: "கூச்சம் கெஞ்சாதே... அது மனிதனின் அன்பைக் குறைக்கும்.",
    movie: "Thillana Mohanambal"
  },
  {
    quote: "என் மனசுக்கு தெரியாது, ஆனா என் மூச்சு அது கேட்டுக்குறது.",
    movie: "Alaigal Oivathillai"
  },
  {
    quote: "நல்லவர்கள் சாக மாட்டார்கள்... அவர்களை நினைக்கிறவர்களால் அவர்கள் வாழ்வாங்கு வாழ்வார்கள்.",
    movie: "Raja Raja Chozhan"
  },
  {
    quote: "மனசுக்குள்ளே ரணங்கள் இருந்தா, அது மண்ணில் கூட கசிகிறது.",
    movie: "Iruvar"
  },
  {
    quote: "நான் உன்ன ஏத்திகிட்டு தான் இங்க இருக்கேன்.",
    movie: "Bharathiraja"
  },
  {
    quote: "உள்ளுக்குள் என்ன சுத்திக்கிட்டு இருக்கு தெரியாம வேணும் என்றால் ஏத்திக்கிடு.",
    movie: "Karnan"
  },
  {
    quote: "அன்பு இல்லைன்னு சொன்னால் என்ன அன்பு சொல்லுது?",
    movie: "Thiruvilaiyaadal"
  },
  {
    quote: "அவளை வெறுப்பதற்கு அவளுக்கு உரிமை இருக்குது.",
    movie: "Guna"
  },
  {
    quote: "சூதாடி நீ என்னை அழைச்சு வர சொன்னாய்... நான் நம்பி வந்தேன்.",
    movie: "Velaikkaran"
  },
  {
    quote: "நல்லவனும், கெட்டவனும் இரண்டையும் மனசு தான் நிர்ணயம் பண்ணும்.",
    movie: "Karagattakaran"
  },
  {
    quote: "காதல் பண்ணாம இருக்க முடியுமா... ஆனா காதல் சொல்லாம இருக்க முடியாது.",
    movie: "Roja"
  },
  {
    quote: "காயத்தை மறைக்க குத்து போட்ட மண்ணு தான் வேதனையை மறைக்காது.",
    movie: "Pudhiya Geethai"
  },
  {
    quote: "உலகம் பார்த்து தான் பேசணும், இல்லனா உலகமே நமக்கேடா பேசுது.",
    movie: "Aval Appadithan"
  },
];



// Button click event
diceBtn.addEventListener("click", () => {
  // Generate a random index based on the quotes array length
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex]; // Get the random quote

  // Inject to DOM
  adviceNumber.innerHTML = `Advice # ${randomIndex + 1}`; // Display quote number based on index
  adviceText.innerHTML = selectedQuote.quote; // Display the quote
  movieText.innerHTML = `- ${selectedQuote.movie}`; // Display the movie
});
