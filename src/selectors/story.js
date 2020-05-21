// This is just a higher order function:
const isNotArchived = (archivedIds) => (story) =>
  archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export { getReadableStories };

// Note: selectors are not necessary, but just a nice way of accessing derived state!
