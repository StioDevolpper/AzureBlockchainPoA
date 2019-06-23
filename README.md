# AzureBlockchainPoA
 Deploying Blockchain Applications using Azure Blockchain Ethereum POA

I started using Microsoft Azure Blockchain to implement a sample POC application leveraging Blockchain technology.
This will illustrates the workflow and the various possibilities that have been encountered during the demo.

# Setup Ethereum Proof-of Authority (POA) network on Azure
Proof-of-authority is a consensus protocol which is more suitable for permissioned networks where all consensus participants are known and reputable.
Without the need for CPU,mining, Proof Of authority is more efficient while still retaining Byzantine fault tolerance.

![Screenshot](Img/05.PNG)

You can refer to the official microsoft documentation for deploying Ethereum POA consortium on Azure.
Once the deployment has completed, you’ll be able to access the following parameters through the Azure portal.

* Ethereum RPC endpoint
* Governance Dashboard URL
* Azure Monitor URL
* Data URL
* VNet Gateway Resource ID (optional)
![Screenshot](Parms.PNG)

