function solution(order) {
    return order.toString().replaceAll(/[^369]/g,'').length
    
//     let filteredString = order.toString();
//     [3,6,9].map((el)=>{
//       filteredString = filteredString.replaceAll(el.toString(),'')  
//     })
//     return order.toString().length-filteredString.length

}
