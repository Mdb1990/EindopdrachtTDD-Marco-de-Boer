/** @format */
// This function gets only the Yield from 1 Crop

const getYieldForPlant = (crop) => {
  return crop.yield;
};

// This function is made for getting the values for the Yield calculated with environment factors
const getYieldForPlantFactors = (crop, environmentFactors) => {
  const sun = crop.factors.sun[environmentFactors.sun] / 100 + 1;
  const wind = crop.factors.wind[environmentFactors.wind] / 100 + 1;
  if (environmentFactors.sun === "low") {
    sunValue = crop.yield * sun;
  } else if (environmentFactors.sun === "medium") {
    sunValue = crop.yield * sun;
  } else if (environmentFactors.sun === "high") {
    sunValue = crop.yield * sun;
  }
  if (environmentFactors.wind === "low") {
    windAndSunValue = sunValue * wind;
  } else if (environmentFactors.wind === "medium") {
    windAndSunValue = sunValue * wind;
  } else if (environmentFactors.wind === "high") {
    windAndSunValue = sunValue * wind;
  }
  return windAndSunValue;
};

// This function gets the yield from More than 1 crop
const getYieldForCrop = (crop) => {
  const cropYield = crop.numCrops * crop.crop.yield;
  return cropYield;
};

// This function gets Yield calculated with factors with multiple crops.
const getYieldForCropFactors = (crop, environmentFactors) => {
  const cropYield = crop.numCrops * crop.crop.yield;
  const sun = crop.crop.factors.sun[environmentFactors.sun] / 100 + 1;
  const wind = crop.crop.factors.wind[environmentFactors.wind] / 100 + 1;
  if (environmentFactors.sun === "low") {
    sunValue = cropYield * sun;
  } else if (environmentFactors.sun === "medium") {
    sunValue = cropYield * sun;
  } else if (environmentFactors.sun === "high") {
    sunValue = cropYield * sun;
  }
  if (environmentFactors.wind === "low") {
    windAndSunValue = sunValue * wind;
  } else if (environmentFactors.wind === "medium") {
    windAndSunValue = sunValue * wind;
  } else if (environmentFactors.wind === "high") {
    windAndSunValue = sunValue * wind;
  }
  return Number(windAndSunValue.toFixed(1));
};

// Function for Total Yield with multiple crops
const getTotalYield = (crop) => {
  const crops = crop.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crops.map((obj) => obj.numCrops * obj.crop.yield);
  return mapCrops.reduce(addValues);
};

// This is a Function with forEach in it, for each crop it calculates the factors and sums them together into sumYield
const getTotalYieldFactors = (crop, environmentFactors) => {
  let sumYield = 0;
  crop.forEach((crop) => {
    const totalYield = crop.numCrops * crop.crop.yield;
    const sun = crop.crop.factors.sun[environmentFactors.sun] / 100 + 1;
    const wind = crop.crop.factors.wind[environmentFactors.wind] / 100 + 1;
    if (environmentFactors.sun === "low") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "medium") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "high") {
      sunValue = totalYield * sun;
    }
    if (environmentFactors.wind === "low") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "medium") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "high") {
      windAndSunValue = sunValue * wind;
    }
    sumYield += windAndSunValue;
  });
  return sumYield;
};

// Function for getting the costs of a crop
const getCostsForCrop = (crops) => {
  const crop = crops.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crop.map((obj) => obj.numCrops * obj.crop.cropCost);
  return mapCrops.reduce(addValues);
};

// Function for getting the revenue from a crop
const getRevenueForCrop = (crops) => {
  const crop = crops.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crop.map((obj) => obj.numCrops * obj.crop.yield * obj.crop.sellPrice);
  return mapCrops.reduce(addValues);
};

// Function for getting revenue for a crop calculated with factors
const getRevenueForCropFactors = (crop, environmentFactors) => {
  let sum = 0;
  let rev = 0;
  crop.forEach((crop) => {
    const totalYield = crop.numCrops * crop.crop.yield;
    const sun = crop.crop.factors.sun[environmentFactors.sun] / 100 + 1;
    const wind = crop.crop.factors.wind[environmentFactors.wind] / 100 + 1;

    if (environmentFactors.sun === "low") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "medium") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "high") {
      sunValue = totalYield * sun;
    }
    if (environmentFactors.wind === "low") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "medium") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "high") {
      windAndSunValue = sunValue * wind;
    }
    sum += windAndSunValue; // add windAndSunValue to let sum..
    const revenue = sum * crop.crop.sellPrice;
    rev += revenue;
  });
  return rev;
};

// Function for getting profit from a crop, also calculated with factors.
const getProfitForCrop = (crop, environmentFactors) => {
  let sum = 0;
  let rev = 0;
  let prof = 0;
  crop.forEach((crop) => {
    const totalYield = crop.numCrops * crop.crop.yield;
    const sun = crop.crop.factors.sun[environmentFactors.sun] / 100 + 1;
    const wind = crop.crop.factors.wind[environmentFactors.wind] / 100 + 1;

    if (environmentFactors.sun === "low") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "medium") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "high") {
      sunValue = totalYield * sun;
    }
    if (environmentFactors.wind === "low") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "medium") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "high") {
      windAndSunValue = sunValue * wind;
    }
    sum += windAndSunValue; // add windAndSunValue to let sum..
    const revenue = sum * crop.crop.sellPrice;
    const profit = revenue - windAndSunValue * crop.crop.cropCost;
    rev += revenue;
    prof += profit;
  });
  return prof;
};

// Function that gets the total profit from multiple crops calculated with factors
const getTotalProfitForCrop = (crop, environmentFactors) => {
  let sum = 0;
  let rev = 0;
  let prof = 0;
  crop.forEach((crop) => {
    const totalYield = crop.numCrops * crop.crop.yield;
    const sun = crop.crop.factors.sun[environmentFactors.sun] / 100 + 1;
    const wind = crop.crop.factors.wind[environmentFactors.wind] / 100 + 1;

    if (environmentFactors.sun === "low") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "medium") {
      sunValue = totalYield * sun;
    } else if (environmentFactors.sun === "high") {
      sunValue = totalYield * sun;
    }
    if (environmentFactors.wind === "low") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "medium") {
      windAndSunValue = sunValue * wind;
    } else if (environmentFactors.wind === "high") {
      windAndSunValue = sunValue * wind;
    }
    sum += windAndSunValue;
    const revenue = windAndSunValue * crop.crop.sellPrice;
    const totalCost = crop.numCrops * crop.crop.cropCost;
    const profit = revenue - totalCost;
    rev += revenue;
    prof += profit;
  });
  return prof;
};

module.exports = {
  getYieldForPlant,
  getYieldForPlantFactors,
  getYieldForCrop,
  getYieldForCropFactors,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalYieldFactors,
  getRevenueForCropFactors,
  getTotalProfitForCrop,
};
