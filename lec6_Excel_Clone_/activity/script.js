const { fchmod } = require("fs");
const $ = require("jquery");

$(function(){
    //console.log("document is loaded");
    let db;
    let lsc;
    let sheetId = 1;

    $('.cell').on("click" , function(){
        //console.log("cell clicked");
        let rowId =Number($(this).attr("rowid"));
        let colId = Number($(this).attr("colid"));
        let address = String.fromCharCode(colId+65) + (rowId+1) ;
        let cellObject = db[rowId][colId];
        $('#address').val(address);
        $("#formula").val(cellObject.formula);
        //console.log(db); 
    })

    //sheets logic
    $(".add-sheet").on("click",function(){
        //dynamically html add to dom
        sheetId++;
        let sheetToBeAdded = `<div class="sheet">Sheet ${sheetId}</div>`;
        $(".sheets-list").append(sheetToBeAdded);
    })


    $('.cell').on("blur",function(){
        lsc = this ;
        //console.log("cell blurred");
        let rowId = ($(this).attr("rowid"));
        let colId = ($(this).attr("colid"));
        let cellObject = db[rowId][colId];

        let value = $(this).text();
        if(value && cellObject.value!=value){
            if(cellObject.formula){
                deleteFormula(cellObject);
                $("#formula").val("");
            }
            cellObject.value = value ;
            updateChildren(cellObject);
            //console.log(db);
        }      
    })

    $("#formula").on("blur" , function(){
        let formula = $(this).val() ;
        console.log(formula);
        let rowId = $(lsc).attr("rowid");
        let colId = $(lsc).attr("colid");
        let cellObject = db[rowId][colId];
        if(formula && cellObject.formula!=formula){
            if(cellObject.formula){
                deleteFormula(cellObject);
            }
            cellObject.formula=formula;
            let value = solve(formula , cellObject);
            //db update
            cellObject.value = value ;
            //ui update
            $(lsc).text(value);
            //update children
            updateChildren(cellObject);
        }
    })

    function deleteFormula(cellObject){
        cellObject.formula = "" ;
        for(let i = 0 ;i<cellObject.parents.length ; i++){
            let parentName = cellObject.parents[i];
            let {rowId, colId} = getRowIdColIdFromAddress(parentName);
            let parentCellObject = db[rowId][colId];
            let children = parentCellObject.children;
            let newChildren = children.filter(function(child){
                return child != cellObject.name ;
            })
            parentCellObject.children = newChildren ;
        }
        cellObject.parents = [];
    }

    function updateChildren(cellObject){
        let children = cellObject.children;
        for(let i=0 ; i<children.length ; i++){
            let {rowId , colId} = getRowIdColIdFromAddress(children[i]);
            let childrenCellObject = db[rowId][colId];
            let newValue = solve(childrenCellObject.formula) ;
            //db update
            childrenCellObject.value = newValue ;
            //ui update
            $(`div[rowid=${rowId}][colid=${colId}]`).text(newValue);
        }
    }

    function solve(formula , cellObject){
        let fComps = formula.split(" ");
        for(let i=0 ; i<fComps.length ; i++){
            if(fComps[i][0]>="A" && fComps[i][0]<="Z"){
                let {rowId , colId} = getRowIdColIdFromAddress(fComps[i]);
                let cellObjectofFComps = db[rowId][colId];
                if(cellObject){
                    cellObjectofFComps.children.push(cellObject.name);
                    cellObject.parents.push(fComps[i]);
                }
                formula = formula.replace(fComps[i] , cellObjectofFComps.value);
            }
        }
        let value = eval(formula);
        return value ;
    }

    //utility functions
    function getRowIdColIdFromAddress(address){
        let rowId = Number(address.substring(1))-1;
        let colId = address.charCodeAt(0)-65;
        return {
            rowId , 
            colId
        }
    }


    function initBD(){
        db=[];
        for(let  i = 0 ;i<100 ;i++){
            let row=[];
            for(let j=0 ;j<26 ; j++){
                let name = String.fromCharCode(j+65) + (i+1) ;
                let cellObject = {
                    name:name,
                    value:"",
                    formula:"",
                    children:[],
                    parents:[]
                }
                row.push(cellObject);
            }
            db.push(row);
        }
    }

    initBD();
})