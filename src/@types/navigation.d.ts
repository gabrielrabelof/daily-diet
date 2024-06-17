export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
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