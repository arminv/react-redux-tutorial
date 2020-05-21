import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { getReadableStories } from './selectors/story';
// We can import an action creator from it's own file (instead of dispatching the action object directly):
import { doArchiveStory } from './actions/archive';
// import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';

import * as serviceWorker from './serviceWorker';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App
        stories={getReadableStories(store.getState())}
        onArchive={(id) => store.dispatch(doArchiveStory(id))}
        // We could've just dispatch the object directly (instead of using an action creator):
        // onArchive={(id) => store.dispatch({ type: STORY_ARCHIVE, id })}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// Subscribe to store changes so the View layer can re-render/update as state changes in the store:
store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
