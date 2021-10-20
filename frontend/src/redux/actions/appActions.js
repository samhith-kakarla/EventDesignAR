export const SET_FONT_LOADED = 'SET_FONT_LOADED';
export function setFontLoaded(fontLoaded) {
  return { type: SET_FONT_LOADED, payload: { fontLoaded } };
}
