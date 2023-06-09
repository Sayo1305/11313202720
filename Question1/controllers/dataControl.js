exports.GetTrainDetails = async (req, res) => {
  // console.log(req.params.price);
  const type = req.params.price;
  try {
    const url = "http://104.211.219.98/train/trains";
    const token = process.env.Auth_Token;
    let arr = [];
    let resarr = [];
    const currDate = new Date();
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
    })
      .then((response) => response.json())
      .then((data) => {
        arr = data;
      })
      .catch((error) => {
        console.error(error);
      });
    if (arr) {
      // console.log(arr);
      const keys = Object.keys(arr);
      for (let i = 0; i < keys.length; i++) {
        const value = arr[keys[i]];
        let targethour = value?.departureTime?.Hours;
        let targetminute = value?.departureTime?.Minutes;
        let targetsecond = value?.departureTime?.Seconds;
        const targetTime = new Date();
        targetTime.setHours(targethour, targetminute, targetsecond);
        const timeDiff = targetTime.getTime() - currDate.getTime();
        let remainingHours = Math.floor(timeDiff / (1000 * 60 * 60));
        let remainingMinutes = Math.floor(
          (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
        );
        if (remainingHours === 0 && remainingMinutes + value?.delayedBy > 30) {
          resarr.push(value);
        }
        if (remainingHours >= 1) {
          resarr.push(value);
        }
      }
      sortdata(resarr, type);
      res.send({ data: resarr });
    } else {
      res.send({ data: "error" });
    }
  } catch (err) {
    console.log(err);
  }
};

function sortdata(data, type) {
  if (type === "price") {
    data.sort((a, b) => a.price.sleeper - b.price.sleeper);
  } else if (type === "seat") {
    data.sort((a, b) => b.seatsAvailable.sleeper - a.seatsAvailable.sleeper);
  } else {
    data.sort((a, b) => {
      const timeA = new Date();
      timeA.setHours(
        a.departureTime.Hours,
        a.departureTime.Minutes,
        a.departureTime.Seconds
      );
      const timeB = new Date();
      timeB.setHours(
        b.departureTime.Hours,
        b.departureTime.Minutes,
        b.departureTime.Seconds
      );
      return timeB - timeA;
    });
  }
}


exports.getTrain = async(req , res)=>{
  const type = req.params.number;
  try {
    const url = `http://104.211.219.98/train/trains/${type}`;
    const token = process.env.Auth_Token;
    let arr = [];
    let resarr = [];
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
    })
      .then((response) => response.json())
      .then((data) => {
        arr = data;
      })
      .catch((error) => {
        console.error(error);
      });
    if (arr) {
      resarr = arr;
      res.send({ data: resarr });
    } else {
      res.send({ data: "error" });
    }
  } catch (err) {
    console.log(err);
  }
}