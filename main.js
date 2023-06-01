const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function pagination(data, page, limit) {
    const result = data.slice((page-1)* limit, page*limit)
    return{ 
        data: result,
        pages: Math.ceil(data.length / limit),
    }
}

