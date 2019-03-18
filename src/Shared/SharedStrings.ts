/**
 * Shared Strings is a public and static class
 * that contains all the strings needed across the backend,
 * like connection strings.
 */
export class SharedStrings {
  // CONNECTION TO PRODUCT SERVICE
  /** URL for the product service */
  //public static productServiceConnection: String = "lewayfps.azurewebsites.com";
  public static productServiceConnection: String = "http://localhost:3001";
  /** API endpoint for getting products on the product service */
  public static searchProductUrl: String = `${SharedStrings.productServiceConnection}/api/product/`;

  // DB
  /** Database name */
  public static dbName = "wayfinder";
  /** Database user */
  public static dbUser = "backend";
  /** Database password */
  public static dbPassword = "elBackend1";
  /** Database connecion string */
  public static dbUrl = 
  `mongodb://${SharedStrings.dbUser}:${SharedStrings.dbPassword}@ds163835.mlab.com:63835/${SharedStrings.dbName}`;
}
