/*
You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. The keys of the object represent the names of the systems on the spacecraft; the values are true if the system is "go" for launch and false otherwise. Your function should return true only if every system is "go" for launch!

let systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

allSystemsGo(systems); // => false
*/

// SOLUTION
const allSystemsGo = (systems) => {
  for (let key in systems) {
    let value = systems[key];
    if (typeof value === 'object') {
      let systemsGo = allSystemsGo(value);
      if (!systemsGo) {
        return false;
      }
    }
    if (!value) {
        return false;
    }
  }
  return true;
}

/*
We search each key in systems to see if it's an object. If it's an object, we recursively invoke allSystemsGo while passing in the parent key as a parameter. If any of those systems are false, we return false. Outside of the if statement, we check each value is false to return false. If none of the values or nested values are false, we exit the loop and return true. 
*/