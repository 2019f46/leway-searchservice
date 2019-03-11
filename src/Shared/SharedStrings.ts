export class SharedStrings {
  
  // CONNECTION TO PRODUCT SERVICE
  public static productServiceConnection: String =
    "lewayf-productservice.azurewebsites.com";
  public static searchProductUrl: String =
    SharedStrings.productServiceConnection + "/api/product/";

  // DB
  public static dbName = "leway-mapdb";
  public static dbPrimKey =
      "Ih5yMcG8nZXSbYYegjbb5VcxAhnPraTdTBueLj5Lkr47bhf3E0ZTM4pbkh7ITlj2lgHoxyHRQe4b8cBrPkevkQ==";
  public static dbUrl =
      `mongodb://${SharedStrings.dbName}:${SharedStrings.dbPrimKey}@${SharedStrings.dbName}.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false`;
}
