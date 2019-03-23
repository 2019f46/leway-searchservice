import * as request from "supertest";
import app from "../../src/app";
import { ProductRepo } from "../../src/Repository/ProductRepo";
import { LocationRepo } from "../../src/Repository/LocationRepo";

/**
 * MOCKING
 */
jest.mock("../../src/Repository/ProductRepo");
jest.mock("../../src/Repository/LocationRepo");

const mockedProdRepo = <jest.Mock<ProductRepo>>ProductRepo;
const mockedLocRepo = <jest.Mock<LocationRepo>>LocationRepo;

const rNoProds = () => { return []; };
const rNoLocations = () => { return []; };

const rProds = () => {
  return [
    {
      image: "img.jpg",
      id: "4044",
      name: "Bananas",
      quantity: "27",
      price: "18",
      description:
        "The snakes have been removed, while there still is a chance that spiders are within"
    },
    {
      image: "img2.jpg",
      id: "4045",
      name: "Potatoes",
      quantity: "5",
      price: "800",
      description:
        "Dirty little tatoes that haven't been purchased in about 2 years"
    }
  ];
};

const rLocations = () => {
  return [
    {
      productId: "4044",
      coords: {
        x: 42,
        y: 42
      }
    },
    {
      productId: "4045",
      coords: {
        x: 20,
        y: 89
      }
    }
  ];
};

/**
 * TESTING
 */
describe("GET /api/search", () => {
  it("should return 200 OK when there are products matching the search", () => {
    // Should mock and test
  });

  it("should return 400 if no products match the search", () => {});

  it("should return products with locations if present", () => {});

  it("should return products without locations if not present", () => {});
});
