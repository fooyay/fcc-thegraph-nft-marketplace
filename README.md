This is based on fcc-nextjs-nft-marketplace, which was coded for the Moralis server, which Moralis no longer supports.

1. Instead of reading the events from Moralis, we will
    1. Index them with TheGraph ✅
    2. Read from TheGraph ✅

Then we need:
1. Home Page:
    1. Show recently listed NFTs ✅
        1. If you own the NFT, you can update the listing ✅
        2. If not, you can buy the listing ✅
2. Sell Page:
    1. You can list your NFT on the marketplace ✅
    2. Withdraw proceeds ✅


Problems
1. listed Nfts: undefined - not getting data from TheGraph anymore
    solution: updated uri from TheGraph console in my _app.js ✅
2. tokenUri undefined - not fetching data from the BasicNft properly?
    problem appears to be within NFTBox - thegraph is returning the right data, and NFTBox is getting called
    solution: misspelled nftAdress in NFTBox call. Oops! ✅ 
3. At thegraph.com, got Error: Failed to transact block operations: internal constraint violated: entities of type `ItemListed` can not be updated since they are immutable.
    solution: 'immutable: true' was added to the schema by the codegen; it was not in the original code nor in the github repo. changed it to false and reran graph codegen && graph build, then redeployed with graph deploy --studio nft-marketplace. Note: this was in the fcc-graph-nft-marketplace repo, not this one. After that, no more sync errors. ✅
4. On sell-nft, got a "tx is not defined error" in handleApproveSuccess when trying to list my NFT.
    solution: Missed adding tx to the arglist. ✅