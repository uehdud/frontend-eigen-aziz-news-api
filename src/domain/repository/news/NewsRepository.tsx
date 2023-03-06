import { INews } from "../../entity/news/models/INews";
import NewsApi from "../../../data/api/NewsApi";

class NewsRepository {
  private readonly newsApi = new NewsApi();

  public async getNewsListByCountry(country: string): Promise<INews[]> {
    return await this.newsApi.getNewsListByCountry(country);
  }
}

export default NewsRepository;
