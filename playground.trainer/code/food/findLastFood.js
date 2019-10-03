// FindLastReceipt
exports.function = function() {
    //look up last receipt from viv cloud
    var transaction = require('transaction')
    var console = require('console');
    
    return transaction.retrieve("playground.trainer.Receipt", "ALL",1)
}