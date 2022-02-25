function pieceOfPie(arr, start, end){
    let result = [];
    for (let pie of arr){
        if (result.length > 0){
            if (pie != end){
                result.push(pie);
            } else {
                result.push(pie);
                return result;
            }
        } else {
            if (pie == start){
                result.push(pie);
            }
        }
    }

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')