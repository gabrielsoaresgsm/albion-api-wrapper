import axios, { AxiosInstance } from "axios";

type Region = "americas" | "europe" | "asia";

const BASE_URLS: Record<Region, string> = {
  americas: "https://gameinfo.albiononline.com/api/gameinfo/",
  europe: "https://gameinfo-ams.albiononline.com/api/gameinfo/",
  asia: "https://gameinfo-sgp.albiononline.com/api/gameinfo/",
};

class AlbionAPI {
  private client: AxiosInstance;

  constructor(region: Region = "americas") {
    this.client = axios.create({
      baseURL: BASE_URLS[region],
    });
  }

  // Métodos Existentes
  async searchPlayers(searchTerm: string) {
    try {
      const response = await this.client.get(`/search?q=${encodeURIComponent(searchTerm)}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching players:", error);
      throw error;
    }
  }

  async getPlayerInfo(playerId: string) {
    try {
      const response = await this.client.get(`/players/${playerId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching player info:", error);
      throw error;
    }
  }

  async getPlayerKills(playerId: string) {
    try {
      const response = await this.client.get(`/players/${playerId}/kills`);
      return response.data;
    } catch (error) {
      console.error("Error fetching player kills:", error);
      throw error;
    }
  }

  async getGuildInfo(guildId: string) {
    try {
      const response = await this.client.get(`/guilds/${guildId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching guild info:", error);
      throw error;
    }
  }

  // Novos Métodos

  // /players/<ID>/deaths
  async getPlayerDeaths(playerId: string) {
    try {
      const response = await this.client.get(`/players/${playerId}/deaths`);
      return response.data;
    } catch (error) {
      console.error("Error fetching player deaths:", error);
      throw error;
    }
  }

  // /players/statistics
  async getPlayerStatistics(params: {
    range: "week" | "month";
    limit: number;
    offset: number;
    type: "PvE" | "Gathering";
    subtype?: "All" | "Fiber" | "Hide" | "Ore" | "Rock" | "Wood";
    region?: "Total" | "Royal" | "Outlands" | "Hellgate";
    guildId?: string;
    allianceId?: string;
  }) {
    try {
      const response = await this.client.get(`/players/statistics`, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching player statistics:", error);
      throw error;
    }
  }

  // /guilds/<ID>/members
  async getGuildMembers(guildId: string) {
    try {
      const response = await this.client.get(`/guilds/${guildId}/members`);
      return response.data;
    } catch (error) {
      console.error("Error fetching guild members:", error);
      throw error;
    }
  }

  // /guilds/<ID>/data
  async getGuildData(guildId: string) {
    try {
      const response = await this.client.get(`/guilds/${guildId}/data`);
      return response.data;
    } catch (error) {
      console.error("Error fetching guild data:", error);
      throw error;
    }
  }

  // /guilds/<ID>/top
  async getGuildTopKills(guildId: string, params: { 
    range: "day" | "week" | "month"; 
    limit: number; 
    offset: number; 
    region?: "Total" | "Royal" | "Outlands" | "Hellgate"; 
  }) {
    try {
      const response = await this.client.get(`/guilds/${guildId}/top`, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching guild top kills:", error);
      throw error;
    }
  }

  // /alliances/<ID>
  async getAllianceInfo(allianceId: string) {
    try {
      const response = await this.client.get(`/alliances/${allianceId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching alliance info:", error);
      throw error;
    }
  }

  // /battles
  async getBattles(params: {
    range: "day" | "week" | "month";
    limit: number;
    offset: number;
    sort: "totalFame" | "totalKills" | "recent";
  }) {
    try {
      const response = await this.client.get(`/battles`, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching battles:", error);
      throw error;
    }
  }

  // /battles/<ID>
  async getBattleInfo(battleId: string) {
    try {
      const response = await this.client.get(`/battles/${battleId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching battle info:", error);
      throw error;
    }
  }

  // /items/<ID>
  async getItemIcon(itemId: string) {
    try {
      const response = await this.client.get(`/items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching item icon:", error);
      throw error;
    }
  }

  // /items/<ID>/data
  async getItemData(itemId: string) {
    try {
      const response = await this.client.get(`/items/${itemId}/data`);
      return response.data;
    } catch (error) {
      console.error("Error fetching item data:", error);
      throw error;
    }
  }

  // /events/playerfame
  async getPlayerFame(params: {
    range: "week" | "month" | "lastWeek" | "lastMonth";
    limit: number;
    offset: number;
  }) {
    try {
      const response = await this.client.get(`/events/playerfame`, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching player fame:", error);
      throw error;
    }
  }
  
  // /events/guildfame
  async getGuildFame(params: {
    range: "week" | "month" | "lastWeek" | "lastMonth";
    limit: number;
    offset: number;
  }) {
    try {
      const response = await this.client.get(`/events/guildfame`, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching guild fame:", error);
      throw error;
    }
  }
}

export default AlbionAPI;
