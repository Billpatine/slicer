import {modelsFromObject} from './helpers/models-from-object'

export function getDistanceModelsFromSlices(sourceHeight=0, initialSlices={}) {

  //TODO: potentially delete any user slices with id=0;

  // Sort slices by y value so we always crop from top to bottom
  let sortedSlices = modelsFromObject({
    ...initialSlices,
    "initial": {y: 0} //add initial slice at y=0
  }).sort((a,b) => {
    return a.y > b.y ? 1 : -1
  });

  //Construct each distanceModel and return as array
  return sortedSlices.map((thisSlice, i, allSlices) => {

    const previousSlice = allSlices[i-1] || null;
    const nextSlice = allSlices[i+1] || null;

    //first slice
    if (!previousSlice) {
      return { startY: 0, distance: nextSlice.y } //first slice
    }

    //slices in the middle
    if (previousSlice && nextSlice) {
      return { startY: thisSlice.y, distance: nextSlice.y - thisSlice.y}
    }

    //last slice
    if (previousSlice && !nextSlice) {
      return { startY: thisSlice.y, distance: sourceHeight - thisSlice.y}
    }

  });










  //Order by y value


  //convert to startY and distance


}


/* input
{
  "a": {y: 10},
  "b": {y: 400},
}
*/


/*
 this.props.slices.map( s => {
 return {
 startY: s.y,
 distance: 200
 }
 })
 */