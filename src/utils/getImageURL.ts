export const getImageURL = (name: string) => {
  return new URL(`../assets/img/Plane/Models/${name}`, import.meta.url)
    .href;
};
