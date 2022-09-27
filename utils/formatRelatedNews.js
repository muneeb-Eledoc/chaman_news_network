export const formatRelatedNews = (news)=>{
    let newsposts = []
    news.forEach(newsArr => {
        newsArr.forEach((newspost)=>{
            newsposts.push(newspost)
        })
    });
    return newsposts
}