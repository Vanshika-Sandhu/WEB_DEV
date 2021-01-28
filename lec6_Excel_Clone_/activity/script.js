const $ = require("jquery");

$(document).ready(function(){
    //console.log("document is loaded");
    let db;

    $('.cell').on("click" , function(){
        console.log("cell clicked");
        let rowId =Number($(this).attr("rowid"));
        let colId = Number($(this).attr("colid"));
        let address = String.fromCharCode(colId+65) + (rowId+1) ;
        $('#address').val(address);
    })

    $('.cell').on("blur",function(){
        console.log("cell blurred");
        let rowId = ($(this).attr("rowid"));
        let colId = ($(this).attr("colid"));
        let cellObject = db[rowId][colId];
        let value = $(this).text();
        if(value && cellObject.value!=value){
            cellObject.value = value ;
            console.log(db);
        }      
    })

    function initBD(){
        db=[];
        for(let  i = 0 ;i<100 ;i++){
            let row=[];
            for(let j=0 ;j<26 ; j++){
                let name = String.fromCharCode(j+65) + (i+1) ;
                let cellObject = {
                    name:name,
                    value:""
                }
                row.push(cellObject);
            }
            db.push(row);
        }
    }

    initBD();
})