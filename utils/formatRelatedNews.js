export const formatRelatedNews = (news)=>{
    let newsposts = []
    news.forEach(newsArr => {
        newsArr.forEach((newspost)=>{
            newsposts.push(newspost)
        })
    });

    let uniqueObjArray = [
        ...new Map(newsposts.map((item) => [item["_id"], item])).values(),
    ];

    return uniqueObjArray
}