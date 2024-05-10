const cds = require('@sap/cds');
const { parseArgs } = require('util');
module.exports = cds.service.impl(async function () {
    let {
      
        stud, // service name
        Books
       
    } = this.entities;
    this.before('CREATE', stud.drafts, async (req) => { // sevice name
   debugger
   console.log("Create");
    let drafttable = await SELECT.from('DRAFT_DRAFTADMINISTRATIVEDATA');
        var now = new Date();
        var randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += now.getTime().toString().slice(-3);
        req.data.sid = randomNum
        return req;
        
        
     })
    //  service.impl((srv) => {
    //     debugger
    //     srv.before('CREATE',Books, async (req) => {
    //         debugger
    //         const { pages } = req.data;
    //         req.data.total_pages = pages * 2; // Example computation logic
    //     });
    // });
});

     