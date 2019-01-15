const phantom = require('phantom');
var HTMLParser = require('node-html-parser');

let urlList = 
  ['https://azure.microsoft.com/ja-jp/updates/azure-machine-learning-service-now-generally-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/custom-translation-capability-of-text-translator-is-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/container-support-for-language-understanding-is-in-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/open-sourcing-onnx-runtime/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-stream-analytics-on-iot-edge-generally-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/smaller-skus-for-azure-sql-data-warehouse-gen2-are-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/custom-translation-capability-of-text-translator-is-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/container-support-for-language-understanding-is-in-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/in-development-azure-service-fabric-mesh-fall-2018-refresh/'
    ,'https://azure.microsoft.com/ja-jp/updates/javascript-support-for-durable-functions-is-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-functions-python-support-public-preview-2/'
    ,'https://azure.microsoft.com/ja-jp/updates/aks-virtual-node-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/in-development-azure-service-fabric-runtime-version-6-4-sdk-updates/'
    ,'https://azure.microsoft.com/ja-jp/updates/deploy-service-fabric-ubuntu-clusters-on-premises-using-bosh/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-container-instances-aci-gpu-support-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/serverless-community-library-is-in-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-functions-consumption-plan-for-linux-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/in-development-azure-service-fabric-mesh-fall-2018-refresh/'
    ,'https://azure.microsoft.com/ja-jp/updates/aks-virtual-node-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/in-development-azure-service-fabric-runtime-version-6-4-sdk-updates/'
    ,'https://azure.microsoft.com/ja-jp/updates/deploy-service-fabric-ubuntu-clusters-on-premises-using-bosh/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-container-instances-aci-gpu-support-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/public-preview-vnet-service-endpoints-for-azure-database-for-mariadb/'
    ,'https://azure.microsoft.com/ja-jp/updates/general-availability-azure-database-for-mariadb/'
    ,'https://azure.microsoft.com/ja-jp/updates/version-3-0-of-the-azure-cosmos-db-net-sdk-in-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-cosmos-db-new-shared-database-offer-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/smaller-skus-for-azure-sql-data-warehouse-gen2-are-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/cors-support-in-azure-cosmos-db/'
    ,'https://azure.microsoft.com/ja-jp/updates/api-management-flexible-subscriptions-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/api-management-bring-your-own-cache-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-machine-learning-service-now-generally-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/s1-pricing-tier-is-now-available-for-large-scale-deployments/'
    ,'https://azure.microsoft.com/ja-jp/updates/javascript-support-for-durable-functions-is-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/new-key-capabilities-added-to-time-series-insights/'
    ,'https://azure.microsoft.com/ja-jp/updates/api-management-flexible-subscriptions-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/version-3-0-of-the-azure-cosmos-db-net-sdk-in-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-functions-python-support-public-preview-2/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-cosmos-db-new-shared-database-offer-now-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-stream-analytics-on-iot-edge-generally-available/'
    ,'https://azure.microsoft.com/ja-jp/updates/new-updates-to-azure-iot-remote-monitoring/'
    ,'https://azure.microsoft.com/ja-jp/updates/new-updates-to-azure-iot-device-simulation/'
    ,'https://azure.microsoft.com/ja-jp/updates/serverless-community-library-is-in-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/api-management-bring-your-own-cache-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/cors-support-in-azure-cosmos-db/'
    ,'https://azure.microsoft.com/ja-jp/updates/azure-functions-consumption-plan-for-linux-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/s1-pricing-tier-is-now-available-for-large-scale-deployments/'
    ,'https://azure.microsoft.com/ja-jp/updates/public-preview-vnet-service-endpoints-for-azure-database-for-mariadb/'
    ,'https://azure.microsoft.com/ja-jp/updates/api-management-flexible-subscriptions-public-preview/'
    ,'https://azure.microsoft.com/ja-jp/updates/api-management-bring-your-own-cache-public-preview/']

url = urlList[0];
//urlList.forEach((url) =>{
(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });

  const status = await page.open(url);
  const content = await page.property('content');
  //console.log(content)

  var root = HTMLParser.parse(content.toString());
  //console.log(root.firstChild.structure);
  //console.log(root.toString());
  // root.set_content('<li>Hello World</li>');
  // root.toString();	

  await instance.exit();
})();

//});
 
