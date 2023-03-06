import React, { useEffect, useState } from "react";
import { Spin, List } from "antd";
import { INews } from "../../domain/entity/news/models/INews";
import NewsRepository from "../../domain/repository/news/NewsRepository";
import NewsCard from "./NewsCard";

const { Item } = List;

const NewsList: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [country, setCountry] = useState<string>("us");

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const newsRepository = new NewsRepository();
        const newsList = await newsRepository.getNewsListByCountry(country);
        setNews(newsList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, [country]);

  const handleCountryChange = (value: string) => {
    setCountry(value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "100vh",
          width: 300,
          borderRight: "1px solid #e8e8e8",
          overflowY: "scroll",
        }}
      >
        <h3>List News</h3>
        <h5>Berdasarkan Negara</h5>
        <List
          size="small"
          dataSource={[
            { value: "us", label: "United States" },
            { value: "id", label: "Indonesia" },
            { value: "gb", label: "United Kingdom" },
            { value: "jp", label: "Japan" },
            { value: "cn", label: "China" },
          ]}
          renderItem={(item) => (
            <Item key={item.value} onClick={() => handleCountryChange(item.value)}>
              {item.label}
            </Item>
          )}
        />
        
      </div>
      <div style={{ flex: 1, padding: 16 }}>
        {loading ? (
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Spin size="large" />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {news.map((newsItem, index) => (
              <div key={index} style={{ width: 300, margin: 20 }}>
                <NewsCard newsItem={newsItem} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;
