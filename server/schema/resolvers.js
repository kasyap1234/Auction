const {PaintingList,FountainPens}=require("../data.js"); 
const resolvers={
    Query:{
        paintings: () => PaintingList, 
        painting: (parent,{id}) => PaintingList.find((painting)=> painting.id===id), 
        fountainPens : ()=> FountainPens, 
        fountainPen : (parent,{id}) => FountainPens.find((pen) => pen.id===id)
    }, 

    Mutation: {
        createPainting: (parent,{input}) => {
            const newPainting={
                id: input.id, 
                ...input ,
            }; 
            PaintingList.push(newPainting); 
            return newPainting; 
        }, 
        createFountainPen: (parent,{input})=> {
            const newPen={
                id: input.id , 
                ...input , 
            }; 
            FountainPens.push(newPen); 
            return newPen; 
        }, 
        updatePainting: (parent,{input})=> {
            const paintingIndex=PaintingList.findIndex((painting)=> painting.id===input.id); 
            if(paintingIndex!==-1){
                PaintingList[paintingIndex]=input; 
                return input; 

            }
          return null; 


        }, 
        updateFountainPen: (parent,{input})=> {
            const penIndex=FountainPens.findIndex((pen)=> pen.id===input.id); 
            if(penIndex!==-1){
                FountainPens[penIndex]=input; 
                return input; 

            }
          return null;
        }, 
        placeBid: (parent,{id,amount})=> {
            const item=[...PaintingList,...FountainPens].find((item)=> item.id===id);
            if(item){
                if(!item.currentPrice || item.currentPrice<amount){
                    item.currentPrice=amount; 
                    return true;
                }
                return false; 
            }
        }, 
        endAuction : (parent,{id})=> {
            const item=[...PaintingList,...FountainPens].find((item)=> item.id===id);
            if(item){
                item.status="CLOSED";
                return true; 
            }
            return false; 


    }, 
}, 
}; 
module.exports={resolvers};



