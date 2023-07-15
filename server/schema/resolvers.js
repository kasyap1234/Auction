const {PaintingList,FountainPens}=require("../data.js"); 
const resolverss={
    Query:{
        paintings: () => PaintingList, 
        painting: (parent,{id}) => PaintingList.find((painting)=> painting.id===id), 
        fountainPens : ()=> FountainPens, 
        fountainPen : (parent,{id}) => FountainPens.find((pen) => pen.id===id)
    }
}


