 const fakeData = {
    data: {
        children: [ 
            { 
                data: {
                    subreddit: "UpliftingNews",
                    title: "Nobel Prize goes to scientists behind mRNA Covid vaccines",
                    ups: 2354,
                    is_video: false,
                    secure_media: {
                        reddit_video: {
                            fallback_url: "https://v.redd.it/y7zzi9avirrb1/DASH_480.mp4?source=fallback",
                        },
                    },
                    url: "https://www.bbc.com/news/health-66983060",
                    num_comments: 872,
                    suggested_sort: null,
                },
            },
            {
                data: {
                    subreddit: "Ufightporn",
                    title: "Throwing gang signs at rapper gone wrong",
                    ups: 14717,
                    is_video: true,
                    secure_media: {
                        reddit_video: {
                            fallback_url: "https://v.redd.it/y7zzi9avirrb1/DASH_480.mp4?source=fallback",
                        },
                    },
                    url: "https://www.bbc.com/news/health-66983060",
                    num_comments: 872,
                    suggested_sort: null,
                },
            },
        ]
    },
};

    const data = fakeData.data.children;
    const num_commentsData = fakeData.data.children[0].data.num_comments;
    const testData = data[1].data.num_comments;
    //console.log(data);
    
export default data;
