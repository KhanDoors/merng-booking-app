import React from "react";

const BOOKINGS_BUCKETS = {
  Cheap: {
    min: 0,
    max: 10
  },
  Normal: {
    min: 11,
    max: 49
  },
  Expensive: {
    min: 50,
    max: 1000
  }
};

const BookingsChart = props => {
  const output = {};
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price > BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    output[bucket] = filteredBookingsCount;
  }
  console.log(output);
  return <div>The Chart</div>;
};

export default BookingsChart;
