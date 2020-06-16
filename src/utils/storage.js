const LOCAL_STORAGE_STATE_KEY = 'state';

export const loadState = () => {
  try {
    const serializedData = localStorage.getItem(LOCAL_STORAGE_STATE_KEY);
    if (serializedData === null) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_STATE_KEY, serializedData);
  } catch (error) {
    console.log('Error on saveState: ', error.message);
  }
};
