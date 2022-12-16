import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophone } from 'react-icons/fa';
import {FaMicrophoneSlash} from "react-icons/fa";

const Speech = () => {
  
  // recognized commands
  const commands = [
      {
        command: ['Navigate *', 'Navigate to *', 'Open *', 'Go *', 'Go to *'],
        callback: (redirectPage) => {
          setRedirectUrl(redirectPage);
        }
      },
      // {
      //   // need to address handling multiple words in the spoken message throughout the rest of the app, error if spoken message is too long?
      //   commands: 'Add *', //, 'Add **', 'Add ***', 'Add ****', 'Add *****', 'Add ******'
      //   callback: (spokenMsg) => {
      //     console.log(spokenMsg);
      //       setTranscribedMsg(spokenMsg);
      //       handleSpokenTodo(spokenMsg)
      //   }
      // }
    ];

    const navigate = useNavigate();
    const [redirectUrl, setRedirectUrl] = useState('');
    const pages = ['home', 'favorites', 'weekly', 'monthly'];
    const urls = {
      home: "/home",
      favorites: "/FavoritesPage",
      weekly: '/weekly',
      monthly: '/monthly',
    };

    const { transcript } = useSpeechRecognition({commands});



    // allows app to function without errors in unsupported browsers
    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
      return null
    };

    // set up navigation by speech by implementing redirect using useNavigate() based on what the users states
    let redirectPage = "";
    if (redirectUrl) {
      if (pages.includes(redirectUrl)) {
        redirectPage = navigate(urls[redirectUrl])
      } else {
        redirectPage = <p id="redirectPg" className="redirectPg">Could not find page: {redirectUrl}</p>
      }
    }

  return (
      <div id="transcriptDiv">
          <p id="transcript">{transcript}</p>
          {redirectPage}
          <button id="transcriptButton" onClick={SpeechRecognition.startListening}
          ><FaMicrophoneSlash/></button>

      </div>
  )
};

export default Speech;