import axios from "axios";
import { useEffect, useState } from "react";
function Content() {
    const [news, setNews] = useState([]);

    const fetchNews = async() => {
        const res = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-08-27&to=2024-08-27&sortBy=popularity&apiKey=abf20dd76c014a8ba9a413624dd9ffbe");
        setNews(res.data.articles);
        console.log(news);
    }

    useEffect(() => {
        fetchNews();
    },[]);

    return (
        <main className="bg-grey-50 mb-auto h-10 flex-grow">
            <div className="grid grid-cols-6 my-1">
                <div className="col-start-2 col-span-4 overflow-y-auto h-5/6">
                    {news.map((val, index) => (
                        <a href={val?.url}>
                            <div id={index} className="bg-white my-3 rounded-md max-h-screen shadow-md p-5 hover:bg-slate-200">
                                <h2 className="text-3xl py-2">{val?.title}</h2>
                                <img src={val?.urlToImage} className="w-6/12 my-2" alt={val?.title} />
                                <p>{val?.description}</p>
                                <a href={val?.url}>Link</a>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Content;