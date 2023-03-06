import axios from "axios";
import { INews } from "../../domain/entity/news/models/INews";

class NewsApi {
  
  private readonly baseUrl = "https://newsapi.org/v2";
  private readonly apiKey = "c0fa4049842b4642b9d2a66460e767ed";

  public async getNewsListByCountry(country: string): Promise<INews[]> {
    const endpoint = `${this.baseUrl}/top-headlines?country=${country}&apiKey=${this.apiKey}`;
    const response = await axios.get(endpoint);
    return response.data.articles;
  }
}

export default NewsApi;
