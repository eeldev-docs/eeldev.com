// Literal WordPress URLs are built as static redirect pages.
export const exactRedirects = [
  ["/index.php/eoscore", "https://eoscore.eeldev.com"],
  ["/index.php/docs/foliage-plugin/purchase-plugin", "https://www.unrealengine.com/marketplace/slug/f0cb99ea851a40b682de1debe6c1bc08"],
  ["/index.php/docs/foliage-plugin/updates-changelogs", "https://eeldev.com/index.php/category/unreal-engine/foliage-plugin/"],
  ["/index.php/docs/blueprintcore/updates-changelogs", "https://eeldev.com/index.php/category/unreal-engine/blueprintcore/"],
  ["/index.php/docs/eventdispatcher/updates-changelogs", "https://eeldev.com/index.php/category/unreal-engine/eventdispatcher/"],
  ["/index.php/docs/chunkcore/updates-changelogs", "https://eeldev.com/index.php/category/unreal-engine/chunkcore/"],
  ["/index.php/docs/gamelift/updates-changelogs", "https://eeldev.com/index.php/category/unreal-engine/amazon-web-services/gamelift/"],
  ["/index.php/docs/thumbnailer/updates-changelogs", "https://eeldev.com/index.php/category/unreal-engine/thumbnailer/"],
  ["/index.php/awscoredynamodb", "https://eeldev.com/index.php/docs/dynamodb/"],
  ["/index.php/docs/eoscoreweb/example-project", "https://github.com/eeldev-ue4/EOSWeb_Example/releases"],
  ["/index.php/docs/browsercore/purchase-plugin", "https://www.unrealengine.com/marketplace/en-US/product/03f71f841acc49f6a491ddfffac21b81"],
  ["/index.php/docs/eoscoreweb/purchase-plugin", "https://www.unrealengine.com/marketplace/slug/4f4c3c70e1b846f5863390487de82c19"],
  ["/index.php/eosvoicecore", "/index.php/eoscorevoice/"],
  ["/index.php/docs/eoscorevoice/example-project", "https://github.com/eeldev-ue4/EOSVoice_Example/releases"],
  ["/index.php/eoscore-1-9-0-34", "/index.php/eoscore-1-9-0-36/"],
  ["/index.php/docs/eoscorevoice/purchase-plugin", "https://www.unrealengine.com/marketplace/slug/3f501fcff7724340b4bba75933974e32"],
  ["/index.php/docs/s3/example-project", "https://github.com/eeldev-ue4/S3_Example/releases"],
  ["/index.php/docs/s3/purchase-plugin", "https://www.unrealengine.com/marketplace/slug/828b50772aed411d8cf54933827b9c6a"],
  ["/index.php/docs/s3/aws-s3-documentation", "https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"],
  ["/index.php/docs/awscoresqs/example-project", "https://github.com/eeldev-ue4/SQS_Example/releases"],
  ["/index.php/docs/dynamodb/example-project", "https://github.com/eeldev-ue4/DynamoDB_Example/releases"],
  ["/index.php/docs/awscorecognito/purchase-plugin", "https://www.unrealengine.com/marketplace/product/awscore-cognito"],
  ["/index.php/docs/awscorecognito/example-project", "https://github.com/eeldev-ue4/Cognito_Example/releases"],
  ["/index.php/aws-secrets-manager-1-2-1", "/index.php/aws-secrets-manager-1-2-3/"]
];

// GitHub Pages serves 404.html for the old URLs covered by these patterns.
// Match the specific SteamCore URLs before the generic SteamCore pattern.
export const patternRedirects = [
  ["^/index\\.php/steamcore-pro.*$", "https://steamcore-pro.eeldev.com/changelog"],
  ["^/index\\.php/eoscore.*$", "https://eoscore.eeldev.com/changelog"],
  ["^/index\\.php/eventdispatcher.*$", "https://eventdispatcher.eeldev.com/changelog"],
  ["^/index\\.php/foliage-plugin.*$", "https://foliageplugin.eeldev.com/changelog"],
  ["^/index\\.php/host-migration.*$", "https://hostmigrationcore.eeldev.com/changelog"],
  ["^/index\\.php/loading-screen.*$", "https://cls.eeldev.com/changelog"],
  ["^/index\\.php/server-admin.*$", "https://serveradmincore.eeldev.com/changelog"],
  ["^/index\\.php/thumbnailer.*$", "https://thumbnailer.eeldev.com/changelog"],
  ["^/index\\.php/steamcore-web.*$", "https://steamcoreweb.eeldev.com/changelog"],
  ["^/index\\.php/steamcore-plugin/", "https://steamcore.eeldev.com/"],
  ["^/index\\.php/steamcore.*$", "https://steamcore.eeldev.com/changelog"],
  ["^/index\\.php/aws.*$", "https://aws.eeldev.com/"],
  ["^/index\\.php/gamelift.*$", "https://aws.eeldev.com/"],
  ["^/index\\.php/polly.*$", "https://aws.eeldev.com/"],
  ["^/index\\.php/s3.*$", "https://aws.eeldev.com/"],
  ["^/docs/steamcore.*", "https://steamcore.eeldev.com"],
  ["^/index.php/docs/eoscore/", "https://eoscore.eeldev.com"],
  ["^/index.php/how-to-report-an-issue/", "/index.php/help/"],
  ["^/index.php/creating-an-advanced-session/", "https://steamcore-pro.eeldev.com/"],
  ["^/how-to-report-an-issue/", "/index.php/help/"]
];
