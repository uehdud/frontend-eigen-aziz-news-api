import React from "react";
import { Card } from "antd";
import { INews } from "../../domain/entity/news/models/INews";

const { Meta } = Card;

interface Props {
newsItem: INews;
}

const NewsCard: React.FC<Props> = ({ newsItem }) => {
const imageUrl = newsItem.urlToImage || "https://via.placeholder.com/300x200?text=No%20Image";
return (
<Card
hoverable
style={{ width: 300, margin: 20 }}
cover={<img alt={newsItem.title} src={imageUrl} />}
>
<Meta title={newsItem.title} description={newsItem.description} />
</Card>
);
};

export default NewsCard;