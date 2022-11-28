function solution(order) {
    let filteredString = order.toString();
    [3,6,9].map((el)=>{
      filteredString = filteredString.replaceAll(el.toString(),'')  
    })
    return order.toString().length-filteredString.length
}