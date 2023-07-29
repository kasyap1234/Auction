const {Painting,FountainPen}=require('./dataSchema'); 
const isAuctionInactive = (product) => {
    const inactiveTimeThreshold = 3600;
    const currentTime = Math.floor(Date.now() / 1000); 
    const lastBidTime = product.lastBidTime || product.startTime; 
    return currentTime - lastBidTime > inactiveTimeThreshold;
  };
const resolvers={
    Query:{
        paintings: async () => {
          // returns all the paintings available in the database ; 
          return await Painting.find(); 
        }, 
        painting: async (parent,{id}) => {
          // only returns painting belonging to a particular id ; 
          return await Painting.findOne({id}); 
        }, 
        fountainPens: async ()=> {
          // returns all the fountain pens ; 
          return await FountainPen.find();
        },
       fountainPen: async (parent,{id})=> {
        // returns a fountain pen with particular id 
        return await FountainPen.findOne({id}); 
       }
    }, 

    Mutation: {
        createPainting: async(parent,{input})=>{
          const newPainting=new Painting(input); 
          return await newPainting.save(); 
        }, 

        createFountainPen: async(parent,{input})=>{
          const newFountainPen=new FountainPen(input); 
          return await newFountainPen.save(); 
        }, 
      
        updatePainting: async(parent,{input})=>{
         return await Painting.findOneAndUpdate({id: input.id})
        }, 
        updateFountainPen: async(parent,{input})=>{
         return await FountainPen.findOneAndUpdate({id: input.id}); 

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
        
            
        
            endAuction: (parent, { id }) => {
              const item = [...PaintingList, ...FountainPens].find((item) => item.id === id);
        
              if (item) {
                // Check if the auction has been inactive for the specified time threshold
                if (isAuctionInactive(item)) {
                  item.status = "CLOSED";
                  return true;
                } else {
                  return false; // Auction cannot be closed, as it's still active
                }
              }
        
              return false; // Product not found
            },
         
}, 
}; 
module.exports={resolvers};



