/**
 * Shared Strings is a public and static class
 * that contains all the strings needed across the backend,
 * like connection strings.
 */
export class SharedStrings {

  // CONNECTION TO PRODUCT SERVICE
  /** URL for the product service */
  public static productServiceConnection: String =
    "lewayf-productservice.azurewebsites.com";
  /** API endpoint for getting products on the product service */
  public static searchProductUrl: String =
    SharedStrings.productServiceConnection + "/api/product/";

  // DB
  // DB Setup
  public static dbName = "wayfinder";
  public static dbUser = "backend";
  public static dbPassword = "elBackend1";
  public static dbUrl = `mongodb://${SharedStrings.dbUser}:${SharedStrings.dbPassword}@ds163835.mlab.com:63835/${SharedStrings.dbName}`;
}
