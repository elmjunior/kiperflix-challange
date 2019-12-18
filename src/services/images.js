/*
file_path: file image path according to API results, 
size: (optional)
*/
export const showImage = (file_path, size) => {
  return `https://image.tmdb.org/t/p/w${size || '500'}${file_path}`;
};
