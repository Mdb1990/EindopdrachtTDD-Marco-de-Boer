/** @format */

const getYieldForPlant = (crop) => crop.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (crop) => {
  const crops = crop.crops;
  const reducer = (value1, value2) => value1 + value2;
  const mapCrops = crops.map((obj) => obj.numCrops * obj.crop.yield);
  return mapCrops.reduce(reducer);
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};
