function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...
  
let exam=3;
for (let i = 0; i < exam; i++) {
    for(let j=0;j<exam;j++)
    {
      let obj= {data:
        {id: `N${i}-${j}`
        }
      
      
      
      };
      nodes.push(obj);
      if( j < exam-1 ){
        let obj = {"data":{"id":`${i}-${j}A`,"source" :`N${i}-${j}` ,'target':`N${i}-${j+1}`}}
  
         edges.push(obj);
      }
      if(j>0)
      {
        let obj = {"data":{"id":`${i}-${j}B`,"source" :`N${i}-${j}` ,'target':`N${i}-${j-1}`}}
       edges.push(obj);
    
      }
      if(i<exam-1)
      {
        let obj = {"data":{"id":`${i}-${j}C`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j}`}}
       edges.push(obj);
      }
      if(i>0)
      {
        let obj = {"data":{"id":`${i}-${j}D`,"source" :`N${i}-${j}` ,'target':`N${i-1}-${j}`}}
       edges.push(obj);
    
      }
      if(i<2 && j<2)
      {
        let obj = {"data":{"id":`${i}-${j}E`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j+1}`}}
        edges.push(obj);

      }
      if(i>0 && j>0)
      {
        let obj = {"data":{"id":`${i}-${j}E`,"source" :`N${i}-${j}` ,'target':`N${i-1}-${j-1}`}}
        edges.push(obj);

      }
      if(i<2 && j>0)
      {
        let obj = {"data":{"id":`${i}-${j}F`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j-1}`}}
        edges.push(obj);

      }
      if(i>0 && j<2)
      {
        let obj = {"data":{"id":`${i}-${j}G`,"source" :`N${i}-${j}` ,'target':`N${i-1}-${j+1}`}}
        edges.push(obj);

      }


  
     
    }

    }
    console.log(nodes.length);
    console.log(edges.length);
  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


