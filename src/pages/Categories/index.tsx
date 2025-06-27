import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductList
        id="action"
        games={actionGames}
        title="Ação"
        background="gray"
        isLoading={isLoadingAction}
      />
      <ProductList
        id="sport"
        games={sportGames}
        title="Esportes"
        background="black"
        isLoading={isLoadingSport}
      />
      <ProductList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="gray"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        id="fight"
        games={fightGames}
        title="Luta"
        background="black"
        isLoading={isLoadingFight}
      />
      <ProductList
        id="rpg"
        games={rpgGames}
        title="RPG"
        background="gray"
        isLoading={isLoadingAction}
      />
    </>
  )
}

export default Categories
