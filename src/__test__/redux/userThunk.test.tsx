import { TodosState } from "../../redux/todos/todosSlices"
import { getStoreWithState, RootState } from "../../redux/store"
import { registerUser } from "redux/user/userThunks";

describe("thunks", () => {
  describe("checkoutCart w/full redux store", () => {
    it("should checkout with items", async () => {
      const state = getStateWithUserInfo();
      const store = getStoreWithState(state);
      await store.dispatch(registerUser({username: 'emilys', password: 'emilysPass'}));
      expect(store.getState().user).toEqual({
        {
          username: 
        }
      })
    });
  });
});

function getStateWithUserInfo(): RootState {
  const state: RootState = {
    todo: {} as TodosState,
    user: {
      success: true,
      error: null,
      initialized: true,
      loading: false,
      userToken: {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzA4MDY1NjEsImV4cCI6MTczMDgxMDE2MX0.sYI45IGhC5BWBwK4k-BEN0uzyH0xV-YS1F4YJl8O9Tg",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzA4MDY1NjEsImV4cCI6MTczMzM5ODU2MX0.X-Pvn3EPa2eOlvNSymFft4CgGpXIf9-2HlNx5OQbVRs",    
      },
      userData: {
        "id": 1,
        "firstName": "Emily",
        "lastName": "Johnson",
        "gender": "female",
        "email": "emily.johnson@x.dummyjson.com",
        "username": "emilys",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzA4MDY1NjEsImV4cCI6MTczMDgxMDE2MX0.sYI45IGhC5BWBwK4k-BEN0uzyH0xV-YS1F4YJl8O9Tg",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzA4MDY1NjEsImV4cCI6MTczMzM5ODU2MX0.X-Pvn3EPa2eOlvNSymFft4CgGpXIf9-2HlNx5OQbVRs",    
      }
    }
  }
  return state
}