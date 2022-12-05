import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech = ({spokenTodoItem, handleSpokenTodo}) => {

  // recognized commands
  const commands = [
      {
        command: ['Navigate *', 'Navigate to *', 'Open *', 'Go *'],
        callback: (redirectPage) => {
          setRedirectUrl(redirectPage);
        }
      },
      {
        // need to address handling multiple words in the spoken message throughout the rest of the app, error if spoken message is too long?
        commands: ['Add *', 'Add **', 'Add ***', 'Add ****', 'Add *****', 'Add ******'],
        callback: ([spokenMsg]) => {
          // let spokenMsgTooLong = '';
          // if (spokenMsg.length <= 6) {
            handleSpokenTodo([spokenMsg])
          // } else {
            // spokenMsgTooLong = <p>Your to do item is too long to add via speech.</p>
          // }
        }
      }
    ];

    const navigate = useNavigate();
    const [redirectUrl, setRedirectUrl] = useState('');
    const pages = ['home', 'favorites'];
    const urls = {
      home: "/home",
      favorites: "/FavoritesPage",
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
        redirectPage = <p>Could not find page: {redirectUrl}</p>
      }
    }

  return (
      <div id="transcriptDiv">
          <p id="transcript">{transcript}</p>
          <button id="transcriptButton" onClick={SpeechRecognition.startListening}>Start</button>
          {redirectPage}
          {/* {spokenMsgTooLong} */}
      </div>
  )
};

export default Speech;