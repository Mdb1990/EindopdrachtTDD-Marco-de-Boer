/** @format */

const getYieldForPlant = (crop, environmentFactors) => {
  if (environmentFactors) {
    if (environmentFactors.sun === "low") {
      return crop.yield * ((100 + crop.factors.sun.low) / 100);
    } else if (environmentFactors.sun === "medium") {
      return crop.yield;
    } else if (environmentFactors.sun === "high") {
      return crop.yield * ((100 + crop.factors.sun.high) / 100);
    }
  } else {
    return crop.yield;
  }
};

const getYieldForCrop = (crop, environmentFactors) => {
  if (environmentFactors) {
    if (environmentFactors.sun === "low") {
      return crop.numCrops * crop.crop.yield * ((100 + crop.crop.factors.sun.low) / 100);
    } else if (environmentFactors.sun === "medium") {
      return crop.numCrops * crop.crop.yield;
    } else if (environmentFactors.sun === "high") {
      return crop.numCrops * crop.crop.yield * ((100 + crop.crop.factors.sun.high) / 100);
    }
  } else {
    return crop.numCrops * crop.crop.yield;
  }
};

const getTotalYield = (crop) => {
  const crops = crop.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crops.map((obj) => obj.numCrops * obj.crop.yield);
  return mapCrops.reduce(addValues);
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

const getProfitForCrop = (crops) => {
  const crop = crops.crops;
  const addValues = (value1, value2) => value1 + value2;
  const mapCrops = crop.map((obj) => obj.numCrops * obj.crop.yield * obj.crop.sellPrice - obj.numCrops * obj.crop.cropCost);
  return mapCrops.reduce(addValues);
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
};
