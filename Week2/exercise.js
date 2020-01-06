const nonStopFlights = [{
  departure: 'Melbourne',
  arrival: 'Beijing'
}]

const oneStopFlights = [{
  departure: 'Melbourne',
  arrival: 'Guangzhou'
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing'
}]

const twoStopsFlights = [{
  departure: 'Melbourne',
  arrival: 'Singapore'
}, {
  departure: 'Singapore',
  arrival: 'Guangzhou'
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing'
}]

const threeStopsFlights = [{
  departure: 'Melbourne',
  arrival: 'Sydney'
}, {
  departure: 'Sydney',
  arrival: 'Singapore'

}, {
  departure: 'Singapore',
  arrival: 'Guangzhou'
}, {
  departure: 'Guangzhou',
  arrival: 'Beijing'
}]

function getStops(flights) {
  const stopsMap = {
    1: 'none-stop',
    2: '1 stop'

    //可以继续加
  };
  var result = stopsMap[flights.length] || $flights.length - 1 + 'stops';
  console.log(result);

}

getStops(nonStopFlights);
// non-stop

getStops(oneStopFlights);
// 1 stop