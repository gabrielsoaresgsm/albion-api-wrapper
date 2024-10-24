```markdown
# Albion API Wrapper

Uma biblioteca para facilitar o acesso à API do Albion Online. Esta biblioteca permite que você faça requisições simples para obter informações sobre jogadores, guildas, batalhas, itens e muito mais.

## Instalação

Para instalar a biblioteca, use o comando:

```bash
yarn add albion-api-wrapper
```

Ou, se estiver usando npm:

```bash
npm install albion-api-wrapper
```

## Funcionalidades

A `albion-api-wrapper` fornece métodos simples para acessar os principais endpoints da API do Albion Online, como:

- **Pesquisar jogadores e guildas**
- **Obter informações detalhadas sobre jogadores**
- **Listar kills e mortes de jogadores**
- **Obter estatísticas e dados de guildas**
- **Consultar batalhas e itens**
- **Acessar informações sobre alianças e fama de eventos**

## Regiões Suportadas

A biblioteca suporta três regiões:

- `americas`: https://gameinfo.albiononline.com/api/gameinfo/
- `europe`: https://gameinfo-ams.albiononline.com/api/gameinfo/
- `asia`: https://gameinfo-sgp.albiononline.com/api/gameinfo/

## Uso

### Importação

Primeiro, importe a biblioteca em seu projeto:

```typescript
import AlbionAPI from "albion-api-wrapper";
```

### Exemplo de Uso

#### 1. Criando uma Instância da API

Para criar uma instância da API, você pode especificar a região desejada:

```typescript
const api = new AlbionAPI("europe");
```

Se nenhuma região for especificada, a API padrão será a região `americas`.

#### 2. Pesquisando Jogadores

Use o método `searchPlayers` para pesquisar jogadores:

```typescript
async function searchPlayers() {
  try {
    const players = await api.searchPlayers("playerName");
    console.log(players);
  } catch (error) {
    console.error("Erro ao buscar jogadores:", error);
  }
}

searchPlayers();
```

#### 3. Obtendo Informações de um Jogador

Para obter informações detalhadas de um jogador, use o método `getPlayerInfo`:

```typescript
async function fetchPlayerInfo() {
  try {
    const playerInfo = await api.getPlayerInfo("playerId");
    console.log(playerInfo);
  } catch (error) {
    console.error("Erro ao buscar informações do jogador:", error);
  }
}

fetchPlayerInfo();
```

#### 4. Obtendo Últimos 10 Kills e Mortes de um Jogador

Para ver os últimos 10 registros de kills de um jogador, use `getPlayerKills`:

```typescript
async function fetchPlayerKills() {
  try {
    const playerKills = await api.getPlayerKills("playerId");
    console.log(playerKills);
  } catch (error) {
    console.error("Erro ao buscar kills do jogador:", error);
  }
}

fetchPlayerKills();
```

Para ver os últimos 10 registros de mortes de um jogador, use `getPlayerDeaths`:

```typescript
async function fetchPlayerDeaths() {
  try {
    const playerDeaths = await api.getPlayerDeaths("playerId");
    console.log(playerDeaths);
  } catch (error) {
    console.error("Erro ao buscar mortes do jogador:", error);
  }
}

fetchPlayerDeaths();
```

#### 5. Obtendo Estatísticas de Jogadores

```typescript
async function fetchPlayerStatistics() {
  try {
    const stats = await api.getPlayerStatistics({
      range: "week",
      limit: 10,
      offset: 0,
      type: "PvE"
    });
    console.log(stats);
  } catch (error) {
    console.error("Erro ao buscar estatísticas de jogadores:", error);
  }
}

fetchPlayerStatistics();
```

#### 6. Obtendo Informações de uma Guilda

```typescript
async function fetchGuildInfo() {
  try {
    const guildInfo = await api.getGuildInfo("guildId");
    console.log(guildInfo);
  } catch (error) {
    console.error("Erro ao buscar informações da guilda:", error);
  }
}

fetchGuildInfo();
```

#### 7. Listando Membros de uma Guilda

```typescript
async function fetchGuildMembers() {
  try {
    const members = await api.getGuildMembers("guildId");
    console.log(members);
  } catch (error) {
    console.error("Erro ao buscar membros da guilda:", error);
  }
}

fetchGuildMembers();
```

#### 8. Obtendo Informações de uma Aliança

```typescript
async function fetchAllianceInfo() {
  try {
    const alliance = await api.getAllianceInfo("allianceId");
    console.log(alliance);
  } catch (error) {
    console.error("Erro ao buscar informações da aliança:", error);
  }
}

fetchAllianceInfo();
```

#### 9. Listando Batalhas

```typescript
async function fetchBattles() {
  try {
    const battles = await api.getBattles({ range: "week", limit: 5, offset: 0, sort: "totalFame" });
    console.log(battles);
  } catch (error) {
    console.error("Erro ao buscar batalhas:", error);
  }
}

fetchBattles();
```

#### 10. Obtendo Dados de um Item

```typescript
async function fetchItemData() {
  try {
    const itemData = await api.getItemData("itemId");
    console.log(itemData);
  } catch (error) {
    console.error("Erro ao buscar dados do item:", error);
  }
}

fetchItemData();
```

## Tratamento de Erros

Todos os métodos são assíncronos e retornam uma `Promise`. Certifique-se de usar `try/catch` para capturar qualquer erro durante as requisições.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests no repositório [GitHub](https://github.com/gabrielsoaresgsm/albion-api-wrapper).