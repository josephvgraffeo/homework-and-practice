// function that converts minutes into seconds

const minuteToSeconds = (minutes) => {
    const seconds = minutes * 60
    console.log(`${minutes} minutes is ${seconds} seconds. \n`)
}

minuteToSeconds(60);

// function that converts hours into seconds
const hoursToSeconds = (hours) => {
    const seconds1 = (hours * 60) * 60
    console.log(`${hours} hours is ${seconds1} seconds.`)
}

hoursToSeconds(24);