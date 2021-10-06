/** @format */

const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getYieldForPlantFactors,
  getYieldForCropFactors,
  getTotalYieldFactors,
  getRevenueForCropFactors,
  getTotalProfitForCrop,
} = require("./farm");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
  test("Get yield for plant with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      cropCost: 1.5,
      sellPrice: 5,
      factors: {
        sun: {
          low: -30,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 50,
          medium: 0,
          high: -30,
        },
      },
    };
    const environmentFactors = {
      sun: "high",
      wind: "low",
    };

    expect(getYieldForPlantFactors(corn, environmentFactors)).toBe(67.5);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
  test("Get yield for crop with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      cropCost: 1.5,
      sellPrice: 5,
      factors: {
        sun: {
          low: -30,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 50,
          medium: 0,
          high: -30,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
      wind: "low",
    };
    const crops = { crop: corn, numCrops: 9 };
    expect(getYieldForCropFactors(crops, environmentFactors)).toBe(283.5);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });

  test("Calculate total yield with factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cropCost: 1.5,
      sellPrice: 5,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 50,
          medium: 0,
          high: -30,
        },
      },
    };
    const wheat = {
      name: "wheat",
      yield: 2,
      cropCost: 1,
      sellPrice: 3,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 30,
          medium: -10,
          high: -50,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
      wind: "low",
    };

    const crops = [
      { crop: corn, numCrops: 22 },
      { crop: wheat, numCrops: 10 },
    ];

    expect(getTotalYieldFactors(crops, environmentFactors)).toBe(62.5);
  });
});

describe("getCostsForCrop", () => {
  test("Get the total cost of given crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cropCost: 1.5,
      sellPrice: 5,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 50,
          medium: 0,
          high: -30,
        },
      },
    };
    const crops = [{ crop: corn, numCrops: 262 }];
    expect(getCostsForCrop({ crops })).toBe(393);
  });
  test("get total costs of another crop", () => {
    const wheat = {
      name: "wheat",
      yield: 2,
      cropCost: 1,
      sellPrice: 3,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 30,
          medium: -10,
          high: -50,
        },
        soil: {
          low: 0,
          medium: 0,
          high: 0,
        },
      },
    };
    const crops = [{ crop: wheat, numCrops: 1 }];
    expect(getCostsForCrop({ crops })).toBe(1);
  });
});

describe("getRevenueForCrop", () => {
  test("How much revenue you get for the crop", () => {
    const wheat = {
      name: "wheat",
      yield: 2,
      cropCost: 1,
      sellPrice: 3,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 30,
          medium: -10,
          high: -50,
        },
        soil: {
          low: 0,
          medium: 0,
          high: 0,
        },
      },
    };
    const crops = [{ crop: wheat, numCrops: 1 }];
    expect(getRevenueForCrop({ crops })).toBe(6);
  });
  test("Get revenue for crop with environment factors", () => {
    const wheat = {
      name: "wheat",
      yield: 2,
      cropCost: 1,
      sellPrice: 3,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 30,
          medium: -10,
          high: -50,
        },
        soil: {
          low: 0,
          medium: 0,
          high: 0,
        },
      },
    };
    const environmentFactors = {
      sun: "low",
      wind: "low",
    };

    const crops = [{ crop: wheat, numCrops: 10 }];

    expect(getRevenueForCropFactors(crops, environmentFactors)).toBe(39);
  });
});

describe("getProfitForCrop", () => {
  test("How much profit you get for the crop", () => {
    const wheat = {
      name: "wheat",
      yield: 2,
      cropCost: 1,
      sellPrice: 3,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: +30,
          medium: 0,
          high: -50,
        },
      },
    };

    const environmentFactors = { sun: "low", wind: "medium" };
    const crops = [{ crop: wheat, numCrops: 25 }];
    expect(getProfitForCrop(crops, environmentFactors)).toBe(50);
  });
});

describe("getTotalProfitForCrop", () => {
  test("total Profit you get for the crops", () => {
    const wheat = {
      name: "wheat",
      yield: 2,
      cropCost: 1,
      sellPrice: 3,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 30,
          medium: 0,
          high: -50,
        },
      },
    };
    const corn = {
      name: "corn",
      yield: 3,
      cropCost: 1.5,
      sellPrice: 5,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 50,
          medium: 0,
          high: -30,
        },
      },
    };
    const environmentFactors = { sun: "low", wind: "medium" };

    const crops = [
      { crop: wheat, numCrops: 25 },
      { crop: corn, numCrops: 10 },
    ];
    expect(getTotalProfitForCrop(crops, environmentFactors)).toBe(110);
  });
});
