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
  /** Location Database name */
  public static dbName = "leway-mapdb";
  /** DB primary keay */
  public static dbPrimKey =
      "Ih5yMcG8nZXSbYYegjbb5VcxAhnPraTdTBueLj5Lkr47bhf3E0ZTM4pbkh7ITlj2lgHoxyHRQe4b8cBrPkevkQ==";
  /** Generated URL for the location Database */
  public static dbUrl =
      `mongodb://${SharedStrings.dbName}:${SharedStrings.dbPrimKey}@${SharedStrings.dbName}.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false`;
}
