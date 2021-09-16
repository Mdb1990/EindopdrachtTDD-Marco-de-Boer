/** @format */

const getYieldForPlant = (crop) => crop.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

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
