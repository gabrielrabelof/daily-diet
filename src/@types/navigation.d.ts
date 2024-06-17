export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: {
        percent: number
      }
      creation: {
        meal: Meal | string
      }
      feedback: {
        status: boolean
      }
      meal: {
        meal: Meal
      }
    }
  }
}