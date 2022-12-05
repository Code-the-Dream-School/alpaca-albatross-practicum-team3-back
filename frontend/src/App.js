import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import { Routes, Route, Navigate } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './pages/Home/Navbar';
import LogInPage from './pages/LogInPage';
import Registration from './pages/Registration';
import Welcome from './pages/Home/Home';
// import Calendar from './pages/Home/Calendar';
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


// set-up Speechly polyfill to work with react-speech-recognition to allow functionality of speech rec across additional browsers
// const speechlyAppId = process.env.APP_ID;
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(speechlyAppId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

// docs at:
// https://www.npmjs.com/package/react-speech-recognition
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// https://docs.speechly.com/

// WILL NEED:

// check if user allowed microphone access and render content if they did not (isMicrophoneAvailable is a state)
// if (!isMicrophoneAvailable) {
//   // Render some fallback content
// }

// start and stop listening commands:
// SpeechRecognition.startListening()
// SpeechRecognition.stopListening()

// make the transcript available for use in the component
// const { transcript } = useSpeechRecognition()


// reset the transcript to empty string after use in the component is complete
// const { resetTranscript } = useSpeechRecognition()

// set-up commands for the page
// const commands = [
//   {
//     command: 'I would like to order *',
//     callback: (food) => setMessage(`Your order is for: ${food}`),
//     matchInterim: true, // determines whether interim results should be matched against the command, is faster if set true
//     isFuzzyMatch: true, // accepts partial matches based on fuzzyMatchingThreshold from 0 (no matches) to 1 (exact match) with default 
//     fuzzyMatchingThreshold: 0.8, // set at 0.8 default
//     bestMatchOnly: false // when isFuzzyMatch set to true, cb function triggered only by best match (This is useful for fuzzy commands with multiple command phrases assigned to the same callback function - you may only want the callback to be triggered once for each spoken command.)
//   },
// ]

// useful command symbols
// * will match multi-word text and pass each word into the cb (one word per splat symbol) (i.e. "My favorite foods are * and *" where the params food1 and food2 would be passed to the callback function)
// :<word> matches a single named variable (i.e. "The weather is :condition today" where the variable condition is passed to the cb function)
// (<word(s)>) parentheses indicate optional words and are not required to match the command (i.e. "Pass the salt (please)")


function App() {

  const commands = [
    {
      command: ['Navigate *', 'Navigate to *', 'Open *', 'Go *'],
      callback: (redirectPage) => {
        setRedirectUrl(redirectPage);
      }
    },
  ];

  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['home', 'favorites'];
  const urls = {
    home: "/home",
    favorites: "/Favorites",
  };

  const { transcript } = useSpeechRecognition({commands});

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null
  };

  let redirect = "";
  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>
    }
  }


  return (
    <>
      <Navbar />
      <Routes>

        {/* Registration */}
        <Route path="/register" element={<Registration />}>          
        </Route>
        

        {/* Log In */}
        <Route path="/" element ={<LogInPage/>}>
        </Route>

        {/* List */}
        <Route path='/List' element={<TodoList />}></Route>

        {/* home */}
        <Route path='/home' element={<Welcome />}></Route>

        {/* FavePage */}
        <Route path='/Favorites' element={<FavoritesPage />}></Route>
      </Routes>
      <div id="transcriptDiv">
        <p id="transcript">{transcript}</p>
        <button id="transcriptButton" onClick={SpeechRecognition.startListening}>Start</button>
      </div>
    </>
  );
}
export default App;
