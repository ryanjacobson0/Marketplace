//Import the marketplace contract
var Marketplace = artifacts.require("./marketplace.sol");

//Start contract testing (Doesn't use any gas)
contract("Marketplace", function(accounts) {
   
    //Better to define variables here than repetitively defining in the each "it" function
    var articleName = "test_article";
    var articleDescription = "this is a test";
    var articlePrice = web3.toWei(10, "ether");

    //Start first test; moca java testing framework in javascript 
    it("should have an articleCounter equal to zero in the beginning", function(){

        //get instance of the contract 
        return Marketplace.deployed().then(function(instance){

            //call number of article function 
            return instance.getNumberOfArticles();

        //Pass on return value to the function below 
        }).then(function(articleCounter){

            //check the condition (predefined function)
            assert.equal(articleCounter, 0, "Initial number != 0");
        });
    });

    it("should have 1 article for sale", function(){
        var MarketplaceInstance;
        return Marketplace.deployed().then(function(instance){
            MarketplaceInstance = instance; 
            return MarketplaceInstance.sellArticle(
                articleName,
                articleDescription,
                articlePrice,
                {"from": accounts[0]}
            );
        //test that the event fired. (Hint: events triggered produce a receipt)
        }).then(function(receipt){
            //
        }).then(function(){
            return MarketplaceInstance.getNumberOfArticles();
        }).then(function(articleCounter){
            assert.equal(articleCounter, 1, "article counter has not increased")
        }).then(function(){
            return MarketplaceInstance.articles(1);
        }).then(function(article){
            assert.equal(article[0], 1, "id is not one");
            assert.equal(article[1], articlePrice, "price is not 10 ether");
            assert.equal(article[2], accounts[0], "seller is incorrect");
            assert.equal(article[3], 0x0, "buyer is incorrect");
            assert.equal(article[4], articleName, "articleName is incorrect");
            assert.equal(article[5], articleDescription, "articleDescription is incorrect")
        })
    });
});
