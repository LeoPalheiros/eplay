import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && fightGames && simulationGames && sportGames && rpgGames) {
    return (
      <>
        <ProductList
          id="action"
          games={actionGames}
          title="Ação"
          background="gray"
        />
        <ProductList
          id="sport"
          games={sportGames}
          title="Esportes"
          background="black"
        />
        <ProductList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductList
          id="fight"
          games={fightGames}
          title="Luta"
          background="black"
        />
        <ProductList id="rpg" games={rpgGames} title="RPG" background="gray" />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
