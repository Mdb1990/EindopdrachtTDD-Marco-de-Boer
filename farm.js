/** @format */

const getYieldForPlant = (crop) => {
  return crop.yield;
};

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

const getYieldForCrop = (crop) => {
  const cropYield = crop.numCrops * crop.crop.yield;
  return cropYield;
};

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

const getTotalYield = (crop) => {
  const crops = crop.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crops.map((obj) => obj.numCrops * obj.crop.yield);
  return mapCrops.reduce(addValues);
};

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

const getCostsForCrop = (crops) => {
  const crop = crops.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crop.map((obj) => obj.numCrops * obj.crop.cropCost);
  return mapCrops.reduce(addValues);
};

const getRevenueForCrop = (crops) => {
  const crop = crops.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crop.map((obj) => obj.numCrops * obj.crop.yield * obj.crop.sellPrice);
  return mapCrops.reduce(addValues);
};

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
    sum += windAndSunValue; // add windAndSunValue to let sum..
    const revenue = windAndSunValue * crop.crop.sellPrice;
    //console.log(revenue);
    const totalCost = crop.numCrops * crop.crop.cropCost;
    const profit = revenue - totalCost;
    //console.log(profit);
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
