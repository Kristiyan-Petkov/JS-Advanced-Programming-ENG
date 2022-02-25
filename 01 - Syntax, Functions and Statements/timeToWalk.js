function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let timePureWalkingSecs = (distance / (speed * 1000)) * 60 * 60;
    let rest = Math.floor(distance / 500) * 60;
    let totalTime = (timePureWalkingSecs + rest);
    
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime - (hours * 3600)) / 60);
    let seconds = totalTime - (hours * 3600) - (minutes * 60);

    timeString = hours.toString().padStart(2, '0') + ':' + 
    minutes.toString().padStart(2, '0') + ':' + 
    seconds.toFixed(0).toString().padStart(2, '0');
    console.log(timeString);
}
timeToWalk(4000, 0.60, 5)