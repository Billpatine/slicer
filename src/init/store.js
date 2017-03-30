import createStore from './create-store'


const store = createStore({
  app: {
    imageSrc: "/chopping-block/S1-Trend-Sandals.jpg",
    imageWidth: 0,
    imageHeight: 0,
    slices: {
      "a": {y: 10},
      "b": {y: 400},
    }
  }
});


export default store;